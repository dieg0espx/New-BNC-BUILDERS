import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Types of ADUs in San Diego | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Types of ADUs in San Diego',
    subtitle: 'Detached, Attached, Garage Conversion & JADU Options',
  });
}
