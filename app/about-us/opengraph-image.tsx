import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'About BNC Builders Inc. | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'About BNC Builders Inc.',
    subtitle: '30+ Years Combined Experience in San Diego County',
    backgroundImage:
      'https://res.cloudinary.com/dku1gnuat/image/upload/w_1200,h_630,c_fill,q_80/v1767036022/BNC-BUILDERS/assets_pack_foreground_BNC-contentre1.2506231252116.jpg',
  });
}
