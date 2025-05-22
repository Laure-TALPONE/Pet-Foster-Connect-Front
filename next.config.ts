import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/accueil',
        permanent: true,
      },
    ]
  },
  images: {
    domains: [
      "www.solidarite-peuple-animal.com",
      "www.la-spa.fr",
      "https://picsum.photos"
    ],
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  }
};

export default nextConfig;
