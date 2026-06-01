import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: ".",
  },
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
