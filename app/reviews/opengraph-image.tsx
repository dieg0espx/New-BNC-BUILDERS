import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Client Reviews & Testimonials | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Client Reviews & Testimonials',
    subtitle: 'See Why Homeowners Trust BNC Builders',
    backgroundImage:
      'https://res.cloudinary.com/dku1gnuat/image/upload/w_1200,h_630,c_fill,q_80/v1767035994/BNC-BUILDERS/images_kitchen-remodel.2505221027173.jpg',
  });
}
