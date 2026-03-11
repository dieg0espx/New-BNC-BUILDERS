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

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog',
  description: 'Read the latest home remodeling tips, ideas, and inspiration from BNC Builders Inc.',
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

      {/* Categories */}
      <Section background="gray" padding="sm">
        <Container>
          <div className="text-center text-sm text-zinc-600 mb-4">
            Filter Categories: All Posts | Kitchen | Bathroom | Home Remodeling | Exterior Remodeling | ADUs
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-gold text-white">
              All Posts
            </span>
            {blogCategories.map((category) => (
              <span
                key={category.id}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer"
              >
                {category.name}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* Blog Grid */}
      <Section background="white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-dark">
              All Articles
            </h2>
            <p className="text-zinc-600 mt-2">
              Browse our collection of home improvement tips and guides
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <CloudinaryImage
                    publicId={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-medium text-white bg-gold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-sm text-zinc-500">
                    <span>{formatBlogDate(post.date)}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime} min
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2 line-clamp-2 group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-zinc-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-gold font-medium text-sm group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
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
