// BNC Builders - El Cajon Location Page

import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section } from '@/components/ui';
import { bannerImages } from '@/lib/constants/images';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { BreadcrumbJsonLd, AreaServedJsonLd } from '@/components/seo/JsonLd';
import { CheckCircle, Home, Bath, ChefHat, Building, ArrowRight, Fence, UtensilsCrossed } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'Home Remodeling El Cajon CA | BNC Builders',
  description: 'Professional home remodeling in El Cajon, CA. Kitchen, bathroom, ADU & exterior renovation. Serving East County San Diego. Free estimates from BNC Builders.',
  path: '/areas/el-cajon',
  keywords: [
    'home remodeling el cajon',
    'contractor el cajon',
    'remodeling el cajon ca',
    'kitchen remodel el cajon',
    'bathroom remodel el cajon',
    'el cajon home renovation',
  ],
});

const services = [
  { title: 'Kitchen Remodeling', href: '/kitchen-remodeling', icon: ChefHat, description: 'Modern kitchen upgrades with durable countertops, efficient layouts, and style choices that boost El Cajon home values.' },
  { title: 'Bathroom Remodeling', href: '/bathroom-remodeling', icon: Bath, description: 'Updated bathrooms with modern tile, new vanities, and improved layouts tailored to El Cajon\'s diverse housing stock.' },
  { title: 'Home Remodeling', href: '/home-remodeling', icon: Home, description: 'Complete home renovations that modernize El Cajon properties while maximizing square footage and livability.' },
  { title: 'ADU Construction', href: '/adus', icon: Building, description: 'Detached and attached ADUs ideal for El Cajon\'s growing demand for rental income and multi-generational living.' },
  { title: 'Outdoor Kitchens', href: '/outdoor-kitchens', icon: UtensilsCrossed, description: 'Built-in grills, countertops, and shaded dining areas designed for El Cajon\'s warm East County climate.' },
  { title: 'Hardscaping', href: '/hardscaping', icon: Fence, description: 'Drought-resistant patios, retaining walls, and walkways built to withstand El Cajon\'s inland heat and terrain.' },
];

const neighborhoods = [
  'Fletcher Hills', 'Bostonia', 'Granite Hills', 'Hillsdale',
  'Rancho San Diego', 'Crest', 'Winter Gardens', 'Greenfield',
  'Jamacha', 'El Cajon Downtown', 'Singing Hills', 'Dehesa',
];

export default function ElCajonPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Areas We Serve', url: '/areas-we-serve' },
        { name: 'El Cajon', url: '/areas/el-cajon' },
      ]} />
      <AreaServedJsonLd city="El Cajon" pageUrl="/areas/el-cajon" />

      <HeroSubpage
        title="Home Remodeling in El Cajon, CA"
        subtitle="From the hillside homes of Fletcher Hills to the family neighborhoods of Granite Hills, BNC Builders brings professional remodeling expertise to East County San Diego's largest city."
        backgroundImage={bannerImages.faq}
      />

      {/* Why El Cajon */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                El Cajon Remodeling Experts
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">
                Remodeling That Elevates El Cajon Homes
              </h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  El Cajon is East County San Diego&apos;s vibrant hub, a family-oriented city with diverse housing ranging from mid-century ranch homes to newer tract developments and hillside custom builds. Whether you own a classic Fletcher Hills home with panoramic views or a starter home in Bostonia, BNC Builders delivers renovations that modernize your living space and increase your property value.
                </p>
                <p>
                  El Cajon&apos;s inland climate brings unique remodeling considerations. Hot summers demand energy-efficient windows, proper insulation, and HVAC upgrades as part of any renovation. The city&apos;s diverse housing stock, from 1950s ranch homes to 1990s stucco, each requires different approaches to updating layouts, plumbing, and electrical systems. And with El Cajon&apos;s growing ADU market, many homeowners are adding rental units to generate income on their properties.
                </p>
                <p>
                  Based in nearby Escondido, BNC Builders serves El Cajon with the same dedication and responsiveness we bring to every community. We understand East County building codes, work efficiently in the warmer climate, and have completed numerous projects across Fletcher Hills, Granite Hills, and throughout the city.
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-dark mb-6">Why El Cajon Trusts BNC</h3>
              <div className="space-y-4">
                {[
                  'Experience with diverse East County housing styles',
                  'Knowledge of El Cajon building codes and permits',
                  'Energy-efficient designs for inland climate',
                  'Expertise updating mid-century and older homes',
                  'ADU construction for rental income opportunities',
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
              Remodeling Services in El Cajon
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From kitchen makeovers to ADU construction, we deliver full-service remodeling designed for El Cajon&apos;s diverse homes and East County lifestyle.
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
              El Cajon Neighborhoods We Serve
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From the scenic hillsides of Fletcher Hills to the established neighborhoods of Granite Hills, we bring expert craftsmanship to every part of El Cajon.
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
                title: 'Energy-Efficient Upgrades',
                description: 'El Cajon\'s warm inland climate makes energy-efficient windows, insulation, and HVAC integration essential components of any smart renovation.',
              },
              {
                title: 'ADU Opportunity',
                description: 'El Cajon\'s lot sizes and zoning make it one of East County\'s best markets for ADU construction, providing rental income and multi-generational flexibility.',
              },
              {
                title: 'Growing Home Values',
                description: 'El Cajon\'s real estate market continues to appreciate. Strategic remodeling delivers strong ROI as East County demand remains high.',
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
        title="Ready to Transform Your El Cajon Home?"
        subtitle="Whether it is a kitchen renovation in Fletcher Hills or an ADU in Granite Hills, BNC Builders brings East County expertise and proven craftsmanship to every El Cajon project. Contact us for a free estimate."
        primaryAction={{ label: 'Get Your Free Estimate', href: '/contact-us' }}
      />
    </>
  );
}
