# BNC Builders - Old Blog Post Update Plan

## Current Blog Posts (7 existing)

| # | Title | Slug | Date | Category | What to Update |
|---|-------|------|------|----------|---------------|
| 1 | Why Build an ADU in San Diego or Los Angeles in 2026 | why-an-adu-is-your-smartest-property-move-in-2026 | 2025-12-17 | ADUs | Add 2026 cost data, link to /adus/cost-guide, /adus/regulations |
| 2 | What Happens When Contractors Stop Talking | silence-doesnt-build... | 2025-09-07 | Home Remodeling | Add links to /our-process, lighten keyword stuffing |
| 3 | Kitchen Remodel on a Real Budget | creating-accessible-luxury-kitchens | 2025-08-15 | Kitchen | Update with 2026 material prices, link to /kitchen-remodeling |
| 4 | How to Choose a Bathroom Remodeling Contractor | how-to-choose-the-right-bathroom-remodeling-contractor | 2025-04-18 | Bathroom | Add link to /reviews, update with checklist format |
| 5 | Why Spring Is the Best Time for a Kitchen Remodel | why-spring-is-the-perfect-time... | 2025-04-03 | Home Remodeling | Update for 2026 season, freshen content |
| 6 | 7 Signs It Is Time to Remodel Your Bathroom | 7-signs-its-time-to-remodel-your-bathroom | 2025-03-21 | Bathroom | Add cost ranges, link to /bathroom-remodeling |
| 7 | How to Choose the Best Kitchen Cabinets | choosing-the-best-kitchen-cabinets... | 2025-03-05 | Kitchen | Update prices for 2026, add comparison table |
| 8 | Realistic Kitchen Remodel Costs in San Diego | small-kitchen-remodeling-cost-san-diego | 2025-02-12 | Kitchen | UPDATE FIRST - add 2026 data, expand content |
| 9 | Bathroom Remodeling Mistakes We See Repeatedly | 6-dos-and-donts-of-bathroom-remodeling | 2025-02-19 | Bathroom | Lighten keyword stuffing, add internal links |

---

## Priority Updates (Do These First)

### 1. "Realistic Kitchen Remodel Costs in San Diego" (HIGHEST PRIORITY)
**Why:** Directly competes with our new blog post #02. Consolidate.
**Action:** Either redirect this old post to the new one, or significantly expand it:
- Update all cost figures to 2026 prices
- Add a cost comparison table (minor/mid/major)
- Add FAQ section
- Link to /kitchen-remodeling, /areas/san-diego
- Update the date to current

### 2. "Why Build an ADU in San Diego or Los Angeles in 2026"
**Why:** Already targeting 2026, but thin on specifics.
**Action:**
- Add specific 2026 cost ranges ($150K-$400K)
- Add rental income data ($1,500-$3,000/mo)
- Link to /adus/cost-guide and /adus/regulations
- Add mention of AB 1033 (sell ADU separately)
- Expand from 5 to 8+ paragraphs

### 3. "Kitchen Remodel on a Real Budget"
**Why:** Good content but no cost data.
**Action:**
- Add specific San Diego price points per upgrade
- Add a "what you get at each budget" section
- Link to /kitchen-remodeling, /areas/san-diego
- Update material prices for 2026

---

## Common Issues Across ALL Old Posts

### 1. Keyword Stuffing
The old posts heavily repeat exact-match keywords like "kitchen remodel Escondido CA", "bathroom remodeling San Diego", etc. This reads unnaturally and hurts both traditional SEO and AI citation potential.

**Fix for each post:**
- Reduce keyword mentions by ~50%
- Use natural language variations instead of exact-match repeats
- Focus on being informative rather than keyword-dense

### 2. Missing Internal Links
None of the old posts link to the service pages, ADU hub, or location pages.

**Fix for each post:**
- Add 2-3 contextual internal links per post
- Link to the relevant service page (kitchen post -> /kitchen-remodeling)
- Link to relevant location or cost guide pages
- Link to /contact-us as CTA

### 3. No Author Bio / E-E-A-T Signals
All posts list "BNC Builders Inc." as author with no human name or credentials.

**Fix:**
- Add a named author (company owner or lead PM)
- Include license number and years of experience
- This significantly improves AI citation potential

### 4. No "Updated" Date Signal
Posts are stuck at their original publish dates (2025).

**Fix:**
- When updating content, change the date to current
- Add "Originally published [date]. Updated [new date]." to the content
- This tells search engines and AI the content is fresh

---

## Update Schedule

| Week | Post to Update | Key Changes |
|------|---------------|-------------|
| 1 | Realistic Kitchen Remodel Costs | 2026 prices, expand content, add table |
| 2 | Why Build an ADU in 2026 | Add cost data, link to ADU hub pages |
| 3 | Kitchen Remodel on a Real Budget | Add prices, link to service pages |
| 4 | How to Choose Bathroom Contractor | Add checklist, link to /reviews |
| 5 | 7 Signs to Remodel Bathroom | Add cost ranges, reduce keyword stuffing |
| 6 | Kitchen Cabinets Guide | Update 2026 prices, add comparison table |
| 7 | Bathroom Remodeling Mistakes | Clean up keyword stuffing, add links |
| 8 | Spring Remodeling | Update for current season |
| 9 | Communication in Remodeling | Add /our-process links, lighten keywords |

---

## Template for Each Update

When updating a post in `lib/constants/blog.ts`:

1. Update `date` to current date
2. Update `content` array with refreshed paragraphs
3. Add internal links as natural text (e.g., "Learn more about our kitchen remodeling services")
4. Reduce keyword stuffing (aim for 2-3 mentions of primary keyword, not 8-10)
5. Add specific 2026 data points (costs, timelines, regulations)
6. Expand thin posts from 5-6 paragraphs to 8-10
