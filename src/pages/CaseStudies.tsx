import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import { useLanguage } from '../i18n/LanguageContext';

const caseImages = [
  {
    src: 'https://ik.imagekit.io/8jn9lgbbcw/tanesco.png',
    alt: 'TANESCO case study',
    slug: 'tanesco',
    title: 'TANESCO',
  },
  {
    src: 'https://ik.imagekit.io/8jn9lgbbcw/TAA.jpg',
    alt: 'TAA case study',
    slug: 'taa',
    title: 'TAA',
  },
  {
    src: 'https://ik.imagekit.io/8jn9lgbbcw/jnia.jpg',
    alt: 'JNIA case study',
    slug: 'jnia',
    title: 'JNIA',
  },
];

export default function CaseStudies() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        <section className="py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-10 sm:mb-12"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                {t('caseStudiesTitle')}
              </h1>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {caseImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex flex-col"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{image.title}</h3>
                    <Link
                      to={`/case-studies/${image.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-phoenix-600 hover:text-phoenix-700 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} {t('footerText')}</p>
        </div>
      </footer>
    </div>
  );
}
