import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Home Remodeling in Vista, CA | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Home Remodeling in Vista, CA',
    subtitle: 'Kitchen, Bathroom & Home Renovation Services',
    backgroundImage:
      'https://res.cloudinary.com/dku1gnuat/image/upload/w_1200,h_630,c_fill,q_80/v1767035986/BNC-BUILDERS/images_bathroom-remodel.2505221027170.jpg',
  });
}
