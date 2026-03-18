// BNC Builders - New Room Additions Page

import { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/sections';
import { getServiceBySlug } from '@/lib/constants/services';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('new-room-additions');

export const metadata: Metadata = service
  ? generatePageMetadata({
      title: 'Room Additions San Diego & Escondido',
      description: 'New room additions in San Diego & Escondido. Expand your living space with seamless additions that match your home. Permits to completion. Free estimates.',
      path: '/new-room-additions',
      keywords: [
        'room addition san diego',
        'room addition escondido',
        'home addition san diego',
        'room addition contractor san diego',
      ],
    })
  : {};

export default function NewRoomAdditionsPage() {
  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
