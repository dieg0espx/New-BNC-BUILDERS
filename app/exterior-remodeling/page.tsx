// BNC Builders - Exterior Remodeling Page

import { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/sections';
import { getServiceBySlug } from '@/lib/constants/services';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('exterior-remodeling');

export const metadata: Metadata = service
  ? generatePageMetadata({
      title: 'Exterior Remodeling San Diego & Escondido',
      description: 'Exterior remodeling in San Diego & Escondido. Outdoor living spaces, curb appeal upgrades, patios, decks & complete exterior transformations. Free estimates.',
      path: '/exterior-remodeling',
      keywords: [
        'exterior remodeling san diego',
        'exterior remodeling escondido',
        'outdoor remodeling san diego',
        'curb appeal san diego',
      ],
    })
  : {};

export default function ExteriorRemodelingPage() {
  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
