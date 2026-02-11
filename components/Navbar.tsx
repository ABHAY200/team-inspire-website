'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_LINKS, SITE_METADATA } from '@/constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={SITE_METADATA.logo}
              alt={SITE_METADATA.companyName}
              width={200}
              height={60}
              className={`h-8 sm:h-10 md:h-12 w-auto object-contain transition-all duration-300 ${
                !isScrolled ? 'brightness-0 invert drop-shadow-2xl' : ''
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <div
                    className={`flex items-center space-x-1 font-medium hover:text-gold transition-colors cursor-pointer ${
                      isScrolled ? 'text-navy' : 'text-white'
                    }`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`font-medium hover:text-gold transition-colors ${
                      isScrolled ? 'text-navy' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
                {link.submenu && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                        className="absolute top-full left-0 mt-2 w-64 bg-navy rounded-lg shadow-xl border border-navy-light py-2"
                      >
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2 text-white hover:bg-gold/20 hover:text-gold transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <Link
              href="/book-now"
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                isScrolled
                  ? 'bg-gold text-navy hover:bg-gold-light'
                  : 'bg-gold/90 backdrop-blur-sm text-navy hover:bg-gold'
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden transition-colors ${
              isScrolled ? 'text-navy' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 h-screen"
          >
            <div className="px-4 py-4 space-y-4">
              {NAV_LINKS.map((link) => (
                <div key={link.name}>
                  {link.submenu ? (
                    <div>
                      <div className="text-navy font-medium mb-2">{link.name}</div>
                      <div className="pl-4 space-y-2">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block text-gray-600 hover:text-gold transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block text-navy font-medium hover:text-gold transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/book-now"
                className="block bg-gold text-navy px-6 py-3 rounded-lg font-semibold text-center hover:bg-gold-light transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
