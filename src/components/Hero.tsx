import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[calc(100vh-6rem)] md:min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute bottom-0 w-full h-24 bg-gray-50" style={{
        borderTopLeftRadius: '50% 100%',
        borderTopRightRadius: '50% 100%'
      }}></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 md:pt-48 pb-24 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
          >
            {t('heroTitle')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 mb-4 px-4"
          >
            {t('heroSubtitle')}
          </motion.p>
        </motion.div>

        {/* Images positioned near center above buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative flex justify-center items-center gap-8 sm:gap-12 mb-8 max-w-6xl mx-auto"
        >
          <img
            src="https://ik.imagekit.io/8jn9lgbbcw/web/Monitor+room+PUSHCOM.webp"
            alt="Monitor room PUSHCOM"
            className="w-60 sm:w-72 md:w-80 rounded-lg"
          />
          <img
            src="https://ik.imagekit.io/8jn9lgbbcw/web/PUSHCOM+talk+view.webp"
            alt="PUSHCOM talk view"
            className="w-36 sm:w-44 md:w-52 rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center px-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="group bg-phoenix-500 text-white px-8 py-3 rounded-full hover:bg-phoenix-600 transition-all flex items-center justify-center gap-2"
          >
            {t('contactSales')}
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/products')}
            className="px-8 py-3 rounded-full border-2 border-gray-500 text-white hover:border-phoenix-500 transition-colors"
          >
            {t('viewProducts')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
