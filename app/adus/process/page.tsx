// BNC Builders - ADU Construction Process in San Diego

import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section, AnimatedSection } from '@/components/ui';
import { bannerImages } from '@/lib/constants/images';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/seo/JsonLd';
import { Phone, Search, Pencil, FileText, HardHat, ClipboardCheck, Key, Clock, CheckCircle, ArrowRight, DollarSign, Ruler, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'ADU Construction Process in San Diego',
  description:
    "BNC Builders' ADU construction process: from free consultation to move-in ready. Design, permits, construction & inspection. Typical timeline 8-14 months.",
  path: '/adus/process',
  keywords: [
    'adu construction process',
    'how to build an adu san diego',
    'adu timeline san diego',
    'adu building process',
    'adu construction timeline',
    'building an adu in san diego',
  ],
});

const processSteps = [
  {
    step: 1,
    title: 'Free Consultation',
    duration: 'Week 1',
    icon: Phone,
    description:
      'Every ADU project begins with a conversation. We visit your property, discuss your goals, review your lot for ADU potential, and answer your questions. This consultation is completely free with no obligation.',
    whatToExpect: [
      'In-home or on-site property walkthrough',
      'Discussion of your ADU goals (rental income, family use, home office)',
      'Initial assessment of yard space, access, and utility locations',
      'Overview of ADU types that work for your property',
      'Preliminary budget ranges based on your preferences',
      'Answers to all your ADU questions',
    ],
  },
  {
    step: 2,
    title: 'Feasibility Study',
    duration: 'Weeks 1 - 3',
    icon: Search,
    description:
      'Before investing in design, we confirm your property can support an ADU. Our team verifies zoning, reviews setback requirements, checks utility capacity, and identifies any site constraints that could affect the project.',
    whatToExpect: [
      'Zoning verification and code compliance review',
      'Setback measurements and buildable area calculation',
      'Utility capacity assessment (water, sewer, electrical, gas)',
      'Site access evaluation for construction equipment',
      'Identification of potential challenges (slope, soil, easements)',
      'Written feasibility report with recommendations',
    ],
  },
  {
    step: 3,
    title: 'Design & Engineering',
    duration: 'Weeks 3 - 10',
    icon: Pencil,
    description:
      'Our design team creates detailed architectural plans tailored to your property and preferences. You will see floor plans, elevations, and 3D renderings before we finalize. Structural engineering and Title 24 energy calculations are completed during this phase.',
    whatToExpect: [
      'Conceptual floor plans with multiple layout options',
      'Material and finish selections (cabinetry, flooring, fixtures)',
      '3D renderings showing the ADU on your property',
      'Structural engineering calculations',
      'Title 24 energy compliance documentation',
      'Detailed project proposal with fixed pricing',
    ],
  },
  {
    step: 4,
    title: 'Permitting',
    duration: 'Weeks 10 - 20',
    icon: FileText,
    description:
      'BNC Builders handles the entire permitting process. We prepare and submit all required documents to the City of San Diego or your local jurisdiction. Our team responds to plan check corrections and coordinates with city reviewers to keep the process moving.',
    whatToExpect: [
      'Complete permit application preparation',
      'Plan set submittal to Development Services',
      'Response to all plan check corrections',
      'Coordination with city plan reviewers',
      'School impact fee and utility fee processing',
      'Building permit issuance and construction scheduling',
    ],
  },
  {
    step: 5,
    title: 'Construction',
    duration: 'Weeks 20 - 48',
    icon: HardHat,
    description:
      'This is where your ADU becomes reality. Our skilled construction team manages every phase from foundation to finishing. Your dedicated project manager provides regular updates and is your single point of contact throughout the build.',
    whatToExpect: [
      'Site preparation: grading, trenching, and foundation',
      'Framing: walls, roof structure, windows, and doors',
      'Rough-in: electrical, plumbing, HVAC, and insulation',
      'Drywall, texture, and interior/exterior paint',
      'Finish work: cabinets, countertops, flooring, fixtures',
      'Utility connections and landscape restoration',
    ],
  },
  {
    step: 6,
    title: 'Inspections',
    duration: 'Throughout Construction',
    icon: ClipboardCheck,
    description:
      'City inspections occur at key milestones throughout construction. BNC Builders schedules all inspections, prepares the site, and ensures every phase passes before moving forward. We handle any corrections required by inspectors.',
    whatToExpect: [
      'Foundation inspection before concrete pour',
      'Framing inspection (structural, shear walls, hold-downs)',
      'Rough electrical, plumbing, and mechanical inspections',
      'Insulation and energy compliance inspection',
      'Drywall nailing inspection',
      'Final inspection for certificate of occupancy',
    ],
  },
  {
    step: 7,
    title: 'Final Walkthrough & Handover',
    duration: 'Week 48 - 50',
    icon: Key,
    description:
      'Before we call your project complete, we walk through every detail together. We demonstrate all systems, review maintenance requirements, hand over warranties and documentation, and make sure you are completely satisfied with your new ADU.',
    whatToExpect: [
      'Detailed walkthrough of every room and system',
      'Demonstration of HVAC, appliances, and fixtures',
      'Review of all warranties and maintenance schedules',
      'Handover of keys, permits, and project documentation',
      'Certificate of occupancy from the city',
      'Your ADU is officially move-in ready',
    ],
  },
];

const timelinePhases = [
  { phase: 'Consultation & Feasibility', weeks: '1 - 3', months: '~1 month', color: 'bg-blue-500' },
  { phase: 'Design & Engineering', weeks: '3 - 10', months: '~2 months', color: 'bg-indigo-500' },
  { phase: 'Permitting', weeks: '10 - 20', months: '~2.5 months', color: 'bg-purple-500' },
  { phase: 'Construction', weeks: '20 - 48', months: '~7 months', color: 'bg-gold' },
  { phase: 'Inspections & Handover', weeks: '48 - 50', months: '~0.5 months', color: 'bg-green-600' },
];

const faqs = [
  {
    question: 'How long does it take to build an ADU in San Diego?',
    answer:
      'The typical ADU project takes 8 to 14 months from initial consultation to move-in ready. This includes approximately 1 month for feasibility, 2 months for design, 2-3 months for permitting, and 4-7 months for construction. Garage conversions can be completed faster (4-8 months total) since they skip the foundation and framing phases. BNC Builders provides a detailed timeline during your consultation.',
  },
  {
    question: 'What happens during the ADU design phase?',
    answer:
      'During design, our team creates architectural plans tailored to your property and goals. You will review floor plan options, select materials and finishes, and see 3D renderings of the ADU on your actual property. Structural engineering, Title 24 energy compliance, and any required reports are also completed. This phase typically takes 4-8 weeks and results in a complete plan set ready for permit submittal.',
  },
  {
    question: 'How long does it take to get an ADU permit in San Diego?',
    answer:
      'The permitting phase typically takes 8 to 12 weeks from plan submittal to permit issuance. California law requires cities to process ADU permits within 60 days of receiving a complete application. However, plan check corrections can extend the timeline. BNC Builders submits thorough, code-compliant plans that minimize correction cycles, often achieving faster approvals.',
  },
  {
    question: 'Do I need to move out during ADU construction?',
    answer:
      'No, you do not need to move out for ADU construction. Since the ADU is built separately from your main home (or in your garage/yard), your daily routine is minimally disrupted. Noise and activity are limited to the construction area. BNC Builders maintains clean, safe job sites and clearly separates the work zone from your living areas.',
  },
  {
    question: 'What inspections are required during ADU construction?',
    answer:
      'ADU construction requires multiple city inspections: foundation, framing, rough electrical, rough plumbing, rough mechanical (HVAC), insulation, drywall nailing, and final inspection. Each inspection must pass before the next phase begins. BNC Builders schedules all inspections, prepares the site, and handles any corrections. The final inspection results in your certificate of occupancy.',
  },
  {
    question: 'Can I make changes during construction?',
    answer:
      'Minor changes (paint colors, hardware, fixture styles) are typically easy to accommodate during construction. However, significant changes to layout, structural elements, or plumbing/electrical locations may require revised plans, additional permits, and added costs. BNC Builders thoroughly reviews all design decisions before construction begins to minimize change orders.',
  },
  {
    question: 'What warranty do I get on my new ADU?',
    answer:
      'BNC Builders provides a comprehensive warranty on all ADU construction. This includes a 1-year workmanship warranty covering all labor and installation, manufacturer warranties on all materials, appliances, and fixtures (typically 1-10 years depending on the product), and a 10-year structural warranty. We also provide a complete warranty package with documentation at handover.',
  },
];

export default function ADUProcessPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'ADUs', url: '/adus' },
          { name: 'Construction Process', url: '/adus/process' },
        ]}
      />
      <FAQJsonLd faqs={faqs} />

      {/* Hero */}
      <HeroSubpage
        title="Our ADU Construction Process"
        subtitle="From your first call to handing over the keys, BNC Builders manages every step of your San Diego ADU project with transparency and expertise."
        backgroundImage={bannerImages.adu}
      />

      {/* Process Overview */}
      <Section background="white">
        <Container>
          <AnimatedSection animation="fade-in-up" className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              How We Build Your ADU
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">
              Seven Steps to Your New ADU
            </h2>
            <p className="text-lg text-zinc-600">
              Building an ADU in San Diego involves navigating design decisions, city permits, and complex construction.
              BNC Builders has refined this process over hundreds of projects to deliver your ADU on time, on budget,
              and exactly as promised. Here is how it works.
            </p>
          </AnimatedSection>

          {/* Process Steps */}
          <div className="max-w-4xl mx-auto space-y-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.step} animation="fade-in-up" delay={index * 75}>
                  <div className="relative">
                    {/* Connector line */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute left-6 top-24 bottom-0 w-0.5 bg-zinc-200 hidden md:block" />
                    )}

                    <div className="flex gap-6">
                      {/* Step number */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-lg shadow-gold/25 relative z-10">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Step content */}
                      <div className="flex-1 bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="text-gold font-bold text-sm">STEP {step.step}</span>
                          <h3 className="text-xl font-bold text-dark">{step.title}</h3>
                          <span className="inline-flex items-center gap-1 text-sm text-zinc-500 font-medium bg-white px-3 py-1 rounded-full border border-zinc-200">
                            <Clock className="w-3.5 h-3.5" />
                            {step.duration}
                          </span>
                        </div>

                        <p className="text-zinc-600 leading-relaxed mb-4">{step.description}</p>

                        <div>
                          <h4 className="font-semibold text-dark text-sm mb-3">What to Expect:</h4>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {step.whatToExpect.map((item) => (
                              <div key={item} className="flex items-start gap-2 text-sm text-zinc-600">
                                <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Timeline Visualization */}
      <Section background="gray">
        <Container>
          <AnimatedSection animation="fade-in-up" className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              Project Timeline
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">
              Typical ADU Timeline: 8 - 14 Months
            </h2>
            <p className="text-lg text-zinc-600">
              The total duration depends on ADU type, design complexity, permit review times, and weather.
              Here is how the timeline breaks down for a typical San Diego ADU project.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in-up">
              <div className="bg-white rounded-xl p-8 shadow-md">
                {/* Timeline Bar */}
                <div className="mb-8">
                  <div className="flex rounded-full overflow-hidden h-8 mb-4">
                    <div className="bg-blue-500 flex-[1]" title="Consultation & Feasibility" />
                    <div className="bg-indigo-500 flex-[2]" title="Design & Engineering" />
                    <div className="bg-purple-500 flex-[2.5]" title="Permitting" />
                    <div className="bg-gold flex-[7]" title="Construction" />
                    <div className="bg-green-600 flex-[0.5]" title="Handover" />
                  </div>
                </div>

                {/* Phase Details */}
                <div className="space-y-4">
                  {timelinePhases.map((phase) => (
                    <div key={phase.phase} className="flex items-center gap-4">
                      <div className={`w-4 h-4 rounded-full ${phase.color} flex-shrink-0`} />
                      <div className="flex-1">
                        <span className="font-semibold text-dark">{phase.phase}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-zinc-500 text-sm">Weeks {phase.weeks}</span>
                        <span className="text-zinc-400 mx-2">|</span>
                        <span className="font-medium text-dark text-sm">{phase.months}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-100 flex justify-between items-center">
                  <span className="text-zinc-500">Total Project Duration</span>
                  <span className="text-2xl font-bold text-gold">8 - 14 Months</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Timeline Tips */}
            <AnimatedSection animation="fade-in-up" delay={200} className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-zinc-200">
                  <h3 className="font-bold text-dark mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gold" />
                    Faster ADU Options
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      Garage conversions: 4 - 8 months total
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      JADUs: 3 - 6 months total
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      Simpler designs with standard finishes
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-zinc-200">
                  <h3 className="font-bold text-dark mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-gold" />
                    What Can Extend Timelines
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5" />
                      Permit correction cycles (2 - 4 weeks each)
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5" />
                      Unexpected site conditions (soil, utilities)
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5" />
                      Design changes during construction
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      {/* Why BNC Process is Different */}
      <Section background="dark" padding="lg">
        <Container>
          <AnimatedSection animation="fade-in-up" className="text-center mb-12">
            <span className="text-zinc-800 font-semibold uppercase tracking-wider text-sm">
              The BNC Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mt-2 mb-4">
              Why Our ADU Process Works
            </h2>
            <p className="text-lg text-zinc-800 max-w-2xl mx-auto">
              After building ADUs throughout San Diego County, we have eliminated the pain points
              that plague most ADU projects.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Single Point of Contact',
                description:
                  'Your dedicated project manager handles everything from design through handover. One person who knows your project inside out, available whenever you have questions.',
              },
              {
                title: 'Transparent Fixed Pricing',
                description:
                  'No surprise costs. Our detailed proposal includes every line item before you sign. If something unexpected arises, we discuss it and get your approval before proceeding.',
              },
              {
                title: 'Permit Expertise',
                description:
                  'We submit code-compliant plans that pass review faster. Our established relationships with San Diego Development Services keep your project on track.',
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} animation="fade-in-up" delay={index * 150}>
                <div className="bg-white rounded-xl p-8 h-full hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center mb-4">
                    <span className="text-white font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
              { title: 'ADU Cost Guide', href: '/adus/cost-guide', description: 'Complete 2026 pricing by type, size & finish level.', icon: DollarSign },
              { title: 'Types of ADUs', href: '/adus/types', description: 'Compare detached, attached, garage conversion & JADU.', icon: Ruler },
              { title: 'ADU Regulations', href: '/adus/regulations', description: 'Setbacks, height limits, parking rules & permit process.', icon: FileText },
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
              ADU Construction Process Questions
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
        title="Ready to Start Your ADU Project?"
        subtitle="Take the first step with a free consultation. BNC Builders will assess your property, discuss your goals, and outline a clear path to your new ADU."
        primaryAction={{ label: 'Schedule Free Consultation', href: '/contact-us' }}
      />
    </>
  );
}
