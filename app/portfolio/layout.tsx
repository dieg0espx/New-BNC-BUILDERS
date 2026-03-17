import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Portfolio',
  description: 'Browse our completed remodeling projects in Escondido & San Diego County. Kitchen, bathroom, ADU, exterior & home renovation photo galleries.',
  path: '/portfolio',
});

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
