// BNC Builders - Email Service using Nodemailer

import nodemailer from 'nodemailer';

// Create transporter using SMTP settings from environment variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Email templates
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

// Send contact form email
export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const recipients = process.env.EMAIL_TO?.split(',').map(e => e.trim()) || [];

  const customerStatus = data.isNewCustomer === 'yes'
    ? 'New Customer'
    : data.isNewCustomer === 'no'
      ? 'Existing Customer'
      : 'Neither';

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #CF9C39; color: white; padding: 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #CF9C39; }
        .value { margin-top: 5px; }
        .message-box { background-color: white; padding: 15px; border-left: 4px solid #CF9C39; margin-top: 20px; }
        .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.firstName} ${data.lastName}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
          </div>
          ${data.address ? `
          <div class="field">
            <div class="label">Address:</div>
            <div class="value">${data.address}${data.city ? `, ${data.city}` : ''}${data.state ? `, ${data.state}` : ''} ${data.zipCode || ''}</div>
          </div>
          ` : ''}
          ${data.reason ? `
          <div class="field">
            <div class="label">Service Interested In:</div>
            <div class="value">${data.reason}</div>
          </div>
          ` : ''}
          <div class="field">
            <div class="label">Customer Status:</div>
            <div class="value">${customerStatus}</div>
          </div>
          <div class="message-box">
            <div class="label">Message:</div>
            <div class="value">${data.message || 'No message provided'}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the BNC Builders website contact form.</p>
          <p>BNC Builders Inc. | 101 State Pl Suite N, Escondido, CA 92029</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const textContent = `
New Contact Form Submission

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
${data.address ? `Address: ${data.address}${data.city ? `, ${data.city}` : ''}${data.state ? `, ${data.state}` : ''} ${data.zipCode || ''}` : ''}
${data.reason ? `Service Interested In: ${data.reason}` : ''}
Customer Status: ${customerStatus}

Message:
${data.message || 'No message provided'}

---
This email was sent from the BNC Builders website contact form.
BNC Builders Inc. | 101 State Pl Suite N, Escondido, CA 92029
  `;

  await transporter.sendMail({
    from: `"BNC Builders Website" <${process.env.EMAIL_FROM}>`,
    to: recipients,
    subject: `New Contact: ${data.firstName} ${data.lastName} - ${data.reason || 'General Inquiry'}`,
    text: textContent,
    html: htmlContent,
    replyTo: data.email,
  });
}

// Send careers form email
export async function sendCareersEmail(data: CareersFormData): Promise<void> {
  const recipients = process.env.EMAIL_CAREERS_TO?.split(',').map(e => e.trim()) || [];

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #CF9C39; color: white; padding: 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .accent { color: #CF9C39; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #CF9C39; }
        .value { margin-top: 5px; }
        .message-box { background-color: white; padding: 15px; border-left: 4px solid #CF9C39; margin-top: 20px; }
        .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New <span class="accent">Job Application</span></h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Applicant Name:</div>
            <div class="value">${data.firstName} ${data.lastName}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
          </div>
          <div class="field">
            <div class="label">Position Applied For:</div>
            <div class="value">${data.position}</div>
          </div>
          <div class="field">
            <div class="label">Years of Experience:</div>
            <div class="value">${data.experience}</div>
          </div>
          ${data.resumeUrl ? `
          <div class="field">
            <div class="label">Resume:</div>
            <div class="value"><a href="${data.resumeUrl}">Download Resume</a></div>
          </div>
          ` : ''}
          <div class="message-box">
            <div class="label">Cover Letter / Additional Information:</div>
            <div class="value">${data.message || 'No additional information provided'}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the BNC Builders careers page.</p>
          <p>BNC Builders Inc. | 101 State Pl Suite N, Escondido, CA 92029</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const textContent = `
New Job Application

Applicant Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Position Applied For: ${data.position}
Years of Experience: ${data.experience}
${data.resumeUrl ? `Resume: ${data.resumeUrl}` : ''}

Cover Letter / Additional Information:
${data.message || 'No additional information provided'}

---
This email was sent from the BNC Builders careers page.
BNC Builders Inc. | 101 State Pl Suite N, Escondido, CA 92029
  `;

  await transporter.sendMail({
    from: `"BNC Builders Careers" <${process.env.EMAIL_FROM}>`,
    to: recipients,
    subject: `Job Application: ${data.firstName} ${data.lastName} - ${data.position}`,
    text: textContent,
    html: htmlContent,
    replyTo: data.email,
  });
}

// Send auto-reply to the customer
export async function sendAutoReply(email: string, firstName: string): Promise<void> {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #CF9C39; color: white; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; }
        .content { padding: 30px; background-color: #ffffff; }
        .content h2 { color: #CF9C39; }
        .highlight { background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .cta { background-color: #CF9C39; color: white; padding: 12px 24px; text-decoration: none; display: inline-block; border-radius: 5px; margin-top: 20px; }
        .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; border-top: 1px solid #eee; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You, ${firstName}!</h1>
        </div>
        <div class="content">
          <h2>We've received your message</h2>
          <p>Thank you for reaching out to BNC Builders Inc. We appreciate your interest in our home remodeling services.</p>

          <div class="highlight">
            <p><strong>What happens next?</strong></p>
            <p>A member of our team will review your inquiry and get back to you within 1-2 business days. If you need immediate assistance, please don't hesitate to call us.</p>
          </div>

          <p><strong>Contact us directly:</strong></p>
          <p>Phone: <a href="tel:7602497207">(760) 249-7207</a></p>
          <p>Email: <a href="mailto:contact@bncbuilders.net">contact@bncbuilders.net</a></p>

          <p style="margin-top: 30px;">In the meantime, feel free to browse our portfolio to see examples of our work:</p>
          <a href="https://bncbuilders.net/portfolio" class="cta">View Our Portfolio</a>
        </div>
        <div class="footer">
          <p>BNC Builders Inc.</p>
          <p>101 State Pl Suite N, Escondido, CA 92029</p>
          <p>Mon - Sat: 8:00am - 5:00pm</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const textContent = `
Thank You, ${firstName}!

We've received your message and appreciate your interest in BNC Builders Inc.

What happens next?
A member of our team will review your inquiry and get back to you within 1-2 business days. If you need immediate assistance, please don't hesitate to call us.

Contact us directly:
Phone: (760) 249-7207
Email: contact@bncbuilders.net

In the meantime, feel free to browse our portfolio at https://bncbuilders.net/portfolio

---
BNC Builders Inc.
101 State Pl Suite N, Escondido, CA 92029
Mon - Sat: 8:00am - 5:00pm
  `;

  await transporter.sendMail({
    from: `"BNC Builders Inc." <${process.env.EMAIL_FROM}>`,
    to: email,
    subject: 'Thank you for contacting BNC Builders!',
    text: textContent,
    html: htmlContent,
  });
}

// Verify transporter connection
export async function verifyConnection(): Promise<boolean> {
  try {
    await transporter.verify();
    return true;
  } catch (error) {
    console.error('Email transporter verification failed:', error);
    return false;
  }
}
