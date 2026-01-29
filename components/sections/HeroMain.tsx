// BNC Builders - Main Hero Component (Home Page)

import { Container, Button } from '@/components/ui';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { heroImages } from '@/lib/constants/images';
import { company } from '@/lib/constants/company';

export function HeroMain() {
  return (
    <section className="relative min-h-[500px] h-[75vh] sm:h-[90vh] pt-20 sm:pt-0 flex items-center overflow-hidden">
      {/* Background Image with zoom animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 animate-[scaleIn_1.5s_ease-out]">
          <CloudinaryImage
            publicId={heroImages.mainStageBg}
            alt="Home remodeling background"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 via-zinc-900/70 to-zinc-900/40" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white">
            <p className="text-gold-light font-semibold mb-2 text-sm sm:text-base animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
              Escondido&apos;s Most Trusted Kitchen Remodel & Bathroom Remodeling Team
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6 leading-tight text-white animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
              Build Your Dream Home Without The Stress
            </h1>
            <p className="text-lg sm:text-xl text-zinc-300 mb-6 sm:mb-8 max-w-lg animate-[fadeInUp_0.6s_ease-out_0.6s_both]">
              BNC Builders transforms San Diego homes with stunning kitchen remodel Escondido CA projects, bathroom remodeling San Diego makeovers, custom ADUs, and complete exterior remodeling. We handle every detail so you can relax.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8 mb-6 sm:mb-8 animate-[fadeInUp_0.6s_ease-out_0.8s_both]">
              <div className="group">
                <div className="text-3xl sm:text-4xl font-bold text-gold-light group-hover:scale-110 transition-transform">{company.projectsCompleted}</div>
                <div className="text-zinc-400 text-sm sm:text-base">Happy Homeowners</div>
              </div>
              <div className="group">
                <div className="text-3xl sm:text-4xl font-bold text-gold-light group-hover:scale-110 transition-transform">{company.experience}</div>
                <div className="text-zinc-400 text-sm sm:text-base">Years Building Trust</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 animate-[fadeInUp_0.6s_ease-out_1s_both]">
              <Button href="/contact-us" size="lg" className="btn-animated hover-lift !px-5 !py-2.5 !text-sm sm:!px-8 sm:!py-4 sm:!text-lg">
                Schedule Free Consultation
              </Button>
              <Button href="/portfolio" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-zinc-900 hover-lift !px-5 !py-2.5 !text-sm sm:!px-8 sm:!py-4 sm:!text-lg">
                Explore Our Projects
              </Button>
            </div>

          </div>

          {/* Hero Image on right with float animation */}
          <div className="hidden lg:block">
            <div className="relative animate-[fadeInRight_0.8s_ease-out_0.5s_both]">
              <div className="animate-float">
                <CloudinaryImage
                  publicId={heroImages.mainStageImg}
                  alt="Beautiful kitchen remodel Escondido CA project showcasing BNC Builders craftsmanship"
                  width={420}
                  height={300}
                  className="rounded-lg shadow-2xl hover:shadow-gold/20 transition-shadow duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
