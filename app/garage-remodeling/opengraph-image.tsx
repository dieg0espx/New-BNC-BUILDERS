import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Garage Remodeling in San Diego & Escondido | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Garage Remodeling in San Diego & Escondido',
    subtitle: 'Transform Your Garage Into a Living Space, Office, or Gym',
  });
}
