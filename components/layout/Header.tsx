// BNC Builders - Header Component

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { brandImages } from '@/lib/constants/images';
import { company } from '@/lib/constants/company';
import { mainNavigation } from '@/lib/constants/navigation';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';
import { MapPin, Clock, Phone, Menu } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-md bg-white' : 'shadow-sm bg-gray-50'
      }`}
    >
      {/* Top Bar */}
      <div className="bg-gold py-2.5 hidden md:block">
        <Container>
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white" />
                <span className="text-white">{company.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-white" />
                <span className="text-white">{company.officeHours}</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-white font-medium">Hablamos Español</span>
              <a
                href={`tel:${company.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center gap-2 font-semibold text-white hover:text-zinc-800 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {company.phone}
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Header */}
      <div className="py-4 border-b border-gray-200">
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <CloudinaryImage
                publicId={brandImages.logoDark}
                alt={company.name}
                width={180}
                height={60}
                priority
                className="h-14 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <Navigation items={mainNavigation} />
              <a
                href={`tel:${company.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center gap-2 bg-gold hover:bg-gold-light text-white px-6 py-3 rounded font-bold uppercase tracking-wide transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>{company.phone}</span>
              </a>
            </div>

            {/* Mobile Header Right */}
            <div className="flex items-center gap-4 lg:hidden">
              {/* Mobile Phone Button */}
              <a
                href={`tel:${company.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center justify-center w-10 h-10 bg-gold text-white rounded-full"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="p-2 text-dark hover:text-gold transition-colors"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-7 h-7" />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={mainNavigation}
      />
    </header>
  );
}
