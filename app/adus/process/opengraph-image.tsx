import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'ADU Construction Process | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'ADU Construction Process',
    subtitle: 'From Consultation to Move-In Ready in San Diego',
  });
}
