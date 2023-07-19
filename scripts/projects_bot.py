import asyncio
import glob
import logging
import os
from datetime import datetime
from typing import Dict

import discord
import discord.ext.tasks
import pytz
import yaml
import json

from fetch_gh_issues import fetch_gh_issues

dlogger = logging.getLogger('discord')
logger = logging.getLogger('OHBM Bot')

EMOJI_PROJECT_ROLES = list(
    "🐁🐂🐄🐇🐈🐉🐊🐋🐌"
    "🐍🐎🐏🐐🐑🐒🐓🐕🦛"
    "🦚🐘🐙🐚🐛🦢🐝🐞🦕"
    "🦖🐡🐢🐦🐧🦜🐩🐪🐬"
    "🐿🕊🦜🦂🦃🦆🦇🦈🦒"
    "🦉🦋🦎🦔🦦🦩🍀🌸🌻"
)

HUBS = { 'americas': 'Americas', 'emea': 'EMEA', 'apac': 'APAC' }

ROLES_PROJECT_MESSAGE = "{emoji} [{title}]({link}): [@{key}](https://discordapp.com/channels/{guild}/{channel})"

ROLES_MESSAGE = """
> Please react to this message with the appropriate emoji for the project.
> 
> The emoji reaction will allow you to receive notifications from the project via the tag `@proj-<project name>`.
"""

ROLES_MESSAGE_ACK = """
The emojis were assigned to the projects *at random*, if you'd like to change your project's emoji, please contact the <@&{staff_role}>.
"""


class Project:
    def __init__(self, client, data, emoji):
        self.client = client
        self.guild = client.guild

        self.key = data['chatchannel'].lower()
        self.title = data['title']
        self.link = data['issue_link']
        self.emoji = emoji

        self.voice = client.voice_channels.get(self.key)
        self.text = client.text_channels.get(self.key)
        self.role = client.projects_roles.get(f'proj-{self.key}')
        self.react = None

    def __str__(self):
        s = (f"@{self.key}\n"
             f"title: {self.title}\n"
             f"link: {self.link}")
        if self.role is not None:
            s += f"\nrole: {self.role.id}"
        if self.voice is not None:
            s += f"\nchannels: {self.voice.id}"
        if self.text is not None:
            s += f"\nchannels: {self.text.id}"
        if self.react is not None:
            s += f"\nreact: {self.react[1]} on {self.react[0]}"
        return s

    def __await__(self):
        # not my favorite part of the code
        yield from asyncio.create_task(self.ensure_role())
        yield from asyncio.create_task(self.ensure_channel())
        yield from asyncio.create_task(self.ensure_channel_permissions())
        return self

    async def ensure_role(self):
        if self.role is not None:
            return False

        self.role =  await self.guild.create_role(
            name=f'proj-{self.key}',
            mentionable=True,
        )
        await self.role.edit(position=2)
        return True

    async def ensure_channel(self):
        if self.voice is not None and self.text is not None:
            return False

        await self.ensure_role()

        if self.voice is None:
            self.voice = await self.guild.create_voice_channel(
                name=self.key,
                category=self.client.voice_category
            )
        if self.text is None:
            self.text = await self.guild.create_text_channel(
                name=self.key,
                category=self.client.text_category
            )
        return True

    async def ensure_channel_permissions(self):
        await self.ensure_channel()

        permission_hidden = discord.PermissionOverwrite(
            view_channel=False
        )
        permission_shown = discord.PermissionOverwrite(
            view_channel=True
        )
        overwrites = {
            self.guild.default_role: (
                permission_hidden
                if not self.client.sleep_mode
                else permission_shown
            ),
            self.client.roles['muted']: permission_hidden,
            self.client.roles['carl']: permission_shown,
            self.client.roles['hackathon-bot']: permission_shown,
            self.client.roles['staff']: permission_shown,
            self.role: permission_shown,
        }
        await self.voice.edit(overwrites=overwrites)
        await self.text.edit(overwrites=overwrites)
        return True


class ProjectsClient(discord.Client):

    def __init__(self,
                 guild: int, roles_channel: int,
                 just_ensure_channels: bool = False,
                 just_ensure_events: bool = False,
                 sleep_mode: bool = False,
                 *args, **kwargs):

        intents = discord.Intents.default()
        super().__init__(intents=intents, *args, **kwargs)

        self._just_ensure_channels = just_ensure_channels
        self._just_ensure_events = just_ensure_events
        self._guild_id = guild
        self._roles_channel_id = roles_channel
        self._sleep_mode = sleep_mode
        self._ready_to_bot = False

    async def cache_structures(self):
        guild = self.get_guild(self._guild_id)
        assert guild is not None
        self._guild: discord.Guild = guild

        roles_channel = self.get_channel(self._roles_channel_id)
        assert roles_channel is not None
        assert isinstance(roles_channel, discord.TextChannel)
        self._roles_channel: discord.TextChannel = roles_channel

        # TODO fixed ids :(
        self._roles = {
            'staff': self._guild.get_role(920383461829795926),
            'carl': self._guild.get_role(971318302100033570),
            'hackathon-bot': self._guild.get_role(965650036308447276),
            'muted': self._guild.get_role(962429030714458162),
        }

        self._channels = {
            'lounge': self._guild.get_channel(920383462312120372),
            'stage': self._guild.get_channel(986407810537492541),
            'amphitheatre': self._guild.get_channel(986656697638596639),
        }

        voice_category, text_category = None, None
        for category in self._guild.categories:
            if category.name == 'Projects':
                voice_category = category
            elif category.name == 'Projects-text':
                text_category = category

        if voice_category is None:
            voice_category = await guild.create_category('Projects')
        if text_category is None:
            text_category = await guild.create_category('Projects-text')

        self._voice_category = voice_category
        self._text_category = text_category
        self._voice_channels = {
            ch.name: ch for ch in self._voice_category.voice_channels
        }
        self._text_channels = {
            ch.name: ch for ch in self._text_category.text_channels
        }
        self._projects_roles = {
            role.name: role
            for role in self.guild.roles
            if role.name.replace('proj-', '') in self._voice_channels
        }


    @property
    def guild(self) -> discord.Guild:
        assert self._guild is not None
        return self._guild

    @property
    def roles_channel(self) -> discord.TextChannel:
        return self._roles_channel

    @property
    def voice_category(self) -> discord.CategoryChannel:
        return self._voice_category

    @property
    def text_category(self) -> discord.CategoryChannel:
        return self._text_category

    @property
    def voice_channels(self) -> Dict[str, discord.VoiceChannel]:
        return self._voice_channels

    @property
    def text_channels(self) -> Dict[str, discord.TextChannel]:
        return self._text_channels

    @property
    def projects_roles(self) -> Dict[str, discord.Role]:
        return self._projects_roles

    @property
    def roles(self) -> Dict[str, discord.Role]:
        return self._roles

    @property
    def sleep_mode(self) -> bool:
        return self._sleep_mode

    @discord.ext.tasks.loop(minutes=1)
    async def on_check_again(self):
        if not self._ready_to_bot:
            # Skip first iteration, we just did all this
            self._ready_to_bot = True
            return

        logger.info('Refreshing issues and all')
        current_project_ids = set(self.projects.keys())
        await self.cache_structures()
        await self.ensure_projects()

        # There are new projects. refresh internal memory
        # TODO just run things for new projects?
        if current_project_ids.difference(self.projects.keys()):
            logger.info(f'Loaded {len(self.projects)} projects')
            logger.info('Checking roles messages')
            await self.ensure_roles_messages()

    async def ensure_projects(self):
        if not self._just_ensure_channels:
            fetch_gh_issues()

        self.projects = {}
        self.projects_emoji = {}
        with open('public/projects.json', 'r') as f:
            projects = json.load(f)

            for i, data in enumerate(sorted(projects, key=lambda x: x['issue_number'])):
                if EMOJI_PROJECT_ROLES[i] == '': # Hack to skip emojis
                    continue

                print(data)

                
                # project = await Project(self, data, EMOJI_PROJECT_ROLES[i])
                # self.projects[project.key] = project
                # self.projects_emoji[project.emoji] = project

    async def ensure_events(self):
        events = await self.guild.fetch_scheduled_events()
        events = [e for e in events if e.creator == self.user]
        events = {
            f'{e.start_time} {e.name.split("]")[0][1:]} {e.name.split("#")[-1]}': e
            for e in events
        }
        n_events = len(events)

        with open('_data/sessions.yml', 'r') as f:
            sessions = yaml.safe_load(f)
            sessions = {
                session['id']: session
                for session in sessions
            }

        hubs = {}
        for hub_file in glob.glob('_data/schedules/*.yml'):
            hub = os.path.basename(hub_file).replace('.yml', '')
            with open(hub_file, 'r') as f:
                hubs[hub] = yaml.safe_load(f)

        final_sessions = []
        for hub, schedules in hubs.items():
            for schedule in schedules:
                day = schedule['date']

                # POSIX-style time zones use an inverted offset format
                tz = pytz.timezone(
                    schedule['tz'] \
                        .replace('+', '^')
                        .replace('-', '+')
                        .replace('^', '-')
                )
                for timeslot in schedule['timeslots']:
                    start_time = f"{day}T{timeslot['startTime']}"
                    start_time = datetime.strptime(start_time, '%Y-%m-%dT%H:%M')
                    start_time = start_time.replace(tzinfo=tz).astimezone(pytz.utc)

                    end_time = f"{day}T{timeslot['endTime']}"
                    end_time = datetime.strptime(end_time, '%Y-%m-%dT%H:%M')
                    end_time = end_time.replace(tzinfo=tz).astimezone(pytz.utc)

                    if start_time <= datetime.now(pytz.utc):
                        continue

                    for session_id in timeslot['sessionIds']:
                        if 'discord_channel' not in sessions[session_id]:
                            continue

                        title = sessions[session_id]['title']
                        title = f'[{HUBS[hub]}] {title} #{session_id}'
                        channel = sessions[session_id]['discord_channel']
                        channel = self._channels[channel]
                        description = sessions[session_id]['description']

                        key = f'{start_time} {HUBS[hub]} {session_id}'
                        if key in events:
                            edit = {}
                            if title != events[key].name:
                                edit['name'] = title
                            if description != events[key].description:
                                edit['description'] = description
                            if channel != events[key].channel:
                                edit['channel'] = channel
                            if end_time != events[key].end_time:
                                edit['end_time'] = end_time
                            if edit:
                                await events[key].edit(
                                    channel=channel, # needs to be set anyway
                                    **edit
                                )

                            del events[key]
                            continue


                        final_sessions += [
                            {
                                'name': title,
                                'description': description,
                                'channel': channel,
                                'entity_type': discord.EntityType.voice,
                                'start_time': start_time,
                                'end_time': end_time,
                            }
                        ]

        total = n_events + len(final_sessions)
        logger.info(f'Generating {len(final_sessions)} events, {total} total')

        # Merge all events and give preference to earlier events
        for event in sorted(final_sessions, key=lambda x: x['start_time']):
            await self.guild.create_scheduled_event(**event)

        for key, event in events.items():
            await event.delete()

    async def on_ready(self):

        logger.handlers = dlogger.handlers
        logger.setLevel(dlogger.level)

        just_something = self._just_ensure_channels or self._just_ensure_events

        await self.cache_structures()
        await self.ensure_projects()
        
        # if not just_something or self._just_ensure_channels:
        #     await self.ensure_projects()
        #     logger.info(f'Loaded {len(self.projects)} projects')
        #     await self.roles['muted'].edit(position=1)

        # if not just_something or self._just_ensure_events:
        #     await self.ensure_events()

        # if just_something or self._sleep_mode:
        #     await self.close()
        #     return

        # await self.ensure_roles_messages()

        # self.on_check_again.start()

    async def ensure_roles_messages(self):
        print("Ensuring roles messages")
        self._role_messages = []
        cur_messages = self.roles_channel.history(limit=10, oldest_first=True)
        async for message in cur_messages:
            if len(message.embeds) < 1:
                continue
            if message.embeds[-1].title != 'Projects':
                continue

            self._role_messages += [message]
        self._role_messages_ids = [m.id for m in self._role_messages]
        del cur_messages

        ack_message = ROLES_MESSAGE_ACK.format(
            staff_role=str(self.roles['staff'].id))

        ack_embed = discord.Embed(
            description=ack_message,
            color=0xff0000,
        )

        PROJECTS_PER_MESSAGE = 10
        EMBED_DESCRIPTION_LIMIT = 4096
        EMBEDS_CHAR_SUM = 6000

        description = ""
        project_emojis = []
        projects_in_message = 0
        messages_sent = 0
        for pi, (key, project) in enumerate(self.projects.items()):

            print(project)

            description += ROLES_PROJECT_MESSAGE.format(
                emoji=project.emoji, title=project.title, link=project.link,
                key=key, guild=self.guild.id, channel=project.voice.id)
            description += "\n"

            project_emojis.append(project.emoji)
            projects_in_message += 1

            description_limit = EMBED_DESCRIPTION_LIMIT
            if messages_sent == 0:
                sum_limit = EMBEDS_CHAR_SUM - len(str(ack_embed.description))
                description_limit = min(description_limit, sum_limit)

            if (len(description) >= description_limit
                    or projects_in_message >= PROJECTS_PER_MESSAGE
                    or pi == len(self.projects) - 1):

                embeds = []
                content = None
                if messages_sent == 0:
                    embeds += [ack_embed]
                    content = ROLES_MESSAGE

                embed = discord.Embed(
                    title='Projects',
                    description=description,
                    color=0x00ff00,
                )
                embeds += [embed]

                if messages_sent >= len(self._role_messages):
                    message = await self.roles_channel.send(
                        content=content,
                        embeds=embeds
                    )
                    self._role_messages_ids += [message.id]
                else:
                    message = self._role_messages[messages_sent]
                    await message.edit(
                        content=content,
                        embeds=embeds
                    )

                bot_reactions = {r.emoji: r for r in message.reactions if r.me}
                for pe in project_emojis:
                    if pe not in bot_reactions:
                        await message.add_reaction(pe)
                    if pe in bot_reactions:
                        del bot_reactions[pe]

                for e in bot_reactions.keys():
                    await message.remove_reaction(e, member=self.user)


                # Reset for next message
                description = ""
                project_emojis = []
                projects_in_message = 0

                messages_sent += 1

    async def reaction_role(self, payload, add):
        if (payload.message_id not in self._role_messages_ids
                or str(payload.emoji) not in self.projects_emoji
                or payload.user_id == self.user.id):
            return

        project = self.projects_emoji[str(payload.emoji)]
        user = await self.roles_channel.guild.fetch_member(payload.user_id)
        if add:
            await user.add_roles(project.role)
        else:
            await user.remove_roles(project.role)

    async def on_raw_reaction_add(self, payload):
        await self.reaction_role(payload, True)

    async def on_raw_reaction_remove(self, payload):
        await self.reaction_role(payload, False)


if __name__ == '__main__':
    from dotenv import load_dotenv
    load_dotenv()

    guild = int(os.getenv('DISCORD_GUILD_ID', ''))
    roles_channel = int(os.getenv('DISCORD_ROLES_CHANNEL', ''))

    client = ProjectsClient(guild, roles_channel, sleep_mode=True)
    client.run(os.getenv('DISCORD_TOKEN', ''))
