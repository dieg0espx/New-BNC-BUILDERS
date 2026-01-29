// BNC Builders - Our Process Page

'use client';

import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section, AnimatedSection } from '@/components/ui';
import { bannerImages } from '@/lib/constants/images';
import { Phone, ClipboardList, Hammer, Key } from 'lucide-react';
import { useInView } from '@/lib/hooks/useInView';

const steps = [
  {
    number: '01',
    title: 'Discovery Conversation',
    description: 'Every successful kitchen remodel Escondido CA or bathroom remodeling San Diego project starts with understanding your goals. We visit your home, ask questions about how you live, and listen carefully to what you want to change. No sales pressure - just genuine curiosity about your vision.',
    icon: Phone,
  },
  {
    number: '02',
    title: 'Custom Design & Pricing',
    description: `Our team creates detailed plans with material options that match your budget. For kitchen remodeling services and remodeling Escondido projects, you see 3D renderings before we begin. Transparent pricing means no surprises - you know exactly what you're getting and what it costs.`,
    icon: ClipboardList,
  },
  {
    number: '03',
    title: 'Expert Construction',
    description: `Our skilled craftsmen bring your vision to life, whether it's ADUs San Diego, deck repair San Diego, or a complete kitchen renovation San Diego. Your dedicated project manager provides daily updates. We protect your home, respect your schedule, and maintain clean work areas throughout.`,
    icon: Hammer,
  },
  {
    number: '04',
    title: 'Quality Walkthrough',
    description: `Your bathroom remodeling Escondido, exterior remodeling, or landscape remodeling project isn't complete until you're genuinely delighted. We walk through every detail together, address any concerns, and ensure your finished space exceeds expectations before we call it done.`,
    icon: Key,
  },
];

export default function OurProcessPage() {
  return (
    <>
      {/* Hero */}
      <HeroSubpage
        title="How BNC Builders Turns Your Vision Into Reality"
        subtitle="No confusion. No surprises. No stress. Whether you need kitchen remodel San Diego, bathroom remodeling Escondido, ADUs Los Angeles, or complete exterior remodelers services, our refined process makes transformation enjoyable."
        backgroundImage={bannerImages.faq}
      />

      {/* Main Process Section */}
      <ProcessSection steps={steps} />

      {/* Promise Banner */}
      <Section background="dark" padding="md">
        <Container>
          <AnimatedSection animation="fade-in-up">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-4">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-1">The BNC Builders Promise</h3>
                <p className="text-zinc-800">Honest communication. Skilled craftsmanship. Delivered on schedule.</p>
              </div>
              <a
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors whitespace-nowrap btn-animated hover-glow"
              >
                Begin Your Project
              </a>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* What to Expect */}
      <WhatToExpectSection />

      {/* CTA */}
      <CTABanner
        title="Ready to Experience the BNC Builders Difference?"
        subtitle="Schedule your free consultation for kitchen remodel Escondido CA, kitchen remodel Poway, bathroom remodeling San Diego, ADUs San Diego, deck repair contractor services, room addition San Diego, garage remodeling, outdoor kitchens, or any remodeling Escondido project."
        primaryAction={{ label: 'Schedule Consultation', href: '/contact-us' }}
      />
    </>
  );
}

// Process Section with animations
interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

function ProcessSection({ steps }: { steps: Step[] }) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <Section background="white">
      <Container>
        <AnimatedSection animation="fade-in-up" className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Four Steps to Your Transformed Home
          </h2>
          <p className="text-lg text-zinc-600">
            After 30+ years of combined experience and 900+ projects, we have refined our process to eliminate stress and maximize results for every kitchen remodeling Escondido CA, bathroom remodel Escondido, and 3D landscape design near me project.
          </p>
        </AnimatedSection>

        <div ref={ref} className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`group relative bg-zinc-50 rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 hover-lift card-animate ${inView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <span className="absolute top-4 right-6 text-8xl font-bold text-zinc-200 group-hover:text-gold/20 transition-colors select-none">
                  {step.number}
                </span>

                <div className="relative">
                  <div className="w-14 h-14 rounded-lg bg-gold flex items-center justify-center mb-6 shadow-lg shadow-gold/25 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

// What to Expect Section with animations
function WhatToExpectSection() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  const items = [
    { q: 'How long will my project take?', a: 'Timelines depend on scope. A bathroom remodeling Escondido typically runs 3-4 weeks. A kitchen remodel San Diego averages 6-10 weeks. ADUs San Diego take 8-14 months including permits. We provide detailed schedules during consultation so you can plan accordingly.' },
    { q: 'Who handles permits and inspections?', a: `We do. Our team manages all permitting for your kitchen remodeling services, ADUs Los Angeles, deck repair San Diego, or room addition San Diego project. You shouldn't have to navigate bureaucracy - that's our job.` },
    { q: 'Can my family stay home during construction?', a: 'Usually yes. We phase work to minimize disruption, contain dust and debris, and maintain safe pathways. For major kitchen remodel Escondido CA projects, we can set up temporary cooking areas. We discuss logistics during planning.' },
    { q: 'What happens if something unexpected comes up?', a: 'Older homes have surprises. When our remodeling Escondido team discovers something unexpected, we stop, explain the situation, present options with pricing, and let you decide how to proceed. No work happens without your approval.' },
  ];

  return (
    <Section background="gray">
      <Container size="md">
        <AnimatedSection animation="fade-in-up">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">
            Common Questions About Our Process
          </h2>
        </AnimatedSection>

        <div ref={ref} className="space-y-6">
          {items.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-6 shadow-sm hover:shadow-md hover-lift transition-all card-animate ${inView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h4 className="font-bold text-dark mb-2">{item.q}</h4>
              <p className="text-zinc-600">{item.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
