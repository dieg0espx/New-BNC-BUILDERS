'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';

interface LayoutContentProps {
  children: React.ReactNode;
}

export function LayoutContent({ children }: LayoutContentProps) {
  const pathname = usePathname();
  const isLandingPage = pathname?.startsWith('/lp/');

  if (isLandingPage) {
    // Landing pages: no header, no footer, no padding
    return <main className="min-h-screen">{children}</main>;
  }

  // Regular pages: with header, footer, and scroll to top
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen pt-[72px] md:pt-[112px]">{children}</main>
      <Footer />
    </>
  );
}
