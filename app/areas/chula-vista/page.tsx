// BNC Builders - Chula Vista Location Page

import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section, AnimatedSection } from '@/components/ui';
import { bannerImages } from '@/lib/constants/images';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { BreadcrumbJsonLd, LocalBusinessJsonLd } from '@/components/seo/JsonLd';
import { CheckCircle, Home, Bath, ChefHat, Building, ArrowRight, Fence, UtensilsCrossed } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'Home Remodeling Chula Vista CA | BNC Builders',
  description: 'Professional home remodeling in Chula Vista, CA. Kitchen, bathroom, ADU & exterior renovation. Serving South County San Diego. Free estimates from BNC Builders.',
  path: '/areas/chula-vista',
  keywords: [
    'remodeling chula vista',
    'contractor chula vista',
    'home remodeling chula vista',
    'kitchen remodel chula vista',
    'bathroom remodel chula vista',
    'chula vista home renovation',
  ],
});

const services = [
  { title: 'Kitchen Remodeling', href: '/kitchen-remodeling', icon: ChefHat, description: 'Spacious kitchen renovations designed for Chula Vista\'s multigenerational households, with layouts that bring families together.' },
  { title: 'Bathroom Remodeling', href: '/bathroom-remodeling', icon: Bath, description: 'Modern bathroom updates with accessible design options, quality tile work, and fixtures built to handle busy family schedules.' },
  { title: 'Home Remodeling', href: '/home-remodeling', icon: Home, description: 'Complete home transformations from Eastlake\'s newer builds to the established west side, tailored to each home\'s potential.' },
  { title: 'ADU Construction', href: '/adus', icon: Building, description: 'Multigenerational ADUs and rental units that serve Chula Vista\'s strong family ties and growing housing demand.' },
  { title: 'Outdoor Kitchens', href: '/outdoor-kitchens', icon: UtensilsCrossed, description: 'Outdoor gathering spaces with built-in grills and seating, designed for Chula Vista\'s culture of family entertaining.' },
  { title: 'Hardscaping', href: '/hardscaping', icon: Fence, description: 'Durable patios, decorative concrete, retaining walls, and low-maintenance yards suited to Chula Vista\'s warm, dry climate.' },
];

const neighborhoods = [
  'Eastlake', 'Otay Ranch', 'Rancho Del Rey', 'Bonita Long Canyon',
  'Terra Nova', 'Hilltop', 'Castle Park', 'Southwest Chula Vista',
  'Rolling Hills Ranch', 'Windingwalk', 'Millenia', 'Sunbow',
];

export default function ChulaVistaPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Areas We Serve', url: '/areas-we-serve' },
        { name: 'Chula Vista', url: '/areas/chula-vista' },
      ]} />
      <LocalBusinessJsonLd />

      <HeroSubpage
        title="Home Remodeling in Chula Vista, CA"
        subtitle="San Diego County's second-largest city deserves world-class remodeling. BNC Builders serves Chula Vista from Eastlake to the Bayfront, bringing expert craftsmanship to South County's most dynamic community."
        backgroundImage={bannerImages.faq}
      />

      {/* Why Chula Vista */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                South County Remodeling Experts
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">
                Remodeling for Chula Vista&apos;s Diverse Communities
              </h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  Chula Vista is one of the fastest-growing cities in California, and its housing landscape reflects that energy. The eastern neighborhoods of Eastlake, Otay Ranch, and Rolling Hills Ranch feature newer master-planned communities with contemporary architecture. The western side, including Hilltop, Castle Park, and Terra Nova, offers established mid-century homes with mature landscaping and larger lots. BNC Builders brings tailored remodeling expertise to both sides of the city.
                </p>
                <p>
                  Family is at the heart of Chula Vista&apos;s culture, and that influences remodeling priorities. Homeowners here often seek larger kitchens that accommodate extended family gatherings, additional bedrooms and bathrooms to support multigenerational living, and ADUs that keep loved ones close while maintaining independence. We design with these priorities in mind, creating spaces that strengthen family connections.
                </p>
                <p>
                  Chula Vista&apos;s warm climate and relatively affordable real estate also make it an excellent market for outdoor improvements and ADU construction. A well-designed outdoor kitchen extends your living space year-round, and an ADU can generate significant rental income given the area&apos;s strong housing demand. BNC Builders helps Chula Vista homeowners capitalize on these opportunities with quality construction and smart design.
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-dark mb-6">Why Chula Vista Trusts BNC</h3>
              <div className="space-y-4">
                {[
                  'Experience with both east and west Chula Vista homes',
                  'Multigenerational living design expertise',
                  'ADU construction for rental income potential',
                  'Familiar with Chula Vista permitting process',
                  'Family-centered kitchen and living space designs',
                  'Budget-conscious options without compromising quality',
                  'Bilingual project coordination available',
                  'Free in-home consultations throughout Chula Vista',
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
              Remodeling Services in Chula Vista
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Comprehensive remodeling services designed for Chula Vista&apos;s diverse neighborhoods and family-centered lifestyle.
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
              Chula Vista Neighborhoods We Serve
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From the master-planned communities of Eastlake and Otay Ranch to the established neighborhoods of west Chula Vista, we serve the entire city.
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
                title: 'Multigenerational Living',
                description: 'Chula Vista\'s strong family culture drives demand for ADUs, in-law suites, and expanded kitchens that bring generations together.',
              },
              {
                title: 'Growing Market Value',
                description: 'Chula Vista\'s Bayfront development and continued growth are driving property values up. Strategic remodeling positions your home for strong appreciation.',
              },
              {
                title: 'Year-Round Outdoor Living',
                description: 'With over 260 sunny days per year, outdoor kitchens and hardscaping in Chula Vista are not luxuries, they are lifestyle essentials.',
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
        title="Transform Your Chula Vista Home"
        subtitle="From Eastlake kitchen renovations to west-side ADU construction, BNC Builders brings quality craftsmanship and family-focused design to all of Chula Vista. Get your free estimate today."
        primaryAction={{ label: 'Get Your Free Estimate', href: '/contact-us' }}
      />
    </>
  );
}
