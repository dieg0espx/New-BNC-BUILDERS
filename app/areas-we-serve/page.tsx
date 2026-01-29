// BNC Builders - Areas We Serve Page

import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section } from '@/components/ui';
import { bannerImages } from '@/lib/constants/images';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { MapPin, Building2, Phone, ChefHat, Bath, Home, Building, Fence, UtensilsCrossed, ArrowRight } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'San Diego Remodeling Service Areas | BNC Builders',
  description: 'BNC Builders proudly serves Escondido, Poway, Carlsbad, Oceanside, and communities throughout San Diego County with kitchen remodeling, bathroom renovation, ADU construction, and complete home transformation services.',
});

const regions = {
  coastal: {
    name: 'Coastal Communities',
    areas: ['Carlsbad', 'Encinitas', 'Oceanside', 'Solana Beach', 'La Jolla'],
  },
  inland: {
    name: 'Inland Cities',
    areas: ['Escondido', 'Poway', 'Vista', 'Valley Center', 'Rancho Santa Fe'],
  },
  south: {
    name: 'South County',
    areas: ['Chula Vista', 'El Cajon', 'La Mesa', 'National City'],
  },
};

const services = [
  { title: 'Kitchen Transformations', href: '/kitchen-remodeling', icon: ChefHat },
  { title: 'Bathroom Renovations', href: '/bathroom-remodeling', icon: Bath },
  { title: 'Complete Home Remodels', href: '/home-remodeling', icon: Home },
  { title: 'ADU Construction', href: '/adus', icon: Building },
  { title: 'Outdoor Living Spaces', href: '/exterior-remodeling', icon: Fence },
  { title: 'Custom Outdoor Kitchens', href: '/outdoor-kitchens', icon: UtensilsCrossed },
];

export default function AreasWeServePage() {
  return (
    <>
      {/* Hero */}
      <HeroSubpage
        title="Serving San Diego County Homeowners Since 2019"
        subtitle="From our Escondido headquarters, BNC Builders brings expert craftsmanship to communities throughout the region. Kitchen remodel Escondido CA, bathroom remodeling San Diego, ADUs San Diego - wherever you call home, we are ready to help."
        backgroundImage={bannerImages.areasWeServe}
      />

      {/* Headquarters Feature */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                Locally Rooted
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">
                Your Neighbors in the Remodeling Business
              </h2>
              <p className="text-lg text-zinc-600 mb-6">
                BNC Builders is not a faceless corporation - we are your neighbors. Our team lives and works in San Diego County, which means we understand local architectural styles, climate considerations, and what permits require. When you choose us for your kitchen remodel San Diego, bathroom remodeling Escondido, or ADUs Los Angeles project, you are working with people who genuinely care about our shared community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Request Free Consultation
                </a>
                <a
                  href="https://maps.google.com/?q=101+State+Pl+Suite+N,+Escondido,+CA+92029"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-zinc-800 text-zinc-800 font-semibold px-6 py-3 rounded-lg hover:bg-zinc-800 hover:text-white transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  Find Our Office
                </a>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-gold rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-zinc-900 mb-1">14+</div>
                  <div className="text-zinc-800 text-sm">Communities Served</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-zinc-900 mb-1">900+</div>
                  <div className="text-zinc-800 text-sm">Homes Transformed</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-zinc-900 mb-1">30+</div>
                  <div className="text-zinc-800 text-sm">Years Combined Expertise</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-zinc-900 mb-1">5.0</div>
                  <div className="text-zinc-800 text-sm">Client Satisfaction</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-zinc-800/20">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-zinc-800 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-zinc-900">101 State Pl Suite N</div>
                    <div className="text-zinc-800 text-sm">Escondido, CA 92029</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Service Areas by Region */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Communities We Proudly Serve
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From coastal Carlsbad to inland Escondido, BNC Builders delivers the same exceptional kitchen remodeling services, bathroom remodeling San Diego expertise, and ADUs San Diego quality to every neighborhood we work in.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(regions).map(([key, region]) => (
              <div key={key} className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="bg-gold px-6 py-4">
                  <h3 className="text-xl font-bold text-zinc-900">{region.name}</h3>
                </div>
                <ul className="p-6 space-y-3">
                  {region.areas.map((area) => (
                    <li key={area} className="flex items-center gap-3 group">
                      <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors">
                        <MapPin className="w-4 h-4 text-gold group-hover:text-white transition-colors" />
                      </span>
                      <span className="font-medium text-zinc-700">{area}, CA</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-zinc-500 mt-8">
            Don&apos;t see your city? <Link href="/contact-us" className="text-gold hover:underline font-medium">Reach out</Link> - we likely serve your area for remodeling Escondido and surrounding communities!
          </p>
        </Container>
      </Section>

      {/* Services Available */}
      <Section background="white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">
              Full-Service Capabilities Everywhere We Work
            </h2>
            <p className="text-zinc-600">
              Every community receives our complete range of kitchen remodel Escondido CA, bathroom remodeling Escondido, ADUs Los Angeles, deck repair San Diego, exterior remodeling, and landscape remodeling services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex items-center gap-4 bg-zinc-50 rounded-xl p-5 hover:bg-gold hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Icon className="w-6 h-6 text-gold group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-semibold text-dark group-hover:text-white transition-colors flex-1">
                    {service.title}
                  </span>
                  <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Why Local Matters */}
      <Section background="dark" padding="md">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: 'Permit Expertise',
                description: 'We know San Diego County codes, inspectors, and approval processes inside out. Your kitchen renovation San Diego project moves faster.',
              },
              {
                title: 'Same-Day Response',
                description: 'Being local means we can visit your property quickly, answer questions promptly, and start your deck repair project sooner.',
              },
              {
                title: 'Reputation Matters',
                description: 'Your neighbors are our neighbors. We stake our reputation for garage remodeling and outdoor kitchens on every project we complete.',
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

      {/* CTA */}
      <CTABanner
        title="Ready to Transform Your San Diego Home?"
        subtitle="Whether you need kitchen remodel Poway, bathroom remodeling Escondido, ADUs San Diego, room addition San Diego, or complete exterior remodeling services, BNC Builders is ready to bring your vision to life."
        primaryAction={{ label: 'Start Your Project', href: '/contact-us' }}
      />
    </>
  );
}
