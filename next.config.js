/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eu-west-2.graphassets.com',
        port: '', // Leave empty if no custom port
        pathname: '/**', // Match all paths
      },
    ],
  },
  trailingSlash: false, // Set based on your hosting preferences
  basePath: "", // Ensure this matches the production deployment path
};
