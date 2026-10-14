import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import type { TranslationKey } from '../i18n/translations';

interface ComparisonRow {
  featureKey: TranslationKey;
  traditionalKey?: TranslationKey;
  pushToTalkKey?: TranslationKey;
  traditionalGood: boolean;
  pushToTalkGood: boolean;
}

const comparisonRows: ComparisonRow[] = [
  { featureKey: 'compCostFeature', traditionalKey: 'compCostTrad', pushToTalkKey: 'compCostPTT', traditionalGood: false, pushToTalkGood: true },
  { featureKey: 'compDispatchFeature', traditionalKey: 'compDispatchTrad', pushToTalkKey: 'compDispatchPTT', traditionalGood: false, pushToTalkGood: true },
  { featureKey: 'compFutureProofFeature', traditionalGood: false, pushToTalkGood: true },
  { featureKey: 'compOneToManyFeature', traditionalGood: true, pushToTalkGood: true },
  { featureKey: 'compFlexibilityFeature', traditionalKey: 'compFlexTrad', pushToTalkKey: 'compFlexPTT', traditionalGood: false, pushToTalkGood: true },
  { featureKey: 'compScalabilityFeature', traditionalKey: 'compScalabilityTrad', pushToTalkKey: 'compScalabilityPTT', traditionalGood: false, pushToTalkGood: true },
  { featureKey: 'compCoverageFeature', traditionalKey: 'compCoverageTrad', pushToTalkKey: 'compCoveragePTT', traditionalGood: false, pushToTalkGood: true },
  { featureKey: 'compDevicesFeature', traditionalKey: 'compDevicesTrad', pushToTalkKey: 'compDevicesPTT', traditionalGood: false, pushToTalkGood: true },
  { featureKey: 'compBatteryFeature', traditionalKey: 'compBatteryTrad', pushToTalkKey: 'compBatteryPTT', traditionalGood: false, pushToTalkGood: true },
  { featureKey: 'compEncryptedFeature', traditionalKey: 'compEncryptedTrad', pushToTalkKey: 'compEncryptedPTT', traditionalGood: false, pushToTalkGood: true },
  { featureKey: 'compGPSFeature', traditionalKey: 'compGPSTrad', pushToTalkKey: 'compGPSPTT', traditionalGood: false, pushToTalkGood: true },
  { featureKey: 'compMultiChannelFeature', traditionalKey: 'compMultiChannelTrad', pushToTalkKey: 'compMultiChannelPTT', traditionalGood: false, pushToTalkGood: true },
  { featureKey: 'compAppsFeature', traditionalKey: 'compAppsTrad', pushToTalkKey: 'compAppsPTT', traditionalGood: false, pushToTalkGood: true },
  { featureKey: 'compMultimediaFeature', traditionalKey: 'compMultimediaTrad', pushToTalkKey: 'compMultimediaPTT', traditionalGood: false, pushToTalkGood: true },
  { featureKey: 'compUserListFeature', traditionalKey: 'compUserListTrad', traditionalGood: false, pushToTalkGood: true },
  { featureKey: 'compStatusFeature', traditionalKey: 'compStatusTrad', traditionalGood: false, pushToTalkGood: true },
  { featureKey: 'compWifiFeature', traditionalGood: false, pushToTalkGood: true },
  { featureKey: 'compGSMFeature', traditionalGood: false, pushToTalkGood: true },
  { featureKey: 'compTzCoverageFeature', traditionalGood: false, pushToTalkGood: true },
  { featureKey: 'compNatCoverageFeature', traditionalGood: false, pushToTalkGood: true },
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
                {comparisonRows.map((row, index) => {
                  const traditionalText = row.traditionalKey ? t(row.traditionalKey) : '';
                  const pushToTalkText = row.pushToTalkKey ? t(row.pushToTalkKey) : '';
                  return (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      }`}
                    >
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-900">{t(row.featureKey)}</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base">
                        {traditionalText ? (
                          <span className="text-gray-700">{traditionalText}</span>
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
                        {pushToTalkText ? (
                          <span className="text-gray-700 font-medium">{pushToTalkText}</span>
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
                  );
                })}
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
