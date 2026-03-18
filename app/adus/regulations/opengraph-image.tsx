import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'San Diego ADU Regulations Guide | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'San Diego ADU Regulations Guide',
    subtitle: 'Setbacks, Height Limits, Parking Rules & Permits',
  });
}
