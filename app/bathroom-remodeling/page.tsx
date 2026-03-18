// BNC Builders - Bathroom Remodeling Page

import { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/sections';
import { getServiceBySlug } from '@/lib/constants/services';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('bathroom-remodeling');

export const metadata: Metadata = service
  ? generatePageMetadata({
      title: 'Bathroom Remodeling Escondido & San Diego',
      description: 'Expert bathroom remodeling in Escondido & San Diego County. Walk-in showers, double vanities, spa-worthy retreats & complete bathroom renovations. Free estimates.',
      path: '/bathroom-remodeling',
      keywords: [
        'bathroom remodeling escondido',
        'bathroom remodel san diego',
        'bathroom renovation escondido',
        'bathroom contractor escondido',
        'bathroom remodeling san diego county',
      ],
    })
  : {};

export default function BathroomRemodelingPage() {
  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
