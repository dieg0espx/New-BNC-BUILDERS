import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Remodeling Process',
  description: 'See how BNC Builders manages your remodel from consultation to completion. Transparent pricing & clear communication in Escondido & San Diego.',
  path: '/our-process',
  keywords: [
    'remodeling process',
    'home remodeling consultation escondido',
    'how remodeling works',
    'design build process san diego',
  ],
});

export default function OurProcessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
