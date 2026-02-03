/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  // Ensure production mode consistency
  swcMinify: true,
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'logo.clearbit.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'techlinqconsulting.com.au',
      },
      {
        protocol: 'https',
        hostname: 'veritis.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
      {
        protocol: 'https',
        hostname: 'tenece.com',
      },
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'constructionreviewonline.com',
      },
      {
        protocol: 'https',
        hostname: 'www.forsk.com',
      },
      {
        protocol: 'https',
        hostname: 'tokophilips.wordpress.com',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'donate.youthbridge.africa',
      },
      {
        protocol: 'https',
        hostname: 'africanmediaagency.com',
      },
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
      },
      {
        protocol: 'https',
        hostname: 'www.worldbank.org',
      },
      {
        protocol: 'https',
        hostname: 'essa-africa.org',
      },
      {
        protocol: 'https',
        hostname: 'www.povertyactionlab.org',
      },
      {
        protocol: 'https',
        hostname: 'thumbs.dreamstime.com',
      },
      {
        protocol: 'https',
        hostname: 'roicallcentersolutions.com',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'www.dhl.com',
      },
      {
        protocol: 'https',
        hostname: 'sa-commercial.co.za',
      },
      {
        protocol: 'https',
        hostname: 'cioafrica.co',
      },
      {
        protocol: 'https',
        hostname: 'worldbank.scene7.com',
      },
      {
        protocol: 'https',
        hostname: 'ntsafrica.com',
      },
      {
        protocol: 'https',
        hostname: 'www.deloitte.com',
      },
      {
        protocol: 'https',
        hostname: 'www.processmaker.com',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
      {
        protocol: 'https',
        hostname: 't4.ftcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'inveniatech.com',
      },
      {
        protocol: 'https',
        hostname: 'live.theasianbanker.com',
      },
      {
        protocol: 'https',
        hostname: 'callforceoutsourcing.com',
      },
      {
        protocol: 'https',
        hostname: 'en.it-development.com',
      },
      {
        protocol: 'https',
        hostname: 'alpha-sec.net',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'proceragroup.com',
      },
      {
        protocol: 'https',
        hostname: 'vellum.co.ke',
      },
    ],
  },
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    // Production optimizations
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              priority: 10,
              reuseExistingChunk: true,
            },
            framerMotion: {
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              name: 'framer-motion',
              priority: 20,
              reuseExistingChunk: true,
            },
          },
        },
      }
    }
    return config
  },
}

module.exports = nextConfig

