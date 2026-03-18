import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dku1gnuat/**',
      },
    ],
  },
  async redirects() {
    return [
      // Old service page structure → new flat structure
      { source: '/home-remodeling/kitchen-remodeling', destination: '/kitchen-remodeling', permanent: true },
      { source: '/home-remodeling/kitchen-remodeling/', destination: '/kitchen-remodeling', permanent: true },
      { source: '/home-remodeling/garage-remodeling', destination: '/garage-remodeling', permanent: true },
      { source: '/home-remodeling/garage-remodeling/', destination: '/garage-remodeling', permanent: true },
      { source: '/home-remodeling/new-room-additions', destination: '/new-room-additions', permanent: true },
      { source: '/home-remodeling/new-room-additions/', destination: '/new-room-additions', permanent: true },
      { source: '/home-remodeling/pre-construction', destination: '/pre-construction', permanent: true },
      { source: '/home-remodeling/pre-construction/', destination: '/pre-construction', permanent: true },
      { source: '/home-remodeling/', destination: '/home-remodeling', permanent: true },
      { source: '/exterior-remodeling/hardscaping', destination: '/hardscaping', permanent: true },
      { source: '/exterior-remodeling/hardscaping/', destination: '/hardscaping', permanent: true },
      { source: '/exterior-remodeling/landscape-remodeling', destination: '/landscape-remodeling', permanent: true },
      { source: '/exterior-remodeling/landscape-remodeling/', destination: '/landscape-remodeling', permanent: true },
      { source: '/exterior-remodeling/', destination: '/exterior-remodeling', permanent: true },

      // Old location pages → areas we serve
      { source: '/remodeling-and-renovation-carlsbad-ca', destination: '/areas-we-serve', permanent: true },
      { source: '/remodeling-and-renovation-carlsbad-ca/', destination: '/areas-we-serve', permanent: true },
      { source: '/remodeling-and-renovation-el-cajon-ca', destination: '/areas-we-serve', permanent: true },
      { source: '/remodeling-and-renovation-el-cajon-ca/', destination: '/areas-we-serve', permanent: true },
      { source: '/remodeling-and-renovation-encinitas-ca', destination: '/areas-we-serve', permanent: true },
      { source: '/remodeling-and-renovation-encinitas-ca/', destination: '/areas-we-serve', permanent: true },
      { source: '/remodeling-and-renovation-la-mesa-ca', destination: '/areas-we-serve', permanent: true },
      { source: '/remodeling-and-renovation-la-mesa-ca/', destination: '/areas-we-serve', permanent: true },
      { source: '/remodeling-and-renovation-poway-ca', destination: '/areas-we-serve', permanent: true },
      { source: '/remodeling-and-renovation-poway-ca/', destination: '/areas-we-serve', permanent: true },
      { source: '/remodeling-and-renovation-vista-ca', destination: '/areas-we-serve', permanent: true },
      { source: '/remodeling-and-renovation-vista-ca/', destination: '/areas-we-serve', permanent: true },
      { source: '/bathroom-remodeling-poway-ca', destination: '/bathroom-remodeling', permanent: true },
      { source: '/bathroom-remodeling-poway-ca/', destination: '/bathroom-remodeling', permanent: true },

      // Old page paths → new equivalents
      { source: '/about-us/download-our-adu-handbook', destination: '/adu-handbook-download', permanent: true },
      { source: '/about-us/download-our-adu-handbook/', destination: '/adu-handbook-download', permanent: true },
      { source: '/our-process/', destination: '/our-process', permanent: true },
      { source: '/contact-us/', destination: '/contact-us', permanent: true },
      { source: '/blog/', destination: '/blog', permanent: true },
      { source: '/site-map/', destination: '/site-map', permanent: true },

      // Old portfolio structure
      { source: '/portfolio/accessory-dwelling-unit-adu-', destination: '/portfolio/adus', permanent: true },
      { source: '/portfolio/accessory-dwelling-unit-adu-/', destination: '/portfolio/adus', permanent: true },

      // Old blog posts (catch-all for old blog structure)
      { source: '/blog/:year/:month/:slug', destination: '/blog', permanent: true },
    ];
  },
};

export default nextConfig;
