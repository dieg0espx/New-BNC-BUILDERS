// BNC Builders - La Jolla Location Page

import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section, AnimatedSection } from '@/components/ui';
import { bannerImages } from '@/lib/constants/images';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { BreadcrumbJsonLd, LocalBusinessJsonLd } from '@/components/seo/JsonLd';
import { CheckCircle, Home, Bath, ChefHat, Building, ArrowRight, Fence, UtensilsCrossed } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'Home Remodeling La Jolla | Luxury Renovation',
  description: 'Luxury home remodeling in La Jolla, CA. High-end kitchen, bathroom & whole-home renovations. Coastal expertise & premium craftsmanship. BNC Builders.',
  path: '/areas/la-jolla',
  keywords: [
    'home remodeling la jolla',
    'kitchen remodel la jolla',
    'luxury remodeling la jolla',
    'bathroom remodel la jolla',
    'la jolla home renovation',
    'contractor la jolla ca',
  ],
});

const services = [
  { title: 'Kitchen Remodeling', href: '/kitchen-remodeling', icon: ChefHat, description: 'High-end kitchen renovations featuring imported stone countertops, custom cabinetry, and professional-grade appliances for discerning La Jolla homeowners.' },
  { title: 'Bathroom Remodeling', href: '/bathroom-remodeling', icon: Bath, description: 'Luxury bathroom suites with heated floors, frameless glass enclosures, and designer fixtures that rival five-star resorts.' },
  { title: 'Home Remodeling', href: '/home-remodeling', icon: Home, description: 'Comprehensive whole-home renovations that elevate La Jolla properties to match the prestige of the neighborhood.' },
  { title: 'ADU Construction', href: '/adus', icon: Building, description: 'Premium guest houses and ADUs designed to complement La Jolla\'s architectural standards and maximize property value.' },
  { title: 'Outdoor Kitchens', href: '/outdoor-kitchens', icon: UtensilsCrossed, description: 'Sophisticated outdoor entertaining spaces with ocean-view layouts, built-in grills, and bar seating.' },
  { title: 'Hardscaping', href: '/hardscaping', icon: Fence, description: 'Natural stone patios, custom water features, and luxury outdoor living areas worthy of La Jolla\'s finest homes.' },
];

const neighborhoods = [
  'La Jolla Shores', 'Bird Rock', 'Windansea', 'La Jolla Village',
  'The Muirlands', 'La Jolla Heights', 'La Jolla Mesa', 'Upper Hermosa',
  'Lower Hermosa', 'Country Club', 'La Jolla Farms', 'Hidden Valley',
];

export default function LaJollaPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Areas We Serve', url: '/areas-we-serve' },
        { name: 'La Jolla', url: '/areas/la-jolla' },
      ]} />
      <LocalBusinessJsonLd />

      <HeroSubpage
        title="Luxury Home Remodeling in La Jolla, CA"
        subtitle="Where the Pacific meets world-class living, BNC Builders delivers renovation excellence. Premium materials, meticulous craftsmanship, and designs that honor La Jolla's architectural heritage."
        backgroundImage={bannerImages.faq}
      />

      {/* Why La Jolla */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                La Jolla&apos;s Premier Remodeler
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">
                Remodeling Worthy of La Jolla&apos;s Prestige
              </h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  La Jolla is synonymous with elegance. Its clifftop estates, mid-century modern gems, and Mediterranean villas demand a remodeling partner who understands luxury at every level. BNC Builders brings over 30 years of combined experience to La Jolla, delivering renovations that meet the exacting standards this community expects.
                </p>
                <p>
                  From the oceanfront properties along La Jolla Shores to the stately homes in The Muirlands and the charming cottages of Bird Rock, we approach each project with an understanding of La Jolla&apos;s distinct architectural vocabulary. Our designs complement existing character while introducing modern amenities, premium materials, and thoughtful layouts that maximize ocean views and natural light.
                </p>
                <p>
                  La Jolla properties represent significant investments, and renovation decisions carry substantial financial weight. Our transparent pricing, detailed project plans, and commitment to superior materials ensure that every dollar spent enhances both your daily living experience and your property&apos;s long-term value. We work with the finest suppliers and craftspeople to deliver results that stand apart.
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-dark mb-6">The BNC Luxury Standard</h3>
              <div className="space-y-4">
                {[
                  'Premium material sourcing from top-tier suppliers',
                  'Architecturally sensitive design approach',
                  'Experience with La Jolla\'s coastal building codes',
                  'View-maximizing layout design',
                  'Salt-air and marine-grade material expertise',
                  'Dedicated project management from start to finish',
                  'Detailed 3D renderings before construction begins',
                  'Comprehensive warranty on all workmanship',
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
              Luxury Remodeling Services in La Jolla
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Every service we offer in La Jolla is executed at the highest level, with premium materials and meticulous attention to detail.
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
              La Jolla Neighborhoods We Serve
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From the surf breaks of Windansea to the exclusive enclave of La Jolla Farms, we bring premium craftsmanship to every La Jolla neighborhood.
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
                title: 'Architectural Sensitivity',
                description: 'La Jolla\'s design review board sets high standards. We create renovations that honor the community\'s architectural heritage while adding modern sophistication.',
              },
              {
                title: 'Ocean View Optimization',
                description: 'Strategic layouts, expansive windows, and open floor plans that frame La Jolla\'s world-famous coastline as a living work of art.',
              },
              {
                title: 'Investment Protection',
                description: 'With La Jolla home values among the highest in San Diego, our premium renovations deliver strong returns and lasting appeal.',
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
        title="Elevate Your La Jolla Home"
        subtitle="From Bird Rock kitchens to Muirlands master suites, BNC Builders delivers the luxury craftsmanship La Jolla homeowners expect. Schedule your complimentary design consultation today."
        primaryAction={{ label: 'Schedule a Consultation', href: '/contact-us' }}
      />
    </>
  );
}
