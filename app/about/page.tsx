'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';
import { CheckCircle } from 'lucide-react';
import { COMPANY_VALUES_DATA, WHY_CHOOSE_US, COMPANY_STORY } from '@/constants';
import { getIcon } from '@/utils/icons';

export default function AboutPage() {

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Team Inspire</h1>
            <p className="text-xl text-gray-200">
              Your trusted partner in tax and accounting services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
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
                title="Our Story"
                subtitle="Who We Are"
                description=""
              />
              <div className="space-y-4 text-gray-700">
                <p>{COMPANY_STORY.introduction}</p>
                <p>{COMPANY_STORY.experience}</p>
                <p>{COMPANY_STORY.approach}</p>
                <p>{COMPANY_STORY.commitment}</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl p-8 h-full flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-6xl font-bold text-gold mb-4">10+</div>
                <div className="text-2xl font-semibold text-navy mb-2">Years of Excellence</div>
                <div className="text-gray-600">Serving clients across Canada</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Values"
            subtitle="What Drives Us"
            description="The principles that guide everything we do"
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_VALUES_DATA.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-gold mb-4 flex justify-center">{getIcon(value.iconName, 40)}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
                title="Why Choose Team Inspire?"
                subtitle="Your Trusted Partner"
                description=""
              />
              <div className="space-y-4">
                {WHY_CHOOSE_US.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-gold flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-lg">{item}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <Button href="/book-now" variant="primary" size="lg">
                  Book Now
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-navy rounded-2xl p-12 text-white"
            >
              <h3 className="text-3xl font-bold mb-6 text-gold">Our Commitment</h3>
              <p className="text-lg text-gray-200 mb-6">
                At Team Inspire, we're not just tax preparers—we're your financial partners.
                We take the time to understand your unique situation and provide personalized
                solutions that help you achieve your financial goals.
              </p>
              <p className="text-lg text-gray-200">
                Whether you're an individual taxpayer, a small business owner, or a growing
                corporation, we have the expertise and dedication to serve you with excellence.
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Experience the difference that professional, personalized tax services can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/file-your-tax" variant="primary" size="lg">
                File Your Tax
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
