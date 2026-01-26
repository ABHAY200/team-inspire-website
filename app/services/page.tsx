'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';
import { CheckCircle } from 'lucide-react';
import { SERVICES_DATA } from '@/constants';
import { getIcon } from '@/utils/icons';

export default function ServicesPage() {

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy-dark to-navy-light text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200">
              Comprehensive tax and accounting solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What We Offer"
            subtitle="Services"
            description="Professional tax and accounting services designed to help you succeed"
            center
          />
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-gold"
              >
                <div className="text-gold mb-4">{getIcon(service.iconName, 40)}</div>
                <h3 className="text-2xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                {service.features && (
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  href={service.href}
                  className="inline-flex items-center text-gold font-semibold hover:text-gold-dark transition-colors"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-navy mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today to discuss how we can help with your tax and accounting needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/book-now" variant="primary" size="lg">
                Book Now
              </Button>
              <Button href="/file-your-tax" variant="secondary" size="lg">
                File Your Tax
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
