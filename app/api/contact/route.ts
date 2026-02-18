// BNC Builders - Contact Form API Route

import { NextRequest, NextResponse } from 'next/server';
import { sendContactToGHL } from '@/lib/ghl';
import { verifyRecaptcha } from '@/lib/recaptcha';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  isNewCustomer?: string;
  message: string;
  reason?: string;
}

// Validate required fields
function validateContactData(data: Partial<ContactFormData>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.firstName?.trim()) errors.push('First name is required');
  if (!data.lastName?.trim()) errors.push('Last name is required');
  if (!data.email?.trim()) errors.push('Email is required');
  if (!data.phone?.trim()) errors.push('Phone is required');

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (data.email && !emailRegex.test(data.email)) {
    errors.push('Please provide a valid email address');
  }

  // Basic phone validation (at least 10 digits)
  const phoneDigits = data.phone?.replace(/\D/g, '') || '';
  if (phoneDigits.length < 10) {
    errors.push('Please provide a valid phone number');
  }

  return { valid: errors.length === 0, errors };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Verify reCAPTCHA
    const recaptchaResult = await verifyRecaptcha(body.recaptchaToken);
    if (!recaptchaResult.success) {
      return NextResponse.json(
        { success: false, message: recaptchaResult.error || 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }

    // Validate the data
    const validation = validateContactData(body);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors: validation.errors },
        { status: 400 }
      );
    }

    const formData: ContactFormData = {
      firstName: body.firstName.trim(),
      lastName: body.lastName.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      address: body.address?.trim(),
      city: body.city?.trim(),
      state: body.state?.trim(),
      zipCode: body.zipCode?.trim(),
      isNewCustomer: body.isNewCustomer,
      message: body.message?.trim() || '',
      reason: body.reason?.trim(),
    };

    // Send to GoHighLevel CRM
    const ghlResult = await sendContactToGHL(formData);

    if (!ghlResult.success) {
      console.error('GHL webhook failed:', ghlResult.error);
    }

    return NextResponse.json(
      { success: true, message: 'Thank you! We will contact you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}
