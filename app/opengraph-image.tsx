import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'BNC Builders Inc. - Home Remodeling in Escondido & San Diego';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Transforming San Diego Homes With Expert Craftsmanship',
    subtitle: '900+ Projects | 30+ Years Experience | 5-Star Rated',
  });
}
