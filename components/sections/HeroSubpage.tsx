// BNC Builders - Subpage Hero/Banner Component

'use client';

import { Container, AnimatedSection } from '@/components/ui';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { useUserCity } from '@/lib/utils/geolocation';

interface HeroSubpageProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  /** Template with {city} placeholder for geo-targeted title, e.g. "Kitchen Remodeling in {city}" */
  geoTitle?: string;
}

export function HeroSubpage({ title, subtitle, backgroundImage, geoTitle }: HeroSubpageProps) {
  const { city, isLoading } = useUserCity();

  const displayTitle = geoTitle
    ? geoTitle.replace('{city}', isLoading ? '' : city)
    : title;

  return (
    <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <CloudinaryImage
          publicId={backgroundImage}
          alt={displayTitle || title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-zinc-900/70" />
      </div>

      {/* Content */}
      <Container className="relative z-10 text-center text-white">
        <AnimatedSection animation="fade-in-down" duration={800}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">
            {displayTitle || title}
          </h1>
        </AnimatedSection>
        {subtitle && (
          <AnimatedSection animation="fade-in-up" delay={200} duration={800}>
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </AnimatedSection>
        )}
      </Container>
    </section>
  );
}
