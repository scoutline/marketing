import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // CRITICAL: OpenNext needs this to find your code
  output: 'standalone',
};

export default nextConfig;