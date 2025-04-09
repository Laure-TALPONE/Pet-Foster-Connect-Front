import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/accueil',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
