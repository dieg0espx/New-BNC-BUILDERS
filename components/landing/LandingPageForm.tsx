// BNC Builders - Landing Page Form Component
// Optimized for conversions with minimal friction

'use client';

import { useState, forwardRef } from 'react';
import { useReCaptchaV3 } from '@/components/ui/ReCaptcha';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { trackPhoneClick } from '@/lib/tracking';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  projectAddress?: string;
  serviceType?: string;
  projectDetails?: string;
}

interface LandingPageFormProps {
  variant: 'short' | 'full';
  formType: 'remodel' | 'adu';
  city?: string;
}

export const LandingPageForm = forwardRef<HTMLDivElement, LandingPageFormProps>(
  function LandingPageForm({ variant, formType, city = 'Escondido' }, ref) {
    const [formData, setFormData] = useState<FormData>({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      projectAddress: '',
      serviceType: '',
      projectDetails: '',
    });
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
        const recaptchaToken = await executeRecaptcha(
          formType === 'adu' ? 'adu_landing_form' : 'remodel_landing_form'
        );

        if (!recaptchaToken) {
          setError('Failed to verify reCAPTCHA. Please try again.');
          setIsSubmitting(false);
          return;
        }

        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            recaptchaToken,
            formSource: formType === 'adu' ? 'ADU Landing Page' : 'Remodel Landing Page',
            detectedCity: city,
          }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setSubmitted(true);

          // Push generate_lead event to dataLayer for GTM tracking (GA4 + Google Ads conversion)
          if (typeof window !== 'undefined') {
            (window as any).dataLayer = (window as any).dataLayer || [];
            (window as any).dataLayer.push({ event: 'generate_lead', form_name: 'landing_page_form' });
          }
        } else {
          setError(data.message || 'Failed to send request. Please try again.');
        }
      } catch (err) {
        console.error('Form submission error:', err);
        setError('Failed to send request. Please call us at (760) 658-6238.');
      } finally {
        setIsSubmitting(false);
      }
    };

    if (submitted) {
      return (
        <div ref={ref} className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
          <p className="text-green-700">
            We&apos;ll contact you shortly to discuss your project.
          </p>
        </div>
      );
    }

    const inputClasses =
      'w-full px-4 py-3 bg-white border border-zinc-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all outline-none text-base';

    if (variant === 'short') {
      return (
        <div ref={ref} className="bg-white rounded-2xl shadow-xl border border-zinc-100 p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-dark mb-6">
            {formType === 'adu' ? 'Start Your ADU Consultation' : 'Start Your Free Estimate'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder="First Name"
              autoComplete="given-name"
              className={inputClasses}
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder="Last Name"
              autoComplete="family-name"
              className={inputClasses}
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Phone"
              autoComplete="tel"
              inputMode="tel"
              className={inputClasses}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              autoComplete="email"
              className={inputClasses}
            />

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-animated hover-glow bg-gold hover:bg-gold-light text-white px-6 py-4 rounded-lg font-bold uppercase tracking-wide transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Next Step
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      );
    }

    // Full Form
    return (
      <div ref={ref} className="bg-white rounded-2xl shadow-xl border border-zinc-100 p-6 md:p-10">
        <h3 className="text-2xl md:text-3xl font-bold text-dark mb-6">
          {formType === 'adu'
            ? `Request Your ADU Consultation in ${city}`
            : `Request Your Free Remodeling Estimate in ${city}`}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder="First Name"
              autoComplete="given-name"
              className={inputClasses}
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder="Last Name"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Phone"
              autoComplete="tel"
              inputMode="tel"
              className={inputClasses}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              autoComplete="email"
              className={inputClasses}
            />
          </div>

          <input
            type="text"
            name="projectAddress"
            value={formData.projectAddress}
            onChange={handleChange}
            placeholder="Project Address"
            autoComplete="street-address"
            className={inputClasses}
          />

          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select Service Type</option>
            {formType === 'adu' ? (
              <>
                <option value="detached-adu">Detached ADU</option>
                <option value="attached-adu">Attached ADU</option>
                <option value="garage-conversion">Garage Conversion ADU</option>
                <option value="junior-adu">Junior ADU</option>
              </>
            ) : (
              <>
                <option value="kitchen">Kitchen Remodeling</option>
                <option value="bathroom">Bathroom Remodeling</option>
                <option value="room-addition">Room Addition</option>
                <option value="exterior">Exterior Remodeling</option>
                <option value="outdoor">Outdoor Living</option>
                <option value="full-home">Full Home Renovation</option>
              </>
            )}
          </select>

          <textarea
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your project..."
            className={inputClasses}
          />

          <p className="text-xs text-zinc-500">
            By submitting, you agree to be contacted about your request using automated technology.
            Message frequency varies. Text STOP to cancel.
          </p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-animated hover-glow bg-gold hover:bg-gold-light text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit Request
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>

          <p className="text-center text-zinc-600 text-sm">
            Or call <a href="tel:+17606586238" onClick={trackPhoneClick} className="text-gold font-semibold hover:underline">(760) 658-6238</a>
          </p>

          <p className="text-center text-sm text-zinc-500">
            No high-pressure sales. Free consultation.
          </p>
        </form>
      </div>
    );
  }
);
