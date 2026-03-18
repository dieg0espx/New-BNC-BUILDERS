// BNC Builders - Encinitas Location Page

import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section, AnimatedSection } from '@/components/ui';
import { bannerImages } from '@/lib/constants/images';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { BreadcrumbJsonLd, LocalBusinessJsonLd } from '@/components/seo/JsonLd';
import { CheckCircle, Home, Bath, ChefHat, Building, ArrowRight, Fence, UtensilsCrossed } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'Home Remodeling Encinitas CA | BNC Builders',
  description: 'Professional home remodeling in Encinitas, CA. Kitchen, bathroom, outdoor living & ADU construction. Coastal expertise. Free estimates from BNC Builders.',
  path: '/areas/encinitas',
  keywords: [
    'remodeling encinitas',
    'contractor encinitas',
    'home remodeling encinitas',
    'kitchen remodel encinitas',
    'bathroom remodel encinitas',
    'encinitas home renovation',
  ],
});

const services = [
  { title: 'Kitchen Remodeling', href: '/kitchen-remodeling', icon: ChefHat, description: 'Organic, light-filled kitchen designs that reflect Encinitas\'s health-conscious, farm-to-table lifestyle with sustainable material options.' },
  { title: 'Bathroom Remodeling', href: '/bathroom-remodeling', icon: Bath, description: 'Zen-inspired bathroom retreats with natural stone, open showers, and calming design elements that echo the coastal surroundings.' },
  { title: 'Home Remodeling', href: '/home-remodeling', icon: Home, description: 'Thoughtful whole-home renovations that preserve Encinitas\'s eclectic architectural character while adding modern functionality.' },
  { title: 'ADU Construction', href: '/adus', icon: Building, description: 'Yoga studios, art spaces, guest cottages, and rental units built to complement Encinitas\'s creative community spirit.' },
  { title: 'Outdoor Kitchens', href: '/outdoor-kitchens', icon: UtensilsCrossed, description: 'Alfresco cooking spaces surrounded by native plantings, perfect for Encinitas\'s year-round outdoor dining culture.' },
  { title: 'Hardscaping', href: '/hardscaping', icon: Fence, description: 'Eco-conscious hardscaping with permeable pavers, native landscaping borders, and sustainable outdoor living areas.' },
];

const neighborhoods = [
  'Old Encinitas', 'New Encinitas', 'Leucadia', 'Cardiff-by-the-Sea',
  'Olivenhain', 'Village Park', 'Saxony', 'Park Place',
  'Encinitas Ranch', 'La Costa (Encinitas)', 'Neptune Avenue', 'Moonlight Beach Area',
];

export default function EncinitasPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Areas We Serve', url: '/areas-we-serve' },
        { name: 'Encinitas', url: '/areas/encinitas' },
      ]} />
      <LocalBusinessJsonLd />

      <HeroSubpage
        title="Home Remodeling in Encinitas, CA"
        subtitle="From the bohemian charm of Leucadia to the rural elegance of Olivenhain, BNC Builders crafts renovations that honor Encinitas's unique blend of coastal living, creative energy, and natural beauty."
        backgroundImage={bannerImages.faq}
      />

      {/* Why Encinitas */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                Encinitas Remodeling Experts
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">
                Renovations as Unique as Encinitas Itself
              </h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  Encinitas is not your typical San Diego suburb. It is a city with five distinct communities, each with its own personality. Leucadia brings a laid-back, surf-culture vibe with vintage bungalows along Neptune Avenue. Cardiff-by-the-Sea offers beachfront living with a village atmosphere. Old Encinitas blends downtown energy with residential charm. Olivenhain provides rural acreage and equestrian properties. And New Encinitas delivers modern planned communities with family-friendly amenities.
                </p>
                <p>
                  This architectural diversity means cookie-cutter remodeling does not work in Encinitas. A Leucadia cottage renovation requires a different sensibility than updating a custom Olivenhain estate. BNC Builders approaches each Encinitas project by first understanding the neighborhood context, the home&apos;s architectural DNA, and the homeowner&apos;s lifestyle before proposing any design solutions.
                </p>
                <p>
                  Encinitas homeowners also tend to value sustainability, natural materials, and designs that connect living spaces to the outdoors. We share these values and incorporate them into our work, selecting eco-friendly materials, maximizing cross-ventilation, and creating indoor-outdoor transitions that take advantage of the region&apos;s extraordinary climate.
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-dark mb-6">Why Encinitas Trusts BNC</h3>
              <div className="space-y-4">
                {[
                  'Respect for Encinitas\'s diverse architectural styles',
                  'Eco-conscious material and design options',
                  'Coastal building expertise for salt-air environments',
                  'Experience across all five Encinitas communities',
                  'Outdoor living designs for the coastal climate',
                  'Knowledge of Encinitas permitting requirements',
                  'Transparent budgeting with detailed cost breakdowns',
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
              Remodeling Services in Encinitas
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Full-service remodeling tailored to Encinitas&apos;s coastal lifestyle, from intimate bathroom retreats to expansive outdoor living areas.
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
              Encinitas Communities We Serve
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Five distinct communities, each with its own character. We bring tailored craftsmanship to every corner of Encinitas.
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
                title: 'Sustainable Design',
                description: 'Encinitas values environmental responsibility. We offer eco-friendly materials, energy-efficient designs, and water-conscious outdoor solutions.',
              },
              {
                title: 'Creative Spaces',
                description: 'From yoga studios to art workshops, Encinitas homeowners want unique spaces. ADUs and room additions provide the flexibility this community craves.',
              },
              {
                title: 'Coastal Premium',
                description: 'Encinitas properties command strong prices. Quality remodeling amplifies this value, delivering returns that outpace the investment.',
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
        title="Ready to Remodel Your Encinitas Home?"
        subtitle="Whether it is a Leucadia bungalow refresh or an Olivenhain estate renovation, BNC Builders brings the coastal expertise and creative approach that Encinitas homeowners appreciate. Get your free estimate today."
        primaryAction={{ label: 'Get Your Free Estimate', href: '/contact-us' }}
      />
    </>
  );
}
