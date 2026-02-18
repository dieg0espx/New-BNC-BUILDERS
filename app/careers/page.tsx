// BNC Builders - Careers Page

'use client';

import { useState } from 'react';
import { HeroSubpage } from '@/components/sections';
import { Container, Section, Button } from '@/components/ui';
import { useReCaptchaV3 } from '@/components/ui/ReCaptcha';
import { bannerImages } from '@/lib/constants/images';
import { coreValues } from '@/lib/constants/company';
import { CheckCircle, Send } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  position: string;
  experience: string;
  message: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  position: '',
  experience: '',
  message: '',
};

export default function CareersPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { executeRecaptcha } = useReCaptchaV3();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Execute reCAPTCHA v3
      const recaptchaToken = await executeRecaptcha('careers_form');

      if (!recaptchaToken) {
        setError('Failed to verify reCAPTCHA. Please try again.');
        setIsSubmitting(false);
        return;
      }

      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        setFormData(initialFormData);
      } else {
        setError(data.message || 'Failed to submit application. Please try again.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Failed to submit application. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 border border-zinc-300 rounded-md focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors";

  return (
    <>
      {/* Hero */}
      <HeroSubpage
        title="Build Your Career With San Diego's Leading Remodeling Team"
        subtitle="BNC Builders is growing. We are looking for skilled craftspeople, project managers, and support staff who share our commitment to quality and client satisfaction. Join a team that builds better lives - for homeowners and employees alike."
        backgroundImage={bannerImages.faq}
      />

      {/* Intro */}
      <Section background="white">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">
              Why Talented People Choose BNC Builders
            </h2>
            <p className="text-lg text-zinc-600">
              We are not just another construction company. BNC Builders has built its reputation on quality kitchen remodel Escondido CA projects, bathroom remodeling San Diego transformations, ADUs San Diego builds, and complete remodeling Escondido solutions. Our team members take pride in craftsmanship that makes real differences in people's lives. We offer competitive pay, consistent work, growth opportunities, and a culture that values collaboration over competition.
            </p>
          </div>
        </Container>
      </Section>

      {/* Core Values */}
      <Section background="gray">
        <Container>
          <h2 className="text-2xl font-bold text-zinc-900 text-center mb-8">
            The Values We Live By
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {coreValues.map((value) => (
              <div key={value.id} className="bg-white rounded-lg p-4 text-center">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-zinc-900">{value.name}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Application Form */}
      <Section background="white">
        <Container size="md">
          <h2 className="text-2xl font-bold text-zinc-900 text-center mb-8">
            Submit Your Application
          </h2>

          {submitted ? (
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-10 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-3">Application Received</h3>
              <p className="text-green-700 max-w-md mx-auto">
                Thank you for your interest in joining BNC Builders. Our team will review your application and reach out if your experience matches an open position.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-green-600 font-semibold hover:text-green-700 underline underline-offset-4"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-zinc-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="John"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-zinc-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Smith"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(760) 123-4567"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-zinc-700 mb-1">
                    Position of Interest
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    placeholder="e.g., Project Manager, Finish Carpenter"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-zinc-700 mb-1">
                    Years of Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="">Select your experience level</option>
                    <option value="0-1">Entry Level (0-1 years)</option>
                    <option value="1-3">Developing (1-3 years)</option>
                    <option value="3-5">Experienced (3-5 years)</option>
                    <option value="5-10">Senior (5-10 years)</option>
                    <option value="10+">Expert (10+ years)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1">
                  Tell Us About Your Experience <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Describe your relevant experience, skills, and what interests you about working at BNC Builders..."
                  className={inputClasses}
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Application
                  </>
                )}
              </Button>
            </form>
          )}
        </Container>
      </Section>
    </>
  );
}
