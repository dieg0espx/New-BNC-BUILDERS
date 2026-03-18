// BNC Builders - Poway Location Page

import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section } from '@/components/ui';
import { bannerImages } from '@/lib/constants/images';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { BreadcrumbJsonLd, AreaServedJsonLd } from '@/components/seo/JsonLd';
import { CheckCircle, Home, Bath, ChefHat, Building, ArrowRight, Fence, UtensilsCrossed } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'Home Remodeling Poway CA | BNC Builders',
  description: 'Professional home remodeling in Poway, CA. Kitchen, bathroom, ADU & outdoor living projects. Serving Poway families with quality craftsmanship. Free estimates.',
  path: '/areas/poway',
  keywords: [
    'home remodeling poway',
    'kitchen remodel poway',
    'contractor poway ca',
    'bathroom remodel poway',
    'poway home renovation',
    'remodeling contractor poway',
  ],
});

const services = [
  { title: 'Kitchen Remodeling', href: '/kitchen-remodeling', icon: ChefHat, description: 'Family-sized kitchen renovations with spacious islands, modern cabinetry, and layouts perfect for Poway\'s active families.' },
  { title: 'Bathroom Remodeling', href: '/bathroom-remodeling', icon: Bath, description: 'Master suite upgrades and hall bathroom renovations with quality fixtures, custom tile, and efficient layouts.' },
  { title: 'Home Remodeling', href: '/home-remodeling', icon: Home, description: 'Whole-home updates that modernize Poway\'s ranch-style and custom homes while preserving their spacious character.' },
  { title: 'ADU Construction', href: '/adus', icon: Building, description: 'Accessory dwelling units that leverage Poway\'s larger lots for guest quarters, home offices, or rental income.' },
  { title: 'Outdoor Kitchens', href: '/outdoor-kitchens', icon: UtensilsCrossed, description: 'Outdoor entertaining areas built for Poway\'s warm evenings, from built-in grills to full outdoor dining setups.' },
  { title: 'Hardscaping', href: '/hardscaping', icon: Fence, description: 'Patios, fire pits, retaining walls, and landscape hardscaping that make the most of Poway\'s generous yards.' },
];

const neighborhoods = [
  'Poway Business Park Area', 'Heritage Hills', 'Old Poway',
  'South Poway', 'Garden Road Area', 'Midland Road Corridor',
  'Green Valley', 'Twin Peaks Area', 'Espola Road Estates', 'Stone Canyon',
  'High Valley', 'Tierra Bonita',
];

export default function PowayPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Areas We Serve', url: '/areas-we-serve' },
        { name: 'Poway', url: '/areas/poway' },
      ]} />
      <AreaServedJsonLd city="Poway" pageUrl="/areas/poway" />

      <HeroSubpage
        title="Home Remodeling in Poway, CA"
        subtitle="Known as 'The City in the Country,' Poway offers spacious homes, large lots, and a family-oriented community. BNC Builders helps Poway homeowners make the most of their properties with expert remodeling."
        backgroundImage={bannerImages.faq}
      />

      {/* Why Poway */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                Poway Remodeling Specialists
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">
                Remodeling Built for Poway&apos;s Family Lifestyle
              </h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  Poway stands apart from other San Diego communities with its rural charm, excellent schools, and generously sized properties. Homes here tend to sit on larger lots with substantial yards, mature trees, and the kind of space that families dream about. BNC Builders understands what makes Poway special and designs renovations that enhance these qualities.
                </p>
                <p>
                  Many Poway homes were built in the 1980s and 1990s, which means they have great bones but may feature dated kitchens, closed-off floor plans, and bathrooms that no longer meet modern expectations. Our team excels at opening up these spaces, bringing in natural light, updating finishes, and creating the functional, beautiful interiors that today&apos;s Poway families need.
                </p>
                <p>
                  With our headquarters in neighboring Escondido, we are practically next door. This proximity means faster response times, easy site visits, and a deep understanding of the local building environment. We know Poway&apos;s permitting process, its soil conditions for outdoor projects, and the architectural styles that define each neighborhood.
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-dark mb-6">The BNC Poway Advantage</h3>
              <div className="space-y-4">
                {[
                  'Neighboring Escondido headquarters for fast response',
                  'Experience with Poway\'s ranch and custom home styles',
                  'ADU designs maximizing Poway\'s larger lot sizes',
                  'Outdoor living spaces for warm inland evenings',
                  'Family-focused kitchen and bathroom designs',
                  'Local knowledge of Poway permits and regulations',
                  'Transparent pricing with no hidden costs',
                  'Free in-home consultations for Poway homeowners',
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
              Remodeling Services in Poway
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From kitchen renovations to ADU construction, we bring full-service remodeling expertise to Poway&apos;s family-oriented community.
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
              Poway Neighborhoods We Serve
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From the equestrian properties of Green Valley to the established homes near Old Poway, we serve every corner of this beloved community.
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
                title: 'Large Lot Potential',
                description: 'Poway\'s generous lot sizes create ideal conditions for ADUs, outdoor kitchens, and expansive hardscaping projects.',
              },
              {
                title: 'Family-First Design',
                description: 'Open kitchens, functional mudrooms, and flex spaces designed for Poway\'s active, family-oriented lifestyle.',
              },
              {
                title: 'Warm Climate Living',
                description: 'Poway\'s inland warmth makes outdoor living spaces a year-round asset. We design patios and kitchens built for daily use.',
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
        title="Ready to Upgrade Your Poway Home?"
        subtitle="From kitchen transformations to ADUs that maximize your lot, BNC Builders is your neighbor in the remodeling business. Contact us for a free consultation at your Poway home."
        primaryAction={{ label: 'Get Your Free Estimate', href: '/contact-us' }}
      />
    </>
  );
}
