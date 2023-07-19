import os
from projects_bot import ProjectsClient

if __name__ == '__main__':
    from dotenv import load_dotenv
    load_dotenv()

    token = os.getenv('DISCORD_TOKEN', '')
    guild = int(os.getenv('DISCORD_GUILD_ID', ''))
    roles_channel = int(os.getenv('DISCORD_ROLES_CHANNEL', ''))

    client = ProjectsClient(
        guild, roles_channel,
        # just_ensure_channels=True,
        # just_ensure_events=True
        sleep_mode=False
    )
    client.run(token)
