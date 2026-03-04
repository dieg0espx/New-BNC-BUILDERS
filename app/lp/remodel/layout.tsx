// BNC Builders - Remodel Landing Page Layout
// Includes noindex, schema markup, and dynamic meta tags

import { Metadata } from 'next';
import Script from 'next/script';
import { company } from '@/lib/constants/company';

export async function generateMetadata(): Promise<Metadata> {
  // Default to Escondido since we can't detect city server-side
  const defaultCity = 'Escondido';

  return {
    title: `Remodeling Contractor in ${defaultCity} CA | BNC Builders`,
    description: `Expert kitchen, bathroom, and home remodeling in ${defaultCity}. Licensed & insured with 30+ years experience. Get your free estimate today.`,
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      title: `Remodeling Contractor in ${defaultCity} CA | BNC Builders`,
      description: `Expert kitchen, bathroom, and home remodeling in ${defaultCity}. Licensed & insured with 30+ years experience.`,
      type: 'website',
      locale: 'en_US',
      siteName: company.name,
    },
  };
}

export default function RemodelLandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* LocalBusiness Schema */}
      <Script
        id="local-business-schema-remodel"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: company.name,
            description: 'Expert home remodeling contractor in North County San Diego',
            url: 'https://bncbuilders.com',
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
              latitude: '33.1192',
              longitude: '-117.0864',
            },
            areaServed: [
              'Escondido',
              'Carlsbad',
              'Poway',
              'San Marcos',
              'Vista',
              'Rancho Bernardo',
              'Encinitas',
              'Oceanside',
            ],
            priceRange: '$$$',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5.0',
              reviewCount: '900',
            },
          }),
        }}
      />
      {children}
    </>
  );
}
