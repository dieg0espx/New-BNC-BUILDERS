import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Home Remodeling Blog & Tips | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Home Remodeling Blog & Tips',
    subtitle: 'Cost Guides, Ideas & Inspiration for San Diego Homeowners',
    backgroundImage:
      'https://res.cloudinary.com/dku1gnuat/image/upload/w_1200,h_630,c_fill,q_80/v1767035993/BNC-BUILDERS/images_home-remodel.2505221027177.jpg',
  });
}
