# BNC Builders - GEO & LLM Visibility Strategy
**Date:** 2026-03-18
**Goal:** Make BNC Builders appear in AI search results across ChatGPT, Perplexity, Google AI Overviews, Copilot, and Gemini

---

## Why This Matters NOW

- 45% of consumers now use AI tools to find local services
- Google AI Overviews appear in 40%+ of local service searches
- ChatGPT recommends only 1.2% of local businesses — the rest are invisible
- Google organic clicks are down 42% for contractor queries
- Angi is now integrated directly into ChatGPT for contractor recommendations
- The businesses that build AI visibility now will dominate for years

---

## What Makes LLMs Cite a Business

### 1. Entity Authority (#1 Factor)
LLMs build an internal "entity graph." Your strength comes from:
- Consistent NAP data across 15+ trusted sources
- Specific, verifiable claims ("900+ completed projects", not "many projects")
- Proper schema markup linking business to services, locations, reviews
- Cross-platform presence on directories LLMs reference

### 2. Content That Gets Extracted
AI citation accuracy jumps from 16% to 54% with well-structured content:
- Self-contained paragraphs that directly answer questions
- Specific numbers: "$150K-$400K for ADU construction" gets cited; "ADUs are affordable" doesn't
- Q&A format matching how users prompt AI
- Comparison content and "best of" listicles
- Recency signals (current year dates)

### 3. E-E-A-T Signals
- **Experience**: Real project photos, case studies with costs/timelines
- **Expertise**: Named authors with credentials (license numbers, years)
- **Authority**: Backlinks from local news, BBB, .gov/.edu
- **Trust**: High review volume + star ratings across multiple platforms

---

## STRATEGY 1: Structured Data Enhancements (Code Changes)

### A. Update robots.txt to Welcome AI Crawlers
```
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /
```

### B. Create/Enhance llms.txt
Create a comprehensive `/public/llms.txt` file with:
- Company overview with specific facts (founded 2019, 900+ projects, 30+ years combined)
- All services with cost ranges
- Service areas (all 14+ cities)
- License number, insurance, BBB accreditation
- Contact details
- Links to key pages

### C. Add HowTo Schema
New `HowToJsonLd` component for:
- /our-process
- /adus/process
- Blog posts with step-by-step content

### D. Enhance Service Schema areaServed
Update ServiceJsonLd to list specific cities, not just "California":
```json
"areaServed": [
  { "@type": "City", "name": "Escondido" },
  { "@type": "City", "name": "San Diego" },
  { "@type": "City", "name": "Carlsbad" },
  // ... all served cities
]
```

### E. Expand Organization sameAs
Add ALL profile URLs to Organization schema:
- Google Business Profile URL
- BBB profile URL
- Angi/HomeAdvisor profile URL
- Houzz profile URL
- Thumbtack URL
- YouTube channel
- (Currently only has Facebook, Instagram, LinkedIn, Yelp)

---

## STRATEGY 2: Directory Blitz (Manual — 30 Days)

### Tier 1: Critical for AI (These feed LLM responses directly)
| Platform | Status | Action |
|----------|--------|--------|
| Google Business Profile | Active | Optimize: add all services, weekly photos, Q&A section |
| Yelp | Active | Complete profile, respond to all reviews |
| BBB | Accredited | Ensure full service list, updated description |
| Apple Business Connect | ? | Claim profile — feeds Siri directly |
| Bing Places | ? | Claim profile — feeds Copilot directly |
| Angi | ? | CRITICAL: Now inside ChatGPT for contractor recs |

### Tier 2: High Impact for Contractor AI Queries
| Platform | Action |
|----------|--------|
| Houzz | Create/optimize — major source for remodeling AI queries |
| Thumbtack | Create profile with all services |
| HomeAdvisor | Claim/update profile |
| Nextdoor Business | Create business page |
| Porch.com | Create listing |
| BuildZoom | Claim listing |

### Tier 3: Local Authority
| Platform | Action |
|----------|--------|
| Escondido Chamber of Commerce | Join for .org backlink |
| SD Regional Chamber | Join for authority signal |
| CSLB listing | Verify complete and accurate |
| Local news mentions | Pitch project stories to SD Union-Tribune, Patch |

### NAP Consistency (CRITICAL)
Every listing MUST use identical format:
- **BNC Builders Inc.**
- **101 State Pl Suite N, Escondido, CA 92029**
- **(760) 658-6238**
- **https://www.bncbuildersinc.com**

---

## STRATEGY 3: Content for AI Extraction

### A. AI-Extractable Format for Key Pages
Every service page and cost guide should have:
1. A **direct answer paragraph** at the top (2-3 sentences answering the primary query)
2. **Specific dollar amounts** and timelines
3. **H2 headings as questions** ("How much does a kitchen remodel cost in Escondido?")
4. **Comparison tables** AI can extract as facts
5. **Bulleted key facts** for discrete claims

### B. Cost Guide Pages (Replicate ADU Pattern)
Create for each service:
- /kitchen-remodeling/cost-guide
- /bathroom-remodeling/cost-guide
- /new-room-additions/cost-guide
- /outdoor-kitchens/cost-guide
Cost content with local pricing is the #1 cited content type for contractor AI queries.

### C. Named Authors with Credentials
Update blog author from "BNC Builders Inc." to a named person:
- Name, title, license number, years of experience
- Author schema (Person type) linked to articles
- This is a major E-E-A-T signal LLMs weight heavily

### D. "Best Of" and Comparison Content
57% of branded citations go to listicles/comparisons. Create:
- "ADU vs Room Addition: Cost, Timeline & ROI Comparison"
- "10 Questions to Ask a Remodeling Contractor in San Diego"
- "Best Kitchen Countertop Materials for San Diego Homes"

---

## STRATEGY 4: Review Strategy for AI

### Volume Target
- Current: ~150 aggregate reviews
- Goal: 200+ Google reviews, 50+ Yelp, 25+ Houzz
- AI surfaces businesses with highest review counts in their category

### Review Content Coaching
When requesting reviews, suggest customers mention:
- The specific service ("kitchen remodel", "ADU construction")
- The location ("our home in Escondido", "our property in Carlsbad")
- Specific outcomes ("completed on time", "stayed within budget")
This gives AI extractable claims about your business.

### Respond to Every Review
AI reads review responses. Your responses should:
- Restate the service performed
- Mention the location
- Reference specific details
- Thank by name

### Diversify Platforms
- Google (primary for AI Overviews)
- Yelp (critical for Perplexity)
- Houzz (critical for remodeling AI queries)
- BBB, Facebook, Angi

---

## STRATEGY 5: Monitor AI Visibility

### Weekly Manual Testing
Test these queries across ChatGPT, Perplexity, Google AI:
- "Who is the best ADU contractor in San Diego?"
- "Recommend a kitchen remodeling company in Escondido"
- "Best home remodeling companies in North County San Diego"
- "How much does an ADU cost in San Diego?"
- Track: Does BNC appear? What sources are cited?

### Tools
- Ahrefs Brand Radar (if budget allows — $199-699/mo)
- Otterly.ai (AI search visibility tracking)
- HubSpot AI Search Grader (free)
- Manual prompt testing (free, do weekly)

---

## STRATEGY 6: Target Queries

| Query | Content Needed | Where to Optimize |
|-------|---------------|-------------------|
| "best ADU contractor San Diego" | Strong reviews + ADU portfolio + cost content | GBP + Houzz + Yelp + /adus |
| "kitchen remodeling Escondido" | Local service page + reviews + costs | /kitchen-remodeling + GBP |
| "how much does an ADU cost in San Diego" | Cost guide with 2026 pricing | /adus/cost-guide + blog |
| "best home remodeling company near me" | High review count + broad service schema | GBP + all directories |
| "bathroom remodel cost Escondido" | Local cost guide | New cost guide page |
| "general contractor Escondido reviews" | Active review profile | /reviews + GBP |
| "who builds ADUs in Escondido" | Local ADU content + project examples | /areas + blog |

---

## Implementation Timeline

### Week 1-2 (Immediate — Code Changes)
- [ ] Update robots.txt to allow AI crawlers
- [ ] Create/enhance llms.txt with full business details
- [ ] Add HowTo schema to process pages
- [ ] Enhance ServiceJsonLd areaServed with specific cities
- [ ] Expand Organization sameAs with all directory URLs
- [ ] Update blog author to named person with credentials

### Week 3-4 (Directory Blitz)
- [ ] Audit and fix NAP across all existing listings
- [ ] Claim: Apple Business Connect, Bing Places, Angi
- [ ] Create: Houzz, Thumbtack, Nextdoor, Porch, BuildZoom profiles
- [ ] Join Escondido Chamber of Commerce

### Month 2 (Content)
- [ ] Create kitchen-remodeling/cost-guide page
- [ ] Create bathroom-remodeling/cost-guide page
- [ ] Add direct-answer paragraphs to top of service pages
- [ ] Publish 2 "comparison" blog posts in AI-extractable format
- [ ] Launch review collection campaign (target: 200+ Google)

### Month 3 (Scale)
- [ ] Create remaining cost guide pages
- [ ] Seek local press mentions
- [ ] Create YouTube content (AI references video descriptions)
- [ ] Set up AI visibility monitoring
- [ ] First monthly AI visibility report

### Ongoing
- [ ] Weekly AI query testing
- [ ] Respond to all reviews with service/location details
- [ ] Monthly content updates with current-year dates
- [ ] Quarterly cost guide refreshes
- [ ] Continue blog publishing (1/week)

---

## Competitive Advantage

BNC Builders can own **North County San Diego AI responses** because:
1. Most competitors (SnapADU, Murray Lampert, Jackson Design) focus on broader SD metro
2. BNC is headquartered in Escondido — strongest local signal
3. Deep content about North County regulations, costs, neighborhoods
4. New city-specific pages for Carlsbad, Poway, Oceanside, Vista, Encinitas
5. ADU content hub is deeper than any local competitor

The window is narrow — most contractors haven't optimized for GEO yet. First movers get recommended, and AI recommendations become self-reinforcing.
