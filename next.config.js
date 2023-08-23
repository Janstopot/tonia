/** @type {import('next').NextConfig} */
const path = require('path'); // Add this line
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `
    @import "src/assets/scss/abstracts/_variables.scss";
    @import "src/assets/scss/abstracts/_mixins.scss";`,
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname);
    return config;
  },
}

module.exports = nextConfig;
