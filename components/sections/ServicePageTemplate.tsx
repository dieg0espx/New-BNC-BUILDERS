// BNC Builders - Service Page Template Component

'use client';

import { HeroSubpage, ContentSection, FeatureList, ProcessSteps, FAQAccordion, CTABanner } from '@/components/sections';
import { Container, AnimatedSection, Section } from '@/components/ui';
import { ServiceJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { Service } from '@/lib/types';
import { services } from '@/lib/constants/services';
import { Phone, Clock, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { trackPhoneClick } from '@/lib/tracking';

interface ServicePageTemplateProps {
  service: Service;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <>
      {/* Structured Data */}
      <ServiceJsonLd
        name={service.shortTitle}
        description={service.description}
        url={`/${service.slug}`}
      />
      {service.faqs && service.faqs.length > 0 && (
        <FAQJsonLd faqs={service.faqs} />
      )}
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: service.shortTitle, url: `/${service.slug}` },
        ]}
      />

      {/* Hero */}
      <HeroSubpage
        title={service.heroHeading}
        geoTitle={`${service.shortTitle} in {city}, CA`}
        subtitle={service.description}
        backgroundImage={service.bannerImage}
      />

      {/* Quick Contact Bar */}
      <section className="bg-gold py-4 sm:py-6 overflow-hidden">
        <Container>
          <AnimatedSection animation="fade-in-up" duration={500}>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-zinc-800">
              <div className="flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-800 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Call Us: <a href="tel:+17606586238" onClick={trackPhoneClick} className="font-semibold hover:text-white">(760) 658-6238</a></span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-800 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Mon - Sat: 8am - 5pm</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-800 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-800 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Free Estimates</span>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Main Content */}
      <ContentSection
        content={service.heroContent}
        image={service.cardImage}
        imageAlt={service.shortTitle}
        imagePosition="right"
        showAccentBox
        accentText="30+ Years Experience"
      />

      {/* Features */}
      {service.features && service.features.length > 0 && (
        <FeatureList
          title={`Our ${service.shortTitle} Services`}
          subtitle={`Comprehensive solutions for your ${service.shortTitle.toLowerCase()} needs`}
          features={service.features}
          columns={2}
          background="gray"
        />
      )}

      {/* Process */}
      {service.process && service.process.length > 0 && (
        <ProcessSteps
          title="Our Process"
          subtitle={`How we approach your ${service.shortTitle.toLowerCase()} project`}
          steps={service.process}
          background="white"
        />
      )}

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <FAQAccordion
          title="Frequently Asked Questions"
          subtitle={`Common questions about ${service.shortTitle.toLowerCase()}`}
          faqs={service.faqs}
          background="gray"
        />
      )}

      {/* Related Services */}
      <RelatedServices currentService={service} />

      {/* Service Areas */}
      <Section background="gray" padding="md">
        <Container>
          <div className="text-center">
            <h2 className="text-xl font-bold text-dark mb-4">
              {service.shortTitle} Across San Diego County
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { name: 'Escondido', href: '/areas-we-serve' },
                { name: 'San Diego', href: '/areas/san-diego' },
                { name: 'Carlsbad', href: '/areas/carlsbad' },
                { name: 'La Jolla', href: '/areas/la-jolla' },
                { name: 'Poway', href: '/areas/poway' },
                { name: 'Oceanside', href: '/areas/oceanside' },
                { name: 'Encinitas', href: '/areas/encinitas' },
                { name: 'Vista', href: '/areas/vista' },
                { name: 'Chula Vista', href: '/areas/chula-vista' },
                { name: 'Rancho Santa Fe', href: '/areas/rancho-santa-fe' },
                { name: 'La Mesa', href: '/areas/la-mesa' },
                { name: 'El Cajon', href: '/areas/el-cajon' },
              ].map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="text-sm text-zinc-600 hover:text-gold transition-colors px-3 py-1 bg-white rounded-full border border-zinc-200 hover:border-gold/30"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTABanner
        title={`Ready for Your ${service.shortTitle} Project?`}
        subtitle="Contact us today for a free consultation and estimate. Let's bring your vision to life!"
        primaryAction={{ label: 'Get Free Estimate', href: '/contact-us' }}
        secondaryAction={{ label: 'View Portfolio', href: '/portfolio' }}
      />
    </>
  );
}

// Related services mapping for strong internal linking
const relatedServicesMap: Record<string, string[]> = {
  'kitchen-remodeling': ['bathroom-remodeling', 'home-remodeling', 'outdoor-kitchens'],
  'bathroom-remodeling': ['kitchen-remodeling', 'home-remodeling', 'adus'],
  'home-remodeling': ['kitchen-remodeling', 'bathroom-remodeling', 'new-room-additions'],
  'garage-remodeling': ['adus', 'home-remodeling', 'new-room-additions'],
  'new-room-additions': ['home-remodeling', 'adus', 'pre-construction'],
  'pre-construction': ['adus', 'new-room-additions', 'home-remodeling'],
  'adus': ['pre-construction', 'garage-remodeling', 'new-room-additions'],
  'exterior-remodeling': ['landscape-remodeling', 'hardscaping', 'outdoor-kitchens'],
  'deck-repair': ['exterior-remodeling', 'hardscaping', 'outdoor-kitchens'],
  'hardscaping': ['landscape-remodeling', 'outdoor-kitchens', 'deck-repair'],
  'outdoor-kitchens': ['hardscaping', 'exterior-remodeling', 'landscape-remodeling'],
  'landscape-remodeling': ['hardscaping', '3d-landscape-design', 'exterior-remodeling'],
  '3d-landscape-design': ['landscape-remodeling', 'exterior-remodeling', 'hardscaping'],
};

function RelatedServices({ currentService }: { currentService: Service }) {
  const relatedSlugs = relatedServicesMap[currentService.slug] || [];
  const relatedServices = relatedSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is Service => s !== undefined);

  if (relatedServices.length === 0) return null;

  return (
    <Section background="white" padding="lg">
      <Container>
        <AnimatedSection animation="fade-in-up" className="text-center mb-12">
          <span className="text-gold font-semibold uppercase tracking-wider text-sm">
            Explore More Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2">
            Related Services
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedServices.map((related, index) => (
            <AnimatedSection key={related.slug} animation="fade-in-up" delay={index * 100}>
              <Link
                href={`/${related.slug}`}
                className="group block bg-gray-50 rounded-xl p-6 hover:bg-gold/5 hover:shadow-lg transition-all h-full border border-transparent hover:border-gold/20"
              >
                <h3 className="text-lg font-bold text-dark group-hover:text-gold transition-colors mb-3">
                  {related.shortTitle}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  {related.description}
                </p>
                <span className="inline-flex items-center gap-1 text-gold text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
