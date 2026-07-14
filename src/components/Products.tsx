import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductDetail from './ProductDetail';
import { useLanguage } from '../i18n/LanguageContext';

const products = [
  {
    name: 'Etera T780',
    image: 'https://ik.imagekit.io/8jn9lgbbcw/web/Screenshot%202024-11-25%20142832.png?updatedAt=1740474557787',
    features: [
      'Android 10.0 GO OS',
      'Global 4G LTE Support',
      '4600mAh Long-Life Battery',
      'Multi-Language Support',
      'NFC Enabled',
      'IP68 Waterproof Rating',
      'Advanced Positioning System',
      'Dual SIM Support'
    ],
    description: 'The eTera T780 is a robust, mission-ready smart Push-to-Talk (PTT) device built for professionals who require instant communication in high-risk and high-mobility environments. Engineered with an IP68 waterproof rating, dual SIM support, and seamless 4G/Wi-Fi connectivity.',
    specifications: {
      'Dimensions': '131.0 × 70.4 × 26.0 mm',
      'Weight': '247g with battery',
      'Display': 'Rugged touchscreen',
      'Battery': '4600mAh Li-Po',
      'Operating System': 'Android 10.0 GO',
      'Waterproof Rating': 'IP68',
      'Network': '4G LTE (FDD & TDD)',
      'Connectivity': 'Bluetooth 5.0, Wi-Fi 2.4G/5G',
      'Positioning': 'GPS, GLONASS, Beidou, AGPS',
      'Sensors': '3D Gravity & Proximity',
      'Ports': 'Extended M6 Connector'
    },
    industries: [
      'Law Enforcement & Police',
      'Emergency Response Teams',
      'Security Companies',
      'Industrial Operations',
      'Transportation & Logistics',
      'Critical Infrastructure Protection'
    ],
    accessories: [
      'Bluetooth Earpieces',
      'Covert Earphones',
      'Remote Speaker Microphones (BT & Wired)',
      'External Cameras',
      'Night Vision Devices',
      'Charging Dock & Micro USB Cable',
      'Power Adapter',
      'Rugged Belt Clip',
      'Replaceable 4600mAh Battery'
    ]
  },
  {
    name: 'Telo TE320',
    image: 'https://ik.imagekit.io/8jn9lgbbcw/web/Screenshot%202024-11-25%20152815.png?updatedAt=1740474557847',
    features: [
      'Dual SIM Support for Network Redundancy',
      '3W Ultra-Loud Speaker for Clear Audio',
      '4000mAh Long-Life Battery',
      'Built-in NFC for Access Control',
      'NSA-Proof Encryption',
      'Real-Time Location Tracking',
      'Lone Worker Protection',
      'Private & Group Calls'
    ],
    description: 'The Telox TE320 is a next-generation entry-level smart POC device that merges traditional radio communication with modern technology. Perfect for industries demanding instant, reliable, and secure team coordination.',
    specifications: {
      'Battery': '4000mAh Li-ion',
      'Battery Life': 'Up to 24 hours',
      'Display': '2" Color Screen',
      'Speaker': '3W Ultra-Loud',
      'Weight': '280g with battery',
      'Waterproof Rating': 'IP67',
      'Operating Temperature': '-20°C to +60°C',
      'Network': '4G/5G/Wi-Fi',
      'GPS': 'High-precision GPS/GLONASS',
      'Additional Features': 'NFC, Bluetooth 4.0',
      'Encryption': 'AES-256',
      'Warranty': '2 Years'
    },
    industries: [
      'Logistics & Transportation',
      'Security Firms',
      'Healthcare & Hospitals',
      'Police and First Responders',
      'Hotels & Retail',
      'Industrial Sites'
    ],
    accessories: [
      'TE320-C1 Single Dock Charger',
      'MUC320 16-Slot Multi-Charger',
      'T2 Body Cam + RSM',
      'RSM-35 Remote Speaker Microphone',
      'Bluetooth Earpieces',
      'Air-Tube Earpieces',
      'Noise-Cancellation Headsets'
    ]
  },
  {
    name: 'Telo TE590',
    image: 'https://ik.imagekit.io/8jn9lgbbcw/web/Screenshot%202024-11-25%20153236.png?updatedAt=1740474557838',
    features: [
      'Dual Camera System (2MP Front, 8MP Rear)',
      'Advanced GPS Tracking',
      'Emergency Alarm System',
      'IP67 Waterproof Rating',
      'Group & Individual Calls',
      'Extended Battery Life',
      'High-Resolution Display',
      'Multi-Network Support'
    ],
    description: 'Premium PTT device with enhanced camera capabilities and advanced features for professional communication. Features dual cameras for documentation and evidence collection in the field.',
    specifications: {
      'Battery Life': 'Up to 32 hours',
      'Display': '2.8" HD Color LCD',
      'Weight': '320g',
      'Waterproof Rating': 'IP67',
      'Operating Temperature': '-30°C to +60°C',
      'Channels': '512',
      'GPS': 'Multi-constellation positioning',
      'Cameras': 'Front 2.0MP, Rear 8.0MP',
      'Network': '4G LTE/Wi-Fi'
    },
    industries: [
      'Security & Surveillance',
      'Law Enforcement',
      'Emergency Services',
      'Industrial Inspection',
      'Field Documentation',
      'Asset Management'
    ],
    accessories: [
      'External Camera Modules',
      'Night Vision Attachments',
      'Charging Stations',
      'Protective Cases',
      'Remote Microphones',
      'Bluetooth Accessories'
    ]
  },
  {
    name: 'M6L Vehicle Unit',
    image: 'https://ik.imagekit.io/8jn9lgbbcw/web/Screenshot%202024-11-25%20143300.png?updatedAt=1740474557612',
    features: ['Vehicle Mounting', 'Extended Coverage', 'Fleet Management', 'Voice Recording'],
    description: 'Powerful vehicle-mounted communication system for fleet operations.',
    specifications: {
      'Power Output': '25W',
      'Display': '4.3" Touch Screen',
      'Operating Voltage': '12V/24V DC',
      'Waterproof Rating': 'IP54',
      'Operating Temperature': '-20°C to +70°C',
      'Channels': '2048',
      'GPS': 'Built-in high-sensitivity GPS'
    }
  }
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const { t } = useLanguage();

  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        onBack={() => setSelectedProduct(null)}
      />
    );
  }

  return (
    <section id="products" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('productsTitle')}</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t('productsSubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden bg-white p-4">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{product.name}</h3>
                <ul className="space-y-2 mb-6">
                  {product.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-phoenix-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-phoenix-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('learnMore')}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
