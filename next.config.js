
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  
  // CSS Configuration
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    });

    return config;
  }
};

module.exports = nextConfig;
