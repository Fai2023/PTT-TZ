import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://ik.imagekit.io/8jn9lgbbcw/IMG_7562.jpg?updatedAt=1747656854362',
    alt: 'Push2Talk in Action 1'
  },
  {
    src: 'https://ik.imagekit.io/8jn9lgbbcw/walkie%20talkie%203.jpeg?updatedAt=1747656913315',
    alt: 'Push2Talk in Action 2'
  }
];

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-xl text-gray-600">See our solutions in action</p>
        </motion.div>
        
        <div className="gallery-grid">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}