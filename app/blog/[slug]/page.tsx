// BNC Builders - Individual Blog Post Page

import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section } from '@/components/ui';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import {
  blogPosts,
  getBlogPostBySlug,
  getRecentBlogPosts,
  formatBlogDate,
} from '@/lib/constants/blog';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { BlogPostJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { CLOUDINARY_BASE_URL } from '@/lib/constants/images';
import { Clock, Calendar, User, ArrowLeft, ArrowRight, Tag } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return generatePageMetadata({
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    });
  }

  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.categorySlug === post.categorySlug && p.id !== post.id)
    .slice(0, 3);

  // If not enough related posts, fill with recent posts
  const recentPosts = relatedPosts.length < 3
    ? getRecentBlogPosts(3).filter((p) => p.id !== post.id && !relatedPosts.find((rp) => rp.id === p.id))
    : [];

  const displayPosts = [...relatedPosts, ...recentPosts].slice(0, 3);

  return (
    <>
      {/* Structured Data */}
      <BlogPostJsonLd
        title={post.title}
        description={post.excerpt}
        url={`/blog/${post.slug}`}
        image={`${CLOUDINARY_BASE_URL}/${post.featuredImage}`}
        datePublished={post.date}
        author={post.author}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />

      {/* Hero */}
      <HeroSubpage
        title={post.title}
        subtitle={post.excerpt}
        backgroundImage={post.featuredImage}
      />

      {/* Breadcrumb & Meta */}
      <Section background="white" padding="sm">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-zinc-500 hover:text-gold transition-colors">
                Home
              </Link>
              <span className="text-zinc-400">/</span>
              <Link href="/blog" className="text-zinc-500 hover:text-gold transition-colors">
                Blog
              </Link>
              <span className="text-zinc-400">/</span>
              <span className="text-dark font-medium truncate max-w-[200px]">{post.title}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatBlogDate(post.date)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Article Content */}
      <Section background="white">
        <Container size="md">
          <article className="prose prose-lg max-w-none">
            {/* Category Tag */}
            <div className="flex items-center gap-2 mb-8 not-prose">
              <Tag className="w-4 h-4 text-gold" />
              <Link
                href={`/blog?category=${post.categorySlug}`}
                className="text-sm font-medium text-gold bg-gold/10 px-3 py-1 rounded-full hover:bg-gold/20 transition-colors"
              >
                {post.category}
              </Link>
            </div>

            {/* Featured Image */}
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8 not-prose">
              <CloudinaryImage
                publicId={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              {post.content.map((paragraph, index) => (
                <p key={index} className="text-zinc-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share & Back */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-zinc-200 not-prose">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              <div className="flex items-center gap-2">
                <span className="text-sm text-zinc-500">Share:</span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://www.bncbuildersinc.com/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-gold hover:text-white flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://www.bncbuildersinc.com/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-gold hover:text-white flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://www.bncbuildersinc.com/blog/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-gold hover:text-white flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </Container>
      </Section>

      {/* Related Posts */}
      {displayPosts.length > 0 && (
        <Section background="gray">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-dark">
                Related Articles
              </h2>
              <p className="text-zinc-600 mt-2">
                Continue reading more tips and insights
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {displayPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <CloudinaryImage
                      publicId={relatedPost.featuredImage}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3 text-sm text-zinc-500">
                      <span>{formatBlogDate(relatedPost.date)}</span>
                      <span>•</span>
                      <span>{relatedPost.readTime} min read</span>
                    </div>
                    <h3 className="text-lg font-bold text-dark line-clamp-2 group-hover:text-gold transition-colors">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-semibold transition-colors"
              >
                View All Articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Container>
        </Section>
      )}

      {/* CTA */}
      <CTABanner
        title="Ready to Start Your Project?"
        subtitle="Contact us today for a free consultation and estimate."
        primaryAction={{ label: 'Get Free Estimate', href: '/contact-us' }}
      />
    </>
  );
}
