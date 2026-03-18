import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Deck Repair in San Diego & Escondido | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Deck Repair in San Diego & Escondido',
    subtitle: 'Structural Repair, Board Replacement & Complete Deck Restoration',
    backgroundImage:
      'https://res.cloudinary.com/dku1gnuat/image/upload/w_1200,h_630,c_fill,q_80/v1767035992/BNC-BUILDERS/images_exterior-remodel.2506130600037.jpg',
  });
}
