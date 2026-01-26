'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import SectionHeader from '@/components/SectionHeader';
import TestimonialCard from '@/components/TestimonialCard';
import { CheckCircle, Users, Clock, FileText, HelpCircle } from 'lucide-react';
import { SERVICES_DATA, TESTIMONIALS, STATS, FAQS, HERO_CONTENT } from '@/constants';
import { getIcon } from '@/utils/icons';

export default function Home() {

  // Animated Counter Component
  const AnimatedCounter = ({ value, suffix, delay = 0 }: { value: number; suffix: string; delay?: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [displayValue, setDisplayValue] = React.useState(0);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
      damping: 60,
      stiffness: 100,
    });

    useEffect(() => {
      if (isInView) {
        const timer = setTimeout(() => {
          motionValue.set(value);
        }, delay * 100);

        const unsubscribe = springValue.on('change', (latest) => {
          if (suffix === '') {
            setDisplayValue(Number(latest.toFixed(1)));
          } else {
            setDisplayValue(Math.floor(latest));
          }
        });

        return () => {
          clearTimeout(timer);
          unsubscribe();
          motionValue.set(0);
        };
      }
    }, [isInView, value, motionValue, springValue, delay, suffix]);

    return (
      <span ref={ref} className="inline-block">
        {displayValue}
        {suffix && <span>{suffix}</span>}
      </span>
    );
  };


  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-navy-dark to-navy-light text-white py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gold rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gold rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-gold rounded-full blur-3xl"
          />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-5xl mx-auto flex flex-col items-center justify-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full mb-4 sm:mb-6"
            >
              <span className="text-gold text-xs sm:text-sm font-semibold">{HERO_CONTENT.badge}</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight px-4 sm:px-6 md:px-0"
            >
              {HERO_CONTENT.heading}{' '}
              <span className="relative inline-block">
                <span className="text-gold relative z-10">{HERO_CONTENT.highlightedText}</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute bottom-1 sm:bottom-2 left-0 h-2 sm:h-3 bg-gold/30 -z-0"
                />
              </span>{' '}
              {HERO_CONTENT.headingEnd}
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-2 sm:mb-3 md:mb-4 font-light px-4 sm:px-6 md:px-0"
            >
              {HERO_CONTENT.subheading}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-md sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-4 sm:px-6 md:px-0"
            >
              {HERO_CONTENT.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 md:mb-12 w-full px-4 sm:px-0"
            >
              <Button href="/file-your-tax" variant="primary" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto max-w-xs sm:max-w-none shadow-2xl shadow-gold/20 hover:shadow-gold/40 transition-all">
                File Your Tax Now
              </Button>
              <Button href="/book-now" variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto max-w-xs sm:max-w-none border-2 border-gold text-gold hover:bg-gold hover:text-navy backdrop-blur-sm bg-white/5">
                Book Appointment
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-xs sm:text-sm md:text-base px-4 sm:px-0 w-full"
            >
              {HERO_CONTENT.trustIndicators.map((indicator, index) => (
                <React.Fragment key={indicator}>
                  {index > 0 && <div className="hidden sm:block w-1 h-1 bg-gold rounded-full" />}
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gold flex-shrink-0" />
                    <span className="text-gray-300 whitespace-nowrap">{indicator}</span>
                  </div>
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-gold rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* File Options Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="File from Your Comfort"
            description="Choose the method that works best for you"
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: 'In-Person',
                description: 'Book an appointment or walk in for a personalized tax filing experience with our experts.',
                icon: <Users size={32} />,
              },
              {
                title: 'Remotely',
                description: 'Skip the office visit, submit online in minutes — our experts handle the rest. Fast. Easy. Expert-reviewed.',
                icon: <Clock size={32} />,
              },
              {
                title: 'Documents Drop-Off',
                description: 'Visit our office, leave your documents with us and relax — we\'ll handle the rest. No forms. No stress.',
                icon: <FileText size={32} />,
              },
            ].map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-gold mb-4 flex justify-center">{option.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Services"
            subtitle="What We Offer"
            description="Comprehensive tax and accounting solutions tailored to your needs"
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {SERVICES_DATA.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={getIcon(service.iconName, 40)}
                href={service.href}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-navy text-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  delay: index * 0.15,
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="text-center group cursor-default"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.15 + 0.3,
                    type: 'spring',
                    stiffness: 200,
                    damping: 15
                  }}
                  className="relative inline-block mb-3"
                >
                  <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl group-hover:bg-gold/30 transition-colors"></div>
                  <div className="relative text-4xl sm:text-5xl md:text-6xl font-bold text-gold mb-2">
                    <AnimatedCounter 
                      value={stat.value} 
                      suffix={stat.suffix} 
                      delay={index * 0.15 + 0.3}
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.5 }}
                  className="text-sm sm:text-base text-gray-300 font-medium"
                >
                  {stat.label}
                </motion.div>
                {/* Decorative line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.6, duration: 0.5 }}
                  className="h-0.5 bg-gold/30 mx-auto mt-3 group-hover:bg-gold/50 transition-colors"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Testimonials"
            subtitle="What Our Clients Say"
            description="Real stories, real smiles—see why our clients trust us"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                location={testimonial.location}
                content={testimonial.content}
                rating={testimonial.rating}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="FAQ's"
            description="Find answers to common questions and get the clarity you need for a smooth tax filing experience"
            center
          />
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold text-navy mb-2 flex items-start">
                  <HelpCircle className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-7">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
