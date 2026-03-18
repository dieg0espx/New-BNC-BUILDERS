import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = '3D Landscape Design in San Diego | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: '3D Landscape Design in San Diego',
    subtitle: 'See Your Project in Photorealistic 3D Before Construction',
  });
}
