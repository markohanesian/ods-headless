import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ohanesiandigitalsolutions.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "wp.ohanesiandigitalsolutions.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
