'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';
import { CheckCircle, Calculator, FileText, TrendingUp, Clock, Shield } from 'lucide-react';

export default function BookkeepingPage() {
  const services = [
    {
      title: 'Monthly Bookkeeping',
      description: 'Regular monthly bookkeeping to keep your financial records up-to-date and organized.',
      icon: <Clock size={32} />,
    },
    {
      title: 'Financial Statements',
      description: 'Preparation of accurate financial statements including income statements and balance sheets.',
      icon: <FileText size={32} />,
    },
    {
      title: 'Accounts Payable/Receivable',
      description: 'Complete management of your accounts payable and receivable to maintain cash flow.',
      icon: <TrendingUp size={32} />,
    },
    {
      title: 'Bank Reconciliation',
      description: 'Regular bank reconciliation to ensure accuracy and catch discrepancies early.',
      icon: <Calculator size={32} />,
    },
    {
      title: 'Payroll Processing',
      description: 'Complete payroll services including calculations, remittances, and T4 preparation.',
      icon: <Shield size={32} />,
    },
  ];

  const benefits = [
    'Save time to focus on growing your business',
    'Accurate financial records for better decision-making',
    'Stay compliant with accounting standards',
    'Get timely financial reports and insights',
    'Reduce errors and catch issues early',
    'Professional organization of your finances',
  ];

  const whatWeDo = [
    'Record all financial transactions',
    'Categorize income and expenses',
    'Reconcile bank and credit card accounts',
    'Prepare financial statements',
    'Manage accounts payable and receivable',
    'Process payroll and remittances',
    'Generate financial reports',
    'Maintain organized records',
  ];

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Bookkeeping Services</h1>
            <p className="text-xl text-gray-200">
              Accurate and timely bookkeeping services to keep your finances organized and your business running smoothly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What We Offer"
            subtitle="Bookkeeping Services"
            description="Complete bookkeeping solutions to keep your business finances in order"
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-gold mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What We Do"
            subtitle="Our Bookkeeping Process"
            description="Comprehensive bookkeeping services to keep your finances organized"
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <CheckCircle className="h-8 w-8 text-gold mx-auto mb-3" />
                <p className="text-gray-700 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader
                title="Benefits of Professional Bookkeeping"
                subtitle="Why It Matters"
                description=""
              />
              <div className="space-y-4 mt-8">
                {benefits.map((benefit, index) => (
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
              <h3 className="text-3xl font-bold mb-6 text-gold">Let Us Handle Your Books</h3>
              <p className="text-lg text-gray-200 mb-6">
                Keeping accurate books is essential for your business success. It helps you
                make informed decisions, stay compliant, and save time during tax season.
              </p>
              <p className="text-lg text-gray-200">
                Our experienced bookkeepers use modern accounting software and best practices
                to maintain your financial records accurately and efficiently. We work with
                businesses of all sizes and industries.
              </p>
            </motion.div>
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
              Ready to Get Your Books in Order?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Contact us today to discuss your bookkeeping needs.
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
