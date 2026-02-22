'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';
import { CheckCircle, Shield, Clock } from 'lucide-react';
import { FILING_METHODS_DATA, TAX_FILING_STEPS, FILING_BENEFITS } from '@/constants';
import { getIcon } from '@/utils/icons';

export default function FileYourTaxPage() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">File Your Tax</h1>
            <p className="text-xl text-gray-200">
              Choose the filing method that works best for you. We make tax filing simple, fast, and stress-free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filing Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Choose Your Filing Method"
            subtitle="How Would You Like to File?"
            description="Select the option that best fits your needs and schedule"
            center
          />
          <div className="grid md:grid-cols-3 gap-8">
            {FILING_METHODS_DATA.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedMethod(method.title)}
                className={`bg-white rounded-xl p-8 shadow-lg cursor-pointer transition-all ${
                  selectedMethod === method.title
                    ? 'border-2 border-gold shadow-xl scale-105'
                    : 'border border-gray-100 hover:shadow-xl'
                }`}
              >
                <div className="text-gold mb-4 flex justify-center">{getIcon(method.iconName, 40)}</div>
                <h3 className="text-2xl font-bold text-navy mb-3 text-center">{method.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{method.description}</p>
                <ul className="space-y-2">
                  {method.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Steps to File Your Tax Online"
            subtitle="How It Works"
            description="Follow these easy steps to file your taxes online quickly and securely"
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TAX_FILING_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-xl">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-navy mt-4 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

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
                title="Why File With Team Inspire?"
                subtitle="Benefits"
                description=""
              />
              <div className="space-y-4 mt-8">
                {FILING_BENEFITS.map((benefit, index) => (
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
              <div className="flex items-center mb-6">
                <Shield className="h-12 w-12 text-gold mr-4" />
                <h3 className="text-3xl font-bold text-gold">Secure & Confidential</h3>
              </div>
              <p className="text-lg text-gray-200 mb-6">
                Your financial information is safe with us. We use bank-level encryption and
                follow strict confidentiality protocols to protect your data.
              </p>
              <div className="flex items-center space-x-4">
                <Clock className="h-8 w-8 text-gold" />
                <div>
                  <p className="font-semibold text-lg">Fast Processing</p>
                  <p className="text-gray-300">Most returns processed within 2-3 business days</p>
                </div>
              </div>
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
              Ready to File Your Tax?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Get started today and let our experts maximize your refund.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/book-now" variant="outline" size="lg" className="border-gold text-gold hover:bg-gold hover:text-navy">
                Book an Appointment
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
