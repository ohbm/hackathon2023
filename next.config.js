/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  // assetPrefix: isProd ? '/hackathon2023/' : '',
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig
