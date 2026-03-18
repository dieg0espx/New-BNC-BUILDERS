import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Landscape Remodeling in Escondido & San Diego | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Landscape Remodeling in Escondido & San Diego',
    subtitle: 'Complete Outdoor Makeovers With Hardscaping & Plantings',
  });
}
