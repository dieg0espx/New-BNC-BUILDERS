// BNC Builders - Mobile Menu Component

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NavItem } from '@/lib/types';
import { company } from '@/lib/constants/company';
import { X, ChevronDown, Phone, MapPin, Clock } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export function MobileMenu({ isOpen, onClose, items }: MobileMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 z-50 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header - Fixed at top */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800/20 bg-gold flex-shrink-0">
          <span className="text-lg font-bold text-zinc-800">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-zinc-800 hover:text-white transition-colors rounded-full hover:bg-zinc-800/10"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content - Navigation + Footer */}
        <div className="flex-1 overflow-y-auto">
          {/* Navigation */}
          <nav className="py-2">
            {items.map((item) => (
              <MobileNavItem key={item.href + item.label} item={item} onClose={onClose} />
            ))}
          </nav>

          {/* Footer */}
          <div className="border-t border-gray-100 px-5 py-5 bg-gray-50 space-y-4">
            {/* Phone CTA */}
            <a
              href={`tel:${company.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center justify-center gap-2 w-full bg-gold text-white px-6 py-3.5 rounded font-bold uppercase tracking-wide hover:bg-gold-light transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {company.phone}
            </a>

            {/* Info */}
            <div className="space-y-2 text-sm text-zinc-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                <span>{company.officeHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                <span>{company.address.full}</span>
              </div>
            </div>

            {/* Spanish */}
            <p className="text-center text-gold font-medium text-sm">
              Hablamos Español
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

interface MobileNavItemProps {
  item: NavItem;
  onClose: () => void;
}

function MobileNavItem({ item, onClose }: MobileNavItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="block px-5 py-3.5 text-dark hover:bg-gold/10 hover:text-gold font-medium border-b border-gray-50 transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-gray-50">
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full px-5 py-3.5 text-dark hover:bg-gold/10 hover:text-gold font-medium transition-colors"
      >
        {item.label}
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-200 ${
          isExpanded ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="bg-gray-50 py-2">
          {item.children.map((child) => (
            <MobileSubItem key={child.href + child.label} item={child} onClose={onClose} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface MobileSubItemProps {
  item: NavItem;
  onClose: () => void;
}

function MobileSubItem({ item, onClose }: MobileSubItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="block px-8 py-2.5 text-zinc-700 hover:text-gold transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full px-8 py-2.5 text-zinc-700 hover:text-gold transition-colors"
      >
        {item.label}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-200 ${
          isExpanded ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="py-1">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onClose}
              className="block px-12 py-2 text-zinc-600 hover:text-gold transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
