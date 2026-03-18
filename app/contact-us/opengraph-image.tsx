import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Contact BNC Builders | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Contact BNC Builders',
    subtitle: 'Free Estimates for Kitchen, Bathroom & Home Remodeling',
  });
}
