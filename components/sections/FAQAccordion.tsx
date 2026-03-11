// BNC Builders - FAQ Accordion Component

'use client';

import { useState } from 'react';
import { Container, Section, AnimatedSection } from '@/components/ui';
import { FAQ } from '@/lib/types';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useInView } from '@/lib/hooks/useInView';

interface FAQAccordionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
  background?: 'white' | 'gray' | 'dark';
}

export function FAQAccordion({
  title = 'Frequently Asked Questions',
  subtitle,
  faqs,
  background = 'white',
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isDark = background === 'dark';
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <Section background={background} padding="lg">
      <Container size="md">
        <AnimatedSection animation="fade-in-up" className="text-center mb-8 sm:mb-12">
          <span className="text-gold font-semibold uppercase tracking-wider text-xs sm:text-sm">
            Got Questions?
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 ${isDark ? 'text-white' : 'text-dark'}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`text-base sm:text-lg ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
              {subtitle}
            </p>
          )}
        </AnimatedSection>

        <div ref={ref} className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              isDark={isDark}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        {/* Contact prompt */}
        <AnimatedSection animation="fade-in-up" delay={faqs.length * 100} className={`mt-8 sm:mt-10 text-center p-4 sm:p-6 rounded-xl hover-lift ${isDark ? 'bg-white/5' : 'bg-white border border-gray-100'}`}>
          <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-gold mx-auto mb-2 sm:mb-3" />
          <p className={`font-medium text-sm sm:text-base ${isDark ? 'text-white' : 'text-dark'}`}>
            Still have questions?
          </p>
          <p className={`text-xs sm:text-sm mt-1 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
            Contact us at{' '}
            <a href="tel:+17606586238" className="text-gold hover:underline font-semibold link-underline">
              (760) 658-6238
            </a>
          </p>
        </AnimatedSection>
      </Container>
    </Section>
  );
}

interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
  isDark: boolean;
  index: number;
  inView: boolean;
}

function FAQItem({ faq, isOpen, onToggle, isDark, index, inView }: FAQItemProps) {
  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-300 card-animate ${inView ? 'in-view' : ''} ${
        isDark
          ? `border ${isOpen ? 'border-gold bg-white/5' : 'border-white/10 bg-white/5 hover:border-gold/30'}`
          : `border ${isOpen ? 'border-gold bg-white shadow-md' : 'border-gray-200 bg-white hover:border-gold/30 hover:shadow-sm'}`
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <button
        type="button"
        onClick={onToggle}
        className={`flex items-center justify-between w-full px-4 sm:px-6 py-4 sm:py-5 text-left transition-colors ${
          isDark ? 'hover:bg-white/10' : 'hover:bg-gray-50'
        }`}
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <span className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-300 ${
            isOpen ? 'bg-gold text-white scale-110' : isDark ? 'bg-white/10 text-zinc-400' : 'bg-gray-100 text-zinc-500'
          }`}>
            {index + 1}
          </span>
          <span className={`font-semibold pr-2 sm:pr-4 text-sm sm:text-base ${isDark ? 'text-white' : 'text-dark'}`}>
            {faq.question}
          </span>
        </div>
        <ChevronDown
          className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-gold' : isDark ? 'text-zinc-400' : 'text-zinc-500'
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className={`px-4 sm:px-6 pb-4 sm:pb-5 pt-0 pl-4 sm:pl-[72px] ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
          <p className="leading-relaxed text-sm sm:text-base">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}
