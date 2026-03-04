# BNC Builders - Paid Search Landing Pages

This document provides an overview of the two conversion-optimized landing pages built for paid search campaigns.

## 🎯 Landing Pages

### 1. Interior/Exterior Remodeling Landing Page
- **URL**: `/lp/remodel`
- **Target**: Kitchen, bathroom, room additions, exterior renovations
- **Tone**: Trust-building, expertise-focused

### 2. ADU Construction Landing Page
- **URL**: `/lp/adu`
- **Target**: Accessory Dwelling Unit projects
- **Tone**: Investment-driven, permitting expertise, high-ticket confidence

## ✅ Technical Requirements (Implemented)

### Global Requirements
- ✅ No navigation menu
- ✅ Logo links to main homepage
- ✅ Sticky header
- ✅ Click-to-call enabled
- ✅ No footer navigation (minimal footer only)
- ✅ No popups
- ✅ No sliders
- ✅ Noindex meta tag
- ✅ GTM installed (inherited from root layout)
- ✅ Google Ads conversion tracking wired
- ✅ Fully responsive (mobile-first design)
- ✅ Schema: LocalBusiness

### Dynamic City Insertion

**Implementation**: IP-based geolocation using ipapi.co
- Silent detection (no permission popups)
- Default city: Escondido
- Service areas: Escondido, Carlsbad, Poway, San Marcos, Vista, Rancho Bernardo, Encinitas, Oceanside

**City insertion locations**:
- Hero headline
- Meta title
- Review testimonials
- Section headlines
- Final CTA

**Code location**: `/lib/utils/geolocation.ts`

## 📁 File Structure

```
app/
├── lp/
│   ├── remodel/
│   │   ├── layout.tsx      # Metadata, noindex, schema
│   │   └── page.tsx        # Main remodel landing page
│   └── adu/
│       ├── layout.tsx      # Metadata, noindex, schema
│       └── page.tsx        # Main ADU landing page
│
components/
├── landing/
│   ├── LandingPageLayout.tsx    # Header + Footer (no nav)
│   └── LandingPageForm.tsx      # Conversion forms (short & full)
│
lib/
└── utils/
    └── geolocation.ts            # City detection utility
```

## 🎨 Design Features

### Desktop Layout
- Split hero section (content left, form card right)
- Full-width review banner with 5-star rating
- Services grid (6 tiles)
- Why choose section with bullet points
- Social proof (3 testimonials)
- Process steps (3 steps)
- Full conversion form
- Service area list
- Final CTA banner

### Mobile Layout
- Stacked sections
- Mobile-optimized form at top
- Call-to-action priority
- Sticky call button at bottom
- Large tap targets
- Phone keypad input for phone field

## 📋 Form Variants

### Short Form (Hero Section)
- First Name
- Last Name
- Phone
- Email
- CTA: "Next Step →"

### Full Form (Conversion Section)
- First Name & Last Name
- Phone & Email
- Project Address
- Service Type (dropdown)
- Project Details (textarea)
- CTA: "Submit Request"

## 🔄 Conversion Tracking

Forms trigger Google Ads conversion events on successful submission:

```javascript
gtag('event', 'conversion', {
  send_to: 'AW-16672110303/form_submit',
  value: 1.0,
  currency: 'USD',
});
```

## 🚀 Deployment & Testing

### Build & Deploy
```bash
npm run build
npm start
```

### Test URLs (Local)
- http://localhost:3000/lp/remodel
- http://localhost:3000/lp/adu

### Test URLs (Production)
- https://bncbuilders.com/lp/remodel
- https://bncbuilders.com/lp/adu

## 🎯 Conversion Enhancements

- Autofill enabled on all form fields
- Large tap targets (min 44x44px)
- Phone keypad for phone input
- Visible star rating within first scroll
- Repeated CTAs every 2-3 sections
- Sticky mobile call button
- Fast load speed (optimized images via Cloudinary)
- Minimal form friction (progressive disclosure)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Desktop: ≥ 768px
- Large Desktop: ≥ 1024px

## 🔍 SEO Configuration

### Meta Titles (Dynamic)
- Remodel: "Remodeling Contractor in {City} CA | BNC Builders"
- ADU: "ADU Builder in {City} CA | BNC Builders"

### Robots
```html
<meta name="robots" content="noindex, nofollow">
```

## 📊 Key Metrics to Track

- Form submission rate
- Call click-through rate
- Scroll depth
- Time on page
- Mobile vs. desktop conversion rates
- City detection success rate
- Load speed (<3 seconds target)

## 🛠️ Maintenance

### Update Service Areas
Edit `/lib/utils/geolocation.ts` and modify the `SERVICE_AREAS` array.

### Update Phone Number
Phone number is pulled from `/lib/constants/company.ts`.

### Update Form Fields
Edit `/components/landing/LandingPageForm.tsx` to add/remove fields.

### Update Review Testimonials
Edit the testimonials array in each landing page file.

## 🔗 Integration Points

- **Form API**: `/app/api/contact/route.ts`
- **reCAPTCHA**: Integrated via `useReCaptchaV3` hook
- **GTM**: Inherited from root layout (GTM-WPZSVJGL)
- **Google Ads**: Conversion ID AW-16672110303
- **Images**: Cloudinary integration via `CloudinaryImage` component

## ⚠️ Important Notes

1. **No Navigation**: These pages are designed for paid search with minimal distractions
2. **Noindex**: Pages won't appear in organic search results
3. **City Detection**: Uses external API (ipapi.co) - monitor rate limits if needed
4. **Form Submission**: Integrates with existing GHL (GoHighLevel) CRM system
5. **Performance**: Images are optimized via Cloudinary, ensure proper sizing
6. **Mobile First**: All designs prioritize mobile experience

## 📈 A/B Testing Recommendations

Consider testing:
- Hero headline variations
- Form field combinations (short vs. full above fold)
- CTA button copy
- Review placement
- Service area prominence
- Trust badge positioning

## 🎨 Branding

- Primary Color: Gold (#CF9C39)
- Secondary: Zinc/Gray scale
- Font: PT Sans (body), Geologica (headings)
- Logo: BNC Builders dark logo (Cloudinary)

## 📞 Support

For technical issues or questions about these landing pages, refer to:
- Main documentation: `/app/documentation/page.tsx`
- Company constants: `/lib/constants/company.ts`
- Contact API: `/app/api/contact/route.ts`
