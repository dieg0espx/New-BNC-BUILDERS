# BNC Builders Inc. — Website

The official website for **BNC Builders Inc.**, a licensed and insured home remodeling contractor based in Escondido, CA serving the greater San Diego and Los Angeles areas. Built with Next.js 16, React 19, and Tailwind CSS 4.

**Live site:** [bncbuilders.com](https://bncbuilders.com)

## About BNC Builders

BNC Builders specializes in residential remodeling and construction with 30+ years of combined experience and 900+ completed projects. Services span interior renovations, exterior transformations, and ADU construction across 14+ San Diego-area cities.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS 4
- **Language:** TypeScript
- **Fonts:** PT Sans (body), Geologica (headings)
- **Icons:** Lucide React
- **Images:** Cloudinary CDN
- **Email:** Nodemailer (SMTP)
- **CRM:** GoHighLevel (webhook integration)
- **Spam Protection:** Google reCAPTCHA v3
- **Analytics:** Google Tag Manager (GTM-WPZSVJGL)
- **Ads:** Google Ads conversion tracking

## Project Structure

```
app/
├── layout.tsx                    # Root layout, fonts, GTM, JSON-LD
├── globals.css                   # Global styles (Tailwind)
├── page.tsx                      # Homepage
├── sitemap.ts                    # Dynamic sitemap generation
├── robots.ts                     # Robots.txt configuration
├── manifest.ts                   # PWA manifest
├── opengraph-image.tsx           # Dynamic OG image generation
│
├── (service pages)/              # One page per service
│   ├── home-remodeling/
│   ├── kitchen-remodeling/
│   ├── bathroom-remodeling/
│   ├── garage-remodeling/
│   ├── new-room-additions/
│   ├── pre-construction/
│   ├── exterior-remodeling/
│   ├── adus/
│   ├── deck-repair/
│   ├── hardscaping/
│   ├── outdoor-kitchens/
│   ├── landscape-remodeling/
│   └── 3d-landscape-design/
│
├── about-us/                     # Company info
├── our-process/                  # How we work
├── reviews/                      # Customer reviews
├── contact-us/                   # Contact form
├── careers/                      # Job applications
├── portfolio/                    # Project gallery
│   ├── [category]/               # Category pages
│   └── [category]/[project]/     # Individual project pages
├── blog/                         # Blog listing
│   └── [slug]/                   # Individual blog posts
├── areas-we-serve/               # Service area page
├── customer-referral-program/    # Referral form
├── adu-handbook-download/        # Lead magnet download
├── documentation/                # Internal docs
├── site-map/                     # HTML sitemap
│
├── lp/                           # Paid search landing pages (noindex)
│   ├── remodel/                  # Remodeling campaign LP
│   └── adu/                      # ADU campaign LP
│
└── api/
    ├── contact/route.ts          # Contact form API
    └── careers/route.ts          # Careers form API

components/
├── forms/                        # ContactForm, QuickContactForm
├── landing/                      # LandingPageLayout, LandingPageForm
├── layout/                       # Header, Footer, Navigation, MobileMenu
├── sections/                     # Reusable page sections (Hero, CTA, FAQ, etc.)
├── seo/                          # JSON-LD structured data
└── ui/                           # Button, Card, Carousel, CloudinaryImage, etc.

lib/
├── constants/                    # Company info, services, navigation, images, portfolio, blog
├── email/                        # Nodemailer email service
├── ghl/                          # GoHighLevel CRM webhook integration
├── hooks/                        # Custom React hooks (useInView)
├── recaptcha/                    # reCAPTCHA utilities
├── types/                        # TypeScript type definitions
└── utils/                        # Cloudinary, geolocation, metadata helpers

email-templates/                  # HTML email templates for notifications
```

## Services

### Interior
- Home Remodeling
- Kitchen Remodeling
- Bathroom Remodeling
- Garage Remodeling
- New Room Additions
- Pre-Construction (planning, permits, 3D previews)

### Exterior
- Exterior Remodeling
- ADUs (Accessory Dwelling Units) — San Diego & Los Angeles
- Deck Repair
- Hardscaping
- Outdoor Kitchens
- Landscape Remodeling
- 3D Landscape Design

## Key Features

- **SEO Optimized** — Structured data (JSON-LD), dynamic sitemaps, per-page meta, OpenGraph images
- **Conversion-Focused Landing Pages** — Dedicated `/lp/remodel` and `/lp/adu` pages for paid search with no navigation, dynamic city insertion via IP geolocation, and Google Ads conversion tracking
- **CRM Integration** — Form submissions are sent to GoHighLevel via webhook and email notifications via SMTP
- **Responsive Design** — Mobile-first with sticky headers, mobile menu, scroll-to-top, and sticky call buttons on landing pages
- **Image Optimization** — All images served via Cloudinary CDN with responsive sizing
- **Portfolio System** — Category-based project gallery with individual project pages
- **Blog** — Dynamic blog with slug-based routing
- **Bilingual Support** — "Hablamos Espanol" highlighted as a key selling point
- **reCAPTCHA v3** — Spam protection on all forms

## Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Install Dependencies
```bash
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
# Site
NEXT_PUBLIC_SITE_URL=https://bncbuilders.com

# Resend (email notifications)
RESEND_API_KEY=re_xxxxxxxxxxxx
EMAIL_FROM=BNC Builders <noreply@bncbuilders.com>

# GoHighLevel CRM
GHL_WEBHOOK_URL=

# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
RECAPTCHA_SECRET_KEY=

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

### Development
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build
```bash
npm run build
npm start
```

### Lint
```bash
npm run lint
```

## Branding

- **Primary Color:** Gold `#CF9C39`
- **Neutral Palette:** Zinc/Gray scale
- **Body Font:** PT Sans
- **Heading Font:** Geologica
- **Theme Color:** `#CF9C39`

## Service Areas

Escondido, Carlsbad, Chula Vista, El Cajon, Encinitas, La Mesa, National City, Oceanside, Poway, Vista, La Jolla, Valley Center, Solana Beach, Rancho Santa Fe

## Additional Documentation

- [Landing Pages Documentation](./LANDING_PAGES_README.md) — Detailed guide for the paid search landing pages
