// BNC Builders - 3D Landscape Design Page

import { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/sections';
import { getServiceBySlug } from '@/lib/constants/services';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('3d-landscape-design');

export const metadata: Metadata = service
  ? generatePageMetadata({
      title: '3D Landscape Design San Diego & Escondido',
      description: '3D landscape design & visualization in San Diego & Escondido. See your outdoor project in photorealistic 3D before construction begins. Free consultation.',
      path: '/3d-landscape-design',
      keywords: [
        '3d landscape design near me',
        '3d landscape design san diego',
        'landscape visualization san diego',
        'landscape architect san diego',
      ],
    })
  : {};

export default function ThreeDLandscapeDesignPage() {
  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
