/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/jkalski.github.io',
  trailingSlash: true,
};

module.exports = nextConfig; 