/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Bortus AI',
    description: 'The Bortus AI workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://Bortus-AI.github,io/kasm-registry',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
