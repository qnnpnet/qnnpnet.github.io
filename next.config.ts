import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // GitHub Pages용 정적 export
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.1.111'],
};

export default nextConfig;
