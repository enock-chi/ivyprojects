import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['us-west-2.graphassets.com'], // Add the allowed domains here
  },
  // other config options...
};

export default nextConfig;
