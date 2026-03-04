// BNC Builders - Interior & Exterior Remodeling Landing Page
// Conversion-optimized paid search landing page

'use client';

import { useRef, useEffect, useState } from 'react';
import { Metadata } from 'next';
import { LandingPageLayout } from '@/components/landing/LandingPageLayout';
import { LandingPageForm } from '@/components/landing/LandingPageForm';
import { useUserCity } from '@/lib/utils/geolocation';
import { company } from '@/lib/constants/company';
import { Phone, Star, CheckCircle, Users, Shield, TrendingUp } from 'lucide-react';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';

export default function RemodelLandingPage() {
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
            <div className="order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight mb-6">
                Remodel Your Home With {displayCity}&apos;s Trusted Remodeling Contractor
              </h1>
              <p className="text-lg md:text-xl text-zinc-700 mb-6 leading-relaxed">
                Kitchen, bathroom, room additions, and exterior renovations backed by 30+ years of
                combined experience in North County San Diego.
              </p>

              {/* Trust Line */}
              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm md:text-base text-zinc-700 mb-8">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-gold" />
                  <span className="font-semibold">Licensed & Insured</span>
                </div>
                <span className="text-zinc-400">•</span>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gold" />
                  <span className="font-semibold">900+ Homes Transformed</span>
                </div>
                <span className="text-zinc-400">•</span>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <span className="font-semibold">5.0 Google Rating</span>
                </div>
              </div>

              {/* CTAs - Desktop */}
              <div className="hidden md:flex gap-4">
                <button
                  onClick={scrollToForm}
                  className="bg-gold hover:bg-[#B88A32] text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all text-lg"
                >
                  Get My Free Estimate
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
                  Start Free Estimate
                </button>
              </div>
            </div>

            {/* Right Side - Form Card */}
            <div className="order-2">
              <LandingPageForm variant="short" formType="remodel" city={displayCity} />
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
              <span className="text-white font-bold text-lg md:text-xl">5.0 Rating on Google</span>
            </div>
            <div className="text-white">
              <p className="text-base md:text-lg italic">
                &quot;Professional, reliable, and exceeded expectations.&quot;
              </p>
              <p className="text-sm md:text-base mt-1">— Homeowner in {displayCity}</p>
            </div>
          </div>
          <p className="text-center text-white font-semibold mt-4 text-sm md:text-base">
            900+ Completed Projects Across North County
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">
            Complete Remodeling Services in {displayCity}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Kitchen Remodeling', image: 'v1767035994/BNC-BUILDERS/images_kitchen-remodel.2505221027173.jpg' },
              { name: 'Bathroom Remodeling', image: 'v1767035986/BNC-BUILDERS/images_bathroom-remodel.2505221027170.jpg' },
              { name: 'Room Additions', image: 'v1767035987/BNC-BUILDERS/images_new-room-addition-remodel.2506130522333.jpg' },
              { name: 'Exterior Remodeling', image: 'v1767035992/BNC-BUILDERS/images_exterior-remodel.2506130600037.jpg' },
              { name: 'Outdoor Living', image: 'v1767035991/BNC-BUILDERS/images_outdoor-kitchen-exterior.2506130542203.jpg' },
              { name: 'Full Home Renovations', image: 'v1767035993/BNC-BUILDERS/images_home-remodel.2505221027177.jpg' },
            ].map((service) => (
              <div
                key={service.name}
                className="group bg-zinc-50 border border-zinc-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <CloudinaryImage
                    publicId={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <CheckCircle className="w-8 h-8 text-gold mb-3" />
                  <h3 className="text-xl font-bold text-dark">{service.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 md:py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-8">
                Why Homeowners in {displayCity} Choose BNC Builders
              </h2>
              <ul className="space-y-4">
                {[
                  'Licensed & Fully Insured',
                  'Dedicated Project Management',
                  'Transparent Pricing',
                  'Detailed Planning Before Construction',
                  'Flexible Financing Options',
                  'Proven Track Record',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <CloudinaryImage
                publicId="v1767037548/BNC-BUILDERS/photo-gallery_47th-street-san-diego_A7402402.2506130843199.jpg"
                alt="Kitchen Remodeling by BNC Builders"
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
            What Clients Across North County Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah M.',
                city: 'Carlsbad',
                review:
                  'BNC Builders transformed our outdated kitchen into a modern masterpiece. Their attention to detail and professionalism were outstanding.',
              },
              {
                name: 'Michael R.',
                city: 'Poway',
                review:
                  'From start to finish, the team was transparent with pricing and timelines. Our bathroom remodel exceeded our expectations.',
              },
              {
                name: 'Jennifer L.',
                city: 'Escondido',
                review:
                  'We added a room addition to our home and couldn&apos;t be happier. BNC Builders made the entire process stress-free.',
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

      {/* Portfolio Examples */}
      <section className="py-12 md:py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">
            Recent Remodeling Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg group">
              <CloudinaryImage
                publicId="v1767037548/BNC-BUILDERS/photo-gallery_47th-street-san-diego_A7402402.2506130843199.jpg"
                alt="Kitchen Remodel - 47th Street, San Diego"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-bold text-lg">Kitchen Remodel</p>
              </div>
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg group">
              <CloudinaryImage
                publicId="v1767037551/BNC-BUILDERS/photo-gallery_47-street-san-diego_A7402606.2506130858026.jpg"
                alt="Bathroom Remodel - 47th Street, San Diego"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-bold text-lg">Bathroom Remodel</p>
              </div>
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg group">
              <CloudinaryImage
                publicId="v1767037550/BNC-BUILDERS/photo-gallery_paxton-way-encinitas_PAXTON-WAY-OUTDOOKITCHEN.jpg"
                alt="Outdoor Kitchen - Paxton Way, Encinitas"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-bold text-lg">Outdoor Kitchen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">
            A Clear, Structured Remodeling Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Consultation',
                description:
                  'We meet with you to understand your vision, needs, and budget for your remodeling project.',
              },
              {
                step: '2',
                title: 'Design & Planning',
                description:
                  'Our team creates detailed plans and provides transparent pricing before any work begins.',
              },
              {
                step: '3',
                title: 'Construction & Final Walkthrough',
                description:
                  'We execute your project with expert craftsmanship and complete a thorough final inspection.',
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

      {/* Primary Conversion Section - Full Form */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <LandingPageForm variant="full" formType="remodel" city={displayCity} ref={fullFormRef} />
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-12 md:py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">
            Proudly Serving North County San Diego
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
                className="bg-white border border-zinc-300 rounded-lg px-4 py-2 text-zinc-700 font-medium"
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
            Ready to Upgrade Your Home in {displayCity}?
          </h2>
          <p className="text-xl mb-8 text-dark">
            Get your free consultation and estimate today. No high-pressure sales, just honest advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToForm}
              className="bg-gold hover:bg-[#B88A32] text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all text-lg"
            >
              Schedule Free Consultation
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
