import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductDetail from './ProductDetail';
import { useLanguage } from '../i18n/LanguageContext';
import type { TranslationKey } from '../i18n/translations';

interface ProductData {
  name: string;
  image: string;
  features: TranslationKey[];
  descriptionKey: TranslationKey;
  specifications: Record<TranslationKey, string>;
  industries: TranslationKey[];
  accessories: TranslationKey[];
}

const products: ProductData[] = [
  {
    name: 'Etera T780',
    image: 'https://ik.imagekit.io/8jn9lgbbcw/web/Screenshot%202024-11-25%20142832.png?updatedAt=1740474557787',
    features: ['featAndroid', 'feat4gLTE', 'featBattery4600', 'featMultiLang', 'featNFC', 'featIP68', 'featPositioning', 'featDualSIM'],
    descriptionKey: 'productT780Desc',
    specifications: {
      specDimensions: '131.0 × 70.4 × 26.0 mm',
      specWeight: '247g with battery',
      specDisplay: 'Rugged touchscreen',
      specBattery: '4600mAh Li-Po',
      specOS: 'Android 10.0 GO',
      specWaterproof: 'IP68',
      specNetwork: '4G LTE (FDD & TDD)',
      specConnectivity: 'Bluetooth 5.0, Wi-Fi 2.4G/5G',
      specPositioning: 'GPS, GLONASS, Beidou, AGPS',
      specSensors: '3D Gravity & Proximity',
      specPorts: 'Extended M6 Connector',
    },
    industries: ['indLawEnforcement', 'indEmergency', 'indSecurity', 'indIndustrial', 'indTransport', 'indCriticalInfra'],
    accessories: ['accBTEarpieces', 'accCovertEarphones', 'accRSM', 'accExtCameras', 'accNightVision', 'accChargingDock', 'accPowerAdapter', 'accBeltClip', 'accReplaceBattery'],
  },
  {
    name: 'Telo TE320',
    image: 'https://ik.imagekit.io/8jn9lgbbcw/web/Screenshot%202024-11-25%20152815.png?updatedAt=1740474557847',
    features: ['featDualSIMRedundancy', 'feat3WSpeaker', 'featBattery4000', 'featNFCAccess', 'featNSAProof', 'featRTTracking', 'featLoneWorker', 'featPrivateGroupCalls'],
    descriptionKey: 'productTE320Desc',
    specifications: {
      specBattery: '4000mAh Li-ion',
      specBatteryLife: 'Up to 24 hours',
      specDisplay: '2" Color Screen',
      specSpeaker: '3W Ultra-Loud',
      specWeight: '280g with battery',
      specWaterproof: 'IP67',
      specOpTemp: '-20°C to +60°C',
      specNetwork: '4G/5G/Wi-Fi',
      specGPS: 'High-precision GPS/GLONASS',
      specAddFeatures: 'NFC, Bluetooth 4.0',
      specEncryption: 'AES-256',
      specWarranty: '2 Years',
    },
    industries: ['indLogistics', 'indSecurityFirms', 'indHealthcare', 'indFirstResponders', 'indHotels', 'indIndustrialSites'],
    accessories: ['accSingleDock', 'accMultiCharger', 'accBodyCam', 'accRSM35', 'accBTEarpieces', 'accAirTube', 'accNoiseCancel'],
  },
  {
    name: 'Telo TE590',
    image: 'https://ik.imagekit.io/8jn9lgbbcw/web/Screenshot%202024-11-25%20153236.png?updatedAt=1740474557838',
    features: ['featDualCamera', 'featAdvGPS', 'featEmergencyAlarm', 'featIP67', 'featGroupIndivCalls', 'featExtBattery', 'featHighResDisplay', 'featMultiNetwork'],
    descriptionKey: 'productTE590Desc',
    specifications: {
      specBatteryLife: 'Up to 32 hours',
      specDisplay: '2.8" HD Color LCD',
      specWeight: '320g',
      specWaterproof: 'IP67',
      specOpTemp: '-30°C to +60°C',
      specChannels: '512',
      specGPS: 'Multi-constellation positioning',
      specCameras: 'Front 2.0MP, Rear 8.0MP',
      specNetwork: '4G LTE/Wi-Fi',
    },
    industries: ['indSurveillance', 'indLawEnforcement', 'indEmergency', 'indInspection', 'indFieldDoc', 'indAssetMgmt'],
    accessories: ['accCamModules', 'accNightVisionAttach', 'accChargingStations', 'accProtectiveCases', 'accRemoteMics', 'accBTAccessories'],
  },
  {
    name: 'M6L Vehicle Unit',
    image: 'https://ik.imagekit.io/8jn9lgbbcw/web/Screenshot%202024-11-25%20143300.png?updatedAt=1740474557612',
    features: ['featVehicleMount', 'featExtCoverage', 'featFleetMgmt', 'featVoiceRecord'],
    descriptionKey: 'productM6LDesc',
    specifications: {
      specPowerOutput: '25W',
      specDisplay: '4.3" Touch Screen',
      specOpVoltage: '12V/24V DC',
      specWaterproof: 'IP54',
      specOpTemp: '-20°C to +70°C',
      specChannels: '2048',
      specGPS: 'Built-in high-sensitivity GPS',
    },
    industries: [],
    accessories: [],
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null);
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
                  {product.features.slice(0, 4).map((featureKey) => (
                    <li key={featureKey} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-phoenix-500 rounded-full mr-2"></span>
                      {t(featureKey)}
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
