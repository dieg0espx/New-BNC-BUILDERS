import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Pre-Construction Services in San Diego | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Pre-Construction Services in San Diego',
    subtitle: 'Site Evaluation, Plans, Engineering & Permits',
  });
}
