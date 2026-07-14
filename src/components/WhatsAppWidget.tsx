import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function WhatsAppWidget() {
  const [isTyping, setIsTyping] = useState(false);
  const { t, language } = useLanguage();

  const handleClick = () => {
    setIsTyping(true);
    setTimeout(() => {
      const message = encodeURIComponent(t('whatsappMessage'));
      window.open(`https://wa.me/255784670504?text=${message}`, '_blank');
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <button
        onClick={handleClick}
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-3 py-2.5 sm:px-4 sm:py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        {isTyping ? (
          <div className="flex items-center gap-2">
            <span className="animate-pulse text-sm sm:text-base">{t('typing')}</span>
            <span className="flex gap-1">
              <span className="animate-bounce delay-0 h-1 w-1 bg-white rounded-full"></span>
              <span className="animate-bounce delay-150 h-1 w-1 bg-white rounded-full"></span>
              <span className="animate-bounce delay-300 h-1 w-1 bg-white rounded-full"></span>
            </span>
          </div>
        ) : (
          <>
            <MessageCircle className="h-5 w-5 flex-shrink-0" />
            <span className="hidden sm:inline">{t('chatWithUs')}</span>
          </>
        )}
      </button>
    </div>
  );
}
