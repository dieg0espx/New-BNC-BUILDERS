import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Process',
  description: 'Learn how BNC Builders manages your remodeling project from consultation to completion. Transparent process, clear communication & quality craftsmanship.',
  path: '/our-process',
});

export default function OurProcessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
