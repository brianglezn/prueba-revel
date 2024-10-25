import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://kata.conducerevel.com/:path*',
      },
    ];
  },
};

export default nextConfig;
