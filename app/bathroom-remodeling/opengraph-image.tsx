import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Bathroom Remodeling in Escondido & San Diego | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Bathroom Remodeling in Escondido & San Diego',
    subtitle: 'Walk-in Showers, Double Vanities & Spa-Worthy Retreats',
  });
}
