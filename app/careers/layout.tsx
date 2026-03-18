import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Careers at BNC Builders',
  description: 'Join the BNC Builders team. Hiring skilled tradespeople and project managers in Escondido & San Diego County. Competitive pay & growth opportunities.',
  path: '/careers',
  keywords: [
    'construction jobs escondido',
    'remodeling careers san diego',
    'contractor jobs san diego county',
  ],
});

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
