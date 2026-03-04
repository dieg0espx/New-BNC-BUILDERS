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

export default function ADULandingPage() {
  const { city, isLoading } = useUserCity();
  const fullFormRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const scrollToForm = () => {
    fullFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const displayCity = isLoading ? 'Escondido' : city;

  return (
    <LandingPageLayout>
      {/* Hero Section - Above the Fold */}
      <section className="bg-gradient-to-br from-zinc-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight mb-6">
                Build a High-Quality ADU in {displayCity} With an Experienced Construction Team
              </h1>
              <p className="text-lg md:text-xl text-zinc-700 mb-6 leading-relaxed">
                From permits to final inspection, BNC Builders delivers expertly crafted accessory
                dwelling units across North County San Diego.
              </p>

              {/* Trust Line */}
              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm md:text-base text-zinc-700 mb-8">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-gold" />
                  <span className="font-semibold">Licensed & Insured</span>
                </div>
                <span className="text-zinc-400">•</span>
                <div className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-gold" />
                  <span className="font-semibold">900+ Projects</span>
                </div>
                <span className="text-zinc-400">•</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-gold" />
                  <span className="font-semibold">ADU & Permit Experience</span>
                </div>
              </div>

              {/* CTAs - Desktop */}
              <div className="hidden md:flex gap-4">
                <button
                  onClick={scrollToForm}
                  className="bg-gold hover:bg-[#B88A32] text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all text-lg"
                >
                  Get My ADU Estimate
                </button>
                <a
                  href={`tel:${company.phone.replace(/[^0-9]/g, '')}`}
                  className="border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all text-lg flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call {company.phone}
                </a>
              </div>

              {/* CTAs - Mobile */}
              <div className="flex md:hidden flex-col gap-3">
                <a
                  href={`tel:${company.phone.replace(/[^0-9]/g, '')}`}
                  className="bg-gold hover:bg-[#B88A32] text-white px-6 py-4 rounded-lg font-bold uppercase tracking-wide transition-all text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <button
                  onClick={scrollToForm}
                  className="border-2 border-gold text-gold hover:bg-gold hover:text-white px-6 py-4 rounded-lg font-bold uppercase tracking-wide transition-all text-center"
                >
                  Start ADU Estimate
                </button>
              </div>
            </div>

            {/* Right Side - Form Card */}
            <div className="order-1 lg:order-2">
              <LandingPageForm variant="short" formType="adu" city={displayCity} />
            </div>
          </div>
        </div>
      </section>

      {/* Review Banner */}
      <section className="bg-gold py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-white fill-white" />
                ))}
              </div>
              <span className="text-white font-bold text-lg md:text-xl">5.0 Google Rating</span>
            </div>
            <div className="text-white">
              <p className="text-base md:text-lg italic">
                &quot;BNC handled our ADU project from permits to completion without stress.&quot;
              </p>
              <p className="text-sm md:text-base mt-1">— Client in {displayCity}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ADU Authority Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <CloudinaryImage
                publicId="v1767037552/BNC-BUILDERS/photo-gallery_granite-rd-san-marcos-adu_ADU-1235-GRANITE-RD.jpg"
                alt="ADU Construction by BNC Builders"
                fill
                className="object-cover"
              />
            </div>
            <div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Investment Framing Section */}
      <section className="py-12 md:py-20 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="w-16 h-16 text-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
            Turn Your Property Into Income Potential
          </h2>
          <p className="text-xl text-zinc-700 leading-relaxed max-w-3xl mx-auto">
            An ADU can increase property value and generate rental income while providing flexible
            living space for family. Our experienced team ensures your investment is built to the
            highest standards.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">
            Our ADU Construction Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gold text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-zinc-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose - ADU Focused */}
      <section className="py-12 md:py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">
            Why Choose BNC Builders for Your ADU Project
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <item.icon className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-zinc-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADU Portfolio Examples */}
      <section className="py-12 md:py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">
            Recent ADU Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <CloudinaryImage
                publicId="v1767037552/BNC-BUILDERS/photo-gallery_granite-rd-san-marcos-adu_ADU-1235-GRANITE-RD.jpg"
                alt="ADU Project - Granite Road, San Marcos"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <CloudinaryImage
                publicId="v1767037549/BNC-BUILDERS/photo-gallery_our-latest-masterpieces_ADU-EZZE-ST.jpg"
                alt="ADU Project - Ezze Street"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">
            What ADU Clients Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((testimonial, index) => (
              <div key={index} className="bg-zinc-50 border border-zinc-200 rounded-xl p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-zinc-700 mb-4 italic">&quot;{testimonial.review}&quot;</p>
                <p className="font-semibold text-dark">
                  — {testimonial.name}, {testimonial.city}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Conversion Section - Full Form */}
      <section className="py-12 md:py-20 bg-zinc-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <LandingPageForm variant="full" formType="adu" city={displayCity} ref={fullFormRef} />
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">
            Building ADUs Throughout North County San Diego
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              'Escondido',
              'Carlsbad',
              'Poway',
              'San Marcos',
              'Vista',
              'Rancho Bernardo',
              'Encinitas',
              'Oceanside',
            ].map((area) => (
              <span
                key={area}
                className="bg-zinc-50 border border-zinc-300 rounded-lg px-4 py-2 text-zinc-700 font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gold to-gold-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your ADU in {displayCity}?
          </h2>
          <p className="text-xl mb-8 text-dark">
            Schedule your free ADU consultation today. We&apos;ll discuss feasibility, design options, and next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToForm}
              className="bg-gold hover:bg-[#B88A32] text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all text-lg"
            >
              Start ADU Consultation
            </button>
            <a
              href={`tel:${company.phone.replace(/[^0-9]/g, '')}`}
              className="border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all text-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {company.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-zinc-200 p-4 z-40 shadow-lg md:hidden">
          <a
            href={`tel:${company.phone.replace(/[^0-9]/g, '')}`}
            className="bg-gold hover:bg-[#B88A32] text-white px-6 py-4 rounded-lg font-bold uppercase tracking-wide transition-all w-full flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      )}
    </LandingPageLayout>
  );
}
