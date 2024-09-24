import React from 'react';
import { motion } from 'framer-motion';
import TextScaleAnimation from './TextAnimation';

const highlights = [
  { label: "Affiliate University", value: "MAKAUT" },
  { label: "Institution Type", value: "Public" },
  { label: "Total Area (In Acre)", value: "1.24" },
  { label: "Construction Area (Sq. M)", value: "3310" },
  { label: "Year of Establishment", value: "2002" },
 
];

const AfflieatedSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <TextScaleAnimation text="Pailan College of Management and Technology (PCMT Highlights) " className='text-4xl font-bold mb-4 text-red-500' highlightWord="PCMT Highlights"/>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-800">{item.label}</h3>
              {item.link ? (
                <a href={item.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-600">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AfflieatedSection;
