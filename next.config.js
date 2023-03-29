/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['links.papareact.com']
  },
  colorScheme: 'light',
  eslint: {
    ignoreDuringBuilds: true,}
};

module.exports = nextConfig;
