// BNC Builders - ADU Handbook Download Form

'use client';

import { useState, useRef } from 'react';
import { Button, ReCaptcha, ReCaptchaRef } from '@/components/ui';
import { CheckCircle, Download } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
};

export function ADUHandbookForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCaptchaRef>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Validate reCAPTCHA
    if (!recaptchaToken) {
      setError('Please complete the reCAPTCHA verification.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          reason: 'ADU Handbook Download',
          message: 'Requested ADU Handbook download from the website.',
          isNewCustomer: 'yes',
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        setFormData(initialFormData);
        setRecaptchaToken(null);
        recaptchaRef.current?.reset();
      } else {
        setError(data.message || 'Failed to submit. Please try again.');
        recaptchaRef.current?.reset();
        setRecaptchaToken(null);
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Failed to submit. Please try again or call us directly.');
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 border border-zinc-300 rounded-md focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors";

  if (submitted) {
    return (
      <div className="bg-white rounded-lg p-8 shadow-md">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-zinc-900 mb-2">Thank You!</h3>
          <p className="text-zinc-600 mb-4">
            Your ADU Handbook is on its way! Check your email for the download link.
          </p>
          <p className="text-sm text-zinc-500">
            A member of our team may also reach out to answer any questions you have about ADU construction.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 text-gold font-semibold hover:text-gold/80 underline underline-offset-4"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-8 shadow-md">
      <h2 className="text-2xl font-bold text-zinc-900 text-center mb-6">
        Download Your Free ADU Guide
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
              className={inputClasses}
            />
          </div>
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
            className={inputClasses}
          />
        </div>
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

        {/* reCAPTCHA */}
        <ReCaptcha
          ref={recaptchaRef}
          onChange={(token) => setRecaptchaToken(token)}
          onExpired={() => setRecaptchaToken(null)}
          onError={() => setRecaptchaToken(null)}
        />

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        <Button
          type="submit"
          size="lg"
          className="w-full flex items-center justify-center gap-2"
          disabled={isSubmitting || !recaptchaToken}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              Get My Free ADU Handbook
            </>
          )}
        </Button>
        <p className="text-xs text-zinc-500 text-center">
          By downloading, you agree to receive occasional updates from BNC Builders about ADUs San Diego, kitchen remodel Escondido CA, bathroom remodeling San Diego, and other remodeling Escondido news.
        </p>
      </form>
    </div>
  );
}
