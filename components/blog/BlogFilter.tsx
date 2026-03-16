'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { BlogPost, BlogCategory, formatBlogDate } from '@/lib/constants/blog';
import { Clock, ArrowRight } from 'lucide-react';

interface BlogFilterProps {
  posts: BlogPost[];
  categories: BlogCategory[];
}

export function BlogFilter({ posts, categories }: BlogFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categorySlugsWithPosts = new Set(posts.map((post) => post.categorySlug));
  const availableCategories = categories.filter((cat) => categorySlugsWithPosts.has(cat.slug));

  const filteredPosts = activeCategory
    ? posts.filter((post) => post.categorySlug === activeCategory)
    : posts;

  return (
    <>
      {/* Categories */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === null
              ? 'bg-gold text-white'
              : 'bg-white text-zinc-700 hover:bg-zinc-100'
          }`}
        >
          All Posts
        </button>
        {availableCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.slug)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.slug
                ? 'bg-gold text-white'
                : 'bg-white text-zinc-700 hover:bg-zinc-100'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {filteredPosts.map((post) => (
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

      {filteredPosts.length === 0 && (
        <p className="text-center text-zinc-500 mt-8">
          No articles found in this category.
        </p>
      )}
    </>
  );
}
