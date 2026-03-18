import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Kitchen Remodeling in Escondido & San Diego | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Kitchen Remodeling in Escondido & San Diego',
    subtitle: 'Custom Cabinetry, Countertops & Complete Kitchen Renovations',
  });
}
