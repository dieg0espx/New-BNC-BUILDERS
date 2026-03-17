// BNC Builders - Hardscaping Page

import { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/sections';
import { getServiceBySlug } from '@/lib/constants/services';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('hardscaping');

export const metadata: Metadata = service
  ? generatePageMetadata({
      title: service.shortTitle,
      description: service.description,
      path: '/hardscaping',
    })
  : {};

export default function HardscapingPage() {
  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
