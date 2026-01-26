import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_MEDIA, SITE_METADATA } from '@/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src={SITE_METADATA.logo}
                alt={SITE_METADATA.companyName}
                width={200}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm mb-4">
              {SITE_METADATA.description}
            </p>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_MEDIA.facebook}
                className="text-gray-300 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={SOCIAL_MEDIA.instagram}
                className="text-gray-300 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/file-your-tax" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  File Your Tax
                </Link>
              </li>
              <li>
                <Link href="/book-now" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/personal-tax"
                  className="text-gray-300 hover:text-gold transition-colors text-sm"
                >
                  Personal Tax Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/business-tax"
                  className="text-gray-300 hover:text-gold transition-colors text-sm"
                >
                  Business Tax Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/bookkeeping"
                  className="text-gray-300 hover:text-gold transition-colors text-sm"
                >
                  Bookkeeping
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">{CONTACT_INFO.phone}</p>
                  <p className="text-gray-400 text-xs">Toll Free: {CONTACT_INFO.tollFree}</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-300 hover:text-gold transition-colors text-sm"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  {CONTACT_INFO.address.line1}<br />
                  {CONTACT_INFO.address.line2}
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} {SITE_METADATA.companyName}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
