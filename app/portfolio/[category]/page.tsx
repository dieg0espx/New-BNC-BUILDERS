// BNC Builders - Portfolio Category Page

import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section } from '@/components/ui';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { bannerImages } from '@/lib/constants/images';
import { portfolioCategories, getProjectsByCategory, getCategoryBySlug } from '@/lib/constants/portfolio';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { ArrowLeft, MapPin, ArrowRight } from 'lucide-react';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return portfolioCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return generatePageMetadata({ title: 'Category Not Found', description: 'The requested portfolio category could not be found.' });
  }

  return generatePageMetadata({
    title: `${category.name} Remodeling Portfolio & Project Gallery`,
    description: category.description,
    path: `/portfolio/${categorySlug}`,
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  const projects = getProjectsByCategory(categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <HeroSubpage
        title={category.name}
        subtitle={category.description}
        backgroundImage={bannerImages.faq}
      />

      {/* Breadcrumb */}
      <Section background="white" padding="sm">
        <Container>
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-zinc-500 hover:text-gold transition-colors">
              Home
            </Link>
            <span className="text-zinc-400">/</span>
            <Link href="/portfolio" className="text-zinc-500 hover:text-gold transition-colors">
              Portfolio
            </Link>
            <span className="text-zinc-400">/</span>
            <span className="text-dark font-medium">{category.name}</span>
          </nav>
        </Container>
      </Section>

      {/* Projects Grid */}
      <Section background="gray">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-dark">
                {projects.length} {projects.length === 1 ? 'Project' : 'Projects'}
              </h2>
              <p className="text-zinc-600">Browse our {category.name.toLowerCase()} portfolio</p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Categories
            </Link>
          </div>

          {projects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/portfolio/${categorySlug}/${project.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <div className="relative h-56 overflow-hidden">
                    <CloudinaryImage
                      publicId={project.featuredImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="inline-flex items-center gap-1 bg-gold text-white text-sm font-medium px-3 py-1.5 rounded-full">
                        View Project
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-dark mb-1 group-hover:text-gold transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-zinc-500 text-sm">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    {project.description && (
                      <p className="text-zinc-600 text-sm mt-2 line-clamp-2">
                        {project.description}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-zinc-500">No projects available in this category yet.</p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-medium mt-4 transition-colors"
              >
                Contact us about your project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </Container>
      </Section>

      {/* Other Categories */}
      <Section background="white">
        <Container>
          <h2 className="text-2xl font-bold text-dark text-center mb-8">
            Explore Other Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolioCategories
              .filter((cat) => cat.slug !== categorySlug)
              .map((cat) => (
                <Link
                  key={cat.id}
                  href={`/portfolio/${cat.slug}`}
                  className="group relative h-32 rounded-lg overflow-hidden"
                >
                  <CloudinaryImage
                    publicId={cat.featuredImage}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-semibold text-center px-2">
                      {cat.name}
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
        subtitle="Contact us today for a free consultation."
        primaryAction={{ label: 'Get Free Quote', href: '/contact-us' }}
      />
    </>
  );
}
