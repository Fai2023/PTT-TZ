import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const partners = [
  {
    name: 'Partner 1',
    logo: 'https://ik.imagekit.io/8jn9lgbbcw/web/Screenshot%202024-09-20%20114341.png?updatedAt=1740474552309'
  },
  {
    name: 'Partner 2',
    logo: 'https://ik.imagekit.io/8jn9lgbbcw/web/Screenshot%202024-09-20%20114318.png?updatedAt=1740474552139'
  },
  {
    name: 'Partner 3',
    logo: 'https://ik.imagekit.io/8jn9lgbbcw/web/Screenshot%202024-09-20%20114159.png?updatedAt=1740474551950'
  },
  {
    name: 'Partner 4',
    logo: 'https://ik.imagekit.io/8jn9lgbbcw/web/Screenshot%202024-09-20%20114216.png?updatedAt=1740474551937'
  },
  {
    name: 'Partner 5',
    logo: 'https://ik.imagekit.io/8jn9lgbbcw/web/Screenshot%202024-09-20%20114240.png?updatedAt=1740474551683'
  },
  {
    name: 'Partner 6',
    logo: 'https://ik.imagekit.io/8jn9lgbbcw/web/Screenshot%202024-09-20%20114427.png?updatedAt=1740474552400'
  }
];

export default function Partners() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{t('partnersTitle')}</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">{t('partnersSubtitle')}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-8 items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
