import { generateOGImage, ogImageSize } from '@/lib/utils/og-image';

export const runtime = 'edge';
export const alt = 'Garage Remodeling in San Diego & Escondido | BNC Builders Inc.';
export const size = ogImageSize;
export const contentType = 'image/png';

export default async function OGImage() {
  return generateOGImage({
    title: 'Garage Remodeling in San Diego & Escondido',
    subtitle: 'Transform Your Garage Into a Living Space, Office, or Gym',
    backgroundImage:
      'https://res.cloudinary.com/dku1gnuat/image/upload/w_1200,h_630,c_fill,q_80/v1767035984/BNC-BUILDERS/images_garage-remodel.2506130519403.jpg',
  });
}
