import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'ADU Cost Guide San Diego 2026 | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'ADU Cost Guide San Diego 2026',
    subtitle: 'Complete Pricing by Type, Size & Finish Level',
  });
}
