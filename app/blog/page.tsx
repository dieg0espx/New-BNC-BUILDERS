// BNC Builders - Blog Page

import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section } from '@/components/ui';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { bannerImages } from '@/lib/constants/images';
import { blogPosts, blogCategories, formatBlogDate } from '@/lib/constants/blog';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { Clock, ArrowRight } from 'lucide-react';
import { BlogFilter } from '@/components/blog/BlogFilter';

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog',
  description: 'Read the latest home remodeling tips, ideas, and inspiration from BNC Builders Inc.',
  path: '/blog',
});

export default function BlogPage() {
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Get featured post (most recent)
  const featuredPost = sortedPosts[0];
  const remainingPosts = sortedPosts.slice(1);

  return (
    <>
      {/* Hero */}
      <HeroSubpage
        title="Blog"
        subtitle="Tips, ideas, and inspiration for your home remodeling projects"
        backgroundImage={bannerImages.faq}
      />

      {/* Featured Post */}
      <Section background="white">
        <Container>
          <div className="mb-12">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              Latest Article
            </span>
            <h2 className="text-2xl font-bold text-dark mt-2">Featured Post</h2>
          </div>

          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block bg-zinc-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-96">
                <CloudinaryImage
                  publicId={featuredPost.featuredImage}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="text-xs text-zinc-500">
                    {formatBlogDate(featuredPost.date)}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4 group-hover:text-gold transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-zinc-600 mb-6 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime} min read
                  </div>
                  <span className="inline-flex items-center gap-2 text-gold font-semibold group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </Container>
      </Section>

      {/* Categories + Blog Grid */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-dark">
              All Articles
            </h2>
            <p className="text-zinc-600 mt-2">
              Browse our collection of home improvement tips and guides
            </p>
          </div>

          <BlogFilter posts={remainingPosts} categories={blogCategories} />
        </Container>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Ready to Start Your Project?"
        subtitle="Contact us today for a free consultation and estimate."
        primaryAction={{ label: 'Get Free Estimate', href: '/contact-us' }}
      />
    </>
  );
}
