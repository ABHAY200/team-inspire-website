import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  content: string;
  rating?: number;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  location,
  content,
  rating = 5,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-lg p-6 md:p-8 h-full border border-gray-100 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-gold text-gold" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed italic">"{content}"</p>
      <div className="border-t border-gray-200 pt-4">
        <p className="font-semibold text-navy">{name}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
