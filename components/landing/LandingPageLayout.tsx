// BNC Builders - Landing Page Layout
// Used for paid search landing pages with conversion optimization

'use client';

import { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { brandImages } from '@/lib/constants/images';
import { company } from '@/lib/constants/company';
import { Star } from 'lucide-react';

const reviews = [
  { name: 'Sarah M.', city: 'Carlsbad', text: 'Transformed our kitchen into a modern masterpiece.' },
  { name: 'Michael R.', city: 'Poway', text: 'Transparent pricing and exceeded expectations.' },
  { name: 'David K.', city: 'Encinitas', text: 'Permitting was seamless, result exceeded expectations.' },
  { name: 'Jennifer L.', city: 'Escondido', text: 'Made the entire process stress-free.' },
  { name: 'Lisa T.', city: 'Carlsbad', text: 'Beautiful rental unit that generates income.' },
  { name: 'Robert P.', city: 'Vista', text: 'Quality work from design to construction.' },
];

interface LandingPageLayoutProps {
  children: ReactNode;
}

export function LandingPageLayout({ children }: LandingPageLayoutProps) {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const review = reviews[currentReview];

  return (
    <>
      {/* Top Bar - Logo + Revolving Reviews */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo - links to homepage */}
            <Link href="/" className="flex-shrink-0">
              <CloudinaryImage
                publicId={brandImages.logoDark}
                alt={company.name}
                width={140}
                height={46}
                priority
                className="h-10 md:h-12 w-auto"
              />
            </Link>

            {/* Revolving Google Reviews */}
            <div className="hidden sm:flex items-center gap-3 overflow-hidden">
              <div className="flex items-center gap-1 flex-shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                ))}
              </div>
              <div className="relative h-5 overflow-hidden min-w-0">
                <p
                  key={currentReview}
                  className="text-sm text-zinc-600 whitespace-nowrap animate-[fadeInUp_0.4s_ease-out_both]"
                >
                  &quot;{review.text}&quot;
                  <span className="text-zinc-400 ml-1.5">&mdash; {review.name}</span>
                </p>
              </div>
              <span className="flex-shrink-0 text-xs text-zinc-400 border-l border-zinc-200 pl-3 ml-1">
                Google Reviews
              </span>
            </div>

            {/* Mobile: just stars + rating */}
            <div className="flex sm:hidden items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-gold fill-gold" />
                ))}
              </div>
              <span className="text-xs font-semibold text-zinc-600">5.0</span>
            </div>
          </div>
        </div>
      </div>

      <main>
        {children}
      </main>
    </>
  );
}
