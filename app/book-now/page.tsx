'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function BookNowPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for booking! We will confirm your appointment soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: '+1 (416) 303-3600',
      subcontent: 'Toll Free: +1 (844) 760-3600',
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'contact@teaminspiretax.com',
      subcontent: 'We respond within 24 hours',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Address',
      content: 'Unit 213, 1085 Bellamy Rd North',
      subcontent: 'Scarborough, ON M1H 3C7',
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      content: 'Monday - Friday: 9:00 AM - 6:00 PM',
      subcontent: 'Saturday: 10:00 AM - 4:00 PM',
    },
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Book Now</h1>
            <p className="text-xl text-gray-200">
              Schedule your appointment with our tax experts today
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader
                title="Get in Touch"
                subtitle="Book Your Appointment"
                description=""
              />
              <div className="space-y-6 mt-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="bg-gold/10 p-3 rounded-lg text-gold flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">{info.title}</h3>
                      <p className="text-gray-700">{info.content}</p>
                      {info.subcontent && (
                        <p className="text-sm text-gray-500 mt-1">{info.subcontent}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 bg-gradient-to-br from-navy to-navy-dark rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4 text-gold">Need Immediate Assistance?</h3>
                <p className="text-gray-200 mb-6">
                  For urgent matters, please call us directly. Our team is ready to help you
                  with your tax and accounting needs.
                </p>
                <Button
                  href="tel:+14163033600"
                  variant="primary"
                  size="md"
                  className="bg-gold hover:bg-gold-light"
                >
                  Call Now
                </Button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-navy mb-6">Book Your Appointment</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                      placeholder="(416) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-navy mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="tax-filing">Tax Filing</option>
                      <option value="business-tax">Business Tax</option>
                      <option value="bookkeeping">Bookkeeping</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Visit Our Office"
            subtitle="Location"
            description="We're conveniently located in Scarborough, Ontario"
            center
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gold mx-auto mb-4" />
                <p className="text-gray-600 text-lg">
                  Unit 213, 1085 Bellamy Rd North<br />
                  Scarborough, ON M1H 3C7
                </p>
                <p className="text-gray-500 mt-4">
                  (Map integration can be added here)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
