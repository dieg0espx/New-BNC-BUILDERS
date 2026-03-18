import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'San Diego ADU Regulations Guide | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'San Diego ADU Regulations Guide',
    subtitle: 'Setbacks, Height Limits, Parking Rules & Permits',
    backgroundImage:
      'https://res.cloudinary.com/dku1gnuat/image/upload/w_1200,h_630,c_fill,q_80/v1767035992/BNC-BUILDERS/images_ADUs-exterior.2506130535283.jpg',
  });
}
