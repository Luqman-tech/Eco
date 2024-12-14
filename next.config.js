<<<<<<< HEAD
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Important for Netlify deployment
  
  // Optional: Configure redirects and headers
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
  
  // Optional: Webpack configuration
  webpack: (config) => {
    config.resolve.fallback = { 
      fs: false,  // Resolve 'fs' module issues
      net: false,
      tls: false 
    };
    return config;
  }
};

module.exports = nextConfig;
=======
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Important for Netlify deployment
  
  // Optional: Configure redirects and headers
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
  
  // Optional: Webpack configuration
  webpack: (config) => {
    config.resolve.fallback = { 
      fs: false,  // Resolve 'fs' module issues
      net: false,
      tls: false 
    };
    return config;
  }
};

module.exports = nextConfig;
>>>>>>> 19478cb5094be8d975b0510fb969f515eca07760
