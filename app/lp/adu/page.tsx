// BNC Builders - ADU Construction Landing Page
// Conversion-optimized paid search landing page for ADU projects

'use client';

import { useRef, useEffect, useState } from 'react';
import { LandingPageLayout } from '@/components/landing/LandingPageLayout';
import { LandingPageForm } from '@/components/landing/LandingPageForm';
import { useUserCity } from '@/lib/utils/geolocation';
import { company } from '@/lib/constants/company';
import { Phone, Star, CheckCircle, Award, TrendingUp, Home } from 'lucide-react';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { AnimatedSection, AnimatedItem } from '@/components/ui/AnimatedSection';
import { useInView } from '@/lib/hooks/useInView';
import { portfolioImages } from '@/lib/constants/images';

export default function ADULandingPage() {
  const { city, isLoading } = useUserCity();
  const fullFormRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [processRef, processInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const scrollToForm = () => {
    fullFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const displayCity = isLoading ? 'Escondido' : city;

  const processSteps = [
    {
      step: '1',
      title: 'Feasibility & Consultation',
      description:
        'We assess your property, discuss your goals, and determine the best ADU approach for your needs.',
    },
    {
      step: '2',
      title: 'Design & Permitting',
      description:
        'Our team handles architectural design and navigates the permitting process with local authorities.',
    },
    {
      step: '3',
      title: 'Construction & Final Approval',
      description:
        'We build your ADU with expert craftsmanship and secure final inspection approval.',
    },
  ];

  const whyChooseFeatures = [
    {
      icon: Award,
      title: 'Permitting Expertise',
      description:
        'We navigate complex zoning regulations and secure all necessary permits efficiently.',
    },
    {
      icon: Home,
      title: 'Quality Construction',
      description:
        'Our experienced team delivers high-quality ADUs built to last with attention to detail.',
    },
    {
      icon: CheckCircle,
      title: 'Transparent Process',
      description:
        'Clear communication, detailed timelines, and honest pricing throughout your project.',
    },
    {
      icon: TrendingUp,
      title: 'Investment Value',
      description:
        'We help maximize your property value and rental income potential with smart design.',
    },
    {
      icon: Star,
      title: 'Proven Track Record',
      description:
        '900+ completed projects across North County with consistently satisfied clients.',
    },
    {
      icon: Phone,
      title: 'Dedicated Support',
      description:
        'Personal project management from initial consultation through final walkthrough.',
    },
  ];

  const testimonials = [
    {
      name: 'David K.',
      city: 'Encinitas',
      review:
        'BNC Builders handled every aspect of our ADU project professionally. The permitting process was seamless, and the final result exceeded our expectations.',
    },
    {
      name: 'Lisa T.',
      city: 'Carlsbad',
      review:
        'We now have a beautiful rental unit that generates income. The team was transparent with costs and timelines throughout the entire project.',
    },
    {
      name: 'Robert P.',
      city: 'Vista',
      review:
        'From design to construction, BNC Builders delivered quality work. Our ADU is perfect for when family visits and will be great rental income later.',
    },
  ];

  const serviceAreas = [
    'Escondido', 'Carlsbad', 'Poway', 'San Marcos',
    'Vista', 'Rancho Bernardo', 'Encinitas', 'Oceanside',
  ];

  return (
    <LandingPageLayout>
      {/* Hero Section - Full-Bleed Photography */}
      <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[85vh] flex items-center overflow-hidden">
        {/* BG image with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <CloudinaryImage
            publicId={portfolioImages.aduGraniteRd}
            alt="BNC Builders ADU Construction"
            fill
            priority
            className="object-cover animate-[scaleIn_1.5s_ease-out]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 via-zinc-900/70 to-zinc-900/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Content */}
            <div className="order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
                Build a High-Quality ADU in {displayCity} With an Experienced Construction Team
              </h1>
              <p className="text-lg md:text-xl text-zinc-300 mb-6 leading-relaxed animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
                From permits to final inspection, BNC Builders delivers expertly crafted accessory
                dwelling units across North County San Diego.
              </p>

              {/* Trust Line */}
              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm md:text-base text-zinc-300 mb-8 animate-[fadeInUp_0.6s_ease-out_0.6s_both]">
                <div className="flex items-center gap-2 animate-[fadeIn_0.5s_ease-out_1s_both]">
                  <Award className="w-5 h-5 text-gold" />
                  <span className="font-semibold text-white">Licensed & Insured</span>
                </div>
                <span className="text-zinc-500">&bull;</span>
                <div className="flex items-center gap-2 animate-[fadeIn_0.5s_ease-out_1.2s_both]">
                  <Home className="w-5 h-5 text-gold" />
                  <span className="font-semibold text-white">900+ Projects</span>
                </div>
                <span className="text-zinc-500">&bull;</span>
                <div className="flex items-center gap-2 animate-[fadeIn_0.5s_ease-out_1.4s_both]">
                  <CheckCircle className="w-5 h-5 text-gold" />
                  <span className="font-semibold text-white">ADU & Permit Experience</span>
                </div>
              </div>

              {/* CTAs - Desktop */}
              <div className="hidden md:flex gap-4 animate-[fadeInUp_0.6s_ease-out_0.8s_both]">
                <button
                  onClick={scrollToForm}
                  className="btn-animated hover-lift bg-gold hover:bg-[#B88A32] text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all text-lg"
                >
                  Get My ADU Estimate
                </button>
                <a
                  href={`tel:${company.phoneLink}`}
                  className="btn-animated hover-lift border-2 border-white text-white hover:bg-white hover:text-zinc-900 px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all text-lg flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call {company.phone}
                </a>
              </div>

              {/* CTAs - Mobile */}
              <div className="flex md:hidden flex-col gap-3 animate-[fadeInUp_0.6s_ease-out_0.8s_both]">
                <a
                  href={`tel:${company.phoneLink}`}
                  className="btn-animated bg-gold hover:bg-[#B88A32] text-white px-6 py-4 rounded-lg font-bold uppercase tracking-wide transition-all text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <button
                  onClick={scrollToForm}
                  className="btn-animated border-2 border-white text-white hover:bg-white hover:text-zinc-900 px-6 py-4 rounded-lg font-bold uppercase tracking-wide transition-all text-center"
                >
                  Start ADU Estimate
                </button>
              </div>
            </div>

            {/* Right Side - Form Card with Glow */}
            <div className="order-2 relative animate-[fadeInRight_0.8s_ease-out_0.5s_both]">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-gold-light/20 rounded-3xl blur-xl" />
              <div className="relative">
                <LandingPageForm variant="short" formType="adu" city={displayCity} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Banner */}
      <section className="bg-gold py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 md:w-6 md:h-6 text-white fill-white"
                      style={{ animation: `fadeInUp 0.4s ease-out ${i * 100}ms both` }}
                    />
                  ))}
                </div>
                <span className="text-white font-bold text-lg md:text-xl">5.0 Google Rating</span>
              </div>
              <div className="text-white">
                <p className="text-base md:text-lg italic">
                  &quot;BNC handled our ADU project from permits to completion without stress.&quot;
                </p>
                <p className="text-sm md:text-base mt-1">&mdash; Client in {displayCity}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ADU Authority Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-left">
              <div className="relative">
                {/* Decorative offset border (lg only) */}
                <div className="hidden lg:block absolute -z-10 -top-4 -left-4 w-full h-full border-2 border-gold/30 rounded-xl" />
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                  <CloudinaryImage
                    publicId="v1767037552/BNC-BUILDERS/photo-gallery_granite-rd-san-marcos-adu_ADU-1235-GRANITE-RD.jpg"
                    alt="ADU Construction by BNC Builders"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Pulsing accent box */}
                <div className="hidden lg:flex absolute -bottom-4 -right-4 bg-gold text-white rounded-xl px-5 py-3 shadow-lg animate-pulse-gold items-center gap-2">
                  <span className="text-lg font-bold">ADU Experts</span>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-right">
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">Why BNC Builders</p>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                ADU Construction Done Right
              </h2>
              <p className="text-lg text-zinc-700 mb-8 leading-relaxed">
                Accessory dwelling units require detailed planning, permitting expertise, and quality
                construction. Our team guides you through design, approvals, and build execution with
                clarity and professionalism.
              </p>
              <ul className="space-y-4">
                {[
                  'Permit & Zoning Experience',
                  'Detached & Attached ADUs',
                  'Rental Income Opportunities',
                  'Full-Service Construction',
                  'Transparent Timelines',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Investment Framing Section */}
      <section className="py-12 md:py-20 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="scale-in">
            <div className="bg-gold/10 rounded-full p-4 w-fit mx-auto mb-6 animate-float">
              <TrendingUp className="w-16 h-16 text-gold" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Turn Your Property Into Income Potential
            </h2>
            <p className="text-xl text-zinc-700 leading-relaxed max-w-3xl mx-auto">
              An ADU can increase property value and generate rental income while providing flexible
              living space for family. Our experienced team ensures your investment is built to the
              highest standards.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Section - Premium Redesign */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider text-center mb-3">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">
              Our ADU Construction Process
            </h2>
          </AnimatedSection>

          {/* Desktop Process */}
          <div ref={processRef} className="hidden md:block relative">
            {/* Animated connecting golden line */}
            <div className="absolute top-10 left-0 right-0 h-1 bg-zinc-200 rounded-full">
              <div
                className="h-full bg-gradient-to-r from-gold/20 via-gold to-gold/20 rounded-full transition-transform duration-1000 ease-out origin-left"
                style={{ transform: processInView ? 'scaleX(1)' : 'scaleX(0)' }}
              />
            </div>
            <div className="grid md:grid-cols-3 gap-8 relative">
              {processSteps.map((item, index) => (
                <div
                  key={item.step}
                  className={`text-center card-animate ${processInView ? 'in-view' : ''}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="relative mx-auto mb-6 w-20 h-20">
                    <div className="w-20 h-20 bg-gold rounded-2xl rotate-3 hover:rotate-0 hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-xl">
                      <span className="text-white text-2xl font-bold -rotate-3">{item.step}</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover-lift hover:border-gold/30 border border-transparent transition-all">
                    <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                    <p className="text-zinc-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Process - Vertical Timeline */}
          <div className="md:hidden space-y-8">
            {processSteps.map((item, index) => (
              <AnimatedItem key={item.step} index={index} baseDelay={150}>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-md flex-shrink-0">
                      {item.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gold/30 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                    <p className="text-zinc-700">{item.description}</p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose - ADU Focused */}
      <section className="py-12 md:py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider text-center mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">
              Why Choose BNC Builders for Your ADU Project
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((item, index) => (
              <AnimatedItem key={index} index={index}>
                <div className="bg-white rounded-xl p-6 shadow-md hover-lift hover-glow transition-all h-full">
                  <div className="bg-gold/10 rounded-full p-3 w-fit mb-4">
                    <item.icon className="w-10 h-10 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                  <p className="text-zinc-700">{item.description}</p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* ADU Portfolio Examples */}
      <section className="py-12 md:py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider text-center mb-3">Our Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">
              Recent ADU Projects
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { image: 'v1767037552/BNC-BUILDERS/photo-gallery_granite-rd-san-marcos-adu_ADU-1235-GRANITE-RD.jpg', alt: 'ADU Project - Granite Road, San Marcos', label: 'Granite Rd, San Marcos' },
              { image: 'v1767037549/BNC-BUILDERS/photo-gallery_our-latest-masterpieces_ADU-EZZE-ST.jpg', alt: 'ADU Project - Ezze Street', label: 'Ezze Street ADU' },
            ].map((project, index) => (
              <AnimatedItem key={index} index={index}>
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg group hover-lift image-reveal">
                  <CloudinaryImage
                    publicId={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-bold text-lg">{project.label}</p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider text-center mb-3">Client Reviews</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">
              What ADU Clients Are Saying
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedItem key={index} index={index}>
                <div className="bg-white shadow-md border-t-4 border-t-gold rounded-xl p-6 hover-lift h-full flex flex-col">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-zinc-700 mb-4 italic flex-grow">&quot;{testimonial.review}&quot;</p>
                  <p className="font-semibold text-dark">
                    &mdash; {testimonial.name}, {testimonial.city}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Conversion Section - Full Form */}
      <section className="py-12 md:py-20 bg-zinc-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider text-center mb-3">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-8">
              Request Your Free Estimate
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="scale-in">
            <div className="relative">
              <div className="hidden md:block absolute -inset-2 bg-gradient-to-r from-gold/10 to-gold-light/10 rounded-3xl blur-xl" />
              <div className="relative">
                <LandingPageForm variant="full" formType="adu" city={displayCity} ref={fullFormRef} />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-in-up">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">Service Area</p>
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">
              Building ADUs Throughout North County San Diego
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-in-up" staggerChildren>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="bg-zinc-50 border border-zinc-300 rounded-lg px-4 py-2 text-zinc-700 font-medium transition-all duration-300 hover:bg-gold/10 hover:border-gold hover:text-gold hover:scale-105 cursor-default"
                >
                  {area}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA - Dark with Gold Accents */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-zinc-900 to-zinc-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-in-up">
            <div className="w-16 h-1 bg-gold mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Build Your ADU in {displayCity}?
            </h2>
            <p className="text-xl mb-8 text-zinc-300">
              Schedule your free ADU consultation today. We&apos;ll discuss feasibility, design options, and next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToForm}
                className="btn-animated hover-lift animate-pulse-gold bg-gold hover:bg-[#B88A32] text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all text-lg"
              >
                Start ADU Consultation
              </button>
              <a
                href={`tel:${company.phoneLink}`}
                className="btn-animated hover-lift border-2 border-white text-white hover:bg-white hover:text-zinc-900 px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all text-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {company.phone}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-4 z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:hidden animate-[slideInUp_0.5s_ease-out]">
          <a
            href={`tel:${company.phoneLink}`}
            className="btn-animated bg-gold hover:bg-[#B88A32] text-white px-6 py-4 rounded-lg font-bold uppercase tracking-wide transition-all w-full flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Call Now - Free Estimate
          </a>
        </div>
      )}
    </LandingPageLayout>
  );
}
