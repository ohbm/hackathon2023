import os
import yaml
import tweepy

auth = tweepy.OAuthHandler(os.getenv('TWITTER_CUSTOMER_KEY'), os.getenv('TWITTER_CUSTOMER_SECRET'))
auth.set_access_token(os.getenv('TWITTER_ACCESS_TOKEN'), os.getenv('TWITTER_ACCESS_SECRET'))
api = tweepy.API(auth)

screenname = os.getenv('TWITTER_USERNAME')
from_tweet_id = os.getenv('TWITTER_FIRST_TWEET_ID')
tweets = api.user_timeline(screen_name=screenname, since_id=from_tweet_id, count=200, include_rts=False, exclude_replies=True)

with open('_data/projects.yml', 'r') as f:
    projects = yaml.safe_load(f)

class TweetFound(Exception): pass

for p in projects:

    if p.get('twiter') is None:
        continue

    try:
        for t in tweets:
            if '#' + p['chat_channel'] in t.text:
                raise TweetFound()
    except TweetFound:
        continue
    else:
        tweet = 'New Hackathon project: ' + p['twiter'] + ' #' + p['chat_channel']
        api.update_status(
            tweet.format(**p),
            attachment_url=p['issue_link']
        )
