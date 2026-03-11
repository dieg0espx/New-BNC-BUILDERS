// BNC Builders - ADU Cost Calculator Landing Page
// Interactive calculator for instant ADU cost estimates

'use client';

import { useEffect, useState } from 'react';
import { LandingPageLayout } from '@/components/landing/LandingPageLayout';
import { ADUCalculator } from '@/components/landing/ADUCalculator';
import { useUserCity } from '@/lib/utils/geolocation';
import { company } from '@/lib/constants/company';
import { Phone, Star, CheckCircle, Award, Calculator } from 'lucide-react';

export default function ADUCalculatorPage() {
  const { city, isLoading } = useUserCity();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const displayCity = isLoading ? 'Escondido' : city;

  return (
    <LandingPageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zinc-50 to-white py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-3 md:px-4 py-2 rounded-full mb-4 text-sm md:text-base">
              <Calculator className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-semibold">Free Instant Estimate</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-dark leading-tight mb-4 md:mb-6 px-4">
              ADU Cost Calculator
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-zinc-700 max-w-3xl mx-auto mb-6 px-4">
              Get an instant ballpark estimate for your accessory dwelling unit project in {displayCity}
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 lg:gap-6 text-xs md:text-sm lg:text-base text-zinc-700 mb-6 md:mb-8 px-4">
              <div className="flex items-center gap-1.5 md:gap-2">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-gold flex-shrink-0" />
                <span className="font-semibold whitespace-nowrap">Licensed & Insured</span>
              </div>
              <span className="text-zinc-400 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 md:gap-2">
                <Star className="w-4 h-4 md:w-5 md:h-5 text-gold fill-gold flex-shrink-0" />
                <span className="font-semibold whitespace-nowrap">5.0 Google Rating</span>
              </div>
              <span className="text-zinc-400 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 md:gap-2">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-gold flex-shrink-0" />
                <span className="font-semibold whitespace-nowrap">900+ Projects</span>
              </div>
            </div>
          </div>

          {/* Calculator Component */}
          <div className="max-w-4xl mx-auto">
            <ADUCalculator city={displayCity} />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-10 md:py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark text-center mb-8 md:mb-12">
            How Our ADU Calculator Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                step: '1',
                title: 'Answer Questions',
                description:
                  'Tell us about your ADU preferences: size, bedrooms, bathrooms, lot conditions, and finish level.',
              },
              {
                step: '2',
                title: 'Get Instant Estimate',
                description:
                  'Our calculator provides a ballpark cost estimate based on typical ADU construction costs per square foot.',
              },
              {
                step: '3',
                title: 'Schedule Consultation',
                description:
                  'We&apos;ll contact you to discuss your project, conduct a site visit, and provide a detailed accurate estimate.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gold text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-3 md:mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-dark mb-2 md:mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-zinc-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="py-10 md:py-16 lg:py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark text-center mb-8 md:mb-12">
            What Affects ADU Construction Costs?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: 'Size & Layout',
                description: 'Square footage and number of bedrooms/bathrooms directly impact material and labor costs.',
              },
              {
                title: 'Finish Level',
                description: 'Basic, mid-range, or high-end finishes significantly affect the cost per square foot.',
              },
              {
                title: 'Site Conditions',
                description: 'Lot slope, soil conditions, and access can add complexity and cost to the project.',
              },
              {
                title: 'Permit Requirements',
                description: 'Local building codes, zoning regulations, and permit fees vary by jurisdiction.',
              },
              {
                title: 'Utilities & Connections',
                description: 'Running water, sewer, electrical, and gas lines to the ADU adds to project costs.',
              },
              {
                title: 'Design Complexity',
                description: 'Custom architectural features, unique layouts, and special requirements increase costs.',
              },
            ].map((factor, index) => (
              <div key={index} className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
                <h3 className="text-base md:text-lg font-bold text-dark mb-2">{factor.title}</h3>
                <p className="text-zinc-700 text-xs md:text-sm">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose BNC */}
      <section className="py-10 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark text-center mb-8 md:mb-12">
            Why Choose BNC Builders for Your ADU
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: Award,
                title: 'Expert Guidance',
                description: 'Navigate permits, zoning, and design with our experienced team.',
              },
              {
                icon: CheckCircle,
                title: 'Quality Construction',
                description: 'High-quality craftsmanship built to last with attention to detail.',
              },
              {
                icon: Star,
                title: 'Proven Track Record',
                description: '900+ completed projects with consistently satisfied clients.',
              },
              {
                icon: Phone,
                title: 'Transparent Process',
                description: 'Clear communication and honest pricing throughout your project.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-gold mx-auto mb-3 md:mb-4" />
                <h3 className="text-base md:text-lg font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-zinc-700 text-xs md:text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 md:py-16 lg:py-20 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark text-center mb-8 md:mb-12">
            ADU Cost Calculator FAQs
          </h2>
          <div className="space-y-4 md:space-y-6">
            {[
              {
                question: 'How accurate is this ADU cost estimate?',
                answer:
                  'This calculator provides a rough ballpark estimate based on typical construction costs. Actual costs can vary significantly based on site conditions, design complexity, material selections, and local requirements. We recommend scheduling a site visit for an accurate detailed estimate.',
              },
              {
                question: 'What does the cost per square foot include?',
                answer:
                  'The rates ($300-$350/sq ft) include typical construction costs for materials, labor, and standard finishes. They do not include design fees, permit costs, utility connections, site work, or premium upgrades.',
              },
              {
                question: 'How long does it take to build an ADU?',
                answer:
                  'ADU construction typically takes 6-12 months from design through final inspection, depending on size, complexity, permit approval timelines, and site conditions.',
              },
              {
                question: 'Do you handle permits and approvals?',
                answer:
                  'Yes! We manage the entire permitting process including architectural plans, zoning approvals, building permits, and all required inspections.',
              },
              {
                question: 'Can I use this ADU as a rental property?',
                answer:
                  'Yes, ADUs can be rented out to generate income. We can discuss design considerations and local regulations for rental ADUs during your consultation.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
                <h3 className="text-base md:text-lg font-bold text-dark mb-2 md:mb-3">{faq.question}</h3>
                <p className="text-sm md:text-base text-zinc-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 md:py-16 lg:py-20 bg-gradient-to-br from-gold to-gold-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Ready to Build Your ADU in {displayCity}?
          </h2>
          <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-dark">
            Get your instant cost estimate above, or call us now to discuss your ADU project with our experts.
          </p>
          <a
            href={`tel:${company.phoneLink}`}
            className="inline-flex items-center gap-2 bg-white text-gold hover:bg-zinc-50 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold uppercase tracking-wide transition-all text-sm md:text-base lg:text-lg"
          >
            <Phone className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">Call {company.phone}</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-zinc-200 p-3 z-40 shadow-lg md:hidden">
          <a
            href={`tel:${company.phoneLink}`}
            className="bg-gold hover:bg-[#B88A32] text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wide transition-all w-full flex items-center justify-center gap-2 text-sm"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      )}
    </LandingPageLayout>
  );
}
