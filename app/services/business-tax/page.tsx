'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';
import { CheckCircle } from 'lucide-react';
import { BUSINESS_TAX_SERVICES_DATA, BUSINESS_TAX_BENEFITS, BUSINESS_TYPES } from '@/constants';
import { getIcon } from '@/utils/icons';

export default function BusinessTaxPage() {

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Business Tax Services</h1>
            <p className="text-xl text-gray-200">
              Comprehensive tax solutions for businesses. Strategic planning, compliance, and optimization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What We Offer"
            subtitle="Business Tax Services"
            description="Complete tax solutions designed to help your business succeed"
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BUSINESS_TAX_SERVICES_DATA.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-gold mb-4">{getIcon(service.iconName, 32)}</div>
                <h3 className="text-xl font-bold text-navy mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-navy rounded-2xl p-8 text-white"
            >
              <h3 className="text-3xl font-bold mb-6 text-gold">Why Your Business Needs Us</h3>
              <p className="text-lg text-gray-200 mb-6">
                Business taxes are complex and constantly changing. Our team stays current with
                all tax law changes and identifies every deduction and credit your business
                qualifies for.
              </p>
              <p className="text-lg text-gray-200">
                We work with businesses of all sizes, from startups to established corporations,
                providing personalized service and strategic tax planning to help you succeed.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader
                title="Benefits of Our Business Tax Services"
                subtitle="Why Choose Us"
                description=""
              />
              <div className="space-y-4 mt-8">
                {BUSINESS_TAX_BENEFITS.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-gold flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-lg">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="We Serve All Business Types"
            subtitle="Business Structures"
            description="Expert tax services for every type of business"
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_TYPES.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-navy to-navy-dark text-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow"
              >
                <CheckCircle className="h-8 w-8 text-gold mx-auto mb-3" />
                <h3 className="text-xl font-bold">{type}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-navy-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Optimize Your Business Taxes?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Contact us today to discuss how we can help your business save on taxes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/book-now" variant="primary" size="lg">
                Book Now
              </Button>
              <Button href="/file-your-tax" variant="outline" size="lg" className="border-gold text-gold hover:bg-gold hover:text-navy">
                Get Started
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
