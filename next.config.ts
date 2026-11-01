import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://korospace.vercel.app/**")],
  },
};

export default nextConfig;
