import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Outdoor Kitchens in San Diego & Escondido | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Outdoor Kitchens in San Diego & Escondido',
    subtitle: 'Custom Built-In Grills, Countertops & Outdoor Dining',
  });
}
