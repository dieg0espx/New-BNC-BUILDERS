// BNC Builders - Individual Project Page

import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section } from '@/components/ui';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { bannerImages } from '@/lib/constants/images';
import {
  portfolioProjects,
  getProjectBySlug,
  getCategoryBySlug,
  getProjectsByCategory,
} from '@/lib/constants/portfolio';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { ArrowLeft, ArrowRight, MapPin, Grid3X3, Phone } from 'lucide-react';

interface ProjectPageProps {
  params: Promise<{ category: string; project: string }>;
}

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    category: project.categorySlug,
    project: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { category: categorySlug, project: projectSlug } = await params;
  const project = getProjectBySlug(projectSlug);

  if (!project) {
    return generatePageMetadata({ title: 'Project Not Found', description: 'The requested project could not be found.' });
  }

  return generatePageMetadata({
    title: `${project.title} | ${project.category}`,
    description: project.description || `View our ${project.category.toLowerCase()} project in ${project.location}`,
    path: `/portfolio/${categorySlug}/${projectSlug}`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { category: categorySlug, project: projectSlug } = await params;
  const project = getProjectBySlug(projectSlug);
  const category = getCategoryBySlug(categorySlug);

  if (!project || !category || project.categorySlug !== categorySlug) {
    notFound();
  }

  // Get related projects from the same category
  const relatedProjects = getProjectsByCategory(categorySlug)
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <HeroSubpage
        title={project.title}
        subtitle={`${project.category} Project in ${project.location}`}
        backgroundImage={project.featuredImage}
      />

      {/* Breadcrumb */}
      <Section background="white" padding="sm">
        <Container>
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-zinc-500 hover:text-gold transition-colors">
              Home
            </Link>
            <span className="text-zinc-400">/</span>
            <Link href="/portfolio" className="text-zinc-500 hover:text-gold transition-colors">
              Portfolio
            </Link>
            <span className="text-zinc-400">/</span>
            <Link
              href={`/portfolio/${categorySlug}`}
              className="text-zinc-500 hover:text-gold transition-colors"
            >
              {category.name}
            </Link>
            <span className="text-zinc-400">/</span>
            <span className="text-dark font-medium">{project.title}</span>
          </nav>
        </Container>
      </Section>

      {/* Project Details */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <Link
                  href={`/portfolio/${categorySlug}`}
                  className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to {category.name}
                </Link>
              </div>

              {project.description && (
                <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                  {project.description}
                </p>
              )}

              {/* Photo Gallery */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-dark flex items-center gap-2">
                  <Grid3X3 className="w-5 h-5 text-gold" />
                  Project Gallery
                </h2>

                {project.images.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.map((image, index) => (
                      <div
                        key={index}
                        className={`relative rounded-lg overflow-hidden shadow-md ${
                          index === 0 ? 'md:col-span-2 h-80' : 'h-56'
                        }`}
                      >
                        <CloudinaryImage
                          publicId={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-zinc-100 rounded-lg p-8 text-center">
                    <p className="text-zinc-500">
                      Gallery images coming soon. Contact us for more details about this project.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-zinc-50 rounded-xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-dark mb-4">Project Details</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-zinc-500">Location</p>
                      <p className="font-medium text-dark">{project.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Grid3X3 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-zinc-500">Category</p>
                      <p className="font-medium text-dark">{project.category}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded bg-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{project.images.length}</span>
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500">Photos</p>
                      <p className="font-medium text-dark">{project.images.length} Images</p>
                    </div>
                  </div>
                </div>

                <hr className="my-6 border-zinc-200" />

                <div className="space-y-3">
                  <p className="text-sm text-zinc-600">
                    Interested in a similar project for your home?
                  </p>
                  <a
                    href="/contact-us"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Get Free Quote
                  </a>
                  <a
                    href="tel:+17606586238"
                    className="w-full inline-flex items-center justify-center gap-2 border-2 border-zinc-800 text-zinc-800 font-semibold px-6 py-3 rounded-lg hover:bg-zinc-800 hover:text-white transition-colors"
                  >
                    Call (760) 658-6238
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <Section background="gray">
          <Container>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-dark">More {category.name} Projects</h2>
              <Link
                href={`/portfolio/${categorySlug}`}
                className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-medium transition-colors"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/portfolio/${categorySlug}/${relatedProject.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <CloudinaryImage
                      publicId={relatedProject.featuredImage}
                      alt={relatedProject.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-dark group-hover:text-gold transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-sm text-zinc-500">{relatedProject.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* CTA */}
      <CTABanner
        title="Ready to Transform Your Home?"
        subtitle="Let us help you create the space of your dreams."
        primaryAction={{ label: 'Schedule Consultation', href: '/contact-us' }}
      />
    </>
  );
}
