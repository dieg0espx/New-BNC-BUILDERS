// BNC Builders - Garage Remodeling Page

import { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/sections';
import { getServiceBySlug } from '@/lib/constants/services';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('garage-remodeling');

export const metadata: Metadata = service
  ? generatePageMetadata({
      title: 'Garage Remodeling San Diego & Escondido',
      description: 'Professional garage remodeling & conversions in San Diego & Escondido. Transform your garage into a living space, home office, or gym. Free estimates.',
      path: '/garage-remodeling',
      keywords: [
        'garage remodel san diego',
        'garage conversion escondido',
        'garage remodeling san diego',
        'garage to living space san diego',
      ],
    })
  : {};

export default function GarageRemodelingPage() {
  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
