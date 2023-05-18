/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false
let assetPrefix = ''
let basePath = ''
if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  assetPrefix = `/${repo}`
  basePath = `/${repo}`
}

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    REGISTRATION_URL: 'https://www.humanbrainmapping.org/i4a/ams/meetings/index.cfm?controller=meetings&action=startRegistration&conferenceID=146&reginit=1&pageID=4217',
    PROJECTS_SUBMISSION_URL: 'https://github.com/ohbm/hackathon2023/issues/new?labels=Hackathon+Project&projects=&template=hackathon-project-form.yml&title=%3CMy+Project+Name%3E',

    DISCORD_URL: 'https://discord.gg/qUzW56dZT2',
    TWITTER_URL: 'https://twitter.com/ohbmopen',
    MATTERMOST_URL: 'https://mattermost.brainhack.org/brainhack/channels/hbm-hackathon',
    GITHUB_URL: 'https://github.com/ohbm/',
    MAPS_URL: 'https://goo.gl/maps/7txMm7UuJ8nKPraC8',
    OSSIG_URL: 'https://ossig.netlify.app/',
  },
}

module.exports = nextConfig
