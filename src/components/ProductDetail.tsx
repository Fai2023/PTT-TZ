import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ProductDetailProps {
  product: {
    name: string;
    image: string;
    description: string;
    features: string[];
    specifications: {
      [key: string]: string;
    };
    industries?: string[];
    accessories?: string[];
  };
  onBack: () => void;
}

export default function ProductDetail({ product, onBack }: ProductDetailProps) {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-phoenix-600 mb-8"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          {t('backToProducts')}
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-contain"
              />
            </div>

            {product.industries && (
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">{t('industriesServed')}</h2>
                <div className="grid grid-cols-2 gap-4">
                  {product.industries.map((industry) => (
                    <div key={industry} className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-phoenix-500 mr-2" />
                      <span>{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600">{product.description}</p>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">{t('keyFeatures')}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-phoenix-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">{t('technicalSpecs')}</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-b border-gray-200 pb-4">
                    <p className="text-sm text-gray-500 mb-1">{key}</p>
                    <p className="text-gray-900 font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {product.accessories && (
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">{t('availableAccessories')}</h2>
                <ul className="space-y-3">
                  {product.accessories.map((accessory) => (
                    <li key={accessory} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-phoenix-500 rounded-full mr-3"></span>
                      {accessory}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <motion.button
              onClick={scrollToContact}
              className="w-full bg-phoenix-600 text-white py-4 px-6 rounded-xl hover:bg-phoenix-700 transition-colors text-lg font-semibold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('contactSales')}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
