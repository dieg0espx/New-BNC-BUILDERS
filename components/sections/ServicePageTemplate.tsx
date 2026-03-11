// BNC Builders - Service Page Template Component

'use client';

import { HeroSubpage, ContentSection, FeatureList, ProcessSteps, FAQAccordion, CTABanner } from '@/components/sections';
import { Container, AnimatedSection } from '@/components/ui';
import { Service } from '@/lib/types';
import { Phone, Clock, Shield, CheckCircle } from 'lucide-react';

interface ServicePageTemplateProps {
  service: Service;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <HeroSubpage
        title={service.heroHeading}
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
                <span className="text-xs sm:text-sm">Call Us: <a href="tel:+17606586238" className="font-semibold hover:text-white">(760) 658-6238</a></span>
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
