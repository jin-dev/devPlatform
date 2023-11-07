/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['www.nespresso.com', 'localhost', 'drive.google.com'],
  },
}

module.exports = nextConfig
