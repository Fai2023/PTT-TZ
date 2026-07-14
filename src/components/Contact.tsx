import React from 'react';
import { Mail, Phone, MapPin, Users } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{t('contactTitle')}</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">{t('contactSubtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-8">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-phoenix-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">{t('email')}</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">{t('needMoreInfo')}</p>
                  <a href="mailto:info@phoenix.tz" className="block text-gray-600 hover:text-phoenix-600">
                    info@phoenix.tz
                  </a>
                  <p className="text-sm text-gray-500 mt-3">{t('requestAQuote')}</p>
                  <a href="mailto:sales@phoenix.tz" className="block text-gray-600 hover:text-phoenix-600">
                    sales@phoenix.tz
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="h-6 w-6 text-phoenix-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">{t('phone')}</h3>
                <div className="space-y-2">
                  <a href="tel:+255754770777" className="block text-gray-600 hover:text-phoenix-600">
                    +(255) 754-770-777
                  </a>
                  <p className="text-sm text-gray-500 mt-2">{t('salesTeam')}</p>
                  <a href="tel:+255784670504" className="block text-gray-600 hover:text-phoenix-600">
                    +(255) 784-670-504
                  </a>
                  <a href="tel:+255742670504" className="block text-gray-600 hover:text-phoenix-600">
                    +(255) 742-670-504
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-phoenix-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">{t('location')}</h3>
                <p className="text-gray-600">
                  2 CCM Street, Masaki<br />
                  Near PesaPal<br />
                  Dar es Salaam, Tanzania
                </p>
              </div>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t('name')}</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-phoenix-500 focus:ring-phoenix-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('email')}</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-phoenix-500 focus:ring-phoenix-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t('message')}</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-phoenix-500 focus:ring-phoenix-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-phoenix-600 text-white py-2 px-4 rounded-md hover:bg-phoenix-700 focus:outline-none focus:ring-2 focus:ring-phoenix-500 focus:ring-offset-2"
            >
              {t('sendMessage')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
