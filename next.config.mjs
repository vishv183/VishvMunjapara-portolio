/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: '/skills', destination: '/' },
      { source: '/projects', destination: '/' },
      { source: '/experience', destination: '/' },
      { source: '/contact', destination: '/' },
    ];
  },
};

export default nextConfig;

