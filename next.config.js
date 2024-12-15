/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  
  // Optional: Error handling and build configurations
  typescript: {
    ignoreBuildErrors: true
  },

  // Optional: Webpack configuration
  webpack: (config) => {
    config.resolve.fallback = { 
      fs: false,
      net: false,
      tls: false 
    };
    return config;
  },

  // Optional: Redirects
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
