// BNC Builders - Pre-Construction Page

import { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/sections';
import { getServiceBySlug } from '@/lib/constants/services';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('pre-construction');

export const metadata: Metadata = service
  ? generatePageMetadata({
      title: service.shortTitle,
      description: service.description,
      path: '/pre-construction',
    })
  : {};

export default function PreConstructionPage() {
  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
