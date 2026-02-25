// BNC Builders - Metadata Utilities

import { Metadata } from 'next';
import { company } from '../constants/company';
import { CLOUDINARY_BASE_URL } from '../constants/images';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://bncbuilders.com';

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  keywords?: string[];
  noIndex?: boolean;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
    tags?: string[];
  };
}

export function generatePageMetadata({
  title,
  description,
  path = '',
  ogImage = '/openGraph.png',
  keywords = [],
  noIndex = false,
  article,
}: PageMetadataOptions): Metadata {
  const fullTitle = title === 'Home'
    ? `Escondido Home Remodeling | ${company.name}`
    : `${title} | ${company.name}`;

  const canonicalUrl = `${SITE_URL}${path}`;

  // Ensure absolute URL for OpenGraph image for better compatibility
  const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      type: article ? 'article' : 'website',
      url: canonicalUrl,
      siteName: company.name,
      locale: 'en_US',
      images: [
        {
          url: absoluteOgImage,
          secureUrl: absoluteOgImage,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [absoluteOgImage],
      creator: '@bncbuilders',
      site: '@bncbuilders',
    },
  };

  // Add keywords if provided
  if (keywords.length > 0) {
    metadata.keywords = keywords;
  }

  // Add article-specific metadata
  if (article) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      ...(article.publishedTime && { publishedTime: article.publishedTime }),
      ...(article.modifiedTime && { modifiedTime: article.modifiedTime }),
      ...(article.authors && { authors: article.authors }),
      ...(article.tags && { tags: article.tags }),
    };
  }

  // Add noIndex if specified
  if (noIndex) {
    metadata.robots = {
      index: false,
      follow: false,
    };
  }

  return metadata;
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Escondido Home Remodeling | ${company.name}`,
    template: `%s | ${company.name}`,
  },
  description: 'Professional home remodeling services in Escondido & San Diego County. Kitchen, bathroom, ADU construction & more. 30+ years experience. Free estimates. Call (760) 993-3204.',
  keywords: [
    'home remodeling Escondido',
    'kitchen remodeling San Diego',
    'bathroom remodeling Escondido',
    'ADU construction San Diego',
    'Escondido general contractor',
    'San Diego home renovation',
    'outdoor kitchen installation',
    'hardscaping contractor',
    'room addition Escondido',
    'home improvement San Diego',
    'licensed contractor Escondido',
    'bathroom renovation San Diego',
    'kitchen renovation Escondido',
    'home remodeling contractor',
    'residential construction San Diego',
  ],
  authors: [{ name: company.name, url: SITE_URL }],
  creator: company.name,
  publisher: company.name,
  category: 'Home Improvement',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'en-US': SITE_URL,
      'es-US': `${SITE_URL}/es`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: company.name,
    title: `Escondido Home Remodeling | ${company.name}`,
    description: 'Professional home remodeling services in Escondido & San Diego County. Kitchen, bathroom, ADU construction & more. 30+ years experience.',
    images: [
      {
        url: `${SITE_URL}/openGraph.png`,
        secureUrl: `${SITE_URL}/openGraph.png`,
        width: 1200,
        height: 630,
        alt: `${company.name} - Home Remodeling`,
        type: 'image/png',
      },
    ],
    countryName: 'United States',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bncbuilders',
    creator: '@bncbuilders',
    title: `Escondido Home Remodeling | ${company.name}`,
    description: 'Professional home remodeling services in Escondido & San Diego County. Kitchen, bathroom, ADU construction & more.',
    images: [
      {
        url: `${SITE_URL}/openGraph.png`,
        alt: `${company.name} - Home Remodeling`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon/favicon.svg', color: '#CF9C39' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-site-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: company.name,
  },
  applicationName: company.name,
  other: {
    'msapplication-TileColor': '#CF9C39',
    'theme-color': '#CF9C39',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
    'geo.region': 'US-CA',
    'geo.placename': 'Escondido',
    'geo.position': '33.1192;-117.0864',
    'ICBM': '33.1192, -117.0864',
  },
};

// Helper to generate service page metadata
export function generateServiceMetadata(
  serviceName: string,
  serviceDescription: string,
  path: string,
  image?: string
): Metadata {
  return generatePageMetadata({
    title: `${serviceName} Services in Escondido & San Diego`,
    description: serviceDescription,
    path,
    ogImage: image,
    keywords: [
      `${serviceName.toLowerCase()} Escondido`,
      `${serviceName.toLowerCase()} San Diego`,
      `${serviceName.toLowerCase()} contractor`,
      `${serviceName.toLowerCase()} services`,
      `professional ${serviceName.toLowerCase()}`,
    ],
  });
}

// Helper to generate blog post metadata
export function generateBlogMetadata(
  title: string,
  excerpt: string,
  slug: string,
  image: string,
  publishedDate: string,
  category: string
): Metadata {
  return generatePageMetadata({
    title,
    description: excerpt,
    path: `/blog/${slug}`,
    ogImage: `${CLOUDINARY_BASE_URL}/${image}`,
    keywords: [category.toLowerCase(), 'home improvement tips', 'remodeling guide'],
    article: {
      publishedTime: publishedDate,
      authors: [company.name],
      tags: [category],
    },
  });
}
