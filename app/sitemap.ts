// BNC Builders - Sitemap

import { MetadataRoute } from 'next';
import { portfolioCategories, portfolioProjects } from '@/lib/constants/portfolio';
import { blogPosts } from '@/lib/constants/blog';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bncbuildersinc.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages = [
    '',
    '/about-us',
    '/our-process',
    '/contact-us',
    '/areas-we-serve',
    '/reviews',
    '/portfolio',
    '/careers',
    '/blog',
    '/site-map',
    '/customer-referral-program',
    // Interior Services
    '/kitchen-remodeling',
    '/bathroom-remodeling',
    '/home-remodeling',
    '/garage-remodeling',
    '/new-room-additions',
    '/adus',
    '/pre-construction',
    // ADU Hub Pages
    '/adus/cost-guide',
    '/adus/regulations',
    '/adus/types',
    '/adus/process',
    // Exterior Services
    '/exterior-remodeling',
    '/deck-repair',
    '/hardscaping',
    '/outdoor-kitchens',
    '/landscape-remodeling',
    '/3d-landscape-design',
    // Location Pages
    '/areas/san-diego',
    '/areas/carlsbad',
    '/areas/la-jolla',
    '/areas/poway',
    '/areas/oceanside',
    '/areas/encinitas',
    '/areas/vista',
    '/areas/chula-vista',
    '/areas/solana-beach',
    '/areas/valley-center',
    '/areas/rancho-santa-fe',
    '/areas/el-cajon',
    '/areas/la-mesa',
    '/areas/national-city',
  ];

  const staticSitemap: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: currentDate,
    changeFrequency: path === '' ? 'daily' : 'weekly',
    priority: path === ''
      ? 1
      : ['/kitchen-remodeling', '/bathroom-remodeling', '/home-remodeling', '/garage-remodeling',
         '/new-room-additions', '/adus', '/pre-construction', '/exterior-remodeling', '/deck-repair',
         '/hardscaping', '/outdoor-kitchens', '/landscape-remodeling', '/3d-landscape-design'].includes(path)
        ? 0.9
        : path.startsWith('/adus/') || path.startsWith('/areas/')
          ? 0.8
          : 0.7,
  }));

  // Portfolio category pages
  const categorySitemap: MetadataRoute.Sitemap = portfolioCategories.map((category) => ({
    url: `${SITE_URL}/portfolio/${category.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Portfolio project pages
  const projectSitemap: MetadataRoute.Sitemap = portfolioProjects.map((project) => ({
    url: `${SITE_URL}/portfolio/${project.categorySlug}/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // Blog post pages
  const blogSitemap: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticSitemap, ...categorySitemap, ...projectSitemap, ...blogSitemap];
}
