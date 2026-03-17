// BNC Builders - New Room Additions Page

import { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/sections';
import { getServiceBySlug } from '@/lib/constants/services';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('new-room-additions');

export const metadata: Metadata = service
  ? generatePageMetadata({
      title: service.shortTitle,
      description: service.description,
      path: '/new-room-additions',
    })
  : {};

export default function NewRoomAdditionsPage() {
  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
