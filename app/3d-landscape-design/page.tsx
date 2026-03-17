// BNC Builders - 3D Landscape Design Page

import { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/sections';
import { getServiceBySlug } from '@/lib/constants/services';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('3d-landscape-design');

export const metadata: Metadata = service
  ? generatePageMetadata({
      title: service.shortTitle,
      description: service.description,
      path: '/3d-landscape-design',
    })
  : {};

export default function ThreeDLandscapeDesignPage() {
  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
