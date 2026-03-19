import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Luxury Home Remodeling in Rancho Santa Fe, CA | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Luxury Home Remodeling in Rancho Santa Fe, CA',
    subtitle: 'Premium Kitchen, Bathroom & Whole-Home Renovations',
  });
}
