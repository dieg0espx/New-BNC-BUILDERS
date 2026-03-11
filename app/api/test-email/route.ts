import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/resend';

export async function GET() {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { success: false, message: 'RESEND_API_KEY is not configured' },
      { status: 500 }
    );
  }

  const to = process.env.CONTACT_EMAIL || 'contact@bncbuilders.net';

  try {
    const data = await sendEmail({
      to,
      subject: 'Test Email - BNC Builders',
      html: '<h1>Test Email</h1><p>This is a test email from BNC Builders. If you received this, Resend is configured correctly.</p>',
      text: 'Test Email\n\nThis is a test email from BNC Builders. If you received this, Resend is configured correctly.',
    });

    return NextResponse.json({ success: true, message: 'Test email sent', data });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { success: false, message: `Failed to send test email: ${message}` },
      { status: 500 }
    );
  }
}
