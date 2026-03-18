import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = '3D Landscape Design in San Diego | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: '3D Landscape Design in San Diego',
    subtitle: 'See Your Project in Photorealistic 3D Before Construction',
    backgroundImage:
      'https://res.cloudinary.com/dku1gnuat/image/upload/w_1200,h_630,c_fill,q_80/v1767035985/BNC-BUILDERS/images_3D-landscape-design.2506130551421.jpg',
  });
}
