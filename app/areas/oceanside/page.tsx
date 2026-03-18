// BNC Builders - Oceanside Location Page

import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section } from '@/components/ui';
import { bannerImages } from '@/lib/constants/images';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { BreadcrumbJsonLd, AreaServedJsonLd } from '@/components/seo/JsonLd';
import { CheckCircle, Home, Bath, ChefHat, Building, ArrowRight, Fence, UtensilsCrossed } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'Home Remodeling Oceanside CA | BNC Builders',
  description: 'Expert home remodeling in Oceanside, CA. Kitchen, bathroom, exterior & ADU construction. Coastal home specialists. Free estimates from BNC Builders.',
  path: '/areas/oceanside',
  keywords: [
    'remodeling oceanside',
    'contractor oceanside',
    'home remodeling oceanside ca',
    'kitchen remodel oceanside',
    'bathroom remodel oceanside',
    'oceanside home renovation',
  ],
});

const services = [
  { title: 'Kitchen Remodeling', href: '/kitchen-remodeling', icon: ChefHat, description: 'Bright, airy kitchen designs that capture Oceanside\'s surf-town energy with durable coastal finishes and open layouts.' },
  { title: 'Bathroom Remodeling', href: '/bathroom-remodeling', icon: Bath, description: 'Beach-inspired bathrooms with walk-in showers, natural materials, and finishes that withstand the coastal environment.' },
  { title: 'Home Remodeling', href: '/home-remodeling', icon: Home, description: 'Whole-home renovations that update Oceanside\'s diverse housing stock from mid-century bungalows to newer construction.' },
  { title: 'ADU Construction', href: '/adus', icon: Building, description: 'Income-generating ADUs and guest cottages that capitalize on Oceanside\'s growing demand for rental housing near the coast.' },
  { title: 'Outdoor Kitchens', href: '/outdoor-kitchens', icon: UtensilsCrossed, description: 'Outdoor cooking and dining areas perfect for Oceanside\'s beach-casual entertaining style and year-round warmth.' },
  { title: 'Hardscaping', href: '/hardscaping', icon: Fence, description: 'Low-maintenance hardscape designs with pavers, retaining walls, and drought-tolerant features suited to coastal living.' },
];

const neighborhoods = [
  'Downtown Oceanside', 'South Oceanside', 'Fire Mountain',
  'Loma Alta', 'Townsite', 'Peacock', 'San Luis Rey',
  'Ivey Ranch', 'Arrowood', 'Oceana', 'Rancho Del Oro', 'Mission Mesa',
];

export default function OceansidePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Areas We Serve', url: '/areas-we-serve' },
        { name: 'Oceanside', url: '/areas/oceanside' },
      ]} />
      <AreaServedJsonLd city="Oceanside" pageUrl="/areas/oceanside" />

      <HeroSubpage
        title="Home Remodeling in Oceanside, CA"
        subtitle="From the revitalized downtown pier district to the established neighborhoods of Fire Mountain and Ivey Ranch, BNC Builders brings expert remodeling to Oceanside's diverse and growing community."
        backgroundImage={bannerImages.faq}
      />

      {/* Why Oceanside */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                Oceanside Remodeling Experts
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">
                Renovations That Match Oceanside&apos;s Revival
              </h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  Oceanside is experiencing a renaissance. The downtown district has transformed into a vibrant hub of restaurants, breweries, and shops, and property values throughout the city have followed suit. Homeowners in Oceanside are investing in their properties like never before, and BNC Builders is here to help them do it right.
                </p>
                <p>
                  The city offers an incredible range of housing styles. Near the coast, you will find charming 1950s and 1960s beach cottages alongside modern infill construction. Inland neighborhoods like Ivey Ranch and Rancho Del Oro feature larger family homes from the 1990s and 2000s. Each style presents different remodeling opportunities, and our team has experience working with all of them.
                </p>
                <p>
                  Oceanside&apos;s proximity to Camp Pendleton also brings a dynamic population of military families who want to make their homes comfortable and functional during their time here. We offer efficient timelines and practical designs that serve families well, whether they are putting down roots or planning a future sale.
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-dark mb-6">Why Oceanside Chooses BNC</h3>
              <div className="space-y-4">
                {[
                  'Experience with coastal and inland Oceanside homes',
                  'Familiar with Oceanside building and permit requirements',
                  'Salt-air-resistant materials and finishes',
                  'ADU construction expertise for rental income',
                  'Quick project turnaround for military families',
                  'Designs that boost property value in a rising market',
                  'Transparent pricing and honest communication',
                  'Free on-site consultations throughout Oceanside',
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
              Remodeling Services in Oceanside
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Full-service remodeling for Oceanside homes, from quick kitchen refreshes to ground-up ADU construction.
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
              Oceanside Neighborhoods We Serve
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From the pier district to the inland master-planned communities, BNC Builders works in every Oceanside neighborhood.
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
                title: 'Rising Market Value',
                description: 'Oceanside\'s revitalization has driven significant property appreciation. Smart remodeling investments yield strong returns in this growing market.',
              },
              {
                title: 'Coastal Durability',
                description: 'Beach-adjacent homes need materials that resist salt spray and moisture. We specify products engineered for the Oceanside coastal environment.',
              },
              {
                title: 'ADU Rental Income',
                description: 'Oceanside\'s tourism and military communities create strong rental demand. An ADU can generate meaningful monthly income while adding property value.',
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
        title="Transform Your Oceanside Home"
        subtitle="Whether you are renovating a downtown bungalow or updating a family home in Rancho Del Oro, BNC Builders delivers quality craftsmanship and coastal expertise. Contact us for your free estimate."
        primaryAction={{ label: 'Get Your Free Estimate', href: '/contact-us' }}
      />
    </>
  );
}
