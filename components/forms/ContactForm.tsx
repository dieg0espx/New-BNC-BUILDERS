// BNC Builders - Contact Form Component

'use client';

import { useState, useRef } from 'react';
import { Button, ReCaptcha, ReCaptchaRef } from '@/components/ui';
import { CheckCircle, Send, User, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  isNewCustomer: string;
  message: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  isNewCustomer: '',
  message: '',
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCaptchaRef>(null);

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
        setError(data.message || 'Failed to send message. Please try again.');
        recaptchaRef.current?.reset();
        setRecaptchaToken(null);
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Failed to send message. Please try again or call us directly at (760) 249-7207.');
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-10 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-3">Thank You!</h3>
        <p className="text-green-700 max-w-md mx-auto">
          Your message has been received. A member of our team will be in touch shortly to discuss your project.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-green-600 font-semibold hover:text-green-700 underline underline-offset-4"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  const inputClasses = "w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-gold/50 focus:border-gold focus:bg-white transition-all outline-none";
  const labelClasses = "block text-sm font-semibold text-zinc-700 mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Fields */}
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className={labelClasses}>
            <span className="flex items-center gap-2">
              <User className="w-4 h-4 text-gold" />
              First Name <span className="text-red-500">*</span>
            </span>
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
          <label htmlFor="lastName" className={labelClasses}>
            <span className="flex items-center gap-2">
              <User className="w-4 h-4 text-gold" />
              Last Name <span className="text-red-500">*</span>
            </span>
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

      {/* Contact Fields */}
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={labelClasses}>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold" />
              Phone <span className="text-red-500">*</span>
            </span>
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
          <label htmlFor="email" className={labelClasses}>
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold" />
              Email <span className="text-red-500">*</span>
            </span>
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

      {/* Address Fields */}
      <div>
        <label htmlFor="address" className={labelClasses}>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gold" />
            Project Address
          </span>
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="123 Main Street"
          className={inputClasses}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        <div>
          <label htmlFor="city" className={labelClasses}>
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Escondido"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="state" className={labelClasses}>
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="CA"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="zipCode" className={labelClasses}>
            Zip Code
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="92029"
            className={inputClasses}
          />
        </div>
      </div>

      {/* Customer Type */}
      <div>
        <label htmlFor="isNewCustomer" className={labelClasses}>
          Are you a new customer? <span className="text-red-500">*</span>
        </label>
        <select
          id="isNewCustomer"
          name="isNewCustomer"
          value={formData.isNewCustomer}
          onChange={handleChange}
          required
          className={inputClasses}
        >
          <option value="">Select an option</option>
          <option value="yes">Yes, I am a potential new customer</option>
          <option value="no">No, I&apos;m a current existing customer</option>
          <option value="neither">I&apos;m neither</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClasses}>
          <span className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-gold" />
            How can we help you? <span className="text-red-500">*</span>
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us about your project..."
          className={inputClasses}
        />
      </div>

      {/* Consent */}
      <p className="text-xs text-zinc-500 bg-zinc-50 p-4 rounded-lg">
        By submitting, you agree to be contacted about your request & other information using automated technology. Message frequency varies. Msg & data rates may apply. Text STOP to cancel.
      </p>

      {/* reCAPTCHA */}
      <ReCaptcha
        ref={recaptchaRef}
        onChange={(token) => setRecaptchaToken(token)}
        onExpired={() => setRecaptchaToken(null)}
        onError={() => setRecaptchaToken(null)}
      />

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Submit */}
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
            <Send className="w-5 h-5" />
            Submit Request
          </>
        )}
      </Button>
    </form>
  );
}
