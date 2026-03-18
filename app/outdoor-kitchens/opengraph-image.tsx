import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Outdoor Kitchens in San Diego & Escondido | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Outdoor Kitchens in San Diego & Escondido',
    subtitle: 'Custom Built-In Grills, Countertops & Outdoor Dining',
    backgroundImage:
      'https://res.cloudinary.com/dku1gnuat/image/upload/w_1200,h_630,c_fill,q_80/v1767035991/BNC-BUILDERS/images_outdoor-kitchen-exterior.2506130542203.jpg',
  });
}
