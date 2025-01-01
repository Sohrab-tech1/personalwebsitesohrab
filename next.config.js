/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['framer-motion'],
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
}

module.exports = nextConfig

