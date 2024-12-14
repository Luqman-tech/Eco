/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Resolve any potential module issues
  webpack: (config, { isServer }) => {
    // Add any custom webpack configurations if needed
    return config;
  },
  // Handle potential ESLint or TypeScript errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
