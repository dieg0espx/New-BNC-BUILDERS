# BNC Builders - GSC Coverage Issues Action Plan
**Date:** 2026-03-18
**Status:** Indexed pages dropped from 166 to 56. Needs urgent attention.

---

## Root Cause: Canonical Points to Redirect

The **#1 issue** killing indexing is that ALL pages have their canonical URL pointing to `https://bncbuildersinc.com/` (non-www), which **307 redirects** to `https://www.bncbuildersinc.com/`. Google sees every page's canonical as a redirect and marks them all as "not indexable."

From the Ahrefs audit, EVERY page shows:
- Canonical URL: `https://bncbuildersinc.com/` (non-www, the REDIRECT source)
- Canonical URL code: **307**
- Is indexable: **false**

This means `NEXT_PUBLIC_SITE_URL` is likely set to `https://bncbuildersinc.com` (without www) in the Vercel environment, while the hosting redirects non-www to www. The canonical tags all point to the non-www version which Google follows, hits a redirect, and gives up.

### FIX (CRITICAL - Do Immediately):
1. In Vercel Dashboard -> Settings -> Environment Variables, set:
   `NEXT_PUBLIC_SITE_URL=https://www.bncbuildersinc.com`
2. Redeploy the site
3. Verify canonicals output `https://www.bncbuildersinc.com/...` (with www)

The code already defaults to `https://www.bncbuildersinc.com` but if the env var overrides it with the non-www version, that's the problem.

---

## Issue Breakdown (349 Not Indexed)

### 1. Not Found 404 (141 pages) - OLD SITE URLS
These are URLs from the old website that no longer exist. The 141 count likely includes old blog posts, old service pages, and old location pages from before the site rebuild.

**Action:**
- Add catch-all redirects in `next.config.ts` for known old URL patterns
- For the `/es` (Spanish) URL that's 404ing, add a redirect to homepage:
  ```
  { source: '/es', destination: '/', permanent: true }
  { source: '/es/:path*', destination: '/', permanent: true }
  ```
- In GSC, do NOT use the Removals tool for 404s - let Google naturally drop them
- The 404s will clear from GSC within 3-6 months as Google re-crawls

### 2. Page with Redirect (71 pages) - EXPECTED
These are the non-www -> www redirects (307) for every page. This is working correctly - Vercel's hosting redirects non-www to www. These are informational, not errors.

**Action:** No action needed. These will consolidate once the canonical fix above is deployed.

### 3. Crawled - Currently Not Indexed (65 pages)
Google crawled these pages but chose not to index them. This often happens when:
- Pages have thin content
- Canonical points to a redirect (our current bug)
- Pages are seen as duplicate

**Action:** Once the canonical fix is deployed, request re-indexing for these pages via GSC URL Inspection tool. Most should start getting indexed within 2-4 weeks.

### 4. Discovered - Currently Not Indexed (48 pages)
Google found these URLs (via sitemap or links) but hasn't crawled them yet. Low crawl budget or canonical issues can cause this.

**Action:** Same as above - fix canonical, resubmit sitemap, request indexing for priority pages.

### 5. Excluded by noindex (11 pages)
These are intentionally noindexed pages.

**Expected noindex pages:**
- /adu-handbook-download (lead gen page)
- /lp/adu (paid landing page)
- /lp/remodel (paid landing page)
- /lp/adu-calculator (paid landing page)
- /new-submission
- /documentation
- Various /api/ routes

**Action:** Verify each one is intentionally noindexed. If any should be indexed, remove the noindex tag.

### 6. Blocked by robots.txt (5 pages)
Likely /api/ routes or /_next/ paths that are correctly blocked.

**Action:** Verify in GSC which URLs are blocked. If any real pages are blocked, fix robots.txt.

### 7. Blocked 403 (3 pages)
Server returning 403 Forbidden for 3 URLs.

**Action:** Check GSC for which URLs. Likely API routes or protected paths. No action if expected.

### 8. Alternate Canonical (3 pages)
Google found pages that point to a different canonical. This is the www/non-www issue.

**Action:** Will resolve once canonical fix is deployed.

### 9. Duplicate - Google Chose Different Canonical (2 pages)
Google disagrees with the canonical we set and chose its own.

**Action:** Check which pages in GSC. Often blog category filter pages (/blog?category=kitchen) that Google sees as duplicate of /blog. Consider adding noindex to filtered blog views.

---

## The Non-www to www Redirect Issue

The Ahrefs data shows the redirect is using **307** (temporary) instead of **301** (permanent). This is a Vercel configuration issue:

- `https://bncbuildersinc.com/` -> 307 -> `https://www.bncbuildersinc.com/`
- Should be: -> **301** -> `https://www.bncbuildersinc.com/`

Our proxy.ts uses 301, but Vercel's built-in domain redirect may be using 307.

### FIX:
1. In Vercel Dashboard -> Domains, check how `bncbuildersinc.com` is configured
2. It should be set as a **redirect** (not a primary domain) pointing to `www.bncbuildersinc.com`
3. Ensure the redirect type is **301 Permanent**, not 307 Temporary
4. If Vercel doesn't offer 301 for domain redirects, our proxy.ts handles it (but needs to fire before Vercel's built-in redirect)

---

## Duplicate Title Issue

Several pages show duplicate/stacked title templates:
- "Kitchen Remodeling | BNC Builders Inc. | BNC Builders Inc." (double brand)
- "San Diego Remodeling Service Areas | BNC Builders | BNC Builders Inc. | BNC Builders Inc." (triple!)

This is because the title template `%s | BNC Builders Inc.` in layout.tsx is being applied on top of titles that already contain "BNC Builders".

### FIX:
Review all page titles and ensure they don't include "BNC Builders" since the layout template adds it. The current SEO branch already fixed most of these by using titles like "Kitchen Remodeling Escondido & San Diego" without the brand name.

---

## /es (Spanish) URL - 404

Ahrefs found `https://www.bncbuildersinc.com/es` returning 404. Someone (probably from the old site or a link) is trying to access a Spanish version.

### FIX:
Add redirect in next.config.ts:
```typescript
{ source: '/es', destination: '/', permanent: true },
{ source: '/es/:path*', destination: '/', permanent: true },
```

---

## Priority Action List

### Do NOW (Today):
1. Check Vercel env: ensure `NEXT_PUBLIC_SITE_URL=https://www.bncbuildersinc.com`
2. Check Vercel domains: ensure non-www redirects via 301 not 307
3. Add `/es` redirect to next.config.ts
4. Redeploy

### Do This Week:
5. Submit updated sitemap in GSC
6. Request re-indexing for top 10 priority pages via URL Inspection
7. Add blog category filter pages to noindex (blog?category=*)

### Monitor (Next 2-4 Weeks):
8. Watch indexed page count recover in GSC
9. Re-check canonical URLs on live site after deploy
10. 404s will naturally clear - don't force remove
