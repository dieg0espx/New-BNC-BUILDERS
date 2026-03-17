// BNC Builders - Exterior Remodeling Page

import { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/sections';
import { getServiceBySlug } from '@/lib/constants/services';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('exterior-remodeling');

export const metadata: Metadata = service
  ? generatePageMetadata({
      title: service.shortTitle,
      description: service.description,
      path: '/exterior-remodeling',
    })
  : {};

export default function ExteriorRemodelingPage() {
  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
