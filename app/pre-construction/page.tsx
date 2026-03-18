// BNC Builders - Pre-Construction Page

import { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/sections';
import { getServiceBySlug } from '@/lib/constants/services';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('pre-construction');

export const metadata: Metadata = service
  ? generatePageMetadata({
      title: 'Pre-Construction Services San Diego & Escondido',
      description: 'Pre-construction planning & permitting in San Diego & Escondido. Site evaluation, architectural plans, engineering, permits & 3D VR previews. Free consultation.',
      path: '/pre-construction',
      keywords: [
        'pre construction consultation san diego',
        'construction planning escondido',
        'permit management san diego',
        'architectural plans san diego',
      ],
    })
  : {};

export default function PreConstructionPage() {
  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
