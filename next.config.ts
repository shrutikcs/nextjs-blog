import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true, // Disabled due to compatibility issues with better-auth
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "capable-aardvark-944.convex.cloud",
        protocol: "https",
        port: "",
      },
      {
        hostname: "capable-jellyfish-57.convex.cloud",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
