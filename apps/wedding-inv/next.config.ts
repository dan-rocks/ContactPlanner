import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    MAPBOX_ACCESS: process.env.MAPBOX_ACCESS
  }
};

export default nextConfig;
