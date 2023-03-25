/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    domains: ['picsum.photos'],
},
}

module.exports = nextConfig
