import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'ADU Contractor in San Diego & Escondido | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'ADU Contractor in San Diego & Escondido',
    subtitle: 'Complete Accessory Dwelling Units From Permits to Move-In Ready',
  });
}
