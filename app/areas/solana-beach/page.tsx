// BNC Builders - Solana Beach Location Page

import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section } from '@/components/ui';
import { bannerImages } from '@/lib/constants/images';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { BreadcrumbJsonLd, AreaServedJsonLd } from '@/components/seo/JsonLd';
import { CheckCircle, Home, Bath, ChefHat, Building, ArrowRight, Fence, UtensilsCrossed } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'Home Remodeling Solana Beach CA | BNC Builders',
  description: 'Professional home remodeling in Solana Beach, CA. Kitchen, bathroom, outdoor living & ADU construction. Coastal expertise. Free estimates from BNC Builders.',
  path: '/areas/solana-beach',
  keywords: [
    'home remodeling solana beach',
    'contractor solana beach',
    'remodeling solana beach ca',
    'kitchen remodel solana beach',
    'bathroom remodel solana beach',
    'solana beach home renovation',
  ],
});

const services = [
  { title: 'Kitchen Remodeling', href: '/kitchen-remodeling', icon: ChefHat, description: 'Bright, open kitchen designs with premium finishes that complement Solana Beach\'s coastal mid-century and contemporary homes.' },
  { title: 'Bathroom Remodeling', href: '/bathroom-remodeling', icon: Bath, description: 'Spa-inspired bathroom renovations with natural stone, frameless glass, and ocean-view-conscious layouts.' },
  { title: 'Home Remodeling', href: '/home-remodeling', icon: Home, description: 'Complete home transformations that honor Solana Beach\'s unique blend of mid-century charm and modern coastal style.' },
  { title: 'ADU Construction', href: '/adus', icon: Building, description: 'Thoughtfully designed ADUs that maximize Solana Beach property value while maintaining neighborhood character.' },
  { title: 'Outdoor Kitchens', href: '/outdoor-kitchens', icon: UtensilsCrossed, description: 'Alfresco cooking and entertaining spaces designed for Solana Beach\'s year-round outdoor lifestyle.' },
  { title: 'Hardscaping', href: '/hardscaping', icon: Fence, description: 'Coastal-appropriate patios, walkways, and retaining walls using drought-tolerant, salt-air-resistant materials.' },
];

const neighborhoods = [
  'Solana Beach Village', 'Eden Gardens', 'Lomas Santa Fe',
  'Solana Beach Heights', 'Santa Helena', 'Via de la Valle',
  'South Sierra Avenue', 'Cedros Design District', 'North Rios',
];

export default function SolanaBeachPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Areas We Serve', url: '/areas-we-serve' },
        { name: 'Solana Beach', url: '/areas/solana-beach' },
      ]} />
      <AreaServedJsonLd city="Solana Beach" pageUrl="/areas/solana-beach" />

      <HeroSubpage
        title="Home Remodeling in Solana Beach, CA"
        subtitle="From the mid-century gems of Eden Gardens to the contemporary estates of Lomas Santa Fe, BNC Builders delivers expert remodeling craftsmanship to this upscale coastal community."
        backgroundImage={bannerImages.faq}
      />

      {/* Why Solana Beach */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                Solana Beach Remodeling Experts
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">
                Remodeling That Celebrates Solana Beach&apos;s Coastal Lifestyle
              </h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  Solana Beach is an upscale coastal community where beach living meets sophisticated design. Whether you own a classic mid-century home in Eden Gardens or a contemporary residence along Lomas Santa Fe, your property reflects a lifestyle centered on ocean breezes, natural light, and relaxed elegance. BNC Builders specializes in renovations that amplify that lifestyle, creating seamless indoor-outdoor living spaces.
                </p>
                <p>
                  Solana Beach homes come with distinct remodeling considerations. Salt air exposure demands corrosion-resistant hardware and weather-grade finishes. The community&apos;s appreciation for design, inspired by the Cedros Design District, calls for elevated material choices and architectural detail. Many homes also benefit from opening up floor plans to capture coastal views and cross-ventilation.
                </p>
                <p>
                  Located just a short drive from our Escondido headquarters, Solana Beach is well within our core service area. We provide responsive communication, quick site visits, and efficient project management for homeowners who expect nothing less than premium quality and craftsmanship.
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-dark mb-6">Why Solana Beach Trusts BNC</h3>
              <div className="space-y-4">
                {[
                  'Expertise with coastal and mid-century home materials',
                  'Knowledge of Solana Beach building codes and permits',
                  'Designs that maximize ocean views and natural light',
                  'Salt-air-resistant finishes and hardware selections',
                  'ADU designs that complement neighborhood character',
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
              Remodeling Services in Solana Beach
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From kitchen renovations to complete home transformations, we deliver full-service remodeling tailored to Solana Beach&apos;s coastal homes.
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
              Solana Beach Neighborhoods We Serve
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From the boutique shops of the Cedros Design District to the scenic bluffs above Fletcher Cove, we bring expert craftsmanship to every part of Solana Beach.
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
                title: 'Mid-Century Modernization',
                description: 'We specialize in updating Solana Beach\'s classic mid-century homes with modern amenities while preserving their original architectural character.',
              },
              {
                title: 'Coastal Indoor-Outdoor Flow',
                description: 'Solana Beach\'s perfect climate calls for seamless transitions between living spaces, patios, and outdoor entertaining areas.',
              },
              {
                title: 'Premium Property Values',
                description: 'Solana Beach real estate is among the most desirable in San Diego County. Strategic remodeling delivers exceptional ROI in this premium market.',
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
        title="Ready to Transform Your Solana Beach Home?"
        subtitle="Whether it is a kitchen renovation in Eden Gardens or an ADU in Lomas Santa Fe, BNC Builders brings coastal expertise and proven craftsmanship to every Solana Beach project. Contact us for a free estimate."
        primaryAction={{ label: 'Get Your Free Estimate', href: '/contact-us' }}
      />
    </>
  );
}
