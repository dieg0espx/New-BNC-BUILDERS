// BNC Builders - Home Page (SEO Optimized)

'use client';

import Link from 'next/link';
import { HeroMain, ServiceGrid, TrustBadges, CTABanner, ContentSection, ServiceAreaContact, TeamContactInfo, ProcessSteps } from '@/components/sections';
import { QuickContactForm } from '@/components/forms';
import { Container, Section, Carousel, AnimatedSection } from '@/components/ui';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { interiorServices, exteriorServices } from '@/lib/constants/services';
import { contentImages } from '@/lib/constants/images';
import { portfolioCategories } from '@/lib/constants/portfolio';
import { Star, Quote, Shield, Clock, Award, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { useInView } from '@/lib/hooks/useInView';

const processSteps = [
  {
    number: 1,
    title: 'Schedule Your Free Consultation',
    description: 'Connect with our team to discuss your remodeling project. We visit your home, take measurements, and listen to your vision for the perfect transformation.',
  },
  {
    number: 2,
    title: 'Custom Design & Detailed Planning',
    description: 'Our designers craft a personalized plan - including 3D previews for exterior projects - so you can see your vision come to life before construction begins.',
  },
  {
    number: 3,
    title: 'Expert Construction & Final Walkthrough',
    description: 'Watch your dream become reality as our craftsmen complete your project with precision, premium materials, and on-time delivery.',
  },
];

const testimonials = [
  {
    name: 'David & Maria T.',
    location: 'Escondido, CA',
    rating: 5,
    text: 'We chose BNC Builders for our kitchen remodel and never looked back. They transformed our dated 1990s kitchen into a stunning modern space that exceeded every expectation.',
  },
  {
    name: 'Robert H.',
    location: 'San Diego, CA',
    rating: 5,
    text: 'BNC Builders handled our ADU project in San Diego from permit to completion. The attention to detail, communication, and craftsmanship made this complex project feel effortless.',
  },
  {
    name: 'Patricia W.',
    location: 'Poway, CA',
    rating: 5,
    text: 'We needed bathroom remodeling at two properties, and BNC delivered exceptional results at both locations. Their team also repaired our aging deck beautifully.',
  },
];

const coreValues = [
  {
    icon: Shield,
    title: 'Complete Transparency',
    description: 'Every remodeling project comes with detailed quotes, clear timelines, and honest communication from start to finish.',
    highlight: 'Trust',
    points: ['Itemized estimates', 'Weekly progress updates', 'No surprise charges'],
  },
  {
    icon: Award,
    title: 'Master Craftsmanship',
    description: 'Three decades of expertise powers every project we undertake, from interior renovations to full exterior transformations.',
    highlight: '30+ Years',
    points: ['Licensed professionals', 'Premium materials only', 'Built to last'],
  },
  {
    icon: Users,
    title: 'Your Vision First',
    description: 'From initial consultation to final walkthrough, your dream home guides every decision we make.',
    highlight: 'Priority',
    points: ['Dedicated project manager', 'Design collaboration', 'Flexible solutions'],
  },
  {
    icon: Clock,
    title: 'Guaranteed Timelines',
    description: 'Whether it\'s a deck repair, room addition, or garage conversion, we deliver on schedule, every time.',
    highlight: 'Reliable',
    points: ['Realistic scheduling', 'Milestone tracking', 'On-time completion'],
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroMain />

      {/* Trust Badges */}
      <TrustBadges showBadges={false} showSellingPoints={true} />

      {/* About/Intro Section */}
      <ContentSection
        title="San Diego County's Premier Design-Build Contractor"
        content={[
          'Since 2019, BNC Builders has transformed over 900 homes across San Diego County, bringing 30+ years of combined construction expertise to every project. Our design-build approach means one team handles your project from concept to completion - no miscommunication between architects, designers, and builders.',
          'We\'ve helped homeowners across Escondido, Poway, and the greater San Diego area transform kitchens, bathrooms, and outdoor spaces. Whether it\'s a spa-like bathroom retreat, a custom ADU, or expert deck repair, our team delivers magazine-worthy results.',
          'What sets us apart? Every project starts with a detailed design phase - including 3D previews for exterior and landscape work - so you see exactly what you\'re getting before construction begins. Paired with a dedicated project manager, clear communication, and premium materials, your renovation stays on track and on budget.',
        ]}
        image={contentImages.contentImg}
        imageAlt="BNC Builders expert team completing a home renovation project in San Diego County"
        imagePosition="right"
      />

      {/* Stats Section */}
      <StatsSection />

      {/* Interior Services */}
      <ServiceGrid
        title="Complete Interior Remodeling Solutions"
        subtitle="BNC Builders delivers stunning interior renovations across San Diego County. Whether you're planning a kitchen overhaul, bathroom refresh, garage conversion, or room addition, we bring expert craftsmanship to every space."
        services={interiorServices}
        columns={3}
      />

      {/* Process Steps */}
      <ProcessSteps
        title="Your Remodeling Journey in Three Simple Steps"
        subtitle="BNC Builders streamlines your project from start to finish so the experience feels easy and enjoyable."
        steps={processSteps}
        background="gray"
      />

      {/* Exterior Services */}
      <ServiceGrid
        title="Professional Exterior Remodeling & Outdoor Living"
        subtitle="Elevate your outdoor space with BNC Builders. We handle landscape remodeling, custom outdoor kitchens, deck repair, hardscaping, exterior renovations, and ADU construction - and our 3D landscape design lets you visualize everything before we break ground."
        services={exteriorServices}
        columns={3}
      />

      {/* Portfolio Showcase Carousel */}
      <Section background="white">
        <Container>
          <AnimatedSection animation="fade-in-up" className="text-center mb-12">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              Featured Transformations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">
              Kitchen, Bathroom, ADU & Exterior Project Showcase
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Explore our portfolio featuring projects across San Diego, Escondido, San Marcos, Encinitas, and Rancho Santa Fe.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200} className="px-4 lg:px-8">
            <Carousel
              autoPlay={true}
              autoPlayInterval={4000}
              showDots={true}
              showArrows={true}
              itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
            >
              {portfolioCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/portfolio/${category.slug}`}
                  className="group relative h-80 rounded-xl overflow-hidden block shadow-lg hover-lift"
                >
                  <CloudinaryImage
                    publicId={category.featuredImage}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors mb-2 drop-shadow-lg">
                      {category.name}
                    </h3>
                    <p className="text-sm text-white/90 line-clamp-2 drop-shadow-md">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-gold text-sm font-medium mt-3 group-hover:gap-2 transition-all drop-shadow-md">
                      View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </Carousel>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={400} className="text-center mt-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-semibold px-8 py-3 rounded-lg transition-all hover:gap-3 btn-animated"
            >
              View Full Portfolio
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Core Values - Why Choose Us */}
      <CoreValuesSection coreValues={coreValues} />

      {/* Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Trust Section with Badges */}
      <TrustBadges showBadges={true} showSellingPoints={false} />

      {/* Service Area & Contact Form */}
      <ServiceAreaContact />

      {/* CTA */}
      <CTABanner
        title="Start Your Remodeling Project Today"
        subtitle="Request your free estimate from BNC Builders. We offer kitchen and bathroom remodeling, ADU construction, deck repair, room additions, garage conversions, exterior renovations, and outdoor kitchens across San Diego County. Financing available, and every project is backed by comprehensive warranties."
        primaryAction={{ label: 'Get Free Estimate', href: '/contact-us' }}
        secondaryAction={{ label: 'View Our Portfolio', href: '/portfolio' }}
      />

      {/* Team Contact Info */}
      <TeamContactInfo />
    </>
  );
}

// Stats Section with animations
function StatsSection() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.3 });
  const stats = [
    { value: '900+', label: 'Homes Transformed' },
    { value: '30+', label: 'Years Combined Experience' },
    { value: '5.0', label: 'Google Star Rating' },
    { value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <Section background="dark" padding="md">
      <Container>
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`card-animate ${inView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 hover:scale-110 transition-transform cursor-default">
                {stat.value}
              </div>
              <div className="text-white">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// Core Values Section with animations
interface CoreValue {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  highlight: string;
  points: string[];
}

function CoreValuesSection({ coreValues }: { coreValues: CoreValue[] }) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <Section background="dark" padding="lg">
      <Container>
        <AnimatedSection animation="fade-in-up" className="text-center mb-12">
          <span className="text-white font-semibold uppercase tracking-wider text-sm">
            The BNC Builders Advantage
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            Why Local Homeowners Choose BNC Builders
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            More than contractors, we're your remodeling partners - bringing every home renovation vision to life with our design-build expertise.
          </p>
        </AnimatedSection>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className={`bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-gold/30 transition-all duration-300 hover-lift card-animate ${inView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">{value.title}</h3>
                <p className="text-zinc-600 text-sm mb-4">{value.description}</p>
                <ul className="space-y-2 text-left">
                  {value.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

// Testimonials Section with animations
interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <Section background="white">
      <Container>
        <AnimatedSection animation="fade-in-up" className="text-center mb-12">
          <span className="text-gold font-semibold uppercase tracking-wider text-sm">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">
            Real Results from Real BNC Builders Clients
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Discover why homeowners across Escondido, San Diego, and the surrounding area trust BNC Builders for their home renovations.
          </p>
        </AnimatedSection>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-zinc-50 rounded-xl p-6 relative hover-lift card-animate ${inView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Quote className="w-10 h-10 text-gold/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-zinc-600 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
              <div>
                <p className="font-bold text-dark">{testimonial.name}</p>
                <p className="text-sm text-zinc-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <AnimatedSection animation="fade-in-up" delay={500} className="text-center mt-8">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-semibold transition-all hover:gap-3 link-underline"
          >
            Read More Reviews
            <ArrowRight className="w-5 h-5" />
          </Link>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
