# BNC Builders - SEO Boost Plan
**Date:** 2026-03-18
**Goal:** Grow organic traffic from 106 to 1,000+ visits/mo within 6 months

---

## Current State Summary

- **DR 28** | 14 keywords | 106 visits/mo | $682 traffic value
- 50%+ traffic is branded (bnc builders / bnc construction)
- Only 2 service pages generate non-branded traffic
- 30+ pages produce zero organic traffic
- Major service categories completely absent from search results
- Old URLs still competing with redirected new pages
- Key page ranking for wrong keyword (about-us ranking for "bathroom remodeling escondido")

---

## Phase 1: Fix Critical Technical Issues (Week 1-2)

### 1.1 Fix Keyword Cannibalization
- **"bathroom remodeling escondido"** is ranking `/about-us` instead of `/bathroom-remodeling`
  - Audit `/about-us` for bathroom-related content that may be causing this
  - Ensure `/bathroom-remodeling` page has strong on-page SEO for this keyword
  - Add internal links pointing to `/bathroom-remodeling` with relevant anchor text
  - Consider adding `<meta name="robots" content="noindex">` for bathroom terms on about-us, or better yet, remove/reduce bathroom content on about-us

### 1.2 Fix Old URL Indexing Issues
Google is still indexing old URL paths despite 301 redirects:
- `/home-remodeling/kitchen-remodeling/` (ranking for 2 keywords)
- `/exterior-remodeling/3d-landscape-design/` (ranking for 1 keyword)
- Use Google Search Console to request removal of old URLs
- Verify 301 redirects are working correctly
- Submit updated sitemap to Google
- Check for any internal links still pointing to old URLs

### 1.3 Consolidate Kitchen Remodeling Pages
Two URLs ranking for kitchen keywords:
- `www.bncbuildersinc.com/kitchen-remodeling` (new)
- `www.bncbuildersinc.com/home-remodeling/kitchen-remodeling/` (old, redirected)
- Ensure redirect is properly passing link equity
- Request re-crawl in GSC

### 1.4 Fix www vs non-www Inconsistency
Some pages indexed with `www.` prefix, others without:
- `bncbuildersinc.com/` (no www)
- `www.bncbuildersinc.com/kitchen-remodeling` (with www)
- Ensure canonical tags consistently point to one version
- Set up proper redirect from non-preferred to preferred version

---

## Phase 2: On-Page Optimization (Week 2-4)

### 2.1 Optimize Existing Service Pages for Target Keywords

Each service page needs:
- **Title tag**: Primary keyword + location + brand (under 60 chars)
- **H1**: Primary keyword variation
- **Meta description**: Compelling, keyword-rich, 150-160 chars
- **Content depth**: Minimum 1,500-2,000 words per service page
- **Internal linking**: Cross-link related services
- **FAQ section**: 5+ questions with FAQPage schema markup
- **Service area mentions**: Naturally mention Escondido + San Diego cities
- **CTA placement**: Multiple conversion points

#### Priority Pages to Optimize:

| Page | Target Keyword | Volume | Current Position |
|---|---|---|---|
| /kitchen-remodeling | kitchen remodel escondido | 100 | 6 -> Push to top 3 |
| /bathroom-remodeling | bathroom remodeling escondido | 80 | Not ranking (about-us is) |
| /home-remodeling | home remodeling escondido | 100 | Not ranking |
| /deck-repair | deck repair san diego | 90 | 8 -> Push to top 5 |
| /adus | adu contractor san diego | 200 | Not ranking |
| /outdoor-kitchens | outdoor kitchen san diego | 200 | Not ranking |
| /new-room-additions | room addition san diego | 200 | Not ranking |
| /hardscaping | hardscaping san diego | 70 | Not ranking |

### 2.2 Content Gap: Thin Pages
Many service pages likely have thin content. Each should have:
- Detailed service descriptions (what's included, process, timeline)
- Before/after portfolio examples inline
- Pricing transparency (ranges, factors)
- FAQ section
- Customer testimonials/reviews
- Related blog post links

---

## Phase 3: ADU Content Hub (Week 3-6)

The ADU category represents the single biggest growth opportunity (20,000+ monthly searches).

### 3.1 Enhance `/adus` Page
Transform into a comprehensive ADU pillar page:
- Target: "adu contractor san diego", "adu builders san diego"
- Content: 2,500+ words covering types, process, costs, regulations
- Include: calculator CTA, handbook download CTA, before/after gallery

### 3.2 New ADU Support Pages
Create targeted pages within the ADU ecosystem:

| New Page | Target Keywords | Volume |
|---|---|---|
| /adus/cost-guide | adu san diego cost, cost of building adu san diego | 400 |
| /adus/regulations | san diego adu regulations, adu permit san diego | 200+ |
| /adus/types | prefab adu san diego, custom adu builders | 600+ |
| /adus/process | adu construction process, how to build an adu | 300+ |
| /adus/faq | adu questions, adu requirements san diego | 200+ |

### 3.3 ADU Blog Content
- "How Much Does an ADU Cost in San Diego? (2026 Guide)"
- "San Diego ADU Regulations: Complete Homeowner's Guide"
- "Prefab vs Custom ADU: Which Is Right for Your Property?"
- "ADU ROI: How an ADU Increases Your San Diego Home Value"
- "ADU Financing Options for San Diego Homeowners"

---

## Phase 4: Location Pages (Week 4-8)

### 4.1 City-Specific Service Pages
Currently all 14 city service areas funnel to one `/areas-we-serve` page. Create dedicated pages for top cities:

| City Page | Target Keywords | Est. Volume |
|---|---|---|
| /areas/carlsbad | kitchen remodel carlsbad, home remodeling carlsbad | 100+ |
| /areas/san-diego | home remodeling san diego, kitchen remodel san diego | 2,500+ |
| /areas/oceanside | remodeling oceanside, contractor oceanside | 80+ |
| /areas/poway | home remodeling poway, contractor poway | 60+ |
| /areas/la-jolla | kitchen remodel la jolla, home remodeling la jolla | 100+ |
| /areas/encinitas | remodeling encinitas, contractor encinitas | 60+ |
| /areas/vista | home remodeling vista, contractor vista | 50+ |
| /areas/chula-vista | remodeling chula vista | 50+ |

Each page should have:
- Unique content about serving that area (not just city name swapped)
- Local landmarks/neighborhoods mentioned
- Relevant portfolio projects from that area
- Unique testimonials from clients in that city
- LocalBusiness schema with city-specific info

---

## Phase 5: Blog Content Strategy (Week 4-12)

### 5.1 Priority Blog Posts

| Blog Topic | Target Keywords | Volume | Funnel Stage |
|---|---|---|---|
| Kitchen Remodel Cost San Diego 2026 | kitchen remodel cost san diego | 300+ | BOFU |
| Bathroom Remodel Cost San Diego 2026 | bathroom remodel cost san diego | 200+ | BOFU |
| ADU Cost Guide San Diego 2026 | adu san diego cost | 400+ | MOFU |
| Best Outdoor Decking Materials 2026 | best decking material (update old post!) | 150+ | TOFU |
| Hardscaping Ideas for San Diego | hardscaping ideas san diego | 100+ | TOFU |
| Kitchen Remodel Timeline | how long does kitchen remodel take | 200+ | MOFU |
| Home Remodel ROI Guide | best home improvements for resale | 500+ | TOFU |
| ADU Regulations San Diego | san diego adu regulations | 200+ | MOFU |

### 5.2 Update Existing Blog Posts
- Update "5 Best Outdoor Decking Material Options in 2022" -> 2026 version
  - This page already ranks #6 for "best decking material 2022" with 150 volume
  - Refresh title, content, and date for current year

---

## Phase 6: Link Building & Off-Page (Ongoing)

### 6.1 Local Citations
- Ensure NAP consistency across all directories
- Claim/optimize: Google Business Profile, Yelp, BBB, Houzz, HomeAdvisor, Angi
- Join local business associations (Escondido Chamber of Commerce)

### 6.2 Link Building Tactics
- Guest posts on home improvement / San Diego lifestyle blogs
- HARO/Connectively responses for home renovation topics
- Local PR for completed projects
- Partnership links with suppliers, architects, real estate agents
- Sponsor local events for .edu or .org links

### 6.3 Review Strategy
- Structured review generation program (currently claiming 150 reviews in schema)
- Google Business Profile review focus
- Yelp, BBB, Houzz review solicitation

---

## Expected Outcomes (6-Month Projection)

| Metric | Current | 3-Month Target | 6-Month Target |
|---|---|---|---|
| Organic Keywords | 14 | 100+ | 300+ |
| Organic Traffic | 106/mo | 500/mo | 1,000+/mo |
| Traffic Value | $682/mo | $3,000/mo | $8,000+/mo |
| Keywords in Top 3 | 2 | 10+ | 25+ |
| Keywords in Top 10 | 8 | 40+ | 100+ |
| Domain Rating | 28 | 30+ | 35+ |

---

## Implementation Priority

1. **Immediate** (Week 1-2): Fix technical issues (cannibalization, old URLs, www inconsistency)
2. **High** (Week 2-4): On-page optimization of existing service pages
3. **High** (Week 3-6): ADU content hub buildout
4. **Medium** (Week 4-8): Location pages for top cities
5. **Medium** (Week 4-12): Blog content calendar execution
6. **Ongoing**: Link building, review generation, content updates
