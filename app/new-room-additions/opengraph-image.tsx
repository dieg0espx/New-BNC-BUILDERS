import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Room Additions in San Diego & Escondido | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Room Additions in San Diego & Escondido',
    subtitle: 'Seamless Additions That Match Your Home',
  });
}
