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

      // Old exterior service nested paths
      { source: '/exterior-remodeling/adus', destination: '/adus', permanent: true },
      { source: '/exterior-remodeling/adus/', destination: '/adus', permanent: true },
      { source: '/exterior-remodeling/deck-repair', destination: '/deck-repair', permanent: true },
      { source: '/exterior-remodeling/deck-repair/', destination: '/deck-repair', permanent: true },
      { source: '/exterior-remodeling/outdoor-kitchens', destination: '/outdoor-kitchens', permanent: true },
      { source: '/exterior-remodeling/outdoor-kitchens/', destination: '/outdoor-kitchens', permanent: true },
      { source: '/exterior-remodeling/3d-landscape-design', destination: '/3d-landscape-design', permanent: true },
      { source: '/exterior-remodeling/3d-landscape-design/', destination: '/3d-landscape-design', permanent: true },
      { source: '/exterior-work/:path*', destination: '/exterior-remodeling', permanent: true },

      // Old city-specific service pages → new location pages or areas-we-serve
      { source: '/remodeling-and-renovation-oceanside-ca', destination: '/areas/oceanside', permanent: true },
      { source: '/remodeling-and-renovation-oceanside-ca/', destination: '/areas/oceanside', permanent: true },
      { source: '/remodeling-and-renovation-national-city-ca', destination: '/areas-we-serve', permanent: true },
      { source: '/remodeling-and-renovation-national-city-ca/', destination: '/areas-we-serve', permanent: true },
      { source: '/bathroom-remodeling-carlsbad-ca', destination: '/bathroom-remodeling', permanent: true },
      { source: '/bathroom-remodeling-carlsbad-ca/', destination: '/bathroom-remodeling', permanent: true },
      { source: '/bathroom-remodeling-el-cajon-ca', destination: '/bathroom-remodeling', permanent: true },
      { source: '/bathroom-remodeling-el-cajon-ca/', destination: '/bathroom-remodeling', permanent: true },
      { source: '/bathroom-remodeling-la-mesa-ca', destination: '/bathroom-remodeling', permanent: true },
      { source: '/bathroom-remodeling-la-mesa-ca/', destination: '/bathroom-remodeling', permanent: true },
      { source: '/bathroom-remodeling-chula-vista-ca', destination: '/bathroom-remodeling', permanent: true },
      { source: '/bathroom-remodeling-chula-vista-ca/', destination: '/bathroom-remodeling', permanent: true },
      { source: '/kitchen-remodeling-poway-ca', destination: '/kitchen-remodeling', permanent: true },
      { source: '/kitchen-remodeling-poway-ca/', destination: '/kitchen-remodeling', permanent: true },
      { source: '/kitchen-remodeling-chula-vista-ca', destination: '/kitchen-remodeling', permanent: true },
      { source: '/kitchen-remodeling-chula-vista-ca/', destination: '/kitchen-remodeling', permanent: true },
      { source: '/kitchen-remodeling-la-mesa', destination: '/kitchen-remodeling', permanent: true },
      { source: '/kitchen-remodeling-la-mesa/', destination: '/kitchen-remodeling', permanent: true },

      // Old standalone blog/page URLs from previous site
      { source: '/how-to-renovate-a-sunroom', destination: '/blog', permanent: true },
      { source: '/how-to-build-a-patio-cover', destination: '/blog', permanent: true },
      { source: '/importance-of-professional-landscape-irrigation', destination: '/blog', permanent: true },
      { source: '/process-timeline-of-custom-home-building', destination: '/our-process', permanent: true },
      { source: '/design-build-services', destination: '/our-process', permanent: true },
      { source: '/how-to-renovate-a-sunroom/', destination: '/blog', permanent: true },
      { source: '/how-to-build-a-patio-cover/', destination: '/blog', permanent: true },
      { source: '/how-to-choose-the-best-kitchen-cabinets', destination: '/blog/choosing-the-best-kitchen-cabinets-10-factors-to-consider', permanent: true },
      { source: '/how-to-choose-the-best-kitchen-cabinets/', destination: '/blog/choosing-the-best-kitchen-cabinets-10-factors-to-consider', permanent: true },

      // Old SEO spam pages (from previous agency) → homepage
      { source: '/green-renovation', destination: '/', permanent: true },
      { source: '/renovation-process', destination: '/our-process', permanent: true },
      { source: '/remodeling-process', destination: '/our-process', permanent: true },
      { source: '/luxury-bathroom-remodels', destination: '/bathroom-remodeling', permanent: true },
      { source: '/eco-friendly-remodeling', destination: '/', permanent: true },
      { source: '/affordable-bathroom-renovation', destination: '/bathroom-remodeling', permanent: true },
      { source: '/affordable-kitchen-renovation', destination: '/kitchen-remodeling', permanent: true },
      { source: '/custom-home-remodeling', destination: '/home-remodeling', permanent: true },
      { source: '/remodeling-cost-estimates', destination: '/contact-us', permanent: true },
      { source: '/best-kitchen-remodelers', destination: '/kitchen-remodeling', permanent: true },
      { source: '/local-kitchen-remodeling-experts', destination: '/kitchen-remodeling', permanent: true },
      { source: '/bathroom-remodel-ideas', destination: '/bathroom-remodeling', permanent: true },
      { source: '/walk-in-shower-installation', destination: '/bathroom-remodeling', permanent: true },
      { source: '/custom-bathroom-vanities', destination: '/bathroom-remodeling', permanent: true },
      { source: '/bathroom-renovation-specialists', destination: '/bathroom-remodeling', permanent: true },
      { source: '/bathroom-upgrade-services', destination: '/bathroom-remodeling', permanent: true },
      { source: '/small-bathroom-makeover', destination: '/bathroom-remodeling', permanent: true },
      { source: '/tile-installation-cabinet-replacement', destination: '/kitchen-remodeling', permanent: true },
      { source: '/energy-efficient-fixtures', destination: '/', permanent: true },
      { source: '/home-renovation-timeline', destination: '/our-process', permanent: true },
      { source: '/kitchen-remodel-trends-2023', destination: '/kitchen-remodeling', permanent: true },
      { source: '/ada-compliant-renovations', destination: '/', permanent: true },
      { source: '/budgeting-home-renovation', destination: '/contact-us', permanent: true },
      { source: '/eco-friendly-renovation', destination: '/', permanent: true },
      { source: '/how-to-choose-bathroom-tiles', destination: '/bathroom-remodeling', permanent: true },
      { source: '/contact-poway-kitchen-remodel', destination: '/contact-us', permanent: true },
      { source: '/kitchen-remodel-questions-poway', destination: '/kitchen-remodeling', permanent: true },
      { source: '/about-us/careers', destination: '/careers', permanent: true },
      { source: '/about-us/careers/', destination: '/careers', permanent: true },
      { source: '/cms', destination: '/', permanent: true },
      { source: '/cms/', destination: '/', permanent: true },
      { source: '/common', destination: '/', permanent: true },
      { source: '/common/', destination: '/', permanent: true },

      // Old La Mesa specific pages
      { source: '/eco-friendly-remodeling-la-mesa', destination: '/areas-we-serve', permanent: true },
      { source: '/kitchen-remodeling-la-mesa', destination: '/kitchen-remodeling', permanent: true },
      { source: '/remodeling-permits-la-mesa', destination: '/areas-we-serve', permanent: true },
      { source: '/custom-home-design-la-mesa', destination: '/areas-we-serve', permanent: true },
      { source: '/bathroom-renovation-tips-la-mesa', destination: '/bathroom-remodeling', permanent: true },
      { source: '/custom-kitchen-cabinets-la-mesa', destination: '/kitchen-remodeling', permanent: true },
      { source: '/kitchen-layout-design-trends-la-mesa', destination: '/kitchen-remodeling', permanent: true },
      { source: '/best-kitchen-remodel-materials-la-mesa', destination: '/kitchen-remodeling', permanent: true },

      // Old blog structure catch-alls
      { source: '/blog/:year/:month/:slug', destination: '/blog', permanent: true },
      { source: '/blog/2021/:path*', destination: '/blog', permanent: true },
      { source: '/blog/2022/:path*', destination: '/blog', permanent: true },
      { source: '/blog/2023/:path*', destination: '/blog', permanent: true },
      { source: '/blog/2024/:path*', destination: '/blog', permanent: true },
      { source: '/blog/2025/:path*', destination: '/blog', permanent: true },
      { source: '/blog/categories/:category', destination: '/blog', permanent: true },
      { source: '/blog/categories/:category/', destination: '/blog', permanent: true },
      { source: '/blog/feed', destination: '/blog', permanent: true },
      { source: '/blog/feed/', destination: '/blog', permanent: true },
      { source: '/blog/small-kitchen-remodeling-ideas', destination: '/blog', permanent: true },
      { source: '/blog/landscaping-design-cost-guide-escondido', destination: '/blog', permanent: true },
      { source: '/blog/swimming-pool-landscape-design-services', destination: '/blog', permanent: true },
      { source: '/blog/how-much-does-a-kitchen-remodel-cost', destination: '/blog', permanent: true },

      // Old Spanish site URLs
      { source: '/es', destination: '/', permanent: true },
      { source: '/es/:path*', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
