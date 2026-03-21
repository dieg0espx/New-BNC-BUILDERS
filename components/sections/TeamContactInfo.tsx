// BNC Builders - Team Contact Info Section

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { trackPhoneClick } from '@/lib/tracking';

export function TeamContactInfo() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Team Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[520px] lg:h-[520px] rounded-full overflow-hidden bg-gray-100">
              <Image
                src="https://res.cloudinary.com/dku1gnuat/image/upload/q_auto,f_auto/v1769542130/Copy_of__DSC0177_gij1ds.jpg"
                alt="BNC Builders team reviewing project plans"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4">
              An Experienced & Trusted
              <br />
              Team of Professionals
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8">
              BNC Builders Inc. Is Ready To Get Started On Your Next Project
            </p>

            <div className="space-y-6">
              {/* Office Address */}
              <div>
                <h3 className="font-semibold text-secondary mb-1">Office Address:</h3>
                <p className="text-gray-600">
                  101 State Pl Suite N
                  <br />
                  Escondido, CA 92029
                </p>
                <a
                  href="https://maps.google.com/?q=101+State+Pl+Suite+N+Escondido+CA+92029"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  Map & Directions
                </a>
              </div>

              {/* Phone */}
              <div>
                <h3 className="font-semibold text-secondary mb-1">Request A Free Estimate!</h3>
                <a
                  href="tel:+17606586238"
                  onClick={trackPhoneClick}
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary hover:text-primary transition-colors"
                >
                  760-658-6238
                </a>
              </div>

              {/* Office Hours */}
              <div>
                <h3 className="font-semibold text-secondary mb-1">Office Hours</h3>
                <p className="text-gray-600">
                  Monday - Saturday
                  <br />
                  8:00am - 5:00pm
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link href="/contact-us">
                  <Button size="lg">Contact Us!</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
