import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Home Remodeling in Escondido & San Diego | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Home Remodeling in Escondido & San Diego',
    subtitle: 'From Single Rooms to Whole-Home Renovations',
  });
}
