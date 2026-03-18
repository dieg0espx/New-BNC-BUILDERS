import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Landscape Remodeling in Escondido & San Diego | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Landscape Remodeling in Escondido & San Diego',
    subtitle: 'Complete Outdoor Makeovers With Hardscaping & Plantings',
    backgroundImage:
      'https://res.cloudinary.com/dku1gnuat/image/upload/w_1200,h_630,c_fill,q_80/v1767035988/BNC-BUILDERS/images_landscaping-exterior.2506130546033.jpg',
  });
}
