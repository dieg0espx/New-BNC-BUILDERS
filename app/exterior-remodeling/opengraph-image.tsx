import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Exterior Remodeling in San Diego & Escondido | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Exterior Remodeling in San Diego & Escondido',
    subtitle: 'Outdoor Living Spaces, Patios & Complete Exterior Transformations',
  });
}
