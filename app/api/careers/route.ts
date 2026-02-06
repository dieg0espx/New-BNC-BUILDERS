// BNC Builders - Careers Form API Route

import { NextRequest, NextResponse } from 'next/server';
import { sendCareersEmail } from '@/lib/email';

interface CareersFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  message: string;
  resumeUrl?: string;
}

// Validate required fields
function validateCareersData(data: Partial<CareersFormData>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.firstName?.trim()) errors.push('First name is required');
  if (!data.lastName?.trim()) errors.push('Last name is required');
  if (!data.email?.trim()) errors.push('Email is required');
  if (!data.phone?.trim()) errors.push('Phone is required');
  if (!data.message?.trim()) errors.push('Please tell us about yourself');

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

    // Validate the data
    const validation = validateCareersData(body);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors: validation.errors },
        { status: 400 }
      );
    }

    const formData: CareersFormData = {
      firstName: body.firstName.trim(),
      lastName: body.lastName.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      position: body.position?.trim() || 'Not specified',
      experience: body.experience?.trim() || 'Not specified',
      message: body.message.trim(),
      resumeUrl: body.resumeUrl?.trim(),
    };

    // Send email to BNC careers team
    await sendCareersEmail(formData);

    return NextResponse.json(
      { success: true, message: 'Thank you for your application! We will review it and get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Careers form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit application. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
