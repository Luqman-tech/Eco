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

  // Redirects
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      }
    ];
  },

  // Page extensions
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

module.exports = nextConfig;
