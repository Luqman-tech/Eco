/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  
  // Webpack configuration
  webpack: (config) => {
    config.resolve.fallback = { 
      fs: false,
      net: false,
      tls: false 
    };
    return config;
  },

  // Asset prefix for public files
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ecothrivesite' : '',

  // Redirects
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      }
    ];
  }
};

module.exports = nextConfig;
