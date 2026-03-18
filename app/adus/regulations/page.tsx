// BNC Builders - San Diego ADU Regulations & Permit Guide
// CONTENT FRESHNESS: Regulatory references (SB 9, AB 68, setbacks, etc.) dated 2026.
// Review and update when new CA ADU legislation passes or local codes change.

import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section, AnimatedSection } from '@/components/ui';
import { bannerImages } from '@/lib/constants/images';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/seo/JsonLd';
import { Scale, FileText, Ruler, Car, Clock, CheckCircle, AlertTriangle, ArrowRight, Building, MapPin } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'San Diego ADU Regulations & Permit Guide',
  description:
    'San Diego ADU regulations guide for 2026. Lot requirements, setbacks, height limits, parking rules & permit process. BNC Builders handles permits.',
  path: '/adus/regulations',
  keywords: [
    'san diego adu regulations',
    'adu permit san diego',
    'adu requirements san diego',
    'adu rules san diego',
    'adu setback requirements san diego',
    'adu zoning san diego',
  ],
});

const keyRequirements = [
  {
    title: 'Rear & Side Setbacks',
    value: '4 feet',
    detail:
      'Detached ADUs must be set back at least 4 feet from rear and side property lines. This is a statewide standard under California ADU law, overriding local setback requirements that may have been larger.',
    icon: Ruler,
  },
  {
    title: 'Maximum Height',
    value: '16 feet (detached)',
    detail:
      'Detached ADUs can be up to 16 feet tall, or 18 feet in some cases near transit. Attached ADUs must conform to the height of the primary dwelling. Two-story detached ADUs may be permitted up to 18 feet.',
    icon: Building,
  },
  {
    title: 'Maximum Size',
    value: '1,200 sq ft',
    detail:
      'Detached ADUs can be up to 1,200 square feet. Attached ADUs can be up to 50% of the primary dwelling floor area. JADUs are limited to 500 square feet and must be within the existing home footprint.',
    icon: Scale,
  },
  {
    title: 'Lot Coverage',
    value: 'No minimum lot size',
    detail:
      'California law prohibits cities from imposing minimum lot size requirements for ADUs. San Diego cannot deny an ADU based on lot size, floor area ratio, or lot coverage if the unit meets setback requirements.',
    icon: MapPin,
  },
];

const permitSteps = [
  {
    step: 1,
    title: 'Feasibility Assessment',
    duration: '1 - 2 weeks',
    description:
      'Evaluate your property for ADU potential, including zoning verification, utility access, and site constraints. BNC Builders performs this assessment during your free consultation.',
  },
  {
    step: 2,
    title: 'Design & Engineering',
    duration: '4 - 8 weeks',
    description:
      'Create architectural plans, structural engineering, Title 24 energy calculations, and any required reports (soil, survey). Plans must comply with California Building Code and local amendments.',
  },
  {
    step: 3,
    title: 'Plan Submittal',
    duration: '1 - 2 weeks',
    description:
      'Submit complete plan sets to the City of San Diego Development Services Department. Include all required forms, fees, and supporting documents. BNC Builders handles the entire submittal process.',
  },
  {
    step: 4,
    title: 'Plan Review',
    duration: '4 - 8 weeks',
    description:
      'The city reviews plans for code compliance. San Diego is required to process ADU permits within 60 days of a complete application under state law. Corrections may extend the timeline.',
  },
  {
    step: 5,
    title: 'Permit Issuance',
    duration: '1 - 2 weeks',
    description:
      'Once plans are approved, pay remaining permit fees and receive your building permit. Construction can begin immediately after permit issuance.',
  },
  {
    step: 6,
    title: 'Construction & Inspections',
    duration: '4 - 8 months',
    description:
      'Build the ADU with required inspections at each phase: foundation, framing, rough electrical/plumbing, insulation, and final. Each inspection must pass before the next phase begins.',
  },
];

const parkingRules = [
  'No parking is required if the ADU is within half a mile of public transit.',
  'No parking is required for ADUs located within an existing primary residence or accessory structure (conversions).',
  'No parking is required if the ADU is in a designated historic district.',
  'No parking is required if on-street parking permits are required but not offered to the ADU occupant.',
  'When parking is required, one space per ADU unit is the maximum a city can require.',
  'Tandem parking and parking in setback areas (including the front setback) can satisfy the requirement.',
];

const faqs = [
  {
    question: 'Do I need a permit to build an ADU in San Diego?',
    answer:
      'Yes, all ADUs in San Diego require a building permit from the City of San Diego Development Services Department. This includes detached ADUs, attached ADUs, garage conversions, and JADUs. California law requires cities to approve ADU permits within 60 days of receiving a complete application. BNC Builders manages the entire permitting process for you.',
  },
  {
    question: 'Can I build an ADU on any residential property in San Diego?',
    answer:
      'Under California ADU law (effective January 2020 and updated through 2024), at least one ADU is allowed on any residential lot, including single-family and multi-family properties. There is no minimum lot size requirement. The city cannot deny an ADU based on lot coverage or floor area ratio if the unit is no larger than 800 square feet.',
  },
  {
    question: 'What are the setback requirements for ADUs in San Diego?',
    answer:
      'Detached ADUs require a minimum 4-foot setback from rear and side property lines. No front setback is required beyond what exists for the primary dwelling. For ADUs no larger than 800 square feet, the city cannot impose setbacks greater than 4 feet. Attached ADUs follow the same setback rules as the primary structure.',
  },
  {
    question: 'How long does it take to get an ADU permit in San Diego?',
    answer:
      'The full permitting process typically takes 3 to 6 months from initial design to permit issuance. Plan review by the City of San Diego must be completed within 60 days of a complete application per state law. Design and engineering take an additional 4 to 8 weeks beforehand. BNC Builders expedites this by submitting complete, code-compliant plans that minimize correction cycles.',
  },
  {
    question: 'Can I rent out my ADU in San Diego?',
    answer:
      'Yes, you can rent out your ADU as a long-term rental. However, California law (AB 1033, effective 2024) also allows ADUs to be sold separately from the primary dwelling in some cases. Short-term rentals (under 30 days) of ADUs are generally restricted in San Diego unless the property is owner-occupied. Always check current local regulations.',
  },
  {
    question: 'Do I need to add parking for my ADU?',
    answer:
      'In most cases, no additional parking is required. Parking exemptions apply if your ADU is within half a mile of public transit, is a conversion of existing space, or is in a historic district. When parking is required, only one space per ADU is the maximum. This space can be tandem or located in setback areas including the front yard.',
  },
  {
    question: 'What is the difference between an ADU and a JADU in San Diego?',
    answer:
      'A Junior ADU (JADU) is created within the existing footprint of the primary residence and must be 500 square feet or less. It requires an interior connection to the main home (which can be a door that locks from both sides) and may share a bathroom with the primary dwelling. JADUs have a simplified permit process and lower costs. A standard ADU is a fully independent dwelling with its own kitchen, bathroom, and entrance.',
  },
];

export default function ADURegulationsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'ADUs', url: '/adus' },
          { name: 'Regulations', url: '/adus/regulations' },
        ]}
      />
      <FAQJsonLd faqs={faqs} />

      {/* Hero */}
      <HeroSubpage
        title="San Diego ADU Regulations: What You Need to Know"
        subtitle="Navigate San Diego's ADU rules with confidence. From setbacks to permits, understand what's required before you build."
        backgroundImage={bannerImages.adu}
      />

      {/* Overview Section */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-left">
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                California ADU Laws
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">
                California Has Made ADUs Easier Than Ever to Build
              </h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  California has passed landmark legislation to streamline ADU construction statewide. Key laws
                  including <strong className="text-dark">SB 9</strong>, <strong className="text-dark">AB 68</strong>,
                  <strong className="text-dark"> AB 881</strong>, and <strong className="text-dark">AB 1033</strong> have
                  eliminated many barriers that previously made ADUs difficult or impossible to permit.
                </p>
                <p>
                  These laws prevent cities from imposing minimum lot sizes, limit setback requirements, cap
                  parking mandates, and require permit approval within 60 days. San Diego has updated its
                  municipal code to comply, making the city one of the most ADU-friendly in the state.
                </p>
                <p className="font-medium text-dark">
                  The result: if you own residential property in San Diego, you almost certainly have the right
                  to build at least one ADU. BNC Builders navigates these regulations daily and handles every
                  aspect of compliance for our clients.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right" delay={200}>
              <div className="bg-gold rounded-2xl p-8">
                <h3 className="text-xl font-bold text-zinc-900 mb-6">Key State Laws You Should Know</h3>
                <div className="space-y-5">
                  {[
                    { law: 'SB 9 (2021)', summary: 'Allows lot splits and duplexes on single-family lots, creating new ADU opportunities on subdivided parcels.' },
                    { law: 'AB 68 & AB 881 (2020)', summary: 'Eliminated minimum lot sizes, reduced setbacks to 4 feet, capped parking requirements, and set 60-day approval deadlines.' },
                    { law: 'AB 1033 (2024)', summary: 'Allows ADUs to be sold as condominiums separately from the primary dwelling, creating new ownership possibilities.' },
                    { law: 'SB 897 (2023)', summary: 'Increased maximum height for detached ADUs to 18 feet near transit and allows two-story ADUs in more situations.' },
                  ].map((item) => (
                    <div key={item.law} className="flex items-start gap-3">
                      <Scale className="w-5 h-5 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-zinc-900">{item.law}</p>
                        <p className="text-zinc-800 text-sm">{item.summary}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      {/* Key Requirements */}
      <Section background="gray">
        <Container>
          <AnimatedSection animation="fade-in-up" className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              Requirements at a Glance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">
              San Diego ADU Requirements in 2026
            </h2>
            <p className="text-lg text-zinc-600">
              These are the primary dimensional and zoning requirements for building an ADU in San Diego.
              BNC Builders evaluates your specific property against all requirements during our free feasibility assessment.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {keyRequirements.map((req, index) => {
              const Icon = req.icon;
              return (
                <AnimatedSection key={req.title} animation="fade-in-up" delay={index * 100}>
                  <div className="bg-white rounded-xl p-8 h-full hover:shadow-lg transition-shadow group">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
                        <Icon className="w-7 h-7 text-gold group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-dark mb-1">{req.title}</h3>
                        <p className="text-gold font-semibold text-lg mb-3">{req.value}</p>
                        <p className="text-zinc-600 leading-relaxed">{req.detail}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Parking Rules */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-left">
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                Parking Requirements
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">
                ADU Parking Rules in San Diego
              </h2>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                One of the biggest changes in California ADU law is the relaxation of parking requirements.
                Most San Diego ADU projects qualify for a complete parking exemption, removing what was
                historically one of the largest obstacles to ADU construction.
              </p>
              <div className="space-y-3">
                {parkingRules.map((rule, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-600">{rule}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right" delay={200}>
              <div className="bg-gray-50 rounded-xl p-8 border border-zinc-200">
                <div className="flex items-center gap-3 mb-4">
                  <Car className="w-6 h-6 text-gold" />
                  <h3 className="text-xl font-bold text-dark">Parking Exemption Check</h3>
                </div>
                <p className="text-zinc-600 mb-6">
                  Your ADU likely qualifies for a parking exemption if any of these apply:
                </p>
                <div className="space-y-4">
                  {[
                    'Within 1/2 mile of a bus stop, trolley station, or transit center',
                    'Converting existing space (garage, basement, or portion of home)',
                    'Located in a designated historic district',
                    'Car-share vehicle is available within one block',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                      <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-zinc-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-zinc-500 mt-4">
                  Not sure if you qualify? <Link href="/contact-us" className="text-gold hover:underline font-medium">Ask BNC Builders</Link> during your free consultation.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      {/* Permit Process Timeline */}
      <Section background="gray">
        <Container>
          <AnimatedSection animation="fade-in-up" className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              Permit Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">
              ADU Permit Timeline in San Diego
            </h2>
            <p className="text-lg text-zinc-600">
              The complete ADU permit and construction process typically takes 8 to 14 months from start to finish.
              Here is what each phase looks like.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-6">
            {permitSteps.map((step, index) => (
              <AnimatedSection key={step.step} animation="fade-in-up" delay={index * 75}>
                <div className="flex gap-6 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-dark">{step.title}</h3>
                      <span className="inline-flex items-center gap-1 text-sm text-gold font-medium bg-gold/10 px-3 py-1 rounded-full">
                        <Clock className="w-3.5 h-3.5" />
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-zinc-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-in-up" delay={500} className="mt-8">
            <div className="max-w-4xl mx-auto bg-gold/10 border border-gold/20 rounded-xl p-6 flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-dark mb-1">BNC Builders Handles All Permits</p>
                <p className="text-zinc-600 text-sm">
                  You should not have to navigate San Diego&apos;s permitting process alone. Our team prepares all
                  documentation, submits plans, responds to corrections, and coordinates inspections. We have
                  established relationships with the Development Services Department and know how to keep your
                  project moving.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Escondido-Specific Section */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-left">
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                Local Spotlight
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">
                ADU Regulations in Escondido
              </h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  As a BNC Builders home base, we have deep expertise in Escondido&apos;s specific ADU ordinances.
                  While Escondido must comply with state ADU law, the city has its own submission requirements
                  and review process that differ from the City of San Diego.
                </p>
                <p>
                  Escondido processes ADU permits through its Building Division and typically completes plan review
                  within the state-mandated 60-day window. The city has been increasingly supportive of ADU
                  construction as part of its housing element compliance.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {[
                  'Same 4-foot setback requirements as state law',
                  'ADU permits processed through Escondido Building Division',
                  'No owner-occupancy requirement for ADUs (state law)',
                  'Impact fees waived for ADUs under 750 sq ft',
                  'BNC Builders has completed multiple ADU projects in Escondido',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-600">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right" delay={200}>
              <div className="bg-gray-50 rounded-xl p-8 border border-zinc-200">
                <FileText className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-xl font-bold text-dark mb-4">Common ADU Permit Documents</h3>
                <p className="text-zinc-600 mb-6 text-sm">
                  These are the typical documents required for an ADU permit application in San Diego County:
                </p>
                <ul className="space-y-3">
                  {[
                    'Architectural plans (site plan, floor plan, elevations)',
                    'Structural engineering calculations',
                    'Title 24 energy compliance report',
                    'Soil/geotechnical report (if required)',
                    'Plot plan showing setbacks and easements',
                    'Utility connection plan (water, sewer, electrical)',
                    'Completed permit application forms',
                    'Owner authorization and property deed',
                  ].map((doc, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-zinc-700">
                      <FileText className="w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      {/* Internal Links */}
      <Section background="gray" padding="md">
        <Container>
          <AnimatedSection animation="fade-in-up" className="text-center mb-8">
            <h2 className="text-2xl font-bold text-dark">Continue Your ADU Research</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'ADU Cost Guide', href: '/adus/cost-guide', description: 'Complete 2026 pricing by type, size & finish level.' },
              { title: 'Types of ADUs', href: '/adus/types', description: 'Compare detached, attached, garage conversion & JADU.' },
              { title: 'Construction Process', href: '/adus/process', description: 'Step-by-step from consultation to move-in ready.' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-4 bg-white rounded-xl p-5 hover:bg-gold hover:shadow-lg transition-all"
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
      <Section background="white">
        <Container size="md">
          <AnimatedSection animation="fade-in-up" className="text-center mb-12">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2">
              ADU Regulation Questions Answered
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={index * 75}>
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
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
        title="BNC Builders Handles All ADU Permits for You"
        subtitle="Skip the stress of navigating San Diego ADU regulations. Our team manages every permit, document, and inspection from start to finish."
        primaryAction={{ label: 'Schedule Free Consultation', href: '/contact-us' }}
      />
    </>
  );
}
