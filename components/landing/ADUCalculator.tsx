// BNC Builders - ADU Cost Calculator Component
// Multi-step calculator with contact capture before showing results

'use client';

import { useState } from 'react';
import { useReCaptchaV3 } from '@/components/ui/ReCaptcha';
import { CheckCircle, ArrowRight, ArrowLeft, Calculator, Home } from 'lucide-react';

interface CalculatorData {
  bedrooms: number | null;
  bathrooms: number | null;
  size: number | null;
  customSize?: number;
  lotSlope: 'flat' | 'gentle' | 'significant' | null;
  finishLevel: 'basic' | 'mid' | 'high' | null;
}

interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

type Step = 'bedrooms' | 'bathrooms' | 'size' | 'lotSlope' | 'finishLevel' | 'contact' | 'result';

const RATES = {
  basic: 300,
  mid: 320,
  high: 350,
};

const CALCULATOR_STEPS = ['bedrooms', 'bathrooms', 'size', 'lotSlope', 'finishLevel'] as const;

export function ADUCalculator({ city = 'Escondido' }: { city?: string }) {
  const [step, setStep] = useState<Step>('bedrooms');
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    bedrooms: null,
    bathrooms: null,
    size: null,
    lotSlope: null,
    finishLevel: null,
  });
  const [contactData, setContactData] = useState<ContactData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { executeRecaptcha } = useReCaptchaV3();

  const calculateEstimate = (): number => {
    const size = calculatorData.size === -1 ? calculatorData.customSize || 0 : calculatorData.size || 0;
    const rate = calculatorData.finishLevel ? RATES[calculatorData.finishLevel] : RATES.basic;
    return size * rate;
  };

  const getCurrentStepIndex = (): number => {
    if (step === 'contact' || step === 'result') return CALCULATOR_STEPS.length;
    return CALCULATOR_STEPS.indexOf(step as typeof CALCULATOR_STEPS[number]);
  };

  const canProceedFromCurrentStep = (): boolean => {
    switch (step) {
      case 'bedrooms':
        return calculatorData.bedrooms !== null;
      case 'bathrooms':
        return calculatorData.bathrooms !== null;
      case 'size':
        return calculatorData.size === -1
          ? (calculatorData.customSize !== undefined && calculatorData.customSize > 0)
          : calculatorData.size !== null;
      case 'lotSlope':
        return calculatorData.lotSlope !== null;
      case 'finishLevel':
        return calculatorData.finishLevel !== null;
      default:
        return false;
    }
  };

  const handleNext = () => {
    const currentIndex = getCurrentStepIndex();

    if (step === 'finishLevel') {
      setStep('contact');
    } else if (currentIndex < CALCULATOR_STEPS.length - 1) {
      setStep(CALCULATOR_STEPS[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const currentIndex = getCurrentStepIndex();

    if (step === 'contact') {
      setStep('finishLevel');
    } else if (currentIndex > 0) {
      setStep(CALCULATOR_STEPS[currentIndex - 1]);
    }
  };

  const progressPercentage = (): number => {
    const totalSteps = CALCULATOR_STEPS.length + 1; // +1 for contact step
    let completedSteps = 0;

    if (step === 'result') return 100;
    if (step === 'contact') return (CALCULATOR_STEPS.length / totalSteps) * 100;

    const currentIndex = getCurrentStepIndex();
    completedSteps = currentIndex;

    return (completedSteps / totalSteps) * 100;
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const recaptchaToken = await executeRecaptcha('adu_calculator');

      if (!recaptchaToken) {
        setError('Failed to verify reCAPTCHA. Please try again.');
        setIsSubmitting(false);
        return;
      }

      const estimate = calculateEstimate();
      const size = calculatorData.size === -1 ? calculatorData.customSize : calculatorData.size;

      // Format calculator details for GHL
      const calculatorSummary = [
        '=== ADU Cost Calculator Results ===',
        '',
        `Bedrooms: ${calculatorData.bedrooms}`,
        `Bathrooms: ${calculatorData.bathrooms}`,
        `Size: ${size} sq ft`,
        `Lot Slope: ${calculatorData.lotSlope?.replace('-', ' ')}`,
        `Finish Level: ${calculatorData.finishLevel}-end (${RATES[calculatorData.finishLevel || 'basic']}/sq ft)`,
        '',
        `ESTIMATED COST: $${estimate.toLocaleString()}`,
        '',
        'Note: This is a rough ballpark estimate. Site visit required for accurate pricing.',
      ].join('\n');

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: contactData.firstName,
          lastName: contactData.lastName,
          email: contactData.email,
          phone: contactData.phone,
          address: contactData.address,
          city: city,
          message: calculatorSummary,
          reason: 'ADU Cost Calculator',
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStep('result');

        // Track conversion in Google Ads
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            send_to: 'AW-16672110303/calculator_complete',
            value: 1.0,
            currency: 'USD',
          });
        }
      } else {
        setError(data.message || 'Failed to send request. Please try again.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Failed to send request. Please call us at (760) 993-3204.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    'w-full px-4 py-3 bg-white border border-zinc-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all outline-none text-base';

  const buttonClasses =
    'px-6 py-3 rounded-lg font-semibold transition-all text-base';

  const selectedButtonClasses = 'bg-gold text-white border-2 border-gold';
  const unselectedButtonClasses = 'bg-white text-zinc-700 border-2 border-zinc-300 hover:border-gold';

  if (step === 'result') {
    const estimate = calculateEstimate();
    const size = calculatorData.size === -1 ? calculatorData.customSize : calculatorData.size;

    return (
      <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 lg:p-12">
        <div className="text-center mb-6 md:mb-8">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Home className="w-6 h-6 md:w-8 md:h-8 text-gold" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark mb-4">
            Your ADU Cost Estimate
          </h2>
          <div className="bg-gradient-to-br from-gold/5 to-gold/10 border-2 border-gold rounded-xl p-6 md:p-8 mb-6">
            <p className="text-zinc-600 text-base md:text-lg mb-2">Estimated Cost Range</p>
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-3 md:mb-4">
              ${estimate.toLocaleString()}
            </p>
            <p className="text-sm md:text-base text-zinc-600">
              Based on {size} sq ft {calculatorData.finishLevel}-end finish
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg md:rounded-xl p-4 md:p-6 mb-6 md:mb-8">
          <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2 text-sm md:text-base">
            <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
            Important Disclaimer
          </h3>
          <p className="text-amber-800 text-xs md:text-sm leading-relaxed">
            This is a rough ballpark estimate based on typical ADU construction costs. The actual cost of your
            ADU project may vary significantly based on site conditions, design complexity, permit requirements,
            material selections, and local building codes. A professional site visit and detailed consultation
            are required to provide an accurate project estimate.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg md:text-xl font-bold text-dark">Project Details</h3>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4 text-sm">
            <div className="bg-zinc-50 rounded-lg p-3 md:p-4">
              <span className="text-zinc-600 text-xs md:text-sm">Bedrooms:</span>
              <span className="ml-2 font-semibold text-dark">{calculatorData.bedrooms}</span>
            </div>
            <div className="bg-zinc-50 rounded-lg p-3 md:p-4">
              <span className="text-zinc-600 text-xs md:text-sm">Bathrooms:</span>
              <span className="ml-2 font-semibold text-dark">{calculatorData.bathrooms}</span>
            </div>
            <div className="bg-zinc-50 rounded-lg p-3 md:p-4">
              <span className="text-zinc-600 text-xs md:text-sm">Size:</span>
              <span className="ml-2 font-semibold text-dark">{size} sq ft</span>
            </div>
            <div className="bg-zinc-50 rounded-lg p-3 md:p-4">
              <span className="text-zinc-600 text-xs md:text-sm">Lot Slope:</span>
              <span className="ml-2 font-semibold text-dark capitalize">{calculatorData.lotSlope?.replace('-', ' ')}</span>
            </div>
            <div className="bg-zinc-50 rounded-lg p-3 md:p-4">
              <span className="text-zinc-600 text-xs md:text-sm">Finish Level:</span>
              <span className="ml-2 font-semibold text-dark capitalize">{calculatorData.finishLevel}-end</span>
            </div>
            <div className="bg-zinc-50 rounded-lg p-3 md:p-4">
              <span className="text-zinc-600 text-xs md:text-sm">Cost per sq ft:</span>
              <span className="ml-2 font-semibold text-dark">
                ${RATES[calculatorData.finishLevel || 'basic']}/sq ft
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-8 text-center">
          <p className="text-zinc-700 mb-4 text-sm md:text-base">
            Our team will contact you shortly to discuss your ADU project in detail and schedule
            a site visit for an accurate estimate.
          </p>
          <a
            href="tel:+17609933204"
            className="inline-block bg-gold hover:bg-gold-light text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold uppercase tracking-wide transition-all text-sm md:text-base"
          >
            Call Us Now: (760) 993-3204
          </a>
        </div>
      </div>
    );
  }

  if (step === 'contact') {
    return (
      <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 lg:p-12">
        {/* Progress Bar */}
        <div className="mb-6 md:mb-8">
          <div className="h-2 bg-zinc-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gold transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage()}%` }}
            />
          </div>
          <p className="text-xs md:text-sm text-zinc-500 text-center mt-2">
            Step {CALCULATOR_STEPS.length + 1} of {CALCULATOR_STEPS.length + 1}
          </p>
        </div>

        <div className="text-center mb-6 md:mb-8">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calculator className="w-6 h-6 md:w-8 md:h-8 text-gold" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark mb-2">
            Almost There!
          </h2>
          <p className="text-base md:text-lg text-zinc-600">
            Enter your contact information to see your personalized ADU cost estimate
          </p>
        </div>

        <form onSubmit={handleContactSubmit} className="space-y-4 md:space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <input
              type="text"
              value={contactData.firstName}
              onChange={(e) => setContactData({ ...contactData, firstName: e.target.value })}
              required
              placeholder="First Name"
              autoComplete="given-name"
              className={inputClasses}
            />
            <input
              type="text"
              value={contactData.lastName}
              onChange={(e) => setContactData({ ...contactData, lastName: e.target.value })}
              required
              placeholder="Last Name"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>

          <input
            type="email"
            value={contactData.email}
            onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
            required
            placeholder="Email"
            autoComplete="email"
            className={inputClasses}
          />

          <input
            type="tel"
            value={contactData.phone}
            onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
            required
            placeholder="Phone"
            autoComplete="tel"
            inputMode="tel"
            className={inputClasses}
          />

          <input
            type="text"
            value={contactData.address}
            onChange={(e) => setContactData({ ...contactData, address: e.target.value })}
            required
            placeholder="Property Address"
            autoComplete="street-address"
            className={inputClasses}
          />

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <button
              type="button"
              onClick={handleBack}
              className="flex items-center justify-center gap-2 text-zinc-600 hover:text-gold transition-colors py-3 sm:py-0"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">Back</span>
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gold hover:bg-gold-light text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold uppercase tracking-wide transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  See My Estimate
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </>
              )}
            </button>
          </div>

          <p className="text-xs md:text-sm text-zinc-500 text-center">
            By submitting, you agree to be contacted about your ADU project. We respect your privacy.
          </p>
        </form>
      </div>
    );
  }

  // Calculator Steps
  const getStepContent = () => {
    switch (step) {
      case 'bedrooms':
        return {
          title: 'How many bedrooms?',
          question: 'Select the number of bedrooms for your ADU',
          content: (
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setCalculatorData({ ...calculatorData, bedrooms: num })}
                  className={`${buttonClasses} text-sm md:text-base ${
                    calculatorData.bedrooms === num ? selectedButtonClasses : unselectedButtonClasses
                  }`}
                >
                  <span className="hidden sm:inline">{num} {num === 1 ? 'Bedroom' : 'Bedrooms'}</span>
                  <span className="sm:hidden">{num} BR</span>
                </button>
              ))}
            </div>
          ),
        };

      case 'bathrooms':
        return {
          title: 'How many bathrooms?',
          question: 'Select the number of bathrooms for your ADU',
          content: (
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[1, 2].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setCalculatorData({ ...calculatorData, bathrooms: num })}
                  className={`${buttonClasses} text-sm md:text-base ${
                    calculatorData.bathrooms === num ? selectedButtonClasses : unselectedButtonClasses
                  }`}
                >
                  <span className="hidden sm:inline">{num} {num === 1 ? 'Bathroom' : 'Bathrooms'}</span>
                  <span className="sm:hidden">{num} BA</span>
                </button>
              ))}
            </div>
          ),
        };

      case 'size':
        return {
          title: 'What size ADU?',
          question: 'Choose your desired square footage',
          content: (
            <>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {[
                  { label: '400–600 sq ft', shortLabel: '400-600', value: 500 },
                  { label: '650–850 sq ft', shortLabel: '650-850', value: 750 },
                  { label: '900–1200 sq ft', shortLabel: '900-1200', value: 1050 },
                  { label: 'Other', shortLabel: 'Other', value: -1 },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setCalculatorData({ ...calculatorData, size: option.value })}
                    className={`${buttonClasses} text-sm md:text-base ${
                      calculatorData.size === option.value ? selectedButtonClasses : unselectedButtonClasses
                    }`}
                  >
                    <span className="hidden sm:inline">{option.label}</span>
                    <span className="sm:hidden">{option.shortLabel}</span>
                  </button>
                ))}
              </div>
              {calculatorData.size === -1 && (
                <div className="mt-4">
                  <input
                    type="number"
                    value={calculatorData.customSize || ''}
                    onChange={(e) =>
                      setCalculatorData({ ...calculatorData, customSize: parseInt(e.target.value) || 0 })
                    }
                    placeholder="Enter square footage"
                    min="100"
                    max="2000"
                    className={inputClasses}
                  />
                </div>
              )}
            </>
          ),
        };

      case 'lotSlope':
        return {
          title: 'Is the lot flat or sloped?',
          question: 'This helps us estimate site preparation costs',
          content: (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
              {[
                { label: 'Flat', value: 'flat' as const },
                { label: 'Gentle Slope', value: 'gentle' as const },
                { label: 'Significant Slope', value: 'significant' as const },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setCalculatorData({ ...calculatorData, lotSlope: option.value })}
                  className={`${buttonClasses} text-sm md:text-base ${
                    calculatorData.lotSlope === option.value ? selectedButtonClasses : unselectedButtonClasses
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          ),
        };

      case 'finishLevel':
        return {
          title: 'Finish level?',
          question: 'Choose the quality of finishes and materials',
          content: (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
              {[
                { label: 'Basic', value: 'basic' as const, rate: 300 },
                { label: 'Mid-range', value: 'mid' as const, rate: 320 },
                { label: 'High-end', value: 'high' as const, rate: 350 },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setCalculatorData({ ...calculatorData, finishLevel: option.value })}
                  className={`${buttonClasses} text-sm md:text-base ${
                    calculatorData.finishLevel === option.value ? selectedButtonClasses : unselectedButtonClasses
                  }`}
                >
                  <div>
                    <div className="font-semibold">{option.label}</div>
                    <div className="text-xs md:text-sm opacity-75">${option.rate}/sq ft</div>
                  </div>
                </button>
              ))}
            </div>
          ),
        };

      default:
        return null;
    }
  };

  const stepContent = getStepContent();

  if (!stepContent) return null;

  return (
    <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 lg:p-12">
      {/* Progress Bar */}
      <div className="mb-6 md:mb-8">
        <div className="h-2 bg-zinc-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gold transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage()}%` }}
          />
        </div>
        <p className="text-xs md:text-sm text-zinc-500 text-center mt-2">
          Step {getCurrentStepIndex() + 1} of {CALCULATOR_STEPS.length + 1}
        </p>
      </div>

      {/* Step Content */}
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark mb-2">
          {stepContent.title}
        </h2>
        <p className="text-sm md:text-base text-zinc-600">
          {stepContent.question}
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {stepContent.content}

        {/* Navigation Buttons */}
        <div className="flex gap-3 md:gap-4 mt-6 md:mt-8">
          {getCurrentStepIndex() > 0 && (
            <button
              type="button"
              onClick={handleBack}
              className="flex items-center justify-center gap-2 px-6 py-3 text-zinc-600 hover:text-gold transition-colors text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              Back
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={!canProceedFromCurrentStep()}
            className="flex-1 bg-gold hover:bg-gold-light text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold uppercase tracking-wide transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
          >
            {step === 'finishLevel' ? 'Continue to Contact' : 'Next'}
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
