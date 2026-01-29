// BNC Builders - Trust Badges Component

'use client';

import { Container, Section, AnimatedSection } from '@/components/ui';
import { accolades, keySellingPoints } from '@/lib/constants/company';
import { useInView } from '@/lib/hooks/useInView';

interface TrustBadgesProps {
  showBadges?: boolean;
  showSellingPoints?: boolean;
}

export function TrustBadges({
  showBadges = true,
  showSellingPoints = true,
}: TrustBadgesProps) {
  const [pointsRef, pointsInView] = useInView<HTMLDivElement>({ threshold: 0.3 });
  const [badgesRef, badgesInView] = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <Section background="white" padding="md">
      <Container>
        {showSellingPoints && (
          <div ref={pointsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 sm:mb-8">
            {keySellingPoints.map((point, index) => (
              <div
                key={point}
                className={`flex items-start gap-3 bg-zinc-50 rounded-xl p-4 hover:bg-gold/5 hover:shadow-md transition-all card-animate ${pointsInView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-gold/10 rounded-full p-2 flex-shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="font-medium text-sm text-zinc-700">{point}</span>
              </div>
            ))}
          </div>
        )}

        {showBadges && (
          <div ref={badgesRef} className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
            {accolades.map((accolade, index) => (
              <div
                key={accolade.name}
                className={`bg-zinc-100 text-zinc-700 text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 sm:py-3 rounded-lg hover:bg-gold/10 hover:text-gold hover:scale-105 transition-all card-animate ${badgesInView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {accolade.name}
              </div>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
