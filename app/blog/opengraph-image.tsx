import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Home Remodeling Blog & Tips | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Home Remodeling Blog & Tips',
    subtitle: 'Cost Guides, Ideas & Inspiration for San Diego Homeowners',
  });
}
