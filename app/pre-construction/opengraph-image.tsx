import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Pre-Construction Services in San Diego | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Pre-Construction Services in San Diego',
    subtitle: 'Site Evaluation, Plans, Engineering & Permits',
    backgroundImage:
      'https://res.cloudinary.com/dku1gnuat/image/upload/w_1200,h_630,c_fill,q_80/v1767035986/BNC-BUILDERS/images_home-reno.2505221027179.jpg',
  });
}
