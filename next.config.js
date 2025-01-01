/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['framer-motion'],
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
  experimental: {
    esmExternals: 'loose'
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        'supports-color': false,
      }
    }
    return config
  },
}

module.exports = nextConfig

