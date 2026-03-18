import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Home Remodeling in Chula Vista, CA | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Home Remodeling in Chula Vista, CA',
    subtitle: 'Kitchen, Bathroom, ADU & Exterior Renovation',
  });
}
