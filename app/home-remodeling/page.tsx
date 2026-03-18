// BNC Builders - Home Remodeling Page

import { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/sections';
import { getServiceBySlug } from '@/lib/constants/services';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('home-remodeling');

export const metadata: Metadata = service
  ? generatePageMetadata({
      title: 'Home Remodeling Escondido & San Diego',
      description: 'Full-service home remodeling in Escondido & San Diego County. From single rooms to whole-home renovations. 30+ years experience. Free estimates.',
      path: '/home-remodeling',
      keywords: [
        'home remodeling escondido',
        'home remodeling san diego',
        'home renovation escondido',
        'remodeling contractor escondido',
        'general contractor escondido',
      ],
    })
  : {};

export default function HomeRemodelingPage() {
  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
