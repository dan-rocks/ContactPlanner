import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    MAPBOX_ACCESS: process.env.MAPBOX_ACCESS,
    SERVER_URL: process.env.SERVER_URL,
  }
};

export default nextConfig;
