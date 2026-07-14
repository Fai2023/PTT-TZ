import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-gray-600" />
      <div className="flex items-center bg-gray-100 rounded-full p-1">
        <motion.button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
            language === 'en'
              ? 'bg-phoenix-600 text-white'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          EN
        </motion.button>
        <motion.button
          onClick={() => setLanguage('sw')}
          className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
            language === 'sw'
              ? 'bg-phoenix-600 text-white'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          SW
        </motion.button>
      </div>
    </div>
  );
}
