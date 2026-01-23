// BNC Builders - Quick Contact Form (2-Step)

'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  reason: string;
}

const reasons = [
  'Kitchen Remodeling',
  'Bathroom Remodeling',
  'ADU Construction',
  'Room Addition',
  'Outdoor Kitchen',
  'Hardscaping',
  'Deck Repair',
  'Other',
];

export function QuickContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    reason: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (formData.firstName && formData.lastName && formData.email) {
      setStep(2);
    }
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || 'Failed to send. Please try again.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Failed to send. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    'w-full px-4 py-3 bg-white border-0 text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-light';

  if (submitted) {
    return (
      <section className="relative z-20 -mt-[30px] sm:-mt-[50px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-5">
          <div className="bg-gold py-4 sm:py-5 px-4 sm:px-6 rounded-lg shadow-lg flex items-center justify-center gap-3">
            <CheckCircle className="w-6 h-6 text-white" />
            <span className="text-white font-semibold text-lg">
              Thank you! We&apos;ll contact you shortly.
            </span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative z-20 -mt-[30px] sm:-mt-[50px]">
      <form onSubmit={handleSubmit}>
        {/* Step 1 */}
        <div className={`${step === 1 ? 'block' : 'hidden'}`}>
          <div className="max-w-5xl mx-auto px-4 sm:px-5">
            <div className="bg-gold py-4 sm:py-5 px-4 sm:px-6 rounded-lg shadow-lg">
              <h3 className="text-white font-bold text-base sm:text-lg md:text-xl text-center mb-4">
                Get Your Free Estimate Today!
              </h3>
              <div className="flex flex-col md:flex-row items-stretch gap-3 sm:gap-4">
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
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="*Email"
              required
              className={inputClasses}
            />
            <button
              type="button"
              onClick={handleNextStep}
              disabled={!formData.firstName || !formData.lastName || !formData.email}
              className="bg-dark hover:bg-zinc-800 text-white px-6 sm:px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-sm sm:text-base"
            >
              Next Step
            </button>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className={`${step === 2 ? 'block' : 'hidden'}`}>
          <div className="max-w-5xl mx-auto px-4 sm:px-5">
            <div className="bg-gold py-4 sm:py-5 px-4 sm:px-6 rounded-lg shadow-lg">
              <h3 className="text-white font-bold text-base sm:text-lg md:text-xl text-center mb-4">
                Almost There! Tell Us More
              </h3>
              {error && (
                <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded mb-4 text-sm text-center">
                  {error}
                </div>
              )}
              <div className="flex flex-col md:flex-row items-stretch gap-3 sm:gap-4">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="*Phone Number"
              required
              className={inputClasses}
            />
            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              className={`${inputClasses} ${!formData.reason ? 'text-gray-400' : 'text-dark'}`}
            >
              <option value="">*Select Service</option>
              {reasons.map((reason) => (
                <option key={reason} value={reason}>
                  {reason}
                </option>
              ))}
            </select>
            <div className="flex gap-3 sm:contents">
              <button
                type="button"
                onClick={handlePrevStep}
                className="flex-1 md:flex-none bg-white hover:bg-gray-100 text-dark px-4 sm:px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap text-sm sm:text-base"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !formData.phone || !formData.reason}
                className="flex-1 md:flex-none bg-dark hover:bg-zinc-800 text-white px-4 sm:px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-sm sm:text-base"
              >
                {isSubmitting ? 'Sending...' : 'Get Estimate'}
              </button>
            </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
