import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Client Reviews & Testimonials',
  description: 'Read verified reviews from BNC Builders clients. See why homeowners across Escondido & San Diego County trust us for kitchen, bathroom & home remodeling.',
  path: '/reviews',
  keywords: [
    'bnc builders reviews',
    'escondido remodeling reviews',
    'san diego contractor reviews',
    'home remodeling testimonials',
  ],
});

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
