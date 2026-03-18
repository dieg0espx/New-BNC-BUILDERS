// BNC Builders - Outdoor Kitchens Page

import { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/sections';
import { getServiceBySlug } from '@/lib/constants/services';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('outdoor-kitchens');

export const metadata: Metadata = service
  ? generatePageMetadata({
      title: 'Outdoor Kitchens San Diego & Escondido',
      description: 'Custom outdoor kitchens in San Diego & Escondido. Built-in grills, countertops, refrigeration & bar seating. Design, build & install. Free consultation.',
      path: '/outdoor-kitchens',
      keywords: [
        'outdoor kitchen san diego',
        'outdoor kitchen escondido',
        'outdoor kitchen contractor san diego',
        'outdoor kitchen builder',
      ],
    })
  : {};

export default function OutdoorKitchensPage() {
  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
