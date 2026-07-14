import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageToggle from './LanguageToggle';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();

  const navItems = [
    { href: '/', labelKey: 'home' as const, isRoute: true },
    { href: '/products', labelKey: 'products' as const, isRoute: true },
    { href: '/documents', labelKey: 'documents' as const, isRoute: true },
    { href: '/#features', labelKey: 'features' as const, isRoute: true },
    { href: '/case-studies', labelKey: 'caseStudies' as const, isRoute: true },
  ];

  const scrollToContact = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavClick = (href: string) => {
    if (href.includes('#')) {
      const hash = href.split('#')[1];
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav>
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) =>
          item.isRoute ? (
            <motion.div
              key={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-800 hover:text-phoenix-600 transition-colors"
              >
                {t(item.labelKey)}
              </Link>
            </motion.div>
          ) : null
        )}
        <motion.button
          onClick={scrollToContact}
          className="text-gray-800 hover:text-phoenix-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('contactSales')}
        </motion.button>
      </div>

      <div className="md:hidden flex items-center gap-3">
        <LanguageToggle />
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg mx-4"
          >
            <div className="p-4 space-y-3">
              {navItems.map((item) =>
                item.isRoute ? (
                  <motion.div
                    key={item.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => { handleNavClick(item.href); setIsOpen(false); }}
                      className="block text-gray-800 hover:text-phoenix-600 transition-colors py-2"
                    >
                      {t(item.labelKey)}
                    </Link>
                  </motion.div>
                ) : null
              )}
              <motion.button
                onClick={() => {
                  scrollToContact();
                  setIsOpen(false);
                }}
                className="w-full text-left text-gray-800 hover:text-phoenix-600 transition-colors py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('contactSales')}
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}