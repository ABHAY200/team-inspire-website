/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/team-inspire-website',
  assetPrefix: '/team-inspire-website',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
