// BNC Builders - Garage Remodeling Page

import { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/sections';
import { getServiceBySlug } from '@/lib/constants/services';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('garage-remodeling');

export const metadata: Metadata = service
  ? generatePageMetadata({
      title: service.shortTitle,
      description: service.description,
      path: '/garage-remodeling',
    })
  : {};

export default function GarageRemodelingPage() {
  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
