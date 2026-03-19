// BNC Builders - La Mesa Location Page

import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section } from '@/components/ui';
import { bannerImages } from '@/lib/constants/images';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { BreadcrumbJsonLd, AreaServedJsonLd } from '@/components/seo/JsonLd';
import { CheckCircle, Home, Bath, ChefHat, Building, ArrowRight, Fence, UtensilsCrossed } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'Home Remodeling La Mesa CA | BNC Builders',
  description: 'Expert home remodeling in La Mesa, CA. Kitchen, bathroom, ADU & outdoor living projects. Quality craftsmanship in the Jewel of the Hills. BNC Builders.',
  path: '/areas/la-mesa',
  keywords: [
    'home remodeling la mesa',
    'contractor la mesa',
    'remodeling la mesa ca',
    'kitchen remodel la mesa',
    'bathroom remodel la mesa',
    'la mesa home renovation',
  ],
});

const services = [
  { title: 'Kitchen Remodeling', href: '/kitchen-remodeling', icon: ChefHat, description: 'Charming yet modern kitchen renovations that complement La Mesa\'s mid-century homes and walkable village lifestyle.' },
  { title: 'Bathroom Remodeling', href: '/bathroom-remodeling', icon: Bath, description: 'Updated bathrooms with contemporary tile, walk-in showers, and classic finishes suited to La Mesa\'s character homes.' },
  { title: 'Home Remodeling', href: '/home-remodeling', icon: Home, description: 'Whole-home renovations that preserve La Mesa\'s mid-century charm while adding modern comfort and functionality.' },
  { title: 'ADU Construction', href: '/adus', icon: Building, description: 'Well-designed ADUs that blend with La Mesa\'s established neighborhoods, perfect for rental income or family use.' },
  { title: 'Outdoor Kitchens', href: '/outdoor-kitchens', icon: UtensilsCrossed, description: 'Outdoor cooking and entertaining spaces that take advantage of La Mesa\'s hilltop views and pleasant climate.' },
  { title: 'Hardscaping', href: '/hardscaping', icon: Fence, description: 'Terraced patios, stone walkways, and retaining walls designed for La Mesa\'s hilly terrain and drought-conscious landscaping.' },
];

const neighborhoods = [
  'La Mesa Village', 'Mount Helix', 'Grossmont', 'Rolando',
  'Windsor Hills', 'Northmont', 'Collwood', 'La Mesa Highlands',
  'Casa de Oro', 'Spring Valley (adjacent)', 'Severin Drive area', 'University Avenue corridor',
];

export default function LaMesaPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Areas We Serve', url: '/areas-we-serve' },
        { name: 'La Mesa', url: '/areas/la-mesa' },
      ]} />
      <AreaServedJsonLd city="La Mesa" pageUrl="/areas/la-mesa" />

      <HeroSubpage
        title="Home Remodeling in La Mesa, CA"
        subtitle="From the charming streets of La Mesa Village to the panoramic views of Mount Helix, BNC Builders brings expert remodeling craftsmanship to the Jewel of the Hills."
        backgroundImage={bannerImages.faq}
      />

      {/* Why La Mesa */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                La Mesa Remodeling Experts
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">
                Remodeling That Honors La Mesa&apos;s Unique Character
              </h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  Known as the &quot;Jewel of the Hills,&quot; La Mesa is a city with genuine character. Its walkable downtown village, tree-lined streets, and diverse mix of mid-century homes give it a charm that larger cities envy. Whether you own a 1950s ranch in Grossmont, a hillside retreat near Mount Helix, or a bungalow steps from La Mesa Village, BNC Builders creates renovations that honor your home&apos;s character while bringing it into the modern era.
                </p>
                <p>
                  La Mesa&apos;s housing stock presents exciting remodeling opportunities. Many mid-century homes feature original kitchens and bathrooms ready for thoughtful updates. The hilly terrain means some properties benefit from hillside-specific construction techniques for decks, patios, and ADUs. And La Mesa&apos;s strong community identity means homeowners care about preserving the neighborhood feel while improving their living spaces.
                </p>
                <p>
                  BNC Builders serves La Mesa from our nearby Escondido office, providing responsive service and deep familiarity with the area. From La Mesa Village to Mount Helix, we have built a reputation for quality craftsmanship, clear communication, and renovations that make La Mesa homes shine.
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-dark mb-6">Why La Mesa Trusts BNC</h3>
              <div className="space-y-4">
                {[
                  'Expertise with mid-century home renovations',
                  'Knowledge of La Mesa building codes and permits',
                  'Hillside construction experience for sloped lots',
                  'Designs that preserve neighborhood character',
                  'ADU expertise for established neighborhoods',
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
              Remodeling Services in La Mesa
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From kitchen updates to complete home renovations, we deliver full-service remodeling crafted for La Mesa&apos;s charming homes and hilly terrain.
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
              La Mesa Neighborhoods We Serve
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From the walkable streets of La Mesa Village to the stunning views from Mount Helix, we bring expert craftsmanship to every neighborhood in the Jewel of the Hills.
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
                title: 'Mid-Century Modernization',
                description: 'La Mesa\'s abundant mid-century homes offer incredible potential. We specialize in opening floor plans, updating kitchens, and adding modern amenities.',
              },
              {
                title: 'Hillside Living',
                description: 'Many La Mesa homes sit on sloped lots with views. Our hillside construction expertise ensures decks, patios, and ADUs are built safely and beautifully.',
              },
              {
                title: 'Village Community Value',
                description: 'La Mesa\'s walkable village and strong community drive property demand. Smart renovations deliver excellent returns in this desirable market.',
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
        title="Ready to Transform Your La Mesa Home?"
        subtitle="Whether it is a kitchen renovation near La Mesa Village or an ADU on Mount Helix, BNC Builders brings local expertise and proven craftsmanship to every La Mesa project. Contact us for a free estimate."
        primaryAction={{ label: 'Get Your Free Estimate', href: '/contact-us' }}
      />
    </>
  );
}
