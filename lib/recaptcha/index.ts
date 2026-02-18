// BNC Builders - reCAPTCHA v3 Verification

interface RecaptchaVerificationResponse {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
}

/**
 * Verify reCAPTCHA v3 token
 * @param token - The reCAPTCHA token from the client
 * @param minScore - Minimum acceptable score (0.0 to 1.0). Default is 0.5
 * @returns Object with success status and optional error message
 */
export async function verifyRecaptcha(
  token: string,
  minScore: number = 0.5
): Promise<{ success: boolean; error?: string; score?: number }> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY is not configured');
    return { success: false, error: 'reCAPTCHA is not properly configured' };
  }

  if (!token) {
    return { success: false, error: 'reCAPTCHA token is missing' };
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data: RecaptchaVerificationResponse = await response.json();

    if (!data.success) {
      console.error('reCAPTCHA verification failed:', data['error-codes']);
      return {
        success: false,
        error: 'reCAPTCHA verification failed. Please try again.'
      };
    }

    // Check score for v3 (v2 doesn't return a score)
    const score = data.score ?? 1.0;

    if (score < minScore) {
      console.warn(`reCAPTCHA score ${score} is below minimum ${minScore}`);
      return {
        success: false,
        score,
        error: 'Suspicious activity detected. Please try again.'
      };
    }

    console.log(`reCAPTCHA verified successfully. Score: ${score}, Action: ${data.action}`);
    return { success: true, score };
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return {
      success: false,
      error: 'Failed to verify reCAPTCHA. Please try again.'
    };
  }
}
