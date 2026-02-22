'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import { GALLERY_IMAGES, GALLERY_CATEGORIES, GALLERY_HEADER } from '@/constants/gallery';
import { X, Play } from 'lucide-react';
import Image from 'next/image';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  const selectedImageData = selectedImage !== null
    ? GALLERY_IMAGES.find(img => img.id === selectedImage)
    : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-navy-dark to-navy-light text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {GALLERY_HEADER.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 font-light">
              {GALLERY_HEADER.subtitle}
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              {GALLERY_HEADER.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {GALLERY_CATEGORIES.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gold text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onClick={() => setSelectedImage(image.id)}
                className="relative group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all aspect-square"
              >
                <div className="relative w-full h-full overflow-hidden">
                  {image.type === 'video' ? (
                    <>
                      <video
                        src={image.imageUrl}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-gold transition-colors">
                          <Play className="h-8 w-8 text-navy fill-navy" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <img
                      src={image.imageUrl}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-gold rounded-full text-xs font-semibold mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-200 line-clamp-2">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-white rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-navy" />
            </button>

            <div className="relative h-[60vh] md:h-[70vh] bg-black">
              {selectedImageData.type === 'video' ? (
                <video
                  src={selectedImageData.imageUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={selectedImageData.imageUrl}
                  alt={selectedImageData.title}
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            <div className="p-6 bg-white">
              <span className="inline-block px-3 py-1 bg-gold/20 text-gold rounded-full text-sm font-semibold mb-3">
                {selectedImageData.category}
              </span>
              <h2 className="text-2xl font-bold text-navy mb-2">
                {selectedImageData.title}
              </h2>
              <p className="text-gray-600">
                {selectedImageData.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
