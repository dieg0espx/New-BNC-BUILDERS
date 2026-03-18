import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Hardscaping in San Diego & Escondido | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Hardscaping in San Diego & Escondido',
    subtitle: 'Patios, Walkways, Retaining Walls & Fire Pits',
    backgroundImage:
      'https://res.cloudinary.com/dku1gnuat/image/upload/w_1200,h_630,c_fill,q_80/v1767035990/BNC-BUILDERS/images_hardscaping-exterior.2506130539462.jpg',
  });
}
