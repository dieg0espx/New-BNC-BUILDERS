import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Us',
  description: 'Contact BNC Builders for a free remodeling estimate. Kitchen, bathroom, ADU & home renovation in Escondido & San Diego County. Call (760) 658-6238.',
  path: '/contact-us',
});

export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
