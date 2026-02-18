# BNC Builders Follow-Up Sequence

Complete follow-up sequence for lead nurturing with text messages and email templates.

## Contact Information

- **Phone**: 866-985-6313
- **Signature**: Zaira Diaz, CRS (for text messages) / Zaira Diaz (for emails)
- **Company**: BNC Builders

## Project Types

Use one of these values for the `{{Project Type}}` variable:
- Bathroom Remodel
- Kitchen Remodel
- Additions
- ADU
- Garage Conversion
- Interior Remodeling
- Exterior Remodeling
- Decks

## Follow-Up Sequence Overview

| Attempt | Timing | Template Files | Purpose |
|---------|--------|----------------|---------|
| **1st** | Immediate | `first-attempt-message.txt`<br>`first-attempt-email.html` | Initial response, gathering information |
| **2nd** | 2-3 days later | `second-attempt-message.txt`<br>`second-attempt-email.html` | Friendly check-in, see if time is good |
| **3rd** | 2-3 days later | `third-attempt-message.txt`<br>`third-attempt-email.html` | Confirm interest, gentle nudge |
| **4th** | 2-3 days later | `fourth-attempt-message.txt`<br>`fourth-attempt-email.html` | Soft urgency, last chance before closing |
| **Final** | 2-3 days later | `final-attempt-message.txt`<br>`final-attempt-email.html` | Respectful close, door remains open |

## Variables to Replace

All templates use these variables:
- `{{Client Name}}` - Customer's first name or full name
- `{{Project Type}}` - One of the project types listed above
- `{{Your Name}}` - Zaira Diaz (already filled in)

## Template Files

### Text/Message Templates (.txt)
Plain text templates for SMS, text messages, or messaging platforms:
1. `first-attempt-message.txt`
2. `second-attempt-message.txt`
3. `third-attempt-message.txt`
4. `fourth-attempt-message.txt`
5. `final-attempt-message.txt`

### Email Templates (.html)
HTML templates with BNC Builders branding for email:
1. `first-attempt-email.html`
2. `second-attempt-email.html`
3. `third-attempt-email.html`
4. `fourth-attempt-email.html`
5. `final-attempt-email.html`

## Usage Examples

### Example 1: Kitchen Remodel Lead
```
Client Name: John Smith
Project Type: Kitchen Remodel

Message: "Good morning John Smith, This is Zaira Diaz with BNC Builders..."
Email Subject: "Thank You for Contacting BNC Builders – Kitchen Remodel"
```

### Example 2: ADU Lead
```
Client Name: Maria Garcia
Project Type: ADU

Message: "Good morning Maria Garcia, This is Zaira Diaz with BNC Builders..."
Email Subject: "Thank You for Contacting BNC Builders – ADU"
```

## Integration Tips

### With CRM Systems (e.g., GoHighLevel)
1. Create workflow automation
2. Set up trigger: New lead received
3. Send 1st attempt immediately
4. Schedule follow-ups with 2-3 day delays
5. Track responses and adjust sequence

### Manual Usage
1. Copy the appropriate template
2. Replace `{{Client Name}}` with actual name
3. Replace `{{Project Type}}` with actual service
4. Send via email/SMS platform
5. Set reminder for next follow-up

### Email Service Providers
For services like SendGrid, Mailgun, or Mailchimp:
1. Upload HTML templates
2. Create template variables for Client Name and Project Type
3. Set up automated sequence with timing
4. Track open rates and responses

## Best Practices

1. **Timing**: Space follow-ups 2-3 days apart to avoid overwhelming leads
2. **Personalization**: Always use client's actual name, never send generic greetings
3. **Response Tracking**: Stop sequence if lead responds
4. **Multi-Channel**: Use both email and text for better reach
5. **Business Hours**: Send during business hours (8am-5pm PST)
6. **Tone**: Maintain professional, friendly, and respectful tone throughout
7. **Final Touch**: The final attempt should be graceful and non-pushy

## Email Subject Lines

Each email template has a subject line format:

1. **First Attempt**: `Thank You for Contacting BNC Builders – {{Project Type}}`
2. **Second Attempt**: `Following Up on Your {{Project Type}} Inquiry`
3. **Third Attempt**: `Checking In – {{Project Type}} Project`
4. **Fourth Attempt**: `Follow-Up Regarding Your {{Project Type}} Request`
5. **Final Attempt**: `Final Follow-Up – {{Project Type}} Inquiry`

## Notes

- All email templates are mobile-responsive
- All templates include BNC Builders branding (colors, logo, contact info)
- Text templates are formatted for readability in messaging apps
- Phone number used: 866-985-6313 (consistent across all templates)
- License #1050284 is displayed in email footers
- "Hablamos Español" included in all email footers

## Customization

To customize for different team members:
1. Replace "Zaira Diaz" with the team member's name
2. Update "CRS" designation if applicable (used in 4th attempt message only)
3. Keep phone number and company info consistent

## Testing Checklist

Before using in production:
- [ ] Test all variable replacements
- [ ] Preview emails on desktop and mobile
- [ ] Check links (phone numbers should be clickable)
- [ ] Verify timing between follow-ups
- [ ] Test stop sequence trigger on response
- [ ] Confirm branding displays correctly
- [ ] Spell check all customized content

## Support

For questions about implementing or customizing these templates, contact the BNC Builders development team.
