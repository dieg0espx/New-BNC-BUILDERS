// BNC Builders - National City Location Page

import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section } from '@/components/ui';
import { bannerImages } from '@/lib/constants/images';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { BreadcrumbJsonLd, AreaServedJsonLd } from '@/components/seo/JsonLd';
import { CheckCircle, Home, Bath, ChefHat, Building, ArrowRight, Fence, UtensilsCrossed } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'Home Remodeling National City CA | BNC Builders',
  description: 'Professional home remodeling in National City, CA. Kitchen, bathroom, ADU & exterior renovation. Serving South Bay San Diego. Free estimates from BNC Builders.',
  path: '/areas/national-city',
  keywords: [
    'home remodeling national city',
    'contractor national city',
    'remodeling national city ca',
    'kitchen remodel national city',
    'bathroom remodel national city',
    'national city home renovation',
  ],
});

const services = [
  { title: 'Kitchen Remodeling', href: '/kitchen-remodeling', icon: ChefHat, description: 'Functional, stylish kitchen renovations that maximize space and value in National City\'s diverse housing stock.' },
  { title: 'Bathroom Remodeling', href: '/bathroom-remodeling', icon: Bath, description: 'Modern bathroom updates with durable finishes, improved layouts, and contemporary design for National City homes.' },
  { title: 'Home Remodeling', href: '/home-remodeling', icon: Home, description: 'Complete home renovations that modernize National City properties, improve energy efficiency, and boost curb appeal.' },
  { title: 'ADU Construction', href: '/adus', icon: Building, description: 'Affordable ADU construction to help National City homeowners add living space, generate rental income, or house family.' },
  { title: 'Outdoor Kitchens', href: '/outdoor-kitchens', icon: UtensilsCrossed, description: 'Outdoor cooking and gathering spaces designed for National City\'s mild South Bay climate and family-centered lifestyle.' },
  { title: 'Hardscaping', href: '/hardscaping', icon: Fence, description: 'Low-maintenance patios, walkways, and fencing that enhance National City properties with durable, attractive hardscaping.' },
];

const neighborhoods = [
  'Old Town National City', 'Paradise Hills', 'Lincoln Acres', 'Sweetwater',
  'Olivewood', 'South National City', 'Las Palmas', 'Education Village',
  'Marina District', 'Westside', 'Central National City', 'Sweetwater Town & Country',
];

export default function NationalCityPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Areas We Serve', url: '/areas-we-serve' },
        { name: 'National City', url: '/areas/national-city' },
      ]} />
      <AreaServedJsonLd city="National City" pageUrl="/areas/national-city" />

      <HeroSubpage
        title="Home Remodeling in National City, CA"
        subtitle="From the historic homes of Old Town National City to the growing neighborhoods of Paradise Hills, BNC Builders brings professional remodeling expertise to South Bay San Diego."
        backgroundImage={bannerImages.faq}
      />

      {/* Why National City */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                National City Remodeling Experts
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">
                Remodeling That Transforms National City Homes
              </h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  National City is a vibrant South Bay community with a rich history and a housing market full of opportunity. From the Craftsman-style homes of Old Town to the post-war bungalows and newer construction throughout the city, National City homeowners are investing in renovations that modernize their properties and build long-term value. BNC Builders delivers quality remodeling that makes the most of every dollar.
                </p>
                <p>
                  National City&apos;s housing stock often benefits from targeted upgrades that deliver outsized impact. Kitchen and bathroom renovations in older homes can dramatically improve daily living and resale value. ADU construction is increasingly popular as homeowners look to add rental income or accommodate extended family. And exterior renovations, from new siding to updated landscaping, transform curb appeal throughout the city&apos;s neighborhoods.
                </p>
                <p>
                  BNC Builders is committed to serving National City with the same professionalism and craftsmanship we bring to every San Diego community. We understand the local building codes, work within a range of budgets, and take pride in helping National City homeowners create the living spaces they deserve.
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-dark mb-6">Why National City Trusts BNC</h3>
              <div className="space-y-4">
                {[
                  'Experience with diverse South Bay housing styles',
                  'Knowledge of National City building codes and permits',
                  'Renovations designed to maximize property value',
                  'Expertise updating older homes with modern systems',
                  'Affordable ADU construction for rental income',
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
              Remodeling Services in National City
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From kitchen renovations to ADU construction, we deliver full-service remodeling designed for National City&apos;s homes and South Bay lifestyle.
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
              National City Neighborhoods We Serve
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From the historic streets of Old Town to the family neighborhoods of Paradise Hills, we bring expert craftsmanship to every part of National City.
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
                title: 'Value-Driven Renovations',
                description: 'National City\'s affordable housing market makes remodeling one of the smartest investments, delivering significant value increases with targeted upgrades.',
              },
              {
                title: 'ADU Growth Market',
                description: 'National City\'s zoning and lot configurations make it ideal for ADU construction, helping homeowners generate rental income in the South Bay.',
              },
              {
                title: 'South Bay Revitalization',
                description: 'National City is experiencing renewed investment and growth. Homeowners who renovate now are positioned to benefit from the area\'s upward trajectory.',
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
        title="Ready to Transform Your National City Home?"
        subtitle="Whether it is a kitchen renovation in Old Town or an ADU in Paradise Hills, BNC Builders brings South Bay expertise and proven craftsmanship to every National City project. Contact us for a free estimate."
        primaryAction={{ label: 'Get Your Free Estimate', href: '/contact-us' }}
      />
    </>
  );
}
