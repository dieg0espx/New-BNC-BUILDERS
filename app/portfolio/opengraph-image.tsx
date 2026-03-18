import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Remodeling Portfolio & Project Gallery | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Remodeling Portfolio & Project Gallery',
    subtitle: 'Kitchen, Bathroom, ADU & Exterior Project Photos',
  });
}
