// BNC Builders - Referral Form Component

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui';
import { CheckCircle, Send } from 'lucide-react';

interface FormData {
  referrerName: string;
  referrerEmail: string;
  referrerPhone: string;
  referredName: string;
  referredEmail: string;
  referredPhone: string;
  projectInterest: string;
}

const initialFormData: FormData = {
  referrerName: '',
  referrerEmail: '',
  referrerPhone: '',
  referredName: '',
  referredEmail: '',
  referredPhone: '',
  projectInterest: '',
};

export function ReferralForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Split referrer name into first and last
    const nameParts = formData.referrerName.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email: formData.referrerEmail,
          phone: formData.referrerPhone,
          reason: 'Customer Referral Program',
          message: `REFERRAL SUBMISSION

Referred Person: ${formData.referredName}
Referred Email: ${formData.referredEmail || 'Not provided'}
Referred Phone: ${formData.referredPhone || 'Not provided'}

Project Interest: ${formData.projectInterest || 'Not specified'}`,
          isNewCustomer: 'no',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        setFormData(initialFormData);
      } else {
        setError(data.message || 'Failed to submit. Please try again.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Failed to submit. Please try again or call us directly.');
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
          <h3 className="text-2xl font-bold text-zinc-900 mb-2">Referral Submitted!</h3>
          <p className="text-zinc-600 mb-4">
            Thank you for referring a friend to BNC Builders! We appreciate your trust in our services.
          </p>
          <p className="text-sm text-zinc-500">
            We'll reach out to your referral soon. Once they complete a project with us, we'll send your Refer and Dine reward!
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 text-gold font-semibold hover:text-gold/80 underline underline-offset-4"
          >
            Submit Another Referral
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-md space-y-6">
      <h3 className="font-semibold text-zinc-900">Your Contact Information</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="referrerName" className="block text-sm font-medium text-zinc-700 mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="referrerName"
            name="referrerName"
            value={formData.referrerName}
            onChange={handleChange}
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="referrerEmail" className="block text-sm font-medium text-zinc-700 mb-1">
            Your Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="referrerEmail"
            name="referrerEmail"
            value={formData.referrerEmail}
            onChange={handleChange}
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="referrerPhone" className="block text-sm font-medium text-zinc-700 mb-1">
            Your Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="referrerPhone"
            name="referrerPhone"
            value={formData.referrerPhone}
            onChange={handleChange}
            required
            placeholder="(760) 123-4567"
            className={inputClasses}
          />
        </div>
      </div>

      <h3 className="font-semibold text-zinc-900 pt-4">Who Are You Referring?</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="referredName" className="block text-sm font-medium text-zinc-700 mb-1">
            Their Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="referredName"
            name="referredName"
            value={formData.referredName}
            onChange={handleChange}
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="referredEmail" className="block text-sm font-medium text-zinc-700 mb-1">
            Their Email
          </label>
          <input
            type="email"
            id="referredEmail"
            name="referredEmail"
            value={formData.referredEmail}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="referredPhone" className="block text-sm font-medium text-zinc-700 mb-1">
            Their Phone
          </label>
          <input
            type="tel"
            id="referredPhone"
            name="referredPhone"
            value={formData.referredPhone}
            onChange={handleChange}
            placeholder="(760) 123-4567"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="projectInterest" className="block text-sm font-medium text-zinc-700 mb-1">
          What Project Are They Interested In?
        </label>
        <textarea
          id="projectInterest"
          name="projectInterest"
          value={formData.projectInterest}
          onChange={handleChange}
          rows={3}
          placeholder="e.g., Kitchen remodel Escondido, bathroom remodeling San Diego, ADUs San Diego, deck repair..."
          className={inputClasses}
        />
      </div>

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
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Submit Referral
          </>
        )}
      </Button>
    </form>
  );
}
