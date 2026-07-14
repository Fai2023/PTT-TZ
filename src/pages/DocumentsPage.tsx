import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Filter, FileCheck2, FolderOpen } from 'lucide-react';
import Header from '../components/Header';
import WhatsAppWidget from '../components/WhatsAppWidget';
import LeadCaptureModal from '../components/LeadCaptureModal';
import SEOHead from '../components/SEOHead';
import { documents, CATEGORIES, type DocumentItem, type Category } from '../data/documents';
import { getStoredLead, addDownloadLog, type LeadInfo } from '../lib/downloadLog';
import { downloadDocument } from '../lib/documentGenerator';
import { useLanguage } from '../i18n/LanguageContext';

type FilterCategory = Category | 'All';

export default function DocumentsPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');
  const [selectedDoc, setSelectedDoc] = useState<DocumentItem | null>(null);

  const filteredDocs = useMemo(() => {
    if (activeCategory === 'All') return documents;
    return documents.filter((doc) => doc.category === activeCategory);
  }, [activeCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: documents.length };
    for (const cat of CATEGORIES) {
      counts[cat] = documents.filter((doc) => doc.category === cat).length;
    }
    return counts;
  }, []);

  const handleDownload = (doc: DocumentItem) => {
    const stored = getStoredLead();
    if (stored) {
      addDownloadLog(doc.id, doc.title, stored as LeadInfo);
      downloadDocument(doc);
    } else {
      setSelectedDoc(doc);
    }
  };

  const categoryColors: Record<string, string> = {
    Brochures: 'bg-blue-50 text-blue-700 border-blue-200',
    'Data Sheets': 'bg-green-50 text-green-700 border-green-200',
    Other: 'bg-amber-50 text-amber-700 border-amber-200',
  };

  const filterTabs: FilterCategory[] = ['All', ...CATEGORIES];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Document Repository | Phoenix Tanzania"
        description="Browse and download brochures, data sheets, and technical documents for Phoenix Tanzania's Push-to-Talk communication solutions."
        url="https://phoenix.tz/documents"
      />
      <Header />
      <WhatsAppWidget />

      <main className="overflow-x-hidden pt-20 sm:pt-24">
        {/* Hero section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-phoenix-900 text-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <FolderOpen className="h-8 w-8 text-phoenix-400" />
                <span className="text-phoenix-400 font-medium text-sm uppercase tracking-wider">
                  Resource Center
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Document Repository
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Browse and download brochures, data sheets, and technical documentation for our
                full range of Push-to-Talk communication products and solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter + Document grid */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category filter */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
              <div className="flex items-center gap-2 text-gray-500 mr-2">
                <Filter className="h-4 w-4" />
                <span className="text-sm font-medium hidden sm:inline">Filter:</span>
              </div>
              {filterTabs.map((tab) => (
                <motion.button
                  key={tab}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveCategory(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === tab
                      ? 'bg-phoenix-600 text-white shadow-md shadow-phoenix-600/20'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {tab}
                  <span
                    className={`ml-2 text-xs ${
                      activeCategory === tab ? 'text-phoenix-100' : 'text-gray-400'
                    }`}
                  >
                    {categoryCounts[tab] || 0}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Document grid */}
            <motion.div
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredDocs.map((doc) => (
                  <motion.div
                    key={doc.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
                  >
                    {/* Document icon header */}
                    <div className="relative h-32 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                      <FileText className="h-12 w-12 text-phoenix-300 relative z-10" />
                      <div className="absolute top-3 right-3">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-medium border ${categoryColors[doc.category]}`}
                        >
                          {doc.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <span className="px-2 py-0.5 rounded bg-white/80 text-xs font-medium text-gray-600">
                          {doc.fileType}
                        </span>
                      </div>
                    </div>

                    {/* Document info */}
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-base font-semibold text-gray-900 mb-2 leading-snug">
                        {doc.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">
                        {doc.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">{doc.fileSize}</span>
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => handleDownload(doc)}
                          className="flex items-center gap-2 px-4 py-2 bg-phoenix-600 hover:bg-phoenix-700 text-white text-sm font-medium rounded-lg transition-colors"
                        >
                          <Download className="h-4 w-4" />
                          Download
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty state */}
            {filteredDocs.length === 0 && (
              <div className="text-center py-20">
                <FileCheck2 className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-400">No documents in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>
            © {new Date().getFullYear()} {t('footerText')}
          </p>
        </div>
      </footer>

      <LeadCaptureModal document={selectedDoc} onClose={() => setSelectedDoc(null)} />
    </div>
  );
}
