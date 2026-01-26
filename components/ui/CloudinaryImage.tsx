// BNC Builders - Cloudinary Image Component

import Image from 'next/image';
import { buildCloudinaryUrl } from '@/lib/utils/cloudinary';

interface CloudinaryImageProps {
  publicId: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
}

export function CloudinaryImage({
  publicId,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = '',
  sizes,
  quality = 80,
}: CloudinaryImageProps) {
  // Support both local paths (starting with /) and Cloudinary public IDs
  const isLocalPath = publicId.startsWith('/');
  const src = isLocalPath
    ? publicId
    : buildCloudinaryUrl(publicId, {
        quality: 'auto',
        format: 'auto',
      });

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={className}
        sizes={sizes || '100vw'}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      priority={priority}
      className={className}
      sizes={sizes}
      quality={quality}
    />
  );
}
