/** @type {import('next').NextConfig} */
const path = require('path'); // Add this line
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    prependData: `
    @import "src/assets/scss/abstracts/_variables.scss";
    @import "src/assets/scss/abstracts/_mixins.scss";`,
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname);
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '**',
      },
    ],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}

module.exports = nextConfig;
