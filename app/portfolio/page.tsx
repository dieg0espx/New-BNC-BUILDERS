// BNC Builders - Portfolio Page

'use client';

import Link from 'next/link';
import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section, AnimatedSection } from '@/components/ui';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { bannerImages } from '@/lib/constants/images';
import { portfolioCategories, portfolioProjects, getProjectsByCategory } from '@/lib/constants/portfolio';
import { ArrowRight, MapPin } from 'lucide-react';
import { useInView } from '@/lib/hooks/useInView';

export default function PortfolioPage() {
  // Get featured projects (one from each category)
  const featuredProjects = portfolioCategories.map((category) => {
    const projects = getProjectsByCategory(category.slug);
    return projects[0];
  }).filter(Boolean).slice(0, 6);

  return (
    <>
      {/* Hero */}
      <HeroSubpage
        title="Our Portfolio"
        subtitle="Explore our collection of kitchen remodels, bathroom renovations, ADUs, exterior remodeling, and landscape transformations by BNC Builders."
        backgroundImage={bannerImages.faq}
      />

      {/* Stats Bar */}
      <Section background="dark" padding="sm">
        <Container>
          <AnimatedSection animation="fade-in-up">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 py-4">
              <div className="text-center hover:scale-110 transition-transform">
                <div className="text-3xl font-bold text-zinc-900">{portfolioProjects.length}+</div>
                <div className="text-zinc-800 text-sm">Projects</div>
              </div>
              <div className="text-center hover:scale-110 transition-transform">
                <div className="text-3xl font-bold text-zinc-900">{portfolioCategories.length}</div>
                <div className="text-zinc-800 text-sm">Categories</div>
              </div>
              <div className="text-center hover:scale-110 transition-transform">
                <div className="text-3xl font-bold text-zinc-900">100%</div>
                <div className="text-zinc-800 text-sm">Satisfaction</div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Categories */}
      <CategoriesSection />

      {/* Featured Projects */}
      <FeaturedProjectsSection featuredProjects={featuredProjects} />

      {/* CTA */}
      <CTABanner
        title="Ready to Start Your Project?"
        subtitle="Contact BNC Builders for your next remodeling project - kitchen, bathroom, ADU, outdoor, or anything in between."
        primaryAction={{ label: 'Get Free Quote', href: '/contact-us' }}
      />
    </>
  );
}

// Categories Section with animations
function CategoriesSection() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <Section background="white">
      <Container>
        <AnimatedSection animation="fade-in-up" className="text-center mb-12">
          <span className="text-gold font-semibold uppercase tracking-wider text-sm">
            Browse By Category
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">
            Browse By Category
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Browse our work by category below.
          </p>
        </AnimatedSection>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioCategories.map((category, index) => {
            const projectCount = getProjectsByCategory(category.slug).length;
            return (
              <Link
                key={category.slug}
                href={`/portfolio/${category.slug}`}
                className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all hover-lift card-animate ${inView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-72 image-reveal">
                  <CloudinaryImage
                    publicId={category.featuredImage}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-gold transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-zinc-300 text-sm">
                        {projectCount} {projectCount === 1 ? 'project' : 'projects'}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

// Featured Projects Section with animations
interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  featuredImage: string;
  location: string;
}

function FeaturedProjectsSection({ featuredProjects }: { featuredProjects: Project[] }) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <Section background="gray">
      <Container>
        <AnimatedSection animation="fade-in-up" className="text-center mb-12">
          <span className="text-gold font-semibold uppercase tracking-wider text-sm">
            Recent Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">
            Recent Work
          </h2>
        </AnimatedSection>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.categorySlug}/${project.slug}`}
              className={`group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover-lift card-animate ${inView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden image-reveal">
                <CloudinaryImage
                  publicId={project.featuredImage}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-dark group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1 text-zinc-500 text-sm mt-1">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <AnimatedSection animation="fade-in-up" delay={600} className="text-center mt-10">
          <p className="text-zinc-600 mb-4">
            Want to see more? Browse our full collection by category above.
          </p>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
