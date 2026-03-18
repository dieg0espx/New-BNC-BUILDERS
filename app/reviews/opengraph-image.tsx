import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Client Reviews & Testimonials | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Client Reviews & Testimonials',
    subtitle: 'See Why Homeowners Trust BNC Builders',
  });
}
