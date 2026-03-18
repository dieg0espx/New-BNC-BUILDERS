// BNC Builders - Types of ADUs in San Diego

import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section, AnimatedSection } from '@/components/ui';
import { bannerImages } from '@/lib/constants/images';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/seo/JsonLd';
import { Home, Building, Warehouse, DoorOpen, Factory, CheckCircle, X, ArrowRight, Star, DollarSign, Clock, Ruler } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'Types of ADUs in San Diego',
  description:
    'Explore ADU types: detached, attached, garage conversion, JADU & prefab. Compare pros, cons & costs for each. Custom ADU builder in San Diego - BNC Builders.',
  path: '/adus/types',
  keywords: [
    'prefab adu san diego',
    'custom adu builders',
    'garage conversion adu',
    'types of adu',
    'accessory dwelling unit builder',
    'detached adu san diego',
    'attached adu san diego',
  ],
});

const aduTypes = [
  {
    id: 'detached',
    title: 'Detached ADU',
    subtitle: 'A Standalone Dwelling on Your Property',
    icon: Home,
    description:
      'A detached ADU is a completely separate structure built on your property, independent from the primary residence. It has its own foundation, walls, roof, entrance, kitchen, bathroom, and living space. This is the most popular ADU type in San Diego for homeowners seeking maximum rental income or a fully private living space for family members.',
    specs: [
      { label: 'Max Size', value: 'Up to 1,200 sq ft' },
      { label: 'Typical Cost', value: '$200,000 - $350,000' },
      { label: 'Timeline', value: '10 - 14 months' },
      { label: 'Setbacks', value: '4 ft rear & side' },
    ],
    pros: [
      'Maximum privacy for occupants and homeowner',
      'Highest rental income potential due to full separation',
      'Complete design flexibility for layout and finishes',
      'Greatest property value increase',
      'Can include garage or carport underneath',
    ],
    cons: [
      'Highest construction cost among ADU types',
      'Longest construction timeline',
      'Requires adequate yard space',
      'More complex utility connections',
    ],
    bestFor: 'Homeowners with available yard space who want maximum rental income, property value increase, or a fully independent living space for aging parents or adult children.',
  },
  {
    id: 'attached',
    title: 'Attached ADU',
    subtitle: 'An Addition Connected to Your Home',
    icon: Building,
    description:
      'An attached ADU is built as an addition to your existing home, sharing at least one wall with the primary dwelling. It has its own separate entrance, kitchen, and bathroom but benefits from the structural connection to the main house. This type works well when yard space is limited or when you want easier access between the main home and the ADU.',
    specs: [
      { label: 'Max Size', value: '50% of primary home or 1,200 sq ft' },
      { label: 'Typical Cost', value: '$150,000 - $300,000' },
      { label: 'Timeline', value: '8 - 12 months' },
      { label: 'Setbacks', value: 'Same as primary dwelling' },
    ],
    pros: [
      'Lower cost than detached due to shared wall and foundation',
      'Shorter construction timeline',
      'Shared utilities reduce connection costs',
      'Maintains more of your yard space',
      'Easier to integrate with existing home design',
    ],
    cons: [
      'Less privacy than a detached unit',
      'Size limited by primary dwelling footprint',
      'May require modifications to existing home',
      'Shared wall means some noise transfer',
    ],
    bestFor: 'Homeowners with limited yard space who still want a substantial ADU, or those who want easy access to the unit for caring for elderly parents.',
  },
  {
    id: 'garage-conversion',
    title: 'Garage Conversion ADU',
    subtitle: 'Transform Your Existing Garage',
    icon: Warehouse,
    description:
      'A garage conversion ADU transforms your existing garage into a fully livable dwelling unit with kitchen, bathroom, bedroom, and living areas. Since the basic structure already exists, this is typically the most cost-effective way to add an ADU to your property. California law specifically protects homeowners\' right to convert garages to ADUs, even if it eliminates required parking.',
    specs: [
      { label: 'Typical Size', value: '200 - 600 sq ft' },
      { label: 'Typical Cost', value: '$100,000 - $200,000' },
      { label: 'Timeline', value: '4 - 8 months' },
      { label: 'Setbacks', value: 'Existing footprint (no change required)' },
    ],
    pros: [
      'Lowest construction cost since structure exists',
      'Fastest construction timeline',
      'No setback issues (existing footprint is grandfathered)',
      'No new foundation needed in most cases',
      'Parking replacement is not required by state law',
    ],
    cons: [
      'Limited by existing garage dimensions',
      'May need significant structural upgrades',
      'Ceiling height can be a challenge (minimum 7 ft required)',
      'Loss of garage storage and vehicle parking',
      'Existing garage may need new insulation, windows, and utilities',
    ],
    bestFor: 'Budget-conscious homeowners who want the fastest, most affordable path to an ADU and are willing to give up their garage space.',
  },
  {
    id: 'jadu',
    title: 'Junior ADU (JADU)',
    subtitle: 'A Unit Within Your Existing Home',
    icon: DoorOpen,
    description:
      'A Junior ADU is created within the existing footprint of your primary residence, typically by converting a bedroom, bonus room, or a portion of the home into a separate living unit. JADUs are limited to 500 square feet and must include a cooking facility (which can be a small efficiency kitchen). They must have an interior connection to the main home, though it can be a door that locks from both sides.',
    specs: [
      { label: 'Max Size', value: '500 sq ft' },
      { label: 'Typical Cost', value: '$50,000 - $100,000' },
      { label: 'Timeline', value: '3 - 6 months' },
      { label: 'Setbacks', value: 'None (within existing footprint)' },
    ],
    pros: [
      'Lowest cost ADU option available',
      'Fastest permitting and construction',
      'No impact on yard space',
      'May share bathroom with main home',
      'Can be built in addition to a standard ADU (both on one lot)',
      'Owner-occupancy required only for JADU, not standard ADU',
    ],
    cons: [
      'Limited to 500 sq ft maximum',
      'Must be within existing home footprint',
      'Lower rental income than larger ADUs',
      'Interior connection to main home required',
      'Efficiency kitchen may limit appeal to tenants',
    ],
    bestFor: 'Homeowners who want supplemental income with minimal investment, or those who want both a JADU and a standard ADU on the same lot for maximum rental potential.',
  },
];

const prefabVsCustom = [
  {
    feature: 'Design Flexibility',
    prefab: 'Limited to manufacturer models and options',
    custom: 'Fully customized to your property and preferences',
    winner: 'custom',
  },
  {
    feature: 'Construction Timeline',
    prefab: '2 - 4 months (after site prep)',
    custom: '4 - 8 months construction',
    winner: 'prefab',
  },
  {
    feature: 'Cost Range',
    prefab: '$150,000 - $300,000 installed',
    custom: '$150,000 - $400,000',
    winner: 'tie',
  },
  {
    feature: 'Quality Control',
    prefab: 'Factory-controlled environment',
    custom: 'On-site quality management',
    winner: 'tie',
  },
  {
    feature: 'Site Adaptation',
    prefab: 'Limited to flat, accessible lots',
    custom: 'Adapts to any site condition',
    winner: 'custom',
  },
  {
    feature: 'Resale Value',
    prefab: 'Moderate value increase',
    custom: 'Higher perceived value by buyers',
    winner: 'custom',
  },
  {
    feature: 'Permitting',
    prefab: 'Still requires full permitting',
    custom: 'Same permitting requirements',
    winner: 'tie',
  },
  {
    feature: 'Long-term Durability',
    prefab: 'Varies by manufacturer',
    custom: 'Site-built to local codes with proven materials',
    winner: 'custom',
  },
];

const faqs = [
  {
    question: 'What is the best type of ADU to build in San Diego?',
    answer:
      'The best ADU type depends on your goals, property, and budget. For maximum rental income and property value, a detached ADU is the strongest choice. For the lowest cost and fastest timeline, a garage conversion is ideal. Attached ADUs work well on properties with limited yard space. A JADU is best for minimal investment with supplemental income. BNC Builders evaluates your specific property to recommend the optimal ADU type during our free consultation.',
  },
  {
    question: 'Can I build both a JADU and a standard ADU on my property?',
    answer:
      'Yes. California law allows one JADU and one standard ADU on a single-family residential lot. This means you could have your primary home, a detached ADU in the backyard, and a JADU converted from a bedroom inside your home. This combination maximizes your rental income potential from a single property.',
  },
  {
    question: 'What is a prefab ADU and is it cheaper than custom-built?',
    answer:
      'A prefab (prefabricated) ADU is manufactured off-site in a factory and assembled on your property. While prefab ADUs can be faster to install, they are not necessarily cheaper when you factor in site preparation, foundation work, utility connections, and permitting. The total installed cost often approaches custom-built pricing. Custom ADUs offer more design flexibility and tend to integrate better with existing homes.',
  },
  {
    question: 'How do I know which ADU type fits my property?',
    answer:
      'Key factors include your available yard space, property slope, existing structures, utility locations, setback distances, and your goals (rental income vs. family use). Properties with large flat backyards are ideal for detached ADUs. Those with existing garages can consider conversions. Smaller lots may be better suited to attached ADUs or JADUs. BNC Builders provides a free property assessment to determine your best options.',
  },
  {
    question: 'Can I convert my garage to an ADU and still build a detached ADU?',
    answer:
      'This depends on your property and local zoning. Under California law, you are generally allowed one ADU plus one JADU per single-family lot. Some municipalities allow a garage conversion ADU plus a detached ADU if the property meets all requirements. BNC Builders can assess your specific situation during a property consultation.',
  },
  {
    question: 'What is the difference between a guest house and an ADU?',
    answer:
      'The key legal difference is that an ADU includes a full kitchen with cooking facilities, making it a complete independent dwelling unit. A guest house typically lacks a kitchen and cannot be rented as an independent unit. ADUs require building permits, must meet California Building Code, and can be legally rented. Converting a guest house to an ADU requires adding a kitchen and obtaining proper permits.',
  },
];

export default function ADUTypesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'ADUs', url: '/adus' },
          { name: 'Types of ADUs', url: '/adus/types' },
        ]}
      />
      <FAQJsonLd faqs={faqs} />

      {/* Hero */}
      <HeroSubpage
        title="Which Type of ADU Is Right for Your Property?"
        subtitle="Compare detached, attached, garage conversion, JADU, and prefab ADUs. Find the best option for your San Diego property and goals."
        backgroundImage={bannerImages.adu}
      />

      {/* Intro */}
      <Section background="white">
        <Container>
          <AnimatedSection animation="fade-in-up" className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              ADU Types Explained
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">
              Four Types of Accessory Dwelling Units
            </h2>
            <p className="text-lg text-zinc-600">
              San Diego homeowners can choose from four main ADU types, each with distinct advantages in cost,
              timeline, and functionality. Understanding the differences helps you make the best investment for
              your property and goals.
            </p>
          </AnimatedSection>

          {/* Quick Comparison Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {aduTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <AnimatedSection key={type.id} animation="fade-in-up" delay={index * 100}>
                  <a href={`#${type.id}`} className="block bg-gray-50 rounded-xl p-6 hover:shadow-lg hover:bg-white transition-all group h-full">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                      <Icon className="w-6 h-6 text-gold group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-dark mb-1">{type.title}</h3>
                    <p className="text-sm text-zinc-500 mb-3">{type.specs[1].value}</p>
                    <span className="text-gold text-sm font-medium group-hover:underline">Learn more</span>
                  </a>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Detailed ADU Type Sections */}
      {aduTypes.map((type, typeIndex) => {
        const Icon = type.icon;
        const isEven = typeIndex % 2 === 0;
        return (
          <Section key={type.id} background={isEven ? 'gray' : 'white'} id={type.id}>
            <Container>
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Content */}
                <AnimatedSection animation={isEven ? 'fade-in-left' : 'fade-in-right'} className={isEven ? '' : 'lg:order-2'}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gold flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-dark">{type.title}</h2>
                      <p className="text-gold font-medium">{type.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-zinc-600 leading-relaxed mb-6">{type.description}</p>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {type.specs.map((spec) => (
                      <div key={spec.label} className="bg-white rounded-lg p-4 border border-zinc-100">
                        <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">{spec.label}</p>
                        <p className="font-semibold text-dark">{spec.value}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-zinc-500 mb-4">
                    <Star className="w-4 h-4 text-gold inline mr-1" />
                    <strong className="text-dark">Best for:</strong> {type.bestFor}
                  </p>
                </AnimatedSection>

                {/* Pros & Cons */}
                <AnimatedSection animation={isEven ? 'fade-in-right' : 'fade-in-left'} delay={200} className={isEven ? '' : 'lg:order-1'}>
                  <div className="bg-white rounded-xl p-8 border border-zinc-200 h-full">
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Advantages
                      </h3>
                      <ul className="space-y-2">
                        {type.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2 text-sm text-zinc-600">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
                        <X className="w-5 h-5 text-red-500" />
                        Considerations
                      </h3>
                      <ul className="space-y-2">
                        {type.cons.map((con) => (
                          <li key={con} className="flex items-start gap-2 text-sm text-zinc-600">
                            <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </Container>
          </Section>
        );
      })}

      {/* Prefab vs Custom Comparison */}
      <Section background="gray">
        <Container>
          <AnimatedSection animation="fade-in-up" className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              Build Method Comparison
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">
              Prefab ADU vs. Custom-Built ADU in San Diego
            </h2>
            <p className="text-lg text-zinc-600">
              Considering a prefab ADU in San Diego? Here is how factory-built units compare to custom-built ADUs
              across the factors that matter most.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up">
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-12 bg-dark text-white px-6 py-4 font-semibold text-sm">
                <div className="col-span-3">Feature</div>
                <div className="col-span-4 text-center flex items-center justify-center gap-2">
                  <Factory className="w-4 h-4" /> Prefab ADU
                </div>
                <div className="col-span-4 text-center flex items-center justify-center gap-2">
                  <Home className="w-4 h-4" /> Custom-Built
                </div>
                <div className="col-span-1"></div>
              </div>
              {prefabVsCustom.map((row, index) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-12 px-6 py-4 items-center text-sm ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } hover:bg-gold/5 transition-colors`}
                >
                  <div className="col-span-3 font-semibold text-dark">{row.feature}</div>
                  <div className={`col-span-4 text-center text-zinc-600 ${row.winner === 'prefab' ? 'font-medium text-dark' : ''}`}>
                    {row.prefab}
                  </div>
                  <div className={`col-span-4 text-center text-zinc-600 ${row.winner === 'custom' ? 'font-medium text-dark' : ''}`}>
                    {row.custom}
                  </div>
                  <div className="col-span-1 text-center">
                    {row.winner === 'custom' && <span className="text-gold text-xs font-bold">CUSTOM</span>}
                    {row.winner === 'prefab' && <span className="text-blue-600 text-xs font-bold">PREFAB</span>}
                    {row.winner === 'tie' && <span className="text-zinc-400 text-xs">TIE</span>}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200} className="mt-8 max-w-3xl mx-auto text-center">
            <p className="text-zinc-600">
              BNC Builders specializes in <strong className="text-dark">custom-built ADUs</strong> designed specifically for your
              San Diego property. Our custom approach ensures your ADU integrates perfectly with your home, maximizes
              your available space, and meets your exact specifications.{' '}
              <Link href="/contact-us" className="text-gold hover:underline font-medium">
                Request a free design consultation
              </Link>.
            </p>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Internal Links */}
      <Section background="white" padding="md">
        <Container>
          <AnimatedSection animation="fade-in-up" className="text-center mb-8">
            <h2 className="text-2xl font-bold text-dark">More ADU Resources</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'ADU Cost Guide', href: '/adus/cost-guide', description: 'Detailed 2026 pricing for every ADU type in San Diego.', icon: DollarSign },
              { title: 'Regulations & Permits', href: '/adus/regulations', description: 'Setbacks, height limits, parking rules & permit timeline.', icon: Ruler },
              { title: 'Construction Process', href: '/adus/process', description: 'Step-by-step from design to move-in ready.', icon: Clock },
            ].map((link) => {
              const LinkIcon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-4 bg-gray-50 rounded-xl p-5 hover:bg-gold hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <LinkIcon className="w-5 h-5 text-gold group-hover:text-white transition-colors" />
                  </div>
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
              );
            })}
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
              ADU Type Questions Answered
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
        title="Not Sure Which ADU Type Is Right for You?"
        subtitle="BNC Builders will assess your San Diego property and recommend the ADU type that best fits your goals, budget, and lot conditions."
        primaryAction={{ label: 'Get Free Property Assessment', href: '/contact-us' }}
      />
    </>
  );
}
