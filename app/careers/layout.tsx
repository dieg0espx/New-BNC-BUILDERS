import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Careers',
  description: 'Join the BNC Builders team. We are hiring skilled tradespeople and project managers in Escondido & San Diego County. Competitive pay & growth opportunities.',
  path: '/careers',
});

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
