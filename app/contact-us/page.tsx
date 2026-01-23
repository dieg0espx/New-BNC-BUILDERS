// BNC Builders - Contact Us Page

'use client';

import Link from 'next/link';
import { HeroSubpage } from '@/components/sections';
import { Container, Section, AnimatedSection } from '@/components/ui';
import { ContactForm } from '@/components/forms';
import { bannerImages } from '@/lib/constants/images';
import { company } from '@/lib/constants/company';
import { useInView } from '@/lib/hooks/useInView';
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Shield,
  CreditCard,
  Languages,
  FileText,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our team',
    value: company.phone,
    href: `tel:${company.phone.replace(/[^0-9]/g, '')}`,
    action: 'Call Now',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Our office location',
    value: company.address.full,
    href: 'https://maps.google.com/?q=101+State+Pl+Suite+N+Escondido+CA+92029',
    action: 'Get Directions',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    description: 'When we are available',
    value: company.officeHours,
    href: null,
    action: null,
  },
];

const values = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Entrust your project to licensed, insured professionals.',
  },
  {
    icon: CreditCard,
    title: 'Financing Available',
    description: 'Flexible payment solutions to fit your budget.',
  },
  {
    icon: Languages,
    title: 'Hablamos Español',
    description: 'Remodeling services provided by a Spanish-speaking team.',
  },
  {
    icon: FileText,
    title: 'Free Estimates',
    description: 'Get started with a completely free quote.',
  },
];

const serviceAreas = [
  'Escondido', 'Carlsbad', 'Encinitas', 'Oceanside',
  'Poway', 'La Jolla', 'Vista', 'San Marcos',
  'Carmel Valley', 'Rancho Santa Fe', 'Solana Beach', 'Valley Center'
];

export default function ContactUsPage() {
  return (
    <>
      {/* Hero */}
      <HeroSubpage
        title="Let's Build Something Amazing Together"
        subtitle="Contact us today for a free consultation and estimate. Our team is ready to bring your vision to life."
        backgroundImage={bannerImages.faq}
      />

      {/* Quick Contact Cards */}
      <QuickContactSection contactMethods={contactMethods} />

      {/* Main Contact Section */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form - Takes 3 columns */}
            <AnimatedSection animation="fade-in-left" className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover-lift">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                    Get In Touch
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-dark mb-2">
                  Request a Free Estimate
                </h2>
                <p className="text-zinc-600 mb-8">
                  Fill out the form below and a member of our team will be in touch shortly to discuss your project.
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>

            {/* Sidebar - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* Why Choose Us */}
              <AnimatedSection animation="fade-in-right" delay={100}>
                <div className="bg-dark text-white rounded-2xl p-8 hover-lift">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Star className="w-5 h-5 text-gold" />
                    Why Choose BNC Builders?
                  </h3>
                  <div className="space-y-5">
                    {values.map((item) => (
                      <div key={item.title} className="flex items-start gap-4 hover:translate-x-1 transition-transform">
                        <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">{item.title}</p>
                          <p className="text-zinc-400 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-sm text-zinc-400 mb-4">
                      Ready to get started? Call us now!
                    </p>
                    <a
                      href={`tel:${company.phone.replace(/[^0-9]/g, '')}`}
                      className="flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-white font-bold py-3 px-6 rounded-xl transition-all w-full btn-animated hover-glow"
                    >
                      <Phone className="w-5 h-5" />
                      {company.phone}
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Service Areas */}
              <AnimatedSection animation="fade-in-right" delay={200}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
                  <h3 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gold" />
                    Areas We Serve
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceAreas.map((area) => (
                      <div key={area} className="flex items-center gap-2 text-sm text-zinc-600 hover:text-gold transition-colors">
                        <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                        {area}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/areas-we-serve"
                    className="inline-flex items-center gap-1 text-gold font-semibold text-sm mt-4 hover:gap-2 transition-all link-underline"
                  >
                    View All Service Areas
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <section className="relative">
        <div className="h-[400px] bg-zinc-200 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.5!2d-117.0731!3d33.1241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf5!2s101%20State%20Pl%20Suite%20N%2C%20Escondido%2C%20CA%2092029!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Floating Info Card */}
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white rounded-xl shadow-2xl p-6 max-w-sm">
          <h3 className="font-bold text-dark text-lg mb-3">BNC Builders Inc.</h3>
          <div className="space-y-2 text-sm text-zinc-600">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              {company.address.full}
            </p>
            <p className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold flex-shrink-0" />
              {company.officeHours}
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=101+State+Pl+Suite+N+Escondido+CA+92029"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-gold font-semibold text-sm mt-4 hover:gap-2 transition-all"
          >
            Get Directions
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gold py-12">
        <Container>
          <AnimatedSection animation="fade-in-up">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Ready to Start Your Project?
                </h2>
                <p className="text-white/80">
                  30+ years of experience. Licensed & insured. Free estimates.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${company.phone.replace(/[^0-9]/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 bg-white text-gold font-bold py-3 px-8 rounded-xl hover:bg-zinc-100 transition-all btn-animated"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-white/10 transition-all"
                >
                  View Our Work
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}

// Quick Contact Section with animations
interface ContactMethod {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  value: string;
  href: string | null;
  action: string | null;
}

function QuickContactSection({ contactMethods }: { contactMethods: ContactMethod[] }) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="bg-dark py-8 -mt-1">
      <Container>
        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <div
              key={method.title}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-gold/30 transition-all group hover-lift card-animate ${inView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1">{method.title}</h3>
                  <p className="text-zinc-400 text-sm mb-2">{method.description}</p>
                  {method.href ? (
                    <a
                      href={method.href}
                      className="text-gold font-semibold hover:text-gold/80 flex items-center gap-1 group/link"
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {method.value}
                      {method.action && (
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                      )}
                    </a>
                  ) : (
                    <span className="text-white">{method.value}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
