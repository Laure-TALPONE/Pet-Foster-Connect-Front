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
  images: {
    domains: [
      "www.solidarite-peuple-animal.com",
      "www.la-spa.fr"
    ],
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  }
};

export default nextConfig;
