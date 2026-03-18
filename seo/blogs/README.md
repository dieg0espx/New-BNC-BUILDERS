# BNC Builders - Blog Content Calendar

Weekly publishing schedule. Each file below contains the full blog post
ready to add to `lib/constants/blog.ts`.

## Publishing Schedule

| Week | Post | Target Keyword | Volume | Status |
|------|------|---------------|--------|--------|
| Week 1 | 01-adu-cost-guide.md | adu cost san diego | 400+ | Ready |
| Week 2 | 02-kitchen-remodel-cost.md | kitchen remodel cost san diego | 300+ | Ready |
| Week 3 | 03-bathroom-remodel-cost.md | bathroom remodel cost san diego | 200+ | Ready |
| Week 4 | 04-san-diego-adu-regulations.md | san diego adu regulations | 200+ | Ready |
| Week 5 | 05-best-decking-materials-2026.md | best decking material | 150+ | Ready |
| Week 6 | 06-kitchen-remodel-timeline.md | how long does kitchen remodel take | 200+ | Ready |
| Week 7 | 07-home-improvements-resale.md | best home improvements for resale | 500+ | Ready |
| Week 8 | 08-prefab-vs-custom-adu.md | prefab vs custom adu | 300+ | Ready |

## How to Publish

1. Open `lib/constants/blog.ts`
2. Copy the `blogPosts` entry from the blog file's frontmatter
3. Paste it at the TOP of the `blogPosts` array (newest first)
4. Upload the featured image to Cloudinary under `BNC-BUILDERS/images_blog_`
5. Update the `featuredImage` field with the Cloudinary public ID
6. Deploy

## Internal Linking Strategy

Each post links to relevant service pages:
- ADU posts -> /adus, /adus/cost-guide, /adus/regulations
- Kitchen posts -> /kitchen-remodeling, /areas/san-diego
- Bathroom posts -> /bathroom-remodeling
- General posts -> /home-remodeling, /contact-us
