import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, User, Phone, Mail, Loader2, CheckCircle2 } from 'lucide-react';
import type { DocumentItem, LeadInfo } from '../data/documents';
import { downloadDocument } from '../lib/documentGenerator';
import { addDownloadLog, storeLead, getStoredLead, validateEmail, validatePhone } from '../lib/downloadLog';

interface LeadCaptureModalProps {
  document: DocumentItem | null;
  onClose: () => void;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
}

export default function LeadCaptureModal({ document: doc, onClose }: LeadCaptureModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (doc) {
      const stored = getStoredLead();
      if (stored) {
        setName(stored.name);
        setPhone(stored.phone);
        setEmail(stored.email);
      }
      setErrors({});
      setSuccess(false);
    }
  }, [doc]);

  if (!doc) return null;

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!name.trim()) {
      newErrors.name = 'Please enter your name';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    if (!phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!validatePhone(phone)) {
      newErrors.phone = 'Enter a valid phone number (7-15 digits)';
    }
    if (!email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    const lead: LeadInfo = { name: name.trim(), phone: phone.trim(), email: email.trim() };

    await new Promise((r) => setTimeout(r, 600));

    addDownloadLog(doc.id, doc.title, lead);
    storeLead(lead);
    downloadDocument(doc);

    setSubmitting(false);
    setSuccess(true);

    setTimeout(() => {
      onClose();
    }, 1800);
  };

  return (
    <AnimatePresence>
      {doc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {success ? (
              <div className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 15, stiffness: 200 }}
                  className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4"
                >
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Download Started!</h3>
                <p className="text-gray-600 text-sm">
                  Your download should begin shortly. We've also saved your details for this session
                  so you won't need to fill this form again.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-phoenix-50 flex items-center justify-center">
                      <Download className="h-5 w-5 text-phoenix-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Download Document</h3>
                      <p className="text-xs text-gray-500 truncate max-w-[200px]">{doc.title}</p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <p className="text-sm text-gray-500">
                    Please provide your contact details to download this document. Our sales team may
                    reach out to assist you.
                  </p>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${
                          errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-phoenix-500 focus:border-transparent transition-all text-gray-900`}
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${
                          errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-phoenix-500 focus:border-transparent transition-all text-gray-900`}
                        placeholder="+255 754 770 777"
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${
                          errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-phoenix-500 focus:border-transparent transition-all text-gray-900`}
                        placeholder="john@company.com"
                      />
                    </div>
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full flex items-center justify-center gap-2 bg-phoenix-600 hover:bg-phoenix-700 disabled:bg-phoenix-400 text-white font-medium py-2.5 rounded-lg transition-colors"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Preparing download...
                      </>
                    ) : (
                      <>
                        <Download className="h-4 w-4" />
                        Download Now
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-gray-400 text-center">
                    Your information is stored securely and used only for sales follow-up.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
