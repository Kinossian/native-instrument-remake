/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.native-instruments.com',
        port: '',
        pathname: '/typo3temp/pics/**',
      },
    ],
  },
};

module.exports = nextConfig;
