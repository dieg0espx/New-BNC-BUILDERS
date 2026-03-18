// BNC Builders - Carlsbad Location Page

import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section, AnimatedSection } from '@/components/ui';
import { bannerImages } from '@/lib/constants/images';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { BreadcrumbJsonLd, LocalBusinessJsonLd } from '@/components/seo/JsonLd';
import { CheckCircle, Home, Bath, ChefHat, Building, ArrowRight, Fence, UtensilsCrossed } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'Home Remodeling Carlsbad CA | BNC Builders',
  description: 'Professional home remodeling in Carlsbad, CA. Kitchen, bathroom, outdoor living & ADU construction. Coastal home expertise. Free estimates from BNC Builders.',
  path: '/areas/carlsbad',
  keywords: [
    'home remodeling carlsbad',
    'kitchen remodel carlsbad',
    'contractor carlsbad ca',
    'bathroom remodel carlsbad',
    'carlsbad home renovation',
    'remodeling contractor carlsbad',
  ],
});

const services = [
  { title: 'Kitchen Remodeling', href: '/kitchen-remodeling', icon: ChefHat, description: 'Coastal-inspired kitchen designs with light finishes, open layouts, and high-end appliances suited to Carlsbad living.' },
  { title: 'Bathroom Remodeling', href: '/bathroom-remodeling', icon: Bath, description: 'Resort-style bathroom renovations with natural stone, rainfall showers, and spa-quality finishes.' },
  { title: 'Home Remodeling', href: '/home-remodeling', icon: Home, description: 'Complete home transformations that enhance your Carlsbad property\'s value and coastal appeal.' },
  { title: 'ADU Construction', href: '/adus', icon: Building, description: 'Detached or attached ADUs perfect for Carlsbad\'s strong rental market and visiting family.' },
  { title: 'Outdoor Kitchens', href: '/outdoor-kitchens', icon: UtensilsCrossed, description: 'Built-in grills, bar areas, and alfresco dining spaces designed for Carlsbad\'s ocean-breeze evenings.' },
  { title: 'Hardscaping', href: '/hardscaping', icon: Fence, description: 'Drought-resistant patios, fire pits, and walkways that complement Carlsbad\'s coastal landscape.' },
];

const neighborhoods = [
  'Carlsbad Village', 'La Costa', 'Aviara', 'Calavera Hills',
  'Bressi Ranch', 'Carlsbad Ranch', 'Poinsettia', 'La Costa Valley',
  'Rancho Carlsbad', 'Terramar', 'Olde Carlsbad', 'The Crossings',
];

export default function CarlsbadPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Areas We Serve', url: '/areas-we-serve' },
        { name: 'Carlsbad', url: '/areas/carlsbad' },
      ]} />
      <LocalBusinessJsonLd />

      <HeroSubpage
        title="Home Remodeling in Carlsbad, CA"
        subtitle="From the charming bungalows of Carlsbad Village to the luxurious estates of Aviara, BNC Builders brings expert remodeling craftsmanship to one of North County's most desirable coastal communities."
        backgroundImage={bannerImages.faq}
      />

      {/* Why Carlsbad */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                Carlsbad Remodeling Experts
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">
                Remodeling That Reflects Carlsbad&apos;s Coastal Character
              </h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  Carlsbad is a city where the beach lifestyle meets suburban comfort. Whether you own a 1960s ranch home in Olde Carlsbad or a newer Mediterranean-style residence in La Costa, your home reflects a laid-back yet refined way of life. BNC Builders specializes in renovations that enhance that lifestyle, creating spaces that flow naturally from indoor comfort to outdoor relaxation.
                </p>
                <p>
                  Carlsbad homeowners have unique remodeling considerations. Salt air requires corrosion-resistant materials and finishes. The desire for natural light calls for thoughtful window placement and open floor plans. And the city&apos;s active lifestyle demands functional mudrooms, expanded garages, and outdoor entertaining areas. We factor all of this into every Carlsbad project we design and build.
                </p>
                <p>
                  Our Escondido headquarters is a short drive from any Carlsbad neighborhood, which means quick site visits, responsive communication, and efficient project timelines. We have completed numerous projects in La Costa, Aviara, Bressi Ranch, and throughout the city, earning the trust of Carlsbad families who value quality and reliability.
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-dark mb-6">Why Carlsbad Trusts BNC</h3>
              <div className="space-y-4">
                {[
                  'Extensive experience with coastal home materials',
                  'Knowledge of Carlsbad building codes and permits',
                  'Designs that maximize ocean breezes and natural light',
                  'Salt-air-resistant material selections',
                  'ADU expertise for Carlsbad\'s rental market',
                  'Transparent pricing and detailed project timelines',
                  '5-star rated with BBB A+ accreditation',
                  'Free in-home design consultations',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-12">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">
              Remodeling Services in Carlsbad
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From kitchen upgrades to complete home renovations, we deliver full-service remodeling tailored to Carlsbad&apos;s coastal homes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                    <Icon className="w-6 h-6 text-gold group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600 text-sm mb-3">{service.description}</p>
                  <span className="inline-flex items-center gap-1 text-gold text-sm font-semibold">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Neighborhoods */}
      <Section background="white">
        <Container>
          <div className="text-center mb-12">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              Local Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">
              Carlsbad Neighborhoods We Serve
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From the walkable streets of Carlsbad Village to the hilltop views of Calavera Hills, we bring expert craftsmanship to every corner of Carlsbad.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {neighborhoods.map((neighborhood) => (
              <div
                key={neighborhood}
                className="flex items-center gap-2 bg-zinc-50 rounded-lg px-4 py-3"
              >
                <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-zinc-700 font-medium">{neighborhood}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Insights */}
      <Section background="dark" padding="md">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: 'Coastal Material Selection',
                description: 'We choose finishes and fixtures that resist salt-air corrosion, keeping your Carlsbad renovation beautiful for decades.',
              },
              {
                title: 'Indoor-Outdoor Living',
                description: 'Carlsbad\'s mild climate demands seamless transitions between living rooms, patios, and outdoor kitchens.',
              },
              {
                title: 'Property Value Growth',
                description: 'Carlsbad real estate commands premium prices. Strategic remodeling delivers strong ROI in this competitive market.',
              },
            ].map((item, index) => (
              <div key={index} className="p-6">
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-zinc-800">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Back to Areas */}
      <Section background="white" padding="sm">
        <Container>
          <div className="text-center">
            <Link
              href="/areas-we-serve"
              className="inline-flex items-center gap-2 text-gold hover:underline font-semibold"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              View All Areas We Serve
            </Link>
          </div>
        </Container>
      </Section>

      <CTABanner
        title="Ready to Transform Your Carlsbad Home?"
        subtitle="Whether it is a kitchen renovation in La Costa or an ADU in Bressi Ranch, BNC Builders brings coastal expertise and proven craftsmanship to every Carlsbad project. Contact us for a free estimate."
        primaryAction={{ label: 'Get Your Free Estimate', href: '/contact-us' }}
      />
    </>
  );
}
