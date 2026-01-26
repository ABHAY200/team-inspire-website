'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';
import { CheckCircle } from 'lucide-react';
import { PERSONAL_TAX_SERVICES_DATA, PERSONAL_TAX_BENEFITS, COMMON_TAX_SITUATIONS } from '@/constants';
import { getIcon } from '@/utils/icons';

export default function PersonalTaxPage() {

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Personal Tax Services</h1>
            <p className="text-xl text-gray-200">
              Expert tax preparation for individuals. Maximize your returns with professional guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What We Offer"
            subtitle="Personal Tax Services"
            description="Comprehensive tax solutions tailored to your individual needs"
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PERSONAL_TAX_SERVICES_DATA.map((service, index) => (
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
            >
              <SectionHeader
                title="Why Choose Our Personal Tax Services?"
                subtitle="Benefits"
                description=""
              />
              <div className="space-y-4 mt-8">
                {PERSONAL_TAX_BENEFITS.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
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
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-navy rounded-2xl p-8 text-white"
            >
              <h3 className="text-3xl font-bold mb-6 text-gold">We Handle It All</h3>
              <p className="text-lg text-gray-200 mb-6">
                From simple returns to complex tax situations, our experienced team ensures
                accuracy and maximizes your refunds. We stay current with all tax law changes
                and identify every deduction and credit you're entitled to.
              </p>
              <p className="text-lg text-gray-200">
                Whether you're a first-time filer, a new immigrant, or have complex investments,
                we have the expertise to handle your personal tax needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Situations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="We Handle All Tax Situations"
            subtitle="Common Scenarios"
            description="No matter your situation, we have the expertise to help"
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMMON_TAX_SITUATIONS.map((situation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gold/10 transition-colors"
              >
                <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-gray-700">{situation}</span>
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
              Ready to File Your Personal Tax?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Get started today and let our experts maximize your refund.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/file-your-tax" variant="primary" size="lg">
                File Your Tax Now
              </Button>
              <Button href="/book-now" variant="outline" size="lg" className="border-gold text-gold hover:bg-gold hover:text-navy">
                Book Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
