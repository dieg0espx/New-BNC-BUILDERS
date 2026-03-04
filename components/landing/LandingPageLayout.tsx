// BNC Builders - Landing Page Layout (No Header, No Navigation)
// Used for paid search landing pages with conversion optimization

'use client';

import { ReactNode } from 'react';

interface LandingPageLayoutProps {
  children: ReactNode;
}

export function LandingPageLayout({ children }: LandingPageLayoutProps) {
  return (
    <main>
      {children}
    </main>
  );
}
