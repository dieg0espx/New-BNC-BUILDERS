// BNC Builders - Hardscaping Page

import { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/sections';
import { getServiceBySlug } from '@/lib/constants/services';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('hardscaping');

export const metadata: Metadata = service
  ? generatePageMetadata({
      title: 'Hardscaping San Diego & Escondido',
      description: 'Professional hardscaping in San Diego & Escondido. Patios, walkways, retaining walls, fire pits & outdoor features. Quality materials & expert installation.',
      path: '/hardscaping',
      keywords: [
        'hardscaping san diego',
        'hardscaping escondido',
        'patio installation san diego',
        'retaining wall san diego',
      ],
    })
  : {};

export default function HardscapingPage() {
  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
