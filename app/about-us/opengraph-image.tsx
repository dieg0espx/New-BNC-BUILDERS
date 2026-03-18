import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'About BNC Builders Inc. | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'About BNC Builders Inc.',
    subtitle: '30+ Years Combined Experience in San Diego County',
  });
}
