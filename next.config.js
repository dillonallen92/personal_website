/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '/personal_website',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
