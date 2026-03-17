// BNC Builders - ADUs Page

import { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/sections';
import { getServiceBySlug } from '@/lib/constants/services';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('adus');

export const metadata: Metadata = service
  ? generatePageMetadata({
      title: 'Accessory Dwelling Units (ADUs)',
      description: service.description,
      path: '/adus',
    })
  : {};

export default function ADUsPage() {
  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
