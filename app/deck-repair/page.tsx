// BNC Builders - Deck Repair Page

import { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/sections';
import { getServiceBySlug } from '@/lib/constants/services';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('deck-repair');

export const metadata: Metadata = service
  ? generatePageMetadata({
      title: 'Deck Repair San Diego & Escondido',
      description: 'Professional deck repair & restoration in San Diego & Escondido. Fix structural issues, replace boards, refinish surfaces. Free deck inspection.',
      path: '/deck-repair',
      keywords: [
        'deck repair san diego',
        'deck repair escondido',
        'deck restoration san diego',
        'deck contractor san diego',
      ],
    })
  : {};

export default function DeckRepairPage() {
  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
