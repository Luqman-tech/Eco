/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  
  // Error handling
  typescript: {
    ignoreBuildErrors: true
  },

  // Webpack configuration
  webpack: (config) => {
    config.resolve.fallback = { 
      fs: false,
      net: false,
      tls: false 
    };
    return config;
  },

  // Optional redirects
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
