// BNC Builders - CTA Banner Component

'use client';

import { Container, Section, Button, AnimatedSection } from '@/components/ui';
import { company } from '@/lib/constants/company';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  showPhone?: boolean;
}

export function CTABanner({
  title = 'Ready to Transform Your Home?',
  subtitle = 'Contact us today for a free consultation and estimate.',
  primaryAction = { label: 'Get Free Estimate', href: '/contact-us' },
  secondaryAction,
  showPhone = true,
}: CTABannerProps) {
  return (
    <Section background="dark" padding="lg">
      <Container>
        <AnimatedSection animation="fade-in-up" className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={primaryAction.href}
              className="inline-flex items-center justify-center bg-white text-gold hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all hover:scale-105"
            >
              {primaryAction.label}
            </a>

            {secondaryAction && (
              <a
                href={secondaryAction.href}
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-gold font-bold py-3 px-8 rounded-lg transition-all"
              >
                {secondaryAction.label}
              </a>
            )}

            {showPhone && (
              <a
                href={`tel:${company.phoneLink}`}
                className="inline-flex items-center gap-2 bg-white text-gold hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>{company.phone}</span>
              </a>
            )}
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
