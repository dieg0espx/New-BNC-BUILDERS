// BNC Builders - Valley Center Location Page

import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section } from '@/components/ui';
import { bannerImages } from '@/lib/constants/images';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { BreadcrumbJsonLd, AreaServedJsonLd } from '@/components/seo/JsonLd';
import { CheckCircle, Home, Bath, ChefHat, Building, ArrowRight, Fence, UtensilsCrossed } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'Home Remodeling Valley Center CA | BNC Builders',
  description: 'Expert home remodeling in Valley Center, CA. Kitchen, bathroom, ADU & outdoor living. Serving rural and estate properties. Free estimates from BNC Builders.',
  path: '/areas/valley-center',
  keywords: [
    'home remodeling valley center',
    'contractor valley center',
    'remodeling valley center ca',
    'kitchen remodel valley center',
    'bathroom remodel valley center',
    'valley center home renovation',
  ],
});

const services = [
  { title: 'Kitchen Remodeling', href: '/kitchen-remodeling', icon: ChefHat, description: 'Spacious country-style and modern farmhouse kitchens designed for Valley Center\'s large homes and family gatherings.' },
  { title: 'Bathroom Remodeling', href: '/bathroom-remodeling', icon: Bath, description: 'Luxurious master bath retreats with soaking tubs, walk-in showers, and custom vanities suited to estate living.' },
  { title: 'Home Remodeling', href: '/home-remodeling', icon: Home, description: 'Complete home renovations that enhance Valley Center\'s ranch-style, custom, and estate properties.' },
  { title: 'ADU Construction', href: '/adus', icon: Building, description: 'Guest houses, in-law suites, and ranch hand quarters that take advantage of Valley Center\'s generous lot sizes.' },
  { title: 'Outdoor Kitchens', href: '/outdoor-kitchens', icon: UtensilsCrossed, description: 'Large-scale outdoor cooking and entertaining spaces perfect for Valley Center\'s scenic views and open acreage.' },
  { title: 'Hardscaping', href: '/hardscaping', icon: Fence, description: 'Patios, fire pits, retaining walls, and drought-resistant landscaping designed for Valley Center\'s rural terrain.' },
];

const neighborhoods = [
  'Valley Center proper', 'Woods Valley', 'Hellhole Canyon area',
  'Lake Wohlford', 'Cole Grade', 'Miller Mountain',
  'Lilac area', 'Moosa Canyon', 'Valley Center Heights',
];

export default function ValleyCenterPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Areas We Serve', url: '/areas-we-serve' },
        { name: 'Valley Center', url: '/areas/valley-center' },
      ]} />
      <AreaServedJsonLd city="Valley Center" pageUrl="/areas/valley-center" />

      <HeroSubpage
        title="Home Remodeling in Valley Center, CA"
        subtitle="From sprawling ranches along Woods Valley to custom estates near Lake Wohlford, BNC Builders brings expert remodeling craftsmanship to Valley Center's unique rural and estate properties."
        backgroundImage={bannerImages.faq}
      />

      {/* Why Valley Center */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                Valley Center Remodeling Experts
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">
                Remodeling Built for Valley Center&apos;s Rural Character
              </h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  Valley Center is a community where wide-open spaces, equestrian lifestyles, and estate-sized properties define the way of life. Whether you own a working ranch with a classic farmhouse or a custom-built estate on several acres, your home is the heart of a lifestyle that values privacy, nature, and room to grow. BNC Builders specializes in renovations that enhance these properties while respecting their rural setting.
                </p>
                <p>
                  Valley Center homeowners face unique remodeling considerations. Larger homes require careful structural planning for whole-home renovations. Well water and septic systems may need to be factored into kitchen and bathroom projects. The region&apos;s warm inland climate calls for energy-efficient materials, proper insulation, and outdoor living spaces designed to provide shade and comfort during hot summer months.
                </p>
                <p>
                  As one of Valley Center&apos;s closest professional contractors based in nearby Escondido, BNC Builders offers convenient access, quick response times, and deep familiarity with the area&apos;s building requirements and terrain. We have completed projects throughout Valley Center, from kitchen renovations in Woods Valley to ADU construction near Lake Wohlford.
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-dark mb-6">Why Valley Center Trusts BNC</h3>
              <div className="space-y-4">
                {[
                  'Experience with large-scale estate renovations',
                  'Familiar with Valley Center building codes and rural permits',
                  'Designs suited to ranch and custom home styles',
                  'Expertise with well water and septic considerations',
                  'ADU construction on large rural lots',
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
              Remodeling Services in Valley Center
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From kitchen upgrades to complete estate renovations, we deliver full-service remodeling built for Valley Center&apos;s rural and estate properties.
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
              Valley Center Areas We Serve
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From the scenic trails near Hellhole Canyon to the rolling hills of Woods Valley, we bring expert craftsmanship to every corner of Valley Center.
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
                title: 'Estate-Scale Expertise',
                description: 'Valley Center\'s large properties require contractors experienced with complex, multi-phase renovations on expansive homes and grounds.',
              },
              {
                title: 'Outdoor Living Focus',
                description: 'With acres of land and panoramic views, Valley Center homes are perfect for outdoor kitchens, fire pits, and covered entertaining areas.',
              },
              {
                title: 'Rural Property Value',
                description: 'Valley Center\'s real estate market values quality upgrades. Strategic remodeling on estate properties delivers strong returns in this growing community.',
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
        title="Ready to Transform Your Valley Center Home?"
        subtitle="Whether it is a kitchen renovation in Woods Valley or an ADU on your estate property, BNC Builders brings rural expertise and proven craftsmanship to every Valley Center project. Contact us for a free estimate."
        primaryAction={{ label: 'Get Your Free Estimate', href: '/contact-us' }}
      />
    </>
  );
}
