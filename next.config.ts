import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/facetimer-landing',
  assetPrefix: '/facetimer-landing',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
