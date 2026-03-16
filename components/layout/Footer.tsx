// BNC Builders - Footer Component

import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { brandImages } from '@/lib/constants/images';
import { company, accolades } from '@/lib/constants/company';
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
            <a
              href="https://www.comcreate.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs sm:text-sm"
              style={{ color: 'rgba(255, 255, 255, 0.6)' }}
            >
              Website Powered by
              <Image
                src="/comcreate logo/comcreate white.png"
                alt="Comcreate"
                width={100}
                height={24}
                className="h-5 w-auto opacity-60 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}