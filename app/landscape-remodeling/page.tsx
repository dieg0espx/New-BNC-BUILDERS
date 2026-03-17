// BNC Builders - Landscape Remodeling Page

import { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/sections';
import { getServiceBySlug } from '@/lib/constants/services';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('landscape-remodeling');

export const metadata: Metadata = service
  ? generatePageMetadata({
      title: service.shortTitle,
      description: service.description,
      path: '/landscape-remodeling',
    })
  : {};

export default function LandscapeRemodelingPage() {
  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
