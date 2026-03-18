// BNC Builders - ADUs Page

import { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/sections';
import { getServiceBySlug } from '@/lib/constants/services';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('adus');

export const metadata: Metadata = service
  ? generatePageMetadata({
      title: 'ADU Contractor San Diego & Escondido',
      description: 'ADU construction in San Diego & Escondido. Complete accessory dwelling units from permits to move-in ready. Maximize property value & rental income. Free estimates.',
      path: '/adus',
      keywords: [
        'adu contractor san diego',
        'adu builders san diego',
        'adu builder escondido',
        'accessory dwelling unit san diego',
        'adu construction san diego',
        'adu contractors san diego',
      ],
    })
  : {};

export default function ADUsPage() {
  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
