import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Luxury Home Remodeling in La Jolla | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Luxury Home Remodeling in La Jolla',
    subtitle: 'Premium Kitchen, Bathroom & Whole-Home Renovations',
  });
}
