import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Remodeling Portfolio & Project Gallery',
  description: 'Browse completed remodeling projects by BNC Builders in Escondido & San Diego County. Kitchen, bathroom, ADU, exterior & home renovation photo galleries.',
  path: '/portfolio',
  keywords: [
    'remodeling portfolio escondido',
    'kitchen remodel before after san diego',
    'bathroom remodel gallery',
    'adu project photos san diego',
  ],
});

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
