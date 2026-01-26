import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  href,
  delay = 0,
}) => {
  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 md:p-8 h-full border border-gray-100 hover:border-gold group"
    >
      {icon && (
        <div className="mb-4 text-gold group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}
      <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 sm:mb-3 group-hover:text-gold transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">{description}</p>
      {href && (
        <div className="flex items-center text-gold font-semibold group-hover:translate-x-2 transition-transform">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default ServiceCard;
