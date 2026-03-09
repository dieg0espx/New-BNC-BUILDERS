'use client';

import { useState } from 'react';
import { useReCaptchaV3 } from '@/components/ui/ReCaptcha';

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'BNCBuilders2024!';

export default function NewSubmissionPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const { executeRecaptcha } = useReCaptchaV3();

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    isNewCustomer: '',
    reason: '',
    message: '',
  });

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password. Please try again.');
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      // Execute reCAPTCHA
      const recaptchaToken = await executeRecaptcha('admin_form');

      // Submit to the same contact API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Lead successfully added to GHL!');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          isNewCustomer: '',
          reason: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.message || 'Failed to submit lead. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('An error occurred. Please try again.');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              Admin Access Required
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Please enter the admin password to continue
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handlePasswordSubmit}>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#CF9C39] focus:border-[#CF9C39] focus:z-10 sm:text-sm"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {passwordError && (
              <p className="text-red-600 text-sm text-center">{passwordError}</p>
            )}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#CF9C39] hover:bg-[#b88832] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CF9C39]"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Manual Lead Submission</h1>
            <p className="mt-2 text-sm text-gray-600">
              Add a new lead manually. This will be sent to GHL and the team via email.
            </p>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-md p-4">
              <p className="text-green-800">{submitMessage}</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-md p-4">
              <p className="text-red-800">{submitMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#CF9C39] focus:ring-[#CF9C39] sm:text-sm px-4 py-2 border"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#CF9C39] focus:ring-[#CF9C39] sm:text-sm px-4 py-2 border"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#CF9C39] focus:ring-[#CF9C39] sm:text-sm px-4 py-2 border"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(760) 123-4567"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#CF9C39] focus:ring-[#CF9C39] sm:text-sm px-4 py-2 border"
                />
              </div>
            </div>

            {/* Address Information */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Project Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#CF9C39] focus:ring-[#CF9C39] sm:text-sm px-4 py-2 border"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#CF9C39] focus:ring-[#CF9C39] sm:text-sm px-4 py-2 border"
                />
              </div>

              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="CA"
                  maxLength={2}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#CF9C39] focus:ring-[#CF9C39] sm:text-sm px-4 py-2 border"
                />
              </div>

              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                  Zip Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#CF9C39] focus:ring-[#CF9C39] sm:text-sm px-4 py-2 border"
                />
              </div>
            </div>

            {/* Customer Status and Service */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="isNewCustomer" className="block text-sm font-medium text-gray-700">
                  Customer Status *
                </label>
                <select
                  name="isNewCustomer"
                  id="isNewCustomer"
                  required
                  value={formData.isNewCustomer}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#CF9C39] focus:ring-[#CF9C39] sm:text-sm px-4 py-2 border"
                >
                  <option value="">Select...</option>
                  <option value="yes">New Customer</option>
                  <option value="no">Existing Customer</option>
                  <option value="neither">Neither (Inquiry Only)</option>
                </select>
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
                  Service Interest *
                </label>
                <select
                  name="reason"
                  id="reason"
                  required
                  value={formData.reason}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#CF9C39] focus:ring-[#CF9C39] sm:text-sm px-4 py-2 border"
                >
                  <option value="">Select a service...</option>
                  <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                  <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                  <option value="ADU Construction">ADU Construction</option>
                  <option value="Room Addition">Room Addition</option>
                  <option value="Outdoor Kitchen">Outdoor Kitchen</option>
                  <option value="Hardscaping">Hardscaping</option>
                  <option value="Deck Repair">Deck Repair</option>
                  <option value="Full Home Remodel">Full Home Remodel</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Message/Notes */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Project Details / Notes *
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter project details, timeline, budget, or any other relevant information..."
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#CF9C39] focus:ring-[#CF9C39] sm:text-sm px-4 py-2 border"
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between pt-4">
              <button
                type="button"
                onClick={() => setIsAuthenticated(false)}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Sign Out
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#CF9C39] hover:bg-[#b88832] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CF9C39] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Lead'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
