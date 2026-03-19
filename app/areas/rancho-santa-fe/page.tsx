// BNC Builders - Rancho Santa Fe Location Page

import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section } from '@/components/ui';
import { bannerImages } from '@/lib/constants/images';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { BreadcrumbJsonLd, AreaServedJsonLd } from '@/components/seo/JsonLd';
import { CheckCircle, Home, Bath, ChefHat, Building, ArrowRight, Fence, UtensilsCrossed } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'Home Remodeling Rancho Santa Fe CA | BNC Builders',
  description: 'Luxury home remodeling in Rancho Santa Fe, CA. High-end kitchen, bathroom & whole-home renovations. Premium materials & craftsmanship. BNC Builders.',
  path: '/areas/rancho-santa-fe',
  keywords: [
    'home remodeling rancho santa fe',
    'luxury remodeling rancho santa fe',
    'contractor rancho santa fe',
    'kitchen remodel rancho santa fe',
    'bathroom remodel rancho santa fe',
    'rancho santa fe home renovation',
  ],
});

const services = [
  { title: 'Kitchen Remodeling', href: '/kitchen-remodeling', icon: ChefHat, description: 'Chef-caliber kitchens with imported stone countertops, custom cabinetry, and professional-grade appliances befitting Rancho Santa Fe estates.' },
  { title: 'Bathroom Remodeling', href: '/bathroom-remodeling', icon: Bath, description: 'Master bath sanctuaries featuring heated floors, freestanding soaking tubs, and hand-selected natural stone finishes.' },
  { title: 'Home Remodeling', href: '/home-remodeling', icon: Home, description: 'Whole-home transformations that preserve the architectural heritage of Rancho Santa Fe\'s Spanish Colonial and Mediterranean estates.' },
  { title: 'ADU Construction', href: '/adus', icon: Building, description: 'Elegant guest houses and estate cottages designed to complement Rancho Santa Fe\'s architectural standards and covenant requirements.' },
  { title: 'Outdoor Kitchens', href: '/outdoor-kitchens', icon: UtensilsCrossed, description: 'Resort-quality outdoor kitchens with built-in grills, pizza ovens, and bar areas designed for Rancho Santa Fe\'s legendary entertaining.' },
  { title: 'Hardscaping', href: '/hardscaping', icon: Fence, description: 'Handcrafted stone patios, courtyard fountains, and custom pool surrounds that elevate Rancho Santa Fe\'s outdoor living spaces.' },
];

const neighborhoods = [
  'The Ranch', 'Fairbanks Ranch', 'Cielo',
  'The Bridges', 'Del Rayo Estates', 'Rancho Diegueno',
  'La Flecha', 'Morgan Run', 'Via de Santa Fe',
];

export default function RanchoSantaFePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Areas We Serve', url: '/areas-we-serve' },
        { name: 'Rancho Santa Fe', url: '/areas/rancho-santa-fe' },
      ]} />
      <AreaServedJsonLd city="Rancho Santa Fe" pageUrl="/areas/rancho-santa-fe" />

      <HeroSubpage
        title="Home Remodeling in Rancho Santa Fe, CA"
        subtitle="From the historic estates of The Ranch to the gated luxury of Fairbanks Ranch, BNC Builders delivers premium remodeling craftsmanship worthy of San Diego's most prestigious community."
        backgroundImage={bannerImages.faq}
      />

      {/* Why Rancho Santa Fe */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                Rancho Santa Fe Remodeling Experts
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">
                Luxury Remodeling for Rancho Santa Fe&apos;s Finest Estates
              </h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  Rancho Santa Fe is one of the most exclusive communities in the United States, where ultra-luxury estates, Spanish Colonial architecture, and Mediterranean villas define the landscape. Whether you own a historic property within The Ranch covenant or a modern estate in Cielo, your home demands remodeling that matches its prestige. BNC Builders delivers the premium craftsmanship and attention to detail that Rancho Santa Fe homeowners expect.
                </p>
                <p>
                  Remodeling in Rancho Santa Fe requires a contractor who understands the unique demands of luxury properties. Covenant restrictions in The Ranch dictate specific architectural styles and material choices. Estates often feature imported stone, custom millwork, and artisan finishes that require skilled tradespeople. And the scale of these homes means careful project management to coordinate multi-phase renovations without disrupting your lifestyle.
                </p>
                <p>
                  Our Escondido headquarters places us minutes from Rancho Santa Fe, enabling responsive service and frequent site oversight. We have earned the trust of discerning Rancho Santa Fe homeowners through meticulous craftsmanship, transparent communication, and an unwavering commitment to excellence on every project.
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-dark mb-6">Why Rancho Santa Fe Trusts BNC</h3>
              <div className="space-y-4">
                {[
                  'Experience with high-end, luxury-grade materials',
                  'Knowledge of Rancho Santa Fe covenant requirements',
                  'Designs honoring Spanish Colonial and Mediterranean styles',
                  'Premium artisan finishes and custom millwork',
                  'Discreet, respectful project management on estates',
                  'Transparent pricing for complex, large-scale projects',
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
              Luxury Remodeling Services in Rancho Santa Fe
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From gourmet kitchen renovations to whole-home transformations, we deliver luxury remodeling tailored to Rancho Santa Fe&apos;s world-class estates.
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
              Rancho Santa Fe Communities We Serve
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From the historic covenant properties of The Ranch to the gated estates of Fairbanks Ranch, we bring luxury craftsmanship to every enclave of Rancho Santa Fe.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
                title: 'Architectural Preservation',
                description: 'We honor Rancho Santa Fe\'s Spanish Colonial and Mediterranean heritage, blending modern functionality with timeless architectural details.',
              },
              {
                title: 'Estate-Level Craftsmanship',
                description: 'From imported marble to hand-forged ironwork, we source and install premium materials that meet Rancho Santa Fe\'s exacting standards.',
              },
              {
                title: 'Exceptional Property Values',
                description: 'Rancho Santa Fe commands some of the highest home values in California. Strategic luxury remodeling protects and enhances your investment.',
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
        title="Ready to Transform Your Rancho Santa Fe Estate?"
        subtitle="Whether it is a gourmet kitchen renovation in The Ranch or a whole-home transformation in Fairbanks Ranch, BNC Builders brings luxury expertise and premium craftsmanship to every Rancho Santa Fe project. Contact us for a free estimate."
        primaryAction={{ label: 'Get Your Free Estimate', href: '/contact-us' }}
      />
    </>
  );
}
