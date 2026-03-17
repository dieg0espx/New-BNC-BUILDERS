import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'About Us',
  description: 'Meet the BNC Builders team. 30+ years of combined experience in home remodeling across Escondido & San Diego County. Licensed, insured & BBB accredited.',
  path: '/about-us',
});

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
