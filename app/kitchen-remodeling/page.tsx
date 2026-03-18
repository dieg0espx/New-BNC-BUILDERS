// BNC Builders - Kitchen Remodeling Page

import { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/sections';
import { getServiceBySlug } from '@/lib/constants/services';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('kitchen-remodeling');

export const metadata: Metadata = service
  ? generatePageMetadata({
      title: 'Kitchen Remodeling Escondido & San Diego',
      description: 'Expert kitchen remodeling in Escondido & San Diego County. Custom cabinetry, countertops, layouts & complete kitchen renovations. Free design consultation.',
      path: '/kitchen-remodeling',
      keywords: [
        'kitchen remodeling escondido',
        'kitchen remodel escondido',
        'kitchen remodel san diego',
        'kitchen renovation escondido',
        'kitchen contractor escondido',
      ],
    })
  : {};

export default function KitchenRemodelingPage() {
  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
