import React from 'react';
import Header from '../components/Header';
import Products from '../components/Products';
import WhatsAppWidget from '../components/WhatsAppWidget';
import { useLanguage } from '../i18n/LanguageContext';

export default function ProductsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="overflow-x-hidden pt-20 sm:pt-24">
        <Products />
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} {t('footerText')}</p>
        </div>
      </footer>
      <WhatsAppWidget />
    </div>
  );
}
