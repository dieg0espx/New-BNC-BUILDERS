// BNC Builders - Service Area Contact Section

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useReCaptchaV3 } from '@/components/ui/ReCaptcha';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  isNewCustomer: string;
  message: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  address: '',
  isNewCustomer: '',
  message: '',
};


export function ServiceAreaContact() {
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
      const recaptchaToken = await executeRecaptcha('service_area_contact');

      if (!recaptchaToken) {
        setError('Failed to verify reCAPTCHA. Please try again.');
        setIsSubmitting(false);
        return;
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        setFormData(initialFormData);

        // Push generate_lead event to dataLayer for GTM tracking
        if (typeof window !== 'undefined') {
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push({ event: 'generate_lead', form_name: 'service_area_contact' });
        }
      } else {
        setError(data.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Failed to send message. Please try again or call us directly at (760) 249-7207.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    'w-full px-4 py-3 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors text-gray-700 placeholder:text-gray-400';

  return (
    <section className="bg-gray-100">
      {/* Header */}
      <div className="bg-gray-100 py-6 md:py-8 text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">
          PROUDLY SERVING CUSTOMERS IN{' '}
          <span className="text-primary">ESCONDIDO</span>
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl font-light italic text-secondary mt-2">
          & Surrounding Areas of Southern California
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pb-12 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Map Section */}
          <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-full bg-gold overflow-hidden">
            <Image
              src="/map.png"
              alt="BNC Builders Service Areas - Escondido, Rancho Santa Fe, Oceanside, Carlsbad, Encinitas, Carmel Valley, Vista, Poway, Solana Beach, La Jolla"
              fill
              className="object-cover"
            />
          </div>

          {/* Contact Form Section */}
          <div className="bg-gray-100 p-6 sm:p-8 lg:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-8">
              Contact Us Today!
            </h3>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <svg
                  className="w-16 h-16 text-green-500 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h4 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h4>
                <p className="text-green-700">
                  We&apos;ll be in touch shortly to discuss your project.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="*First Name"
                    required
                    className={inputClasses}
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="*Last Name"
                    required
                    className={inputClasses}
                  />
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="*Phone"
                    required
                    className={inputClasses}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="*Email"
                    required
                    className={inputClasses}
                  />
                </div>

                {/* Address */}
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="*Address"
                  required
                  className={inputClasses}
                />

                {/* Customer Type */}
                <select
                  name="isNewCustomer"
                  value={formData.isNewCustomer}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                >
                  <option value="">*Are you a new customer?</option>
                  <option value="yes">Yes, I am a potential new customer</option>
                  <option value="no">No, I&apos;m a current existing customer</option>
                  <option value="neither">I&apos;m neither</option>
                </select>

                {/* Message */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="*How can we help you?"
                  required
                  rows={4}
                  className={inputClasses}
                />

                {/* Consent Text */}
                <p className="text-xs text-gray-500 leading-relaxed">
                  By submitting, you agree to receive text messages from BNC Builders Inc. at the
                  number provided, including those related to your inquiry, follow-ups, and review
                  requests, via automated technology. Consent is not a condition of purchase. Msg &
                  data rates may apply. Msg frequency may vary. Reply STOP to cancel or HELP for
                  assistance. Acceptable Use Policy
                </p>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gold hover:bg-gold-light text-white font-bold py-3 px-8 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
