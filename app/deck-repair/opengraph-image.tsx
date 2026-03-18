import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Deck Repair in San Diego & Escondido | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Deck Repair in San Diego & Escondido',
    subtitle: 'Structural Repair, Board Replacement & Complete Deck Restoration',
  });
}
