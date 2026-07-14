import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const comparisonData = [
  {
    feature: 'Cost of Ownership',
    traditional: 'Extremely High',
    pushToTalk: 'Low',
    traditionalGood: false,
    pushToTalkGood: true
  },
  {
    feature: 'Central Dispatch',
    traditional: 'Limited by Infrastructure',
    pushToTalk: 'Unlimited',
    traditionalGood: false,
    pushToTalkGood: true
  },
  {
    feature: 'Future proof',
    traditional: '',
    pushToTalk: '',
    traditionalGood: false,
    pushToTalkGood: true
  },
  {
    feature: 'One-to-Many Communication',
    traditional: '',
    pushToTalk: '',
    traditionalGood: true,
    pushToTalkGood: true
  },
  {
    feature: 'Flexibility',
    traditional: 'Technology Limited',
    pushToTalk: 'High Flexibility',
    traditionalGood: false,
    pushToTalkGood: true
  },
  {
    feature: 'Scalability',
    traditional: 'Limited, slow, extremely high cost',
    pushToTalk: 'Simple, Fast, Unlimited',
    traditionalGood: false,
    pushToTalkGood: true
  },
  {
    feature: 'Coverage',
    traditional: 'Limited – Private network',
    pushToTalk: '2G/3G/4G/Wi-Fi',
    traditionalGood: false,
    pushToTalkGood: true
  },
  {
    feature: 'Devices',
    traditional: 'Limited choice and capability & Expensive',
    pushToTalk: 'Large variety for any price',
    traditionalGood: false,
    pushToTalkGood: true
  },
  {
    feature: 'Battery Usage',
    traditional: 'Very High',
    pushToTalk: 'Very Low',
    traditionalGood: false,
    pushToTalkGood: true
  },
  {
    feature: 'Encrypted',
    traditional: 'TEA 1/2/3/4 128 Bit or RC4 128 Bit',
    pushToTalk: 'AES 256 Bit',
    traditionalGood: false,
    pushToTalkGood: true
  },
  {
    feature: 'GPS',
    traditional: 'N/A',
    pushToTalk: 'Active',
    traditionalGood: false,
    pushToTalkGood: true
  },
  {
    feature: 'Multi-Channel',
    traditional: 'Single Channel only',
    pushToTalk: 'Dynamic',
    traditionalGood: false,
    pushToTalkGood: true
  },
  {
    feature: 'Applications',
    traditional: 'Very Limited',
    pushToTalk: 'Wide Range, Incl. API',
    traditionalGood: false,
    pushToTalkGood: true
  },
  {
    feature: 'Multimedia messages',
    traditional: 'Text or None',
    pushToTalk: 'Text, Picture, Video Files',
    traditionalGood: false,
    pushToTalkGood: true
  },
  {
    feature: 'Signed In User List',
    traditional: 'Limited',
    pushToTalk: '',
    traditionalGood: false,
    pushToTalkGood: true
  },
  {
    feature: 'Status Updates',
    traditional: 'None or limited',
    pushToTalk: '',
    traditionalGood: false,
    pushToTalkGood: true
  },
  {
    feature: 'WIFI Compatible',
    traditional: '',
    pushToTalk: '',
    traditionalGood: false,
    pushToTalkGood: true
  },
  {
    feature: 'Multiple Operating GSM Systems',
    traditional: '',
    pushToTalk: '',
    traditionalGood: false,
    pushToTalkGood: true
  },
  {
    feature: '95% Plus Coverage across Tanzania',
    traditional: '',
    pushToTalk: '',
    traditionalGood: false,
    pushToTalkGood: true
  },
  {
    feature: 'National / International Coverage',
    traditional: '',
    pushToTalk: '',
    traditionalGood: false,
    pushToTalkGood: true
  }
];

export default function Comparison() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('comparisonTitle')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('comparisonSubtitle')}
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="min-w-full"
          >
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-phoenix-900 to-phoenix-800 text-white">
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-lg">{t('feature')}</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center font-semibold text-sm sm:text-lg">{t('traditionalRadio')}</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center font-semibold text-sm sm:text-lg bg-phoenix-600">{t('pushToTalk')}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-900">{row.feature}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base">
                      {row.traditional ? (
                        <span className="text-gray-700">{row.traditional}</span>
                      ) : (
                        <div className="flex justify-center">
                          {row.traditionalGood ? (
                            <Check className="h-6 w-6 text-green-500" />
                          ) : (
                            <X className="h-6 w-6 text-red-500" />
                          )}
                        </div>
                      )}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center bg-phoenix-50 text-sm sm:text-base">
                      {row.pushToTalk ? (
                        <span className="text-gray-700 font-medium">{row.pushToTalk}</span>
                      ) : (
                        <div className="flex justify-center">
                          {row.pushToTalkGood ? (
                            <Check className="h-6 w-6 text-green-500" />
                          ) : (
                            <X className="h-6 w-6 text-red-500" />
                          )}
                        </div>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-phoenix-600 to-phoenix-700 text-white rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">{t('upgradeTitle')}</h3>
            <p className="text-base sm:text-xl mb-6 opacity-90">
              {t('upgradeSubtitle')}
            </p>
            <motion.button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-phoenix-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('getStarted')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
