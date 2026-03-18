// BNC Builders - ADU Cost Guide San Diego

import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section, AnimatedSection } from '@/components/ui';
import { bannerImages } from '@/lib/constants/images';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/seo/JsonLd';
import { DollarSign, TrendingUp, Calculator, Home, Ruler, Paintbrush, HardHat, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'ADU Cost Guide San Diego 2026',
  description:
    'How much does an ADU cost in San Diego? Complete 2026 cost guide with prices by type, size & finish level. Get a free ADU estimate from BNC Builders.',
  path: '/adus/cost-guide',
  keywords: [
    'adu cost san diego',
    'cost of building an adu in san diego',
    'adu san diego cost',
    'how much does an adu cost',
    'adu cost calculator san diego',
    'adu construction cost san diego',
  ],
});

const costByType = [
  {
    type: 'Detached ADU',
    range: '$200,000 - $350,000',
    sqft: '400 - 1,200 sq ft',
    description:
      'A standalone structure built separately from the main house. Offers maximum privacy and flexibility in design, making it ideal for rental income or multigenerational living.',
    icon: Home,
  },
  {
    type: 'Garage Conversion',
    range: '$100,000 - $200,000',
    sqft: '200 - 600 sq ft',
    description:
      'Converting an existing garage into a livable dwelling unit. The most cost-effective option since the basic structure already exists, reducing foundation and framing costs.',
    icon: HardHat,
  },
  {
    type: 'Attached ADU',
    range: '$150,000 - $300,000',
    sqft: '400 - 1,000 sq ft',
    description:
      'An addition built onto the existing home that shares at least one wall. Saves on construction costs compared to detached units while still providing a separate living space.',
    icon: Ruler,
  },
  {
    type: 'Junior ADU (JADU)',
    range: '$50,000 - $100,000',
    sqft: 'Under 500 sq ft',
    description:
      'Created within the existing footprint of your home, typically by converting a bedroom or portion of the house. The most affordable option with the fastest permitting process.',
    icon: Calculator,
  },
];

const costBreakdown = [
  { category: 'Permits & Fees', percentage: '10 - 15%', detail: 'City permits, plan check fees, school fees, utility connections, and impact fees required by the City of San Diego.' },
  { category: 'Design & Engineering', percentage: '8 - 12%', detail: 'Architectural plans, structural engineering, Title 24 energy compliance, and soil reports if required by your site conditions.' },
  { category: 'Site Preparation', percentage: '5 - 10%', detail: 'Demolition, grading, trenching for utilities, and foundation work. Costs vary significantly based on slope and access.' },
  { category: 'Construction', percentage: '60 - 70%', detail: 'Framing, roofing, electrical, plumbing, HVAC, insulation, drywall, and all structural work for the dwelling unit.' },
  { category: 'Finishing & Fixtures', percentage: '10 - 15%', detail: 'Flooring, cabinetry, countertops, appliances, paint, lighting fixtures, and final landscaping around the ADU.' },
];

const costFactors = [
  {
    title: 'Size & Layout',
    description:
      'A 400 sq ft studio ADU costs significantly less than a 1,200 sq ft two-bedroom unit. Multi-room layouts with separate bathrooms and kitchens add plumbing and electrical costs.',
  },
  {
    title: 'Finish Level',
    description:
      'Standard finishes (laminate counters, vinyl flooring) can save 20-30% compared to premium finishes (quartz counters, hardwood floors, custom cabinetry). Choose based on your goals.',
  },
  {
    title: 'Site Conditions',
    description:
      'Sloped lots, poor soil, limited access for equipment, and distance from existing utility connections all increase site preparation and construction costs substantially.',
  },
  {
    title: 'Utility Connections',
    description:
      'Running new water, sewer, gas, and electrical lines from the street or existing home to the ADU location. Longer distances and difficult terrain increase these costs.',
  },
  {
    title: 'Permitting Jurisdiction',
    description:
      'San Diego city versus county permits differ in fees and requirements. Some areas like Escondido have specific ADU ordinances that affect costs and timelines.',
  },
  {
    title: 'Current Material Prices',
    description:
      'Lumber, concrete, and building material costs fluctuate. In 2026, we see stabilized pricing compared to previous years, but supply chain factors still affect certain materials.',
  },
];

const faqs = [
  {
    question: 'How much does it cost to build an ADU in San Diego in 2026?',
    answer:
      'ADU costs in San Diego range from $50,000 for a Junior ADU (JADU) conversion to $400,000+ for a large, custom detached ADU. The average detached ADU costs between $200,000 and $350,000. Garage conversions typically run $100,000 to $200,000. Exact pricing depends on size, finish level, site conditions, and permit fees.',
  },
  {
    question: 'What is the cost per square foot for an ADU in San Diego?',
    answer:
      'In 2026, the cost per square foot for an ADU in San Diego ranges from $250 to $450 depending on the type and finish level. Garage conversions tend toward the lower end since the shell already exists. New detached construction with premium finishes can reach $400-450 per square foot. BNC Builders provides detailed per-square-foot estimates during our free consultation.',
  },
  {
    question: 'Are there any hidden costs when building an ADU?',
    answer:
      'Common costs homeowners overlook include utility connection fees ($5,000-$15,000), school impact fees (approximately $4.79 per square foot in San Diego), soil and geotechnical reports ($2,000-$5,000), and temporary living adjustments during construction. BNC Builders provides comprehensive estimates that account for all known costs upfront so you are not surprised.',
  },
  {
    question: 'Can I finance my ADU construction?',
    answer:
      'Yes. Popular financing options include home equity loans (HELOCs), cash-out refinancing, construction loans, and ADU-specific loan programs. California also offers CalHFA ADU grants up to $40,000 for qualifying homeowners. Some San Diego homeowners use rental income projections to qualify for construction loans.',
  },
  {
    question: 'How long does it take to get a return on my ADU investment?',
    answer:
      'Most San Diego ADU owners see a full return on investment within 5 to 7 years through rental income. A well-built ADU in San Diego can generate $1,500 to $3,000 per month in rental income depending on location and size. Additionally, an ADU can increase your property value by 20-30%, providing equity gains on top of rental returns.',
  },
  {
    question: 'Is it cheaper to convert a garage or build a new detached ADU?',
    answer:
      'Garage conversions are significantly cheaper, typically costing $100,000 to $200,000 compared to $200,000 to $350,000 for a new detached ADU. However, you lose your garage space, and conversions are limited in size by the existing structure. If rental income or resale value is your priority, a new detached ADU often provides better long-term returns despite the higher upfront cost.',
  },
];

export default function ADUCostGuidePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'ADUs', url: '/adus' },
          { name: 'Cost Guide', url: '/adus/cost-guide' },
        ]}
      />
      <FAQJsonLd faqs={faqs} />

      {/* Hero */}
      <HeroSubpage
        title="How Much Does an ADU Cost in San Diego?"
        subtitle="Your complete 2026 guide to ADU construction costs in San Diego County. Understand pricing by type, size, and finish level before you invest."
        backgroundImage={bannerImages.adu}
      />

      {/* Cost Overview */}
      <Section background="white">
        <Container>
          <AnimatedSection animation="fade-in-up" className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              2026 Cost Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">
              What Does an ADU Actually Cost in San Diego?
            </h2>
            <p className="text-lg text-zinc-600">
              The cost of building an ADU in San Diego ranges from <strong className="text-dark">$50,000 to $400,000+</strong> depending
              on the type, size, finishes, and site conditions. Most homeowners invest between $150,000 and $350,000
              for a fully permitted, move-in-ready accessory dwelling unit. Understanding where your money goes helps
              you plan a realistic budget and avoid surprises.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {costByType.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.type} animation="fade-in-up" delay={index * 100}>
                  <div className="bg-gray-50 rounded-xl p-6 h-full hover:shadow-lg transition-all group">
                    <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:scale-110 transition-all">
                      <Icon className="w-7 h-7 text-gold group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-1">{item.type}</h3>
                    <p className="text-gold font-semibold text-lg mb-1">{item.range}</p>
                    <p className="text-sm text-zinc-500 mb-3">{item.sqft}</p>
                    <p className="text-zinc-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Cost Breakdown */}
      <Section background="gray">
        <Container>
          <AnimatedSection animation="fade-in-up" className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              Where Your Money Goes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">
              ADU Cost Breakdown by Category
            </h2>
            <p className="text-lg text-zinc-600">
              Understanding the cost breakdown helps you make informed decisions about where to invest and where
              to save. Here is how a typical San Diego ADU budget is allocated.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in-up">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="grid grid-cols-12 bg-dark text-white px-6 py-4 font-semibold text-sm">
                  <div className="col-span-4">Category</div>
                  <div className="col-span-2 text-center">% of Budget</div>
                  <div className="col-span-6">Details</div>
                </div>
                {costBreakdown.map((item, index) => (
                  <div
                    key={item.category}
                    className={`grid grid-cols-12 px-6 py-5 items-start gap-2 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    } hover:bg-gold/5 transition-colors`}
                  >
                    <div className="col-span-4 font-semibold text-dark">{item.category}</div>
                    <div className="col-span-2 text-center">
                      <span className="inline-block bg-gold/10 text-gold font-bold px-3 py-1 rounded-full text-sm">
                        {item.percentage}
                      </span>
                    </div>
                    <div className="col-span-6 text-zinc-600 text-sm leading-relaxed">{item.detail}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      {/* Factors Affecting Cost */}
      <Section background="white">
        <Container>
          <AnimatedSection animation="fade-in-up" className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              Key Variables
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">
              Factors That Affect Your ADU Cost
            </h2>
            <p className="text-lg text-zinc-600">
              No two ADU projects are identical. These six factors have the biggest impact on your final cost
              and should be discussed during your initial consultation.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {costFactors.map((factor, index) => (
              <AnimatedSection key={factor.title} animation="fade-in-up" delay={index * 100}>
                <div className="group border border-zinc-200 rounded-xl p-6 h-full hover:border-gold/30 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2">{factor.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{factor.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </Section>

      {/* ROI Section */}
      <Section background="dark" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-left">
              <span className="text-zinc-800 font-semibold uppercase tracking-wider text-sm">
                Return on Investment
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mt-2 mb-6">
                Is Building an ADU in San Diego Worth It?
              </h2>
              <p className="text-zinc-800 mb-6 leading-relaxed">
                An ADU is one of the strongest real estate investments you can make in San Diego. With the
                region&apos;s high demand for rental housing and limited supply, a well-built ADU generates
                reliable income while increasing your property value significantly.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <DollarSign className="w-6 h-6 text-zinc-900 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-zinc-900">Monthly Rental Income</p>
                    <p className="text-zinc-800 text-sm">$1,500 - $3,000/month depending on size, location, and finish level in San Diego County.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-zinc-900 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-zinc-900">Property Value Increase</p>
                    <p className="text-zinc-800 text-sm">ADUs typically add 20-30% to your property value, often exceeding the construction cost.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calculator className="w-6 h-6 text-zinc-900 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-zinc-900">Payback Period</p>
                    <p className="text-zinc-800 text-sm">Most homeowners recover their full ADU investment in 5 to 7 years through rental income alone.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right" delay={200}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-dark mb-6 text-center">Sample ADU ROI Calculation</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-zinc-100">
                    <span className="text-zinc-600">Construction Cost</span>
                    <span className="font-bold text-dark">$250,000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-zinc-100">
                    <span className="text-zinc-600">Monthly Rental Income</span>
                    <span className="font-bold text-dark">$2,200/mo</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-zinc-100">
                    <span className="text-zinc-600">Annual Rental Income</span>
                    <span className="font-bold text-dark">$26,400/yr</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-zinc-100">
                    <span className="text-zinc-600">Estimated Annual Expenses</span>
                    <span className="font-bold text-zinc-500">-$3,600/yr</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-zinc-100">
                    <span className="text-zinc-600">Net Annual Income</span>
                    <span className="font-bold text-gold">$22,800/yr</span>
                  </div>
                  <div className="flex justify-between items-center py-4 bg-gold/10 rounded-lg px-4">
                    <span className="font-semibold text-dark">Payback Period</span>
                    <span className="font-bold text-gold text-xl">~6 Years</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-zinc-600">Property Value Increase</span>
                    <span className="font-bold text-dark">+$150,000 - $250,000</span>
                  </div>
                </div>
                <p className="text-xs text-zinc-400 mt-4 text-center">
                  *Estimates based on 2026 San Diego market data. Actual results vary by location and unit specifics.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      {/* Internal Links */}
      <Section background="white" padding="md">
        <Container>
          <AnimatedSection animation="fade-in-up" className="text-center mb-8">
            <h2 className="text-2xl font-bold text-dark">Learn More About ADUs in San Diego</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'ADU Types Compared', href: '/adus/types', description: 'Detached, attached, garage conversion, JADU & prefab options explained.' },
              { title: 'San Diego ADU Regulations', href: '/adus/regulations', description: 'Setbacks, height limits, parking rules & the permit process.' },
              { title: 'ADU Construction Process', href: '/adus/process', description: 'From consultation to move-in ready, step by step.' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-4 bg-gray-50 rounded-xl p-5 hover:bg-gold hover:shadow-lg transition-all"
              >
                <div className="flex-1">
                  <span className="font-semibold text-dark group-hover:text-white transition-colors block mb-1">
                    {link.title}
                  </span>
                  <span className="text-zinc-500 text-sm group-hover:text-white/80 transition-colors">
                    {link.description}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section background="gray">
        <Container size="md">
          <AnimatedSection animation="fade-in-up" className="text-center mb-12">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2">
              ADU Cost Questions Answered
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={index * 75}>
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-dark mb-2 text-lg">{faq.question}</h3>
                  <p className="text-zinc-600 leading-relaxed">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Get Your Free ADU Cost Estimate"
        subtitle="Every property is different. Contact BNC Builders for a detailed, no-obligation estimate tailored to your San Diego property."
        primaryAction={{ label: 'Get Free Estimate', href: '/contact-us' }}
      />
    </>
  );
}
