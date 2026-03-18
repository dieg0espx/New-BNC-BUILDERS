// BNC Builders - JSON-LD Structured Data Components

import { company } from '@/lib/constants/company';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bncbuildersinc.com';

// Organization Schema
export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: company.name,
    alternateName: 'BNC Builders',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon/web-app-manifest-512x512.png`,
    image: `${SITE_URL}/og-image.jpg`,
    description: 'Professional home remodeling services in Escondido & San Diego County. Kitchen, bathroom, ADU construction & more.',
    telephone: company.phone,
    email: 'info@bncbuildersinc.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.1192,
      longitude: -117.0864,
    },
    areaServed: [
      { '@type': 'City', name: 'Escondido', '@id': 'https://www.wikidata.org/wiki/Q490380' },
      { '@type': 'City', name: 'San Diego' },
      { '@type': 'City', name: 'Carlsbad' },
      { '@type': 'City', name: 'Encinitas' },
      { '@type': 'City', name: 'Oceanside' },
      { '@type': 'City', name: 'Vista' },
      { '@type': 'City', name: 'San Marcos' },
      { '@type': 'City', name: 'Poway' },
      { '@type': 'City', name: 'La Jolla' },
      { '@type': 'City', name: 'Del Mar' },
      { '@type': 'City', name: 'Rancho Santa Fe' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '17:00',
    },
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Check',
    foundingDate: '2019',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 10,
      maxValue: 50,
    },
    slogan: company.tagline,
    knowsAbout: [
      'Kitchen Remodeling',
      'Bathroom Remodeling',
      'ADU Construction',
      'Home Renovation',
      'Room Additions',
      'Outdoor Kitchens',
      'Hardscaping',
      'Deck Repair',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Home Remodeling Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Kitchen Remodeling',
            description: 'Complete kitchen renovation services including cabinets, countertops, and appliances.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bathroom Remodeling',
            description: 'Full bathroom renovation with custom tilework, fixtures, and modern designs.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ADU Construction',
            description: 'Accessory Dwelling Unit design and construction services.',
          },
        },
      ],
    },
    sameAs: [
      'https://www.facebook.com/bncbuilders',
      'https://www.instagram.com/bncbuilders',
      'https://www.linkedin.com/company/bncbuilders',
      'https://www.yelp.com/biz/bnc-builders-escondido',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Website Schema
export function WebsiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: company.name,
    description: 'Professional home remodeling services in Escondido & San Diego County.',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-US',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Local Business Schema (for contact page — uses HQ address)
export function LocalBusinessJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: company.name,
    image: `${SITE_URL}/og-image.jpg`,
    telephone: company.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.1192,
      longitude: -117.0864,
    },
    url: SITE_URL,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Area Served Schema (for city/location pages — references HQ, declares service area)
export function AreaServedJsonLd({ city, pageUrl }: { city: string; pageUrl: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: company.name,
    telephone: company.phone,
    url: `${SITE_URL}${pageUrl}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.zip,
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'State',
        name: 'California',
      },
    },
    priceRange: '$$',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Service Schema
interface ServiceJsonLdProps {
  name: string;
  description: string;
  url: string;
  image?: string;
}

export function ServiceJsonLd({ name, description, url, image }: ServiceJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    areaServed: [
      { '@type': 'City', name: 'Escondido', containedInPlace: { '@type': 'State', name: 'California' } },
      { '@type': 'City', name: 'San Diego' },
      { '@type': 'City', name: 'Carlsbad' },
      { '@type': 'City', name: 'Encinitas' },
      { '@type': 'City', name: 'Oceanside' },
      { '@type': 'City', name: 'Poway' },
      { '@type': 'City', name: 'Vista' },
      { '@type': 'City', name: 'La Jolla' },
      { '@type': 'City', name: 'Chula Vista' },
    ],
    ...(image && { image }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Blog Post Schema
interface BlogPostJsonLdProps {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}

export function BlogPostJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author = company.name,
}: BlogPostJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image,
    url: `${SITE_URL}${url}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: author,
      url: SITE_URL,
    },
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${url}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema
interface FAQItem {
  question: string;
  answer: string;
}

export function FAQJsonLd({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Review Schema
interface ReviewJsonLdProps {
  reviews: Array<{
    author: string;
    rating: number;
    text: string;
    date?: string;
  }>;
}

export function ReviewJsonLd({ reviews }: ReviewJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
      },
      reviewBody: review.text,
      ...(review.date && { datePublished: review.date }),
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1),
      reviewCount: reviews.length,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
