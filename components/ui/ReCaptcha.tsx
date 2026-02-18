// BNC Builders - ReCaptcha v3 Component (Invisible)

'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export interface ReCaptchaRef {
  execute: (action?: string) => Promise<string | null>;
}

// Hook to load and execute reCAPTCHA v3
export function useReCaptchaV3() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    if (!siteKey) {
      console.error('ReCaptcha site key is not configured');
      return;
    }

    // Load reCAPTCHA v3 script
    if (!document.querySelector('#recaptcha-v3-script')) {
      const script = document.createElement('script');
      script.id = 'recaptcha-v3-script';
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, [siteKey]);

  const executeRecaptcha = async (action: string = 'submit'): Promise<string | null> => {
    if (!siteKey) {
      console.error('ReCaptcha site key is not configured');
      return null;
    }

    try {
      return await new Promise((resolve) => {
        window.grecaptcha.ready(async () => {
          try {
            const token = await window.grecaptcha.execute(siteKey, { action });
            resolve(token);
          } catch (error) {
            console.error('reCAPTCHA execution error:', error);
            resolve(null);
          }
        });
      });
    } catch (error) {
      console.error('reCAPTCHA error:', error);
      return null;
    }
  };

  return { executeRecaptcha };
}

// Legacy component for backwards compatibility (not rendered, just returns null)
export const ReCaptcha = () => null;

ReCaptcha.displayName = 'ReCaptcha';
