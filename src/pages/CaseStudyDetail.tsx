import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import WhatsAppWidget from '../components/WhatsAppWidget';
import { useLanguage } from '../i18n/LanguageContext';

const caseData: Record<string, { src: string; alt: string; title: string }> = {
  tanesco: { src: 'https://ik.imagekit.io/8jn9lgbbcw/tanesco.png', alt: 'TANESCO case study', title: 'TANESCO' },
  taa: { src: 'https://ik.imagekit.io/8jn9lgbbcw/TAA.jpg', alt: 'TAA case study', title: 'TAA' },
  jnia: { src: 'https://ik.imagekit.io/8jn9lgbbcw/jnia.jpg', alt: 'JNIA case study', title: 'JNIA' },
};

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const data = slug ? caseData[slug] : undefined;

  if (!data) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Case study not found</h1>
          <Link to="/case-studies" className="text-phoenix-600 hover:text-phoenix-700">
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-phoenix-600 transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Case Studies
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">{data.title}</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl overflow-hidden shadow-lg mb-8"
            >
              <img src={data.src} alt={data.alt} className="w-full" />
            </motion.div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-gray-500 italic">Case study content will be added here.</p>
            </div>
          </div>
        </section>
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
