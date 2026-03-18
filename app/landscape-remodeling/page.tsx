// BNC Builders - Landscape Remodeling Page

import { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/sections';
import { getServiceBySlug } from '@/lib/constants/services';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('landscape-remodeling');

export const metadata: Metadata = service
  ? generatePageMetadata({
      title: 'Landscape Remodeling Escondido & San Diego',
      description: 'Complete landscape remodeling in Escondido & San Diego County. Outdoor makeovers with hardscaping, plantings, lighting & irrigation. Free consultation.',
      path: '/landscape-remodeling',
      keywords: [
        'landscape remodeling escondido',
        'landscaping san diego',
        'landscape contractor escondido',
        'yard remodel san diego',
      ],
    })
  : {};

export default function LandscapeRemodelingPage() {
  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
