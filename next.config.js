/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["media.graphassets.com"]
},
  reactStrictMode: true,
  swcMinify: true,
  
}

module.exports = nextConfig
