import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Room Additions in San Diego & Escondido | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Room Additions in San Diego & Escondido',
    subtitle: 'Seamless Additions That Match Your Home',
    backgroundImage:
      'https://res.cloudinary.com/dku1gnuat/image/upload/w_1200,h_630,c_fill,q_80/v1767035987/BNC-BUILDERS/images_new-room-addition-remodel.2506130522333.jpg',
  });
}
