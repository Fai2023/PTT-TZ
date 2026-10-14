import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Users, Bell, Clock, Globe, Layout, Map, Navigation, History, UserPlus, MessageSquare, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import type { TranslationKey } from '../i18n/translations';

export default function DispatcherSoftware() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { t } = useLanguage();

  const features: { icon: React.ReactNode; titleKey: TranslationKey; descKey: TranslationKey }[] = [
    { icon: <Layout className="h-6 w-6" />, titleKey: 'dispFeat1Title', descKey: 'dispFeat1Desc' },
    { icon: <Map className="h-6 w-6" />, titleKey: 'dispFeat2Title', descKey: 'dispFeat2Desc' },
    { icon: <Navigation className="h-6 w-6" />, titleKey: 'dispFeat3Title', descKey: 'dispFeat3Desc' },
    { icon: <Globe className="h-6 w-6" />, titleKey: 'dispFeat4Title', descKey: 'dispFeat4Desc' },
    { icon: <History className="h-6 w-6" />, titleKey: 'dispFeat5Title', descKey: 'dispFeat5Desc' },
    { icon: <UserPlus className="h-6 w-6" />, titleKey: 'dispFeat6Title', descKey: 'dispFeat6Desc' },
  ];

  const responsibilities: { icon: React.ReactNode; titleKey: TranslationKey; descKey: TranslationKey }[] = [
    { icon: <Monitor className="h-6 w-6" />, titleKey: 'dispResp1Title', descKey: 'dispResp1Desc' },
    { icon: <Users className="h-6 w-6" />, titleKey: 'dispResp2Title', descKey: 'dispResp2Desc' },
    { icon: <UserPlus className="h-6 w-6" />, titleKey: 'dispResp3Title', descKey: 'dispResp3Desc' },
    { icon: <Bell className="h-6 w-6" />, titleKey: 'dispResp4Title', descKey: 'dispResp4Desc' },
    { icon: <Clock className="h-6 w-6" />, titleKey: 'dispResp5Title', descKey: 'dispResp5Desc' },
    { icon: <MessageSquare className="h-6 w-6" />, titleKey: 'dispResp6Title', descKey: 'dispResp6Desc' },
  ];

  const screenshotKeys: TranslationKey[] = [
    'screenshot1', 'screenshot2', 'screenshot3', 'screenshot4', 'screenshot5', 'screenshot6',
  ];

  const screenshots = [
    'https://ik.imagekit.io/8jn9lgbbcw/Screenshots/Screenshot%202025-05-28%20114406.png?updatedAt=1748423295534',
    'https://ik.imagekit.io/8jn9lgbbcw/Screenshots/Screenshot%202025-05-28%20114750.png?updatedAt=1748423295697',
    'https://ik.imagekit.io/8jn9lgbbcw/Screenshots/Screenshot%202025-05-28%20104622.png?updatedAt=1748423296119',
    'https://ik.imagekit.io/8jn9lgbbcw/Screenshots/Screenshot%202025-05-28%20104818.png?updatedAt=1748423295829',
    'https://ik.imagekit.io/8jn9lgbbcw/Screenshots/Screenshot%202025-05-28%20114902.png?updatedAt=1748423295768',
    'https://ik.imagekit.io/8jn9lgbbcw/Screenshots/Screenshot%202025-05-28%20104729.png?updatedAt=1748423296192',
  ];

  return (
    <>
      <section id="dispatcher" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{t('dispatcherTitle')}</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t('dispatcherSubtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8">{t('dispatcherResponsibilities')}</h3>
              <div className="grid gap-6">
                {responsibilities.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-phoenix-600 flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{t(item.titleKey)}</h4>
                      <p className="text-gray-600">{t(item.descKey)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8">{t('dispatcherFeatures')}</h3>
              <div className="grid gap-6">
                {features.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-phoenix-600 flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{t(item.titleKey)}</h4>
                      <p className="text-gray-600">{t(item.descKey)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-16 sm:mt-20">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8 sm:mb-12">{t('softwareInterface')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {screenshots.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <img
                      src={src}
                      alt={t(screenshotKeys[index])}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="mt-4 text-sm text-gray-600 text-center">{t(screenshotKeys[index])}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white rounded-xl p-4 max-w-4xl w-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute -top-4 -right-4 bg-white text-gray-800 rounded-full p-1 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={screenshots[selectedImage]}
                  alt={t('enlargedView')}
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
