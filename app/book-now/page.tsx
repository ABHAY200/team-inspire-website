"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT_INFO, GOOGLE_FORM_URL, CALENDLY_URL } from "@/constants";

export default function BookNowPage() {
  // Google Form URL - Replace with your actual Google Form embed URL
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      content: CONTACT_INFO.phone,
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      content: CONTACT_INFO.email,
      subcontent: "We respond within 24 hours",
    },
    {
      icon: <MapPin size={24} />,
      title: "Address",
      content: CONTACT_INFO.address.line1,
      subcontent: CONTACT_INFO.address.line2,
    },
    {
      icon: <Clock size={24} />,
      title: "Opening Hours",
      content: CONTACT_INFO.businessHours.weekdays,
      subcontent: CONTACT_INFO.businessHours.saturday,
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
      <section className="sm:py-20 py-10 bg-white">
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
              <div className="sm:space-y-5 space-y-2 mt-4 sm:mt-8">
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
                      <h3 className="font-semibold text-navy mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-700">{info.content}</p>
                      {info.subcontent && (
                        <p className="text-sm text-gray-500 mt-1 sm:block hidden">
                          {info.subcontent}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 bg-gradient-to-br from-navy to-navy-dark rounded-xl p-6 text-white">
                <h3 className="text-2xl font-bold mb-4 text-gold">
                  Schedule a Meeting
                </h3>
                <p className="text-gray-200 mb-6">
                  Book a convenient time slot with our tax experts. Choose a date and time that works best for you.
                </p>
                <Button
                  href={CALENDLY_URL}
                  variant="primary"
                  size="md"
                  className="bg-gold hover:bg-gold-light"
                >
                  Book an Appointment
                </Button>
              </div>
            </motion.div>

            {/* Google Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
                <div className="p-4 sm:p-6" style={{ backgroundColor: 'rgb(239, 235, 247)' }}>
                  <p className="text-[#000] text-sm sm:text-base">
                    Fill out the form below and we'll get back to you shortly
                  </p>
                </div>
                <div style={{ backgroundColor: 'rgb(239, 235, 247)' }} className="w-full bg-white">
                  <iframe
                    src={GOOGLE_FORM_URL}
                    width="100%"
                    height="800"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="Book an Appointment Form"
                    className="w-full min-h-[800px]"
                    style={{ border: 'none' }}
                  >
                    Loading…
                  </iframe>
                </div>
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
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 bg-gradient-to-r from-navy to-navy-dark text-white">
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="h-6 w-6 text-gold" />
                <div className="text-center">
                  <p className="text-lg font-semibold">
                    {CONTACT_INFO.address.line1}
                  </p>
                  <p className="text-gray-200 text-sm">
                    {CONTACT_INFO.address.line2}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full h-96 md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.5847!2d-79.2847!3d43.7735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d31b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2s3601%20Victoria%20Park%20Ave%2C%20Scarborough%2C%20ON!5e0!3m2!1sen!2sca!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Team Inspire Office Location"
              />
            </div>
            <div className="p-6 bg-gray-50 text-center">
              <a
                href="https://maps.app.goo.gl/GaTQz9zKAgfpyczN7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-navy hover:text-gold transition-colors font-medium"
              >
                <MapPin className="h-5 w-5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
