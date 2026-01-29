// BNC Builders - Site Documentation Page

import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { Container, Section } from '@/components/ui';
import {
  FileText,
  Layout,
  Search,
  Image,
  Mail,
  Briefcase,
  BookOpen,
  FolderOpen,
  Globe,
  Server,
  Smartphone,
  Shield,
  Zap,
  Code,
  Database,
  CheckCircle
} from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'Site Documentation',
  description: 'Complete documentation for the BNC Builders website. Learn about site structure, content management, SEO features, and technical specifications.',
  path: '/documentation',
  noIndex: true,
});

const sections = [
  {
    id: 'overview',
    icon: Globe,
    title: 'Site Overview',
    content: `This website is built for BNC Builders Inc., a premier home remodeling company serving San Diego County. The site is designed to:

• Showcase services and portfolio
• Generate leads through contact forms
• Establish trust with reviews and credentials
• Rank well in search engines for local keywords
• Provide an excellent mobile experience`,
  },
  {
    id: 'tech-stack',
    icon: Code,
    title: 'Technology Stack',
    content: `The website is built with modern, industry-leading technologies:

• **Next.js 16** - React framework for fast, SEO-friendly pages
• **TypeScript** - Type-safe code for reliability
• **Tailwind CSS** - Utility-first styling system
• **Cloudinary** - Cloud-based image optimization & delivery
• **Vercel** - Hosting platform with global CDN
• **Google Analytics** - Traffic and conversion tracking`,
  },
  {
    id: 'pages',
    icon: Layout,
    title: 'Site Structure & Pages',
    content: `**Main Pages:**
• Home (/) - Main landing page with all key sections
• About Us (/about-us) - Company story and values
• Our Process (/our-process) - How projects work
• Contact Us (/contact-us) - Contact form and info
• Reviews (/reviews) - Customer testimonials
• Portfolio (/portfolio) - Project showcase
• Blog (/blog) - Articles and guides
• Careers (/careers) - Job opportunities
• Areas We Serve (/areas-we-serve) - Service locations

**Interior Services:**
• Kitchen Remodeling (/kitchen-remodeling)
• Bathroom Remodeling (/bathroom-remodeling)
• Home Remodeling (/home-remodeling)
• Garage Remodeling (/garage-remodeling)
• New Room Additions (/new-room-additions)
• ADUs (/adus)
• Pre-Construction (/pre-construction)

**Exterior Services:**
• Exterior Remodeling (/exterior-remodeling)
• Deck Repair (/deck-repair)
• Hardscaping (/hardscaping)
• Outdoor Kitchens (/outdoor-kitchens)
• Landscape Remodeling (/landscape-remodeling)
• 3D Landscape Design (/3d-landscape-design)

**Other Pages:**
• Customer Referral Program (/customer-referral-program)
• ADU Handbook Download (/adu-handbook-download)
• Site Map (/site-map)`,
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO Features',
    content: `The site is fully optimized for search engines:

**Meta Tags:**
• Unique title and description for each page
• Open Graph tags for social sharing
• Twitter Card tags for Twitter previews
• Canonical URLs to prevent duplicate content

**Technical SEO:**
• robots.txt - Controls search engine crawling
• sitemap.xml - Auto-generated list of all pages
• JSON-LD structured data - Rich snippets for Google
• Mobile-responsive design
• Fast page load times

**Local SEO:**
• Geo meta tags for Escondido location
• Local business schema markup
• Service area pages targeting key cities
• NAP (Name, Address, Phone) consistency`,
  },
  {
    id: 'images',
    icon: Image,
    title: 'Image Management',
    content: `All images are hosted on **Cloudinary** for optimal performance:

**Benefits:**
• Automatic format optimization (WebP, AVIF)
• Responsive image sizing
• Lazy loading for faster page loads
• Global CDN delivery
• No storage limits

**Image Locations:**
• Portfolio images: Organized by category in Cloudinary
• Service images: In the services folder
• Blog images: In the blog folder
• Team photos: In the team folder

**To Add New Images:**
1. Upload to Cloudinary dashboard
2. Copy the public ID (not the full URL)
3. Add to the appropriate constants file`,
  },
  {
    id: 'content',
    icon: FileText,
    title: 'Content Management',
    content: `Content is managed through code files for maximum control:

**Key Content Files:**
• \`lib/constants/company.ts\` - Company info, phone, address
• \`lib/constants/services.ts\` - All service definitions
• \`lib/constants/portfolio.ts\` - Portfolio projects
• \`lib/constants/blog.ts\` - Blog posts
• \`lib/constants/images.ts\` - Image references

**To Update Content:**
1. Edit the appropriate constants file
2. Save the file
3. Changes deploy automatically (if connected to Vercel)

**Service Pages:**
Each service has its own page with:
• Hero section with background image
• Description and features
• Process steps
• FAQ section
• Call-to-action`,
  },
  {
    id: 'portfolio',
    icon: FolderOpen,
    title: 'Portfolio System',
    content: `The portfolio showcases completed projects:

**Structure:**
• Categories (kitchens, bathrooms, ADUs, etc.)
• Individual project pages with galleries
• Before/after image comparisons

**To Add a New Project:**
1. Upload images to Cloudinary
2. Add project to \`lib/constants/portfolio.ts\`
3. Include: name, slug, category, description, images

**Portfolio Categories:**
• Kitchens
• Bathrooms
• ADUs
• Outdoor Living
• Whole Home`,
  },
  {
    id: 'blog',
    icon: BookOpen,
    title: 'Blog System',
    content: `The blog helps with SEO and establishes expertise:

**Features:**
• Category filtering
• Individual post pages
• Social sharing
• Related posts
• SEO-optimized URLs

**To Add a New Blog Post:**
1. Add entry to \`lib/constants/blog.ts\`
2. Include: title, slug, excerpt, content, image, category, date

**Categories:**
• Kitchens
• Bathrooms
• ADUs
• Outdoor Living
• Design Tips
• Industry News`,
  },
  {
    id: 'forms',
    icon: Mail,
    title: 'Contact Forms',
    content: `Forms collect leads and send notifications:

**Forms Available:**
• Quick Contact Form (homepage)
• Full Contact Form (contact page)
• Career Application Form (careers page)

**How It Works:**
1. User fills out form
2. Data sent to API endpoint
3. Email notification sent to team
4. Data can be stored in CRM (if connected)

**Form Fields:**
• Name, Email, Phone
• Service interested in
• Project details
• Preferred contact method`,
  },
  {
    id: 'careers',
    icon: Briefcase,
    title: 'Careers Section',
    content: `Job listings are managed through constants:

**File:** \`lib/constants/careers.ts\`

**Each Job Includes:**
• Title and department
• Location and type (full-time, part-time)
• Description and requirements
• Benefits list

**Application Process:**
1. Candidate views job listing
2. Fills out application form
3. Uploads resume
4. Notification sent to hiring team`,
  },
  {
    id: 'performance',
    icon: Zap,
    title: 'Performance Features',
    content: `The site is optimized for speed:

**Optimizations:**
• Static page generation (SSG)
• Image optimization and lazy loading
• Code splitting and tree shaking
• CSS purging (removes unused styles)
• Font optimization
• Caching headers

**Metrics to Monitor:**
• Core Web Vitals (LCP, FID, CLS)
• Time to First Byte (TTFB)
• First Contentful Paint (FCP)
• PageSpeed Insights score`,
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile Experience',
    content: `The site is fully responsive:

**Features:**
• Mobile-first design approach
• Touch-friendly navigation
• Optimized images for mobile
• Click-to-call phone numbers
• Mobile-friendly forms
• PWA capabilities (installable)

**Breakpoints:**
• Mobile: < 768px
• Tablet: 768px - 1024px
• Desktop: > 1024px`,
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Security & Privacy',
    content: `Security measures in place:

**Features:**
• HTTPS encryption
• Secure form submissions
• Input validation and sanitization
• No sensitive data stored client-side
• CORS protection on API routes

**Privacy:**
• Cookie consent (if required)
• Google Analytics anonymization option
• Clear privacy policy
• No third-party tracking (except Analytics)`,
  },
  {
    id: 'analytics',
    icon: Database,
    title: 'Analytics & Tracking',
    content: `Tracking is set up for insights:

**Google Analytics:**
• Page views and sessions
• User demographics
• Traffic sources
• Conversion tracking

**Google Ads:**
• Conversion tracking enabled
• Remarketing tags ready
• Phone call tracking available

**To Access:**
• Google Analytics: analytics.google.com
• Google Ads: ads.google.com`,
  },
  {
    id: 'deployment',
    icon: Server,
    title: 'Hosting & Deployment',
    content: `The site is hosted on Vercel:

**Features:**
• Automatic deployments from Git
• Global CDN (fast worldwide)
• Automatic HTTPS
• Preview deployments for testing
• Instant rollbacks

**Domain:**
• Primary: bncbuilders.com
• Managed through Vercel or registrar

**To Deploy Changes:**
1. Push code to main branch
2. Vercel automatically builds
3. Site updates in ~1-2 minutes`,
  },
];

const quickReference = [
  { label: 'Main Domain', value: 'bncbuilders.com' },
  { label: 'Framework', value: 'Next.js 16' },
  { label: 'Hosting', value: 'Vercel' },
  { label: 'Images', value: 'Cloudinary' },
  { label: 'Analytics', value: 'Google Analytics' },
  { label: 'Total Pages', value: '28+ pages' },
];

export default function DocumentationPage() {
  return (
    <>
      {/* Hero */}
      <Section background="dark" padding="lg" className="pt-24">
        <Container>
          <div className="max-w-3xl">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              Client Resource
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Site Documentation
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Everything you need to know about your BNC Builders website. This guide covers site structure,
              content management, SEO features, and technical specifications.
            </p>

            {/* Quick Reference */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {quickReference.map((item) => (
                <div key={item.label} className="bg-white/10 rounded-lg p-4">
                  <div className="text-white/60 text-sm">{item.label}</div>
                  <div className="text-white font-semibold">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Table of Contents */}
      <Section background="gray" padding="md">
        <Container>
          <h2 className="text-xl font-bold text-dark mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-2 text-sm text-zinc-600 hover:text-gold transition-colors p-2 rounded-lg hover:bg-white"
              >
                <section.icon className="w-4 h-4" />
                {section.title}
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* Documentation Sections */}
      <Section background="white" padding="lg">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            {sections.map((section, index) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <span className="text-gold text-sm font-medium">Section {index + 1}</span>
                    <h2 className="text-2xl font-bold text-dark">{section.title}</h2>
                  </div>
                </div>
                <div className="prose prose-zinc max-w-none pl-16">
                  <div className="whitespace-pre-line text-zinc-600 leading-relaxed">
                    {section.content.split('\n').map((line, i) => {
                      // Handle bold text
                      if (line.includes('**')) {
                        const parts = line.split('**');
                        return (
                          <p key={i} className="mb-2">
                            {parts.map((part, j) =>
                              j % 2 === 1 ? <strong key={j} className="text-dark">{part}</strong> : part
                            )}
                          </p>
                        );
                      }
                      // Handle bullet points
                      if (line.startsWith('•')) {
                        return (
                          <div key={i} className="flex items-start gap-2 mb-1">
                            <CheckCircle className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                            <span>{line.substring(2)}</span>
                          </div>
                        );
                      }
                      // Regular text
                      return line ? <p key={i} className="mb-2">{line}</p> : <br key={i} />;
                    })}
                  </div>
                </div>
                {index < sections.length - 1 && (
                  <hr className="mt-12 border-zinc-200" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Support Section */}
      <Section background="dark" padding="lg">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help?
            </h2>
            <p className="text-white/80 mb-8">
              If you have questions about the website or need assistance with updates,
              please contact your web development team.
            </p>
            <div className="bg-white/10 rounded-xl p-6 text-left">
              <h3 className="text-white font-semibold mb-4">Common Tasks:</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5" />
                  <span>Update company phone or address: Edit <code className="bg-white/20 px-1 rounded">lib/constants/company.ts</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5" />
                  <span>Add new portfolio project: Edit <code className="bg-white/20 px-1 rounded">lib/constants/portfolio.ts</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5" />
                  <span>Add new blog post: Edit <code className="bg-white/20 px-1 rounded">lib/constants/blog.ts</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5" />
                  <span>Upload images: Use Cloudinary dashboard</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
