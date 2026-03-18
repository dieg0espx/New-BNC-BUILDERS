import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Home Remodeling in Oceanside, CA | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Home Remodeling in Oceanside, CA',
    subtitle: 'Kitchen, Bathroom & Exterior Renovation Experts',
  });
}
