// BNC Builders - Vista Location Page

import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section, AnimatedSection } from '@/components/ui';
import { bannerImages } from '@/lib/constants/images';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { BreadcrumbJsonLd, LocalBusinessJsonLd } from '@/components/seo/JsonLd';
import { CheckCircle, Home, Bath, ChefHat, Building, ArrowRight, Fence, UtensilsCrossed } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'Home Remodeling Vista CA | BNC Builders',
  description: 'Expert home remodeling in Vista, CA. Kitchen, bathroom, ADU & outdoor living projects. Quality craftsmanship & transparent pricing. Free estimates.',
  path: '/areas/vista',
  keywords: [
    'home remodeling vista',
    'contractor vista ca',
    'remodeling vista',
    'kitchen remodel vista',
    'bathroom remodel vista',
    'vista home renovation',
  ],
});

const services = [
  { title: 'Kitchen Remodeling', href: '/kitchen-remodeling', icon: ChefHat, description: 'Functional, family-friendly kitchen designs with durable materials, ample storage, and open layouts suited to Vista\'s relaxed lifestyle.' },
  { title: 'Bathroom Remodeling', href: '/bathroom-remodeling', icon: Bath, description: 'Updated bathrooms with modern vanities, efficient layouts, and quality tile work that elevate Vista homes.' },
  { title: 'Home Remodeling', href: '/home-remodeling', icon: Home, description: 'Complete home updates that bring Vista\'s established neighborhoods into the modern era with open plans and fresh finishes.' },
  { title: 'ADU Construction', href: '/adus', icon: Building, description: 'Affordable ADU construction that takes advantage of Vista\'s larger lot sizes for rental income or extended family.' },
  { title: 'Outdoor Kitchens', href: '/outdoor-kitchens', icon: UtensilsCrossed, description: 'Built-in outdoor cooking areas designed for Vista\'s warm inland climate and backyard entertaining traditions.' },
  { title: 'Hardscaping', href: '/hardscaping', icon: Fence, description: 'Drought-smart patios, walkways, and retaining walls that enhance Vista\'s hillside and flat-lot properties alike.' },
];

const neighborhoods = [
  'Downtown Vista', 'Vista Village', 'Shadowridge', 'Rancho Buena Vista',
  'Breeze Hill', 'California Oaks', 'Vista Grande', 'North Vista',
  'Bobier', 'Mar Vista', 'Buena Creek', 'Lake Vista Estates',
];

export default function VistaPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Areas We Serve', url: '/areas-we-serve' },
        { name: 'Vista', url: '/areas/vista' },
      ]} />
      <LocalBusinessJsonLd />

      <HeroSubpage
        title="Home Remodeling in Vista, CA"
        subtitle="From the tree-lined streets of Shadowridge to the revitalizing downtown Vista Village, BNC Builders delivers quality home remodeling that helps Vista homeowners get the most from their properties."
        backgroundImage={bannerImages.faq}
      />

      {/* Why Vista */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                Vista Remodeling Experts
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">
                Smart Remodeling for Vista&apos;s Growing Community
              </h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  Vista is one of North County&apos;s best-kept secrets. With its thriving craft brewery scene centered around Vista Village, excellent schools, and a cost of living that remains more accessible than coastal neighbors, Vista attracts families and professionals who want San Diego County quality of life without the premium price tag. BNC Builders helps these homeowners maximize their investment through strategic, well-crafted renovations.
                </p>
                <p>
                  The housing stock in Vista ranges from 1970s and 1980s tract homes in established neighborhoods like Breeze Hill and California Oaks to newer construction in Shadowridge and Rancho Buena Vista. Many of these older homes offer solid construction and generous lot sizes but feature outdated kitchens, compartmentalized floor plans, and bathrooms that need modernization. These are exactly the types of projects where BNC Builders excels.
                </p>
                <p>
                  As your neighbor in Escondido, we understand Vista&apos;s housing market, building codes, and community character. We design renovations that make sense for Vista&apos;s price points, delivering maximum value without over-improving for the area. Whether you are updating to sell or remodeling your forever home, we help you spend wisely and build beautifully.
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-dark mb-6">Why Vista Chooses BNC</h3>
              <div className="space-y-4">
                {[
                  'Escondido-based, just minutes from any Vista home',
                  'Value-focused designs that maximize your budget',
                  'Experience with Vista\'s 1970s-2000s home styles',
                  'ADU expertise for Vista\'s generous lot sizes',
                  'Outdoor living designs for warm inland climate',
                  'Familiar with Vista permitting and inspections',
                  'Transparent pricing with no surprises',
                  'Free in-home consultations for Vista residents',
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
              Remodeling Services in Vista
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From kitchen updates to complete home renovations, we bring full-service remodeling to Vista at prices that make sense.
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
              Vista Neighborhoods We Serve
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From the master-planned community of Shadowridge to the established streets around Breeze Hill, we serve all of Vista.
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
                title: 'Value-Smart Renovations',
                description: 'We design remodels that deliver maximum impact within Vista\'s market context, ensuring you get the best return on your investment.',
              },
              {
                title: 'ADU Opportunity',
                description: 'Vista\'s larger lots and growing rental demand make it an ideal city for ADU construction. Add income potential while increasing property value.',
              },
              {
                title: 'Established Home Updates',
                description: 'Many Vista homes were built decades ago with quality construction. Strategic updates unlock their full potential without starting from scratch.',
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
        title="Upgrade Your Vista Home Today"
        subtitle="From Shadowridge kitchen remodels to downtown Vista ADU projects, BNC Builders brings quality craftsmanship and honest pricing to every Vista homeowner. Contact us for your free consultation."
        primaryAction={{ label: 'Get Your Free Estimate', href: '/contact-us' }}
      />
    </>
  );
}
