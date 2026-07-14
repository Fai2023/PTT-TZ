import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

export default function Overview() {
  const { t } = useLanguage();

  const ecosystemItems = [
    t('ecosystem1'),
    t('ecosystem2'),
    t('ecosystem3'),
    t('ecosystem4'),
    t('ecosystem5'),
  ];

  return (
    <section id="overview" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{t('overviewTitle')}</h2>
          <p className="text-base sm:text-lg text-gray-600">
            {t('overviewP1')}
          </p>
          <p className="text-base sm:text-lg text-gray-600">
            {t('overviewP2')}
          </p>
          <p className="text-base sm:text-lg text-gray-600">
            {t('overviewP3')}
          </p>
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{t('ecosystemTitle')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {ecosystemItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-2 w-2 mt-2 mr-3 bg-phoenix-500 rounded-full flex-shrink-0" />
                  <span className="text-gray-600 text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
