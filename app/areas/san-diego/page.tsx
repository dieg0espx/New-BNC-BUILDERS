// BNC Builders - San Diego Location Page

import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section, AnimatedSection } from '@/components/ui';
import { bannerImages } from '@/lib/constants/images';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { BreadcrumbJsonLd, LocalBusinessJsonLd } from '@/components/seo/JsonLd';
import { CheckCircle, Home, Bath, ChefHat, Building, ArrowRight, Fence, UtensilsCrossed } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'Home Remodeling San Diego | Kitchen & Bathroom Remodel',
  description: 'Expert home remodeling in San Diego. Kitchen remodel, bathroom renovation, ADU construction & outdoor living. 30+ years experience. Free estimates.',
  path: '/areas/san-diego',
  keywords: [
    'home remodeling san diego',
    'kitchen remodel san diego',
    'bathroom remodel san diego',
    'remodeling contractor san diego',
    'san diego home renovation',
    'general contractor san diego',
  ],
});

const services = [
  { title: 'Kitchen Remodeling', href: '/kitchen-remodeling', icon: ChefHat, description: 'Complete kitchen transformations with custom cabinetry, countertops, and modern layouts designed for San Diego living.' },
  { title: 'Bathroom Remodeling', href: '/bathroom-remodeling', icon: Bath, description: 'Spa-inspired bathroom renovations featuring premium tile, walk-in showers, and luxury fixtures.' },
  { title: 'Home Remodeling', href: '/home-remodeling', icon: Home, description: 'Whole-home renovations that modernize your San Diego property while preserving its character.' },
  { title: 'ADU Construction', href: '/adus', icon: Building, description: 'Accessory dwelling units built to San Diego regulations, perfect for rental income or multigenerational living.' },
  { title: 'Outdoor Kitchens', href: '/outdoor-kitchens', icon: UtensilsCrossed, description: 'Custom outdoor kitchens that take full advantage of San Diego\'s year-round sunshine.' },
  { title: 'Hardscaping', href: '/hardscaping', icon: Fence, description: 'Patios, walkways, retaining walls, and outdoor living spaces built to last.' },
];

const neighborhoods = [
  'Mission Hills', 'Hillcrest', 'North Park', 'Kensington',
  'Normal Heights', 'University Heights', 'Bankers Hill', 'South Park',
  'Pacific Beach', 'Point Loma', 'Ocean Beach', 'Clairemont',
  'Tierrasanta', 'Scripps Ranch', 'Rancho Bernardo', 'Mira Mesa',
];

export default function SanDiegoPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Areas We Serve', url: '/areas-we-serve' },
        { name: 'San Diego', url: '/areas/san-diego' },
      ]} />
      <LocalBusinessJsonLd />

      <HeroSubpage
        title="Home Remodeling in San Diego, CA"
        subtitle="From historic Mission Hills bungalows to modern Scripps Ranch estates, BNC Builders delivers expert craftsmanship to homeowners across San Diego. Over 30 years of combined experience transforming kitchens, bathrooms, and entire homes."
        backgroundImage={bannerImages.faq}
      />

      {/* Why San Diego Homeowners Choose BNC */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                San Diego&apos;s Trusted Remodeler
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">
                Why San Diego Homeowners Choose BNC Builders
              </h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  San Diego is one of the most architecturally diverse cities in California. From the Spanish Revival homes in Mission Hills to the mid-century ranches of Clairemont and the contemporary builds in Scripps Ranch, every neighborhood has its own personality. At BNC Builders, we understand these distinctions and bring tailored remodeling solutions to each project.
                </p>
                <p>
                  Living in San Diego means embracing indoor-outdoor living, maximizing natural light, and building spaces that complement the coastal climate. Our team specializes in renovations that honor these lifestyle elements, whether that is opening up a kitchen to connect with a backyard entertaining area or designing a bathroom retreat that captures the relaxed coastal vibe.
                </p>
                <p>
                  As a locally owned company based in nearby Escondido, we navigate San Diego&apos;s permitting process with ease, maintain relationships with trusted local suppliers, and respond quickly to project needs. When you hire BNC Builders, you are partnering with neighbors who take pride in elevating San Diego homes.
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-dark mb-6">What Sets Us Apart</h3>
              <div className="space-y-4">
                {[
                  'Over 30 years of combined remodeling experience',
                  'Deep knowledge of San Diego architectural styles',
                  'San Diego permit and code expertise',
                  'Transparent pricing with no hidden fees',
                  'Dedicated project manager for every job',
                  '5-star rated on Google and HomeAdvisor',
                  'BBB A+ accredited business',
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
              Remodeling Services Available in San Diego
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Whether you need a single-room update or a complete home transformation, BNC Builders offers a full range of remodeling services throughout San Diego.
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

      {/* San Diego Neighborhoods */}
      <Section background="white">
        <Container>
          <div className="text-center mb-12">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              Local Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">
              San Diego Neighborhoods We Serve
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              BNC Builders works in communities across San Diego, understanding the unique architectural character and homeowner needs in each area.
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

          <p className="text-center text-zinc-500 mt-8">
            Don&apos;t see your neighborhood? We serve all of San Diego.{' '}
            <Link href="/contact-us" className="text-gold hover:underline font-medium">
              Contact us
            </Link>{' '}
            to discuss your project.
          </p>
        </Container>
      </Section>

      {/* San Diego Remodeling Insights */}
      <Section background="dark" padding="md">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: 'Coastal Climate Design',
                description: 'We select materials and finishes that stand up to San Diego\'s marine air while maintaining beauty for years to come.',
              },
              {
                title: 'Indoor-Outdoor Flow',
                description: 'San Diego\'s mild weather calls for seamless transitions between indoor living areas and outdoor entertaining spaces.',
              },
              {
                title: 'ADU Opportunities',
                description: 'San Diego\'s progressive ADU policies make it an ideal market for adding a guest house, rental unit, or home office.',
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
        title="Ready to Remodel Your San Diego Home?"
        subtitle="From kitchen makeovers to complete home renovations, BNC Builders is San Diego's trusted remodeling partner. Contact us today for a free in-home consultation and detailed project estimate."
        primaryAction={{ label: 'Get Your Free Estimate', href: '/contact-us' }}
      />
    </>
  );
}
