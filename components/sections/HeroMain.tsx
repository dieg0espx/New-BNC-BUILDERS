// BNC Builders - Main Hero Component (Home Page)

'use client';

import { useState, useEffect } from 'react';
import { Container, Button } from '@/components/ui';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { heroImages } from '@/lib/constants/images';
import { company } from '@/lib/constants/company';

const badges = [
  { number: '30+', label: 'Years Experience' },
  { number: '900+', label: 'Projects Completed' },
  { number: '100%', label: 'Satisfaction' },
  { number: '5★', label: 'Rated Service' },
];

export function HeroMain() {
  const [currentBadge, setCurrentBadge] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSpinning(true);
      setTimeout(() => {
        setCurrentBadge((prev) => (prev + 1) % badges.length);
        setIsSpinning(false);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[600px] min-h-[85dvh] sm:min-h-[90vh] pt-20 sm:pt-0 pb-12 sm:pb-0 flex items-center overflow-hidden">
      {/* Background Image with zoom animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 animate-[scaleIn_1.5s_ease-out]">
          <CloudinaryImage
            publicId={heroImages.mainStageBg}
            alt="Home remodeling background"
            fill
            priority
            className="object-cover object-center sm:object-right"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 via-zinc-900/70 to-zinc-900/40" />
      </div>

      {/* Content */}
      <Container className="relative z-10 py-6 sm:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white">
            <p className="text-gold-light font-semibold mb-2 text-sm sm:text-base animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
              Escondido&apos;s Most Trusted Home Remodeling Team
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6 leading-tight text-white animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
              Build Your Dream Home Without The Stress
            </h1>
            <p className="text-lg sm:text-xl text-zinc-300 mb-6 sm:mb-8 max-w-lg animate-[fadeInUp_0.6s_ease-out_0.6s_both]">
              BNC Builders is a full-service design-build contractor in San Diego County. From 3D design previews to permits to the final walk-through, we manage every detail of your kitchen, bathroom, ADU, or exterior renovation - so you get standout results without the stress.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8 mb-6 sm:mb-8 animate-[fadeInUp_0.6s_ease-out_0.8s_both]">
              <div className="group">
                <div className="text-3xl sm:text-4xl font-bold text-gold-light group-hover:scale-110 transition-transform">{company.projectsCompleted}</div>
                <div className="text-zinc-400 text-sm sm:text-base">Happy Homeowners</div>
              </div>
              <div className="group">
                <div className="text-3xl sm:text-4xl font-bold text-gold-light group-hover:scale-110 transition-transform">{company.experience}</div>
                <div className="text-zinc-400 text-sm sm:text-base">Years Building Trust</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 animate-[fadeInUp_0.6s_ease-out_1s_both]">
              <Button href="/contact-us" size="lg" className="btn-animated hover-lift !px-5 !py-2.5 !text-sm sm:!px-8 sm:!py-4 sm:!text-lg">
                Schedule Free Consultation
              </Button>
              <Button href="/portfolio" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-zinc-900 hover-lift !px-5 !py-2.5 !text-sm sm:!px-8 sm:!py-4 sm:!text-lg">
                Explore Our Projects
              </Button>
            </div>

          </div>

          {/* Hero Image on right with float animation */}
          <div className="hidden lg:block">
            <div className="relative animate-[fadeInRight_0.8s_ease-out_0.5s_both]">
              {/* Experience Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div
                  className="bg-white rounded-xl px-5 py-4 shadow-2xl border-l-4 border-gold transition-transform duration-500"
                  style={{ transform: isSpinning ? 'rotateY(720deg)' : 'rotateY(0deg)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-gold/10 rounded-full p-2">
                      <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-zinc-900 leading-none">{badges[currentBadge].number}</p>
                      <p className="text-sm font-medium text-gold uppercase tracking-wide">{badges[currentBadge].label}</p>
                    </div>
                  </div>
                </div>
              </div>
              <CloudinaryImage
                publicId={heroImages.mainStageImg}
                alt="Beautiful BNC Builders home remodeling project showcasing expert craftsmanship"
                width={480}
                height={350}
                className="rounded-lg shadow-2xl hover:shadow-gold/20 transition-shadow duration-500"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
