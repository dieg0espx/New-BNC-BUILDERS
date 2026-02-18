# BNC Builders Email Templates

Professional email templates designed with BNC Builders' branding, colors, and logo.

## Brand Colors

- **Primary Gold**: #F5A623 (default), #FFB800 (light), #D4900F (dark)
- **Secondary Navy**: #1A1A2E (default), #0D1B2A (light)
- **Gray Scale**: #F5F5F5, #E0E0E0, #666666, #333333

## Fonts

- **Headings**: Montserrat
- **Body**: Open Sans

## Logo URLs

- **Light Logo** (for dark backgrounds): `https://res.cloudinary.com/dku1gnuat/image/upload/v1767035996/BNC-BUILDERS/images_brand_logo-light.2505220829366.png`
- **Dark Logo** (for light backgrounds): `https://res.cloudinary.com/dku1gnuat/image/upload/v1767035998/BNC-BUILDERS/images_brand_logo-dark.2505220829365.png`

## Templates

### 1. base-template.html
Base template with standard BNC Builders branding. Use this as a starting point for creating new email templates.

**Features:**
- Header with logo
- Standard content section
- CTA button
- Info box component
- Footer with contact information

### 2. contact-form-submission.html
Internal notification email sent to the BNC Builders team when a new contact form is submitted.

**Variables to replace:**
- `{{customer_name}}` - Customer's name
- `{{customer_email}}` - Customer's email
- `{{customer_phone}}` - Customer's phone number
- `{{service_interest}}` - Service they're interested in
- `{{message}}` - Customer's message
- `{{submission_date}}` - Date and time of submission

### 3. quote-request.html
Customer-facing email sent after requesting a quote. Includes next steps and what to expect.

**Variables to replace:**
- `{{customer_name}}` - Customer's name
- `{{service_interest}}` - Service they're interested in

**Features:**
- Personalized greeting
- 3-step process overview
- Company highlights
- Call-to-action button
- Why choose BNC section

### 4. welcome-thank-you.html
General welcome/thank you email sent to new leads or customers.

**Variables to replace:**
- `{{customer_name}}` - Customer's name

**Features:**
- Welcoming banner
- Services list with checkmarks
- Company differentiators
- Multiple CTAs

### 5. general-notification.html
Flexible template for general notifications and updates.

**Variables to replace:**
- `{{email_subject}}` - Email subject/heading
- `{{customer_name}}` - Customer's name
- `{{main_message}}` - Main body content
- `{{alert_message}}` - Optional alert message
- `{{cta_link}}` - Optional CTA button link
- `{{cta_text}}` - Optional CTA button text

**Features:**
- Flexible content structure
- Optional alert box (commented out)
- Optional CTA button (commented out)
- Contact information section

## Usage Instructions

### For Email Service Integration

1. **Using with SendGrid, Mailgun, or similar services:**
   - Upload templates to your email service provider
   - Use their templating system to replace variables (e.g., `{{customer_name}}`)
   - Set up triggers for automated sending

2. **Using with Node.js/Express:**
   ```javascript
   const fs = require('fs');
   const template = fs.readFileSync('./email-templates/quote-request.html', 'utf8');
   const personalizedEmail = template
     .replace('{{customer_name}}', 'John Doe')
     .replace('{{service_interest}}', 'Kitchen Remodeling');
   ```

3. **Using with React Email or MJML:**
   - Convert these HTML templates to React components or MJML syntax
   - Use props for variable replacement

### Testing Emails

Before sending to customers, test your emails:

1. **Preview in Browser**: Open the HTML file directly in a web browser
2. **Email Testing Tools**: Use services like Litmus or Email on Acid
3. **Test Sends**: Send test emails to multiple email clients (Gmail, Outlook, Apple Mail)

### Customization Tips

- Replace placeholder variables before sending
- Update the year in the footer copyright if needed
- Modify colors by searching and replacing hex codes
- Add/remove sections as needed while maintaining brand consistency
- Ensure all links are functional (currently using placeholders)

## Company Information

- **Name**: BNC Builders Inc.
- **Phone**: (760) 993-3204
- **Address**: 101 State Pl Suite N, Escondido, CA 92029
- **Hours**: Monday - Saturday, 8:00am - 5:00pm
- **License**: #1050284
- **Tagline**: Transforming San Diego Homes With Expert Craftsmanship

## Email Best Practices

1. **Subject Lines**: Keep under 50 characters, include customer benefit
2. **Preheader Text**: Add compelling preview text (first 100 characters)
3. **Mobile Optimization**: All templates are mobile-responsive
4. **Call-to-Action**: Each email should have one clear primary action
5. **Personalization**: Always use customer's name when available
6. **Testing**: Test on multiple devices and email clients
7. **Accessibility**: Templates include alt text for images and semantic HTML

## Support

For questions or modifications, contact the BNC Builders development team.
