// BNC Builders - Site Map Page

import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSubpage } from '@/components/sections';
import { Container, Section } from '@/components/ui';
import { bannerImages } from '@/lib/constants/images';
import { generatePageMetadata } from '@/lib/utils/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Site Map',
  description: 'Navigate the BNC Builders Inc. website with our comprehensive site map.',
  path: '/site-map',
});

const siteLinks = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'Our Process', href: '/our-process' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Areas We Serve', href: '/areas-we-serve' },
    { label: 'Careers', href: '/careers' },
  ],
  interiorServices: [
    { label: 'Home Remodeling', href: '/home-remodeling' },
    { label: 'Kitchen Remodeling', href: '/kitchen-remodeling' },
    { label: 'Bathroom Remodeling', href: '/bathroom-remodeling' },
    { label: 'Garage Remodeling', href: '/garage-remodeling' },
    { label: 'New Room Additions', href: '/new-room-additions' },
    { label: 'Pre-Construction', href: '/pre-construction' },
  ],
  exteriorServices: [
    { label: 'Exterior Remodeling', href: '/exterior-remodeling' },
    { label: 'ADUs', href: '/adus' },
    { label: 'Deck Repair', href: '/deck-repair' },
    { label: 'Hardscaping', href: '/hardscaping' },
    { label: 'Outdoor Kitchens', href: '/outdoor-kitchens' },
    { label: 'Landscape Remodeling', href: '/landscape-remodeling' },
    { label: '3D Landscape Design', href: '/3d-landscape-design' },
  ],
};

export default function SiteMapPage() {
  return (
    <>
      {/* Hero */}
      <HeroSubpage
        title="Site Map"
        subtitle="Find what you're looking for"
        backgroundImage={bannerImages.faq}
      />

      {/* Site Map Content */}
      <Section background="white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Main Pages */}
            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-4">Main Pages</h2>
              <ul className="space-y-2">
                {siteLinks.main.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-zinc-600 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interior Services */}
            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-4">Interior Services</h2>
              <ul className="space-y-2">
                {siteLinks.interiorServices.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-zinc-600 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exterior Services */}
            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-4">Exterior Services</h2>
              <ul className="space-y-2">
                {siteLinks.exteriorServices.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-zinc-600 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-4">Resources</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/customer-referral-program" className="text-zinc-600 hover:text-gold transition-colors">
                    Customer Referral Program
                  </Link>
                </li>
                <li>
                  <Link href="/adu-handbook-download" className="text-zinc-600 hover:text-gold transition-colors">
                    ADU Handbook Download
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
