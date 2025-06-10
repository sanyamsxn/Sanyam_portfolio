import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['apple.com'],
  },
  output:"export",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
