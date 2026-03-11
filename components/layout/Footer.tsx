// BNC Builders - Footer Component

import Link from 'next/link';
import { Container } from '@/components/ui';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { brandImages } from '@/lib/constants/images';
import { company, accolades, socialLinks } from '@/lib/constants/company';
import { footerNavigation } from '@/lib/constants/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-800">
      {/* Accolades Bar */}
      <div className="border-b border-white/20 py-6 sm:py-8">
        <Container>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6">
            {accolades.slice(0, 6).map((accolade) => (
              <div
                key={accolade.name}
                className="text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 border border-white/30 rounded opacity-80 hover:opacity-100 hover:border-white transition-all"
              >
                {accolade.name}
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Main Footer */}
      <div className="py-8 sm:py-12">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="col-span-2 md:col-span-4 lg:col-span-2">
              <CloudinaryImage
                publicId={brandImages.logoLight}
                alt={company.name}
                width={180}
                height={60}
                className="h-10 sm:h-12 w-auto mb-4"
              />
              <p className="text-white/80 mb-4 max-w-sm text-sm sm:text-base">
                {company.tagline}
              </p>
              <address className="not-italic text-white/80 space-y-2 text-sm sm:text-base">
                <p>{company.address.full}</p>
                <p>
                  <a
                    href={`tel:${company.phoneLink}`}
                    className="hover:text-gold transition-colors"
                  >
                    {company.phone}
                  </a>
                </p>
                <p>{company.officeHours}</p>
              </address>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Company</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {footerNavigation.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-gold transition-colors text-sm sm:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Services</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {footerNavigation.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-gold transition-colors text-sm sm:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Resources</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {footerNavigation.resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-gold transition-colors text-sm sm:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-4 sm:py-6">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-xs sm:text-sm text-center md:text-left">
              &copy; {currentYear} {company.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.slice(0, 6).map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-white/80 hover:text-gold transition-colors"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  // Simple placeholder icons - in production, use actual SVG icons
  const icons: Record<string, React.ReactNode> = {
    facebook: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
    youtube: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    google_plus: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018 0-3.878 3.132-7.018 7-7.018 1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062-2.31 0-4.187 1.956-4.187 4.273 0 2.315 1.877 4.277 4.187 4.277 2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474 0 4.01-2.677 6.86-6.72 6.86z" />
      </svg>
    ),
    yelp: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 9.194 9.194 0 012.364 3.252 1.073 1.073 0 01-.694 1.459zm-3.1 5.017l-4.053-3.12c-.78-.6-.456-1.836.49-1.872l5.253-.204a1.074 1.074 0 011.112.932 9.204 9.204 0 01-.54 4.053c-.36.882-1.45 1.014-2.262.211zm-7.628 2.098l1.4-5.003c.27-.96 1.46-1.19 1.8-.346l2.034 4.945a1.072 1.072 0 01-.544 1.36 9.19 9.19 0 01-3.924.71c-.9-.048-1.236-.763-.766-1.666zm-4.35-7.463a9.202 9.202 0 01.544-4.053c.36-.882 1.45-1.014 2.262-.211l4.053 3.12c.78.6.456 1.836-.49 1.872l-5.253.204a1.074 1.074 0 01-1.116-.932zM8.9 6.108l4.995-1.433c.96-.276 1.74.8 1.176 1.63L12.166 10.613c-.378.56-1.212.63-1.596.206a9.194 9.194 0 01-2.364-3.252 1.073 1.073 0 01.694-1.459z" />
      </svg>
    ),
  };

  return icons[name] || <span className="w-5 h-5 bg-current rounded-full" />;
}
