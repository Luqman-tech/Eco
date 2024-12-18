/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  
  // Configure public directory
  publicRuntimeConfig: {
    staticFolder: '/public'
  },

  // Optional: webpack configuration
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    });

    return config;
  }
};

module.exports = nextConfig;
