/** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: { unoptimized: true },
// };

// module.exports = nextConfig;
module.exports = {
  trailingSlash: false, // Set based on your hosting preferences
  basePath: "", // Ensure this matches the production deployment path
};
