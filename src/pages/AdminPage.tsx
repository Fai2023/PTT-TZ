import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lock,
  Download,
  Trash2,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Search,
  FileSpreadsheet,
  ShieldCheck,
  LogOut,
  Phone,
  Mail,
  User,
  FileText,
  Calendar,
} from 'lucide-react';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';
import {
  getDownloadLogs,
  clearDownloadLogs,
  exportLogsToCSV,
  isAdminAuthed,
  setAdminAuthed,
  ADMIN_PASSWORD,
} from '../lib/downloadLog';
import type { DownloadLog } from '../data/documents';
import { useLanguage } from '../i18n/LanguageContext';

type SortField = 'name' | 'phone' | 'email' | 'documentTitle' | 'timestamp';
type SortDir = 'asc' | 'desc';

export default function AdminPage() {
  const { t } = useLanguage();
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [logs, setLogs] = useState<DownloadLog[]>([]);
  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState<SortField>('timestamp');
  const [sortDir, setSortDir] = useState<SortDir>('desc');

  useEffect(() => {
    setAuthed(isAdminAuthed());
    if (isAdminAuthed()) {
      setLogs(getDownloadLogs());
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAdminAuthed(true);
      setAuthed(true);
      setLogs(getDownloadLogs());
      setAuthError('');
      setPassword('');
    } else {
      setAuthError('Incorrect password. Please try again.');
    }
  };

  const handleLogout = () => {
    setAdminAuthed(false);
    setAuthed(false);
    setLogs([]);
  };

  const refreshLogs = () => setLogs(getDownloadLogs());

  const handleClearLogs = () => {
    if (window.confirm('Are you sure you want to clear all download logs? This cannot be undone.')) {
      clearDownloadLogs();
      refreshLogs();
    }
  };

  const handleExportCSV = () => {
    const csv = exportLogsToCSV(sortedFiltered);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `phoenix-download-logs-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDir((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDir('desc');
    }
  };

  const sortedFiltered = useMemo(() => {
    let result = [...logs];
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (log) =>
          log.name.toLowerCase().includes(q) ||
          log.phone.toLowerCase().includes(q) ||
          log.email.toLowerCase().includes(q) ||
          log.documentTitle.toLowerCase().includes(q)
      );
    }
    result.sort((a, b) => {
      const valA = String(a[sortField]).toLowerCase();
      const valB = String(b[sortField]).toLowerCase();
      if (sortDir === 'asc') return valA.localeCompare(valB);
      return valB.localeCompare(valA);
    });
    return result;
  }, [logs, search, sortField, sortDir]);

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ArrowUpDown className="h-3.5 w-3.5 text-gray-400" />;
    return sortDir === 'asc' ? (
      <ArrowUp className="h-3.5 w-3.5 text-phoenix-600" />
    ) : (
      <ArrowDown className="h-3.5 w-3.5 text-phoenix-600" />
    );
  };

  // ─── Login screen ───────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SEOHead
          title="Admin Login | Phoenix Tanzania"
          description="Protected admin area."
          url="https://phoenix.tz/admin"
        />
        <Header />
        <main className="pt-20 sm:pt-24 flex items-center justify-center min-h-[calc(100vh-6rem)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-sm mx-4"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 15 }}
                  className="mx-auto w-14 h-14 rounded-xl bg-phoenix-50 flex items-center justify-center mb-4"
                >
                  <Lock className="h-7 w-7 text-phoenix-600" />
                </motion.div>
                <h1 className="text-xl font-bold text-gray-900">Admin Access</h1>
                <p className="text-sm text-gray-500 mt-1">
                  Enter your password to view download logs
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      authError ? 'border-red-400 bg-red-50' : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-phoenix-500 focus:border-transparent transition-all text-gray-900`}
                    placeholder="Admin password"
                    autoFocus
                  />
                  {authError && <p className="text-xs text-red-500 mt-1.5">{authError}</p>}
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-phoenix-600 hover:bg-phoenix-700 text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="h-4 w-4" />
                  Sign In
                </motion.button>
              </form>
            </div>
          </motion.div>
        </main>
      </div>
    );
  }

  // ─── Admin dashboard ────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Admin Dashboard | Phoenix Tanzania" description="Protected admin area." />
      <Header />
      <WhatsAppWidget />

      <main className="overflow-x-hidden pt-20 sm:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Download Logs</h1>
              <p className="text-sm text-gray-500 mt-1">
                {sortedFiltered.length} {sortedFiltered.length === 1 ? 'entry' : 'entries'}
                {search && ` matching "${search}"`}
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleExportCSV}
                disabled={sortedFiltered.length === 0}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <FileSpreadsheet className="h-4 w-4" />
                Export CSV
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleClearLogs}
                disabled={logs.length === 0}
                className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-red-50 text-red-600 border border-red-200 disabled:opacity-40 text-sm font-medium rounded-lg transition-colors"
              >
                <Trash2 className="h-4 w-4" />
                Clear All
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-100 text-gray-600 border border-gray-200 text-sm font-medium rounded-lg transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </motion.button>
            </div>
          </div>

          {/* Search bar */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, phone, email, or document..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-phoenix-500 focus:border-transparent transition-all text-gray-900 text-sm"
              />
            </div>
          </div>

          {/* Table — desktop */}
          <div className="hidden md:block bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    {(
                      [
                        { field: 'name' as SortField, label: 'Name', icon: User },
                        { field: 'phone' as SortField, label: 'Phone', icon: Phone },
                        { field: 'email' as SortField, label: 'Email', icon: Mail },
                        { field: 'documentTitle' as SortField, label: 'Document', icon: FileText },
                        { field: 'timestamp' as SortField, label: 'Date/Time', icon: Calendar },
                      ]
                    ).map(({ field, label, icon: Icon }) => (
                      <th
                        key={field}
                        className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer select-none hover:bg-gray-100 transition-colors"
                        onClick={() => handleSort(field)}
                      >
                        <div className="flex items-center gap-1.5">
                          <Icon className="h-3.5 w-3.5 text-gray-400" />
                          {label}
                          <SortIcon field={field} />
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {sortedFiltered.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="text-center py-16 text-gray-400">
                        <Download className="h-10 w-10 text-gray-300 mx-auto mb-3" />
                        No download logs yet. Logs will appear here when visitors download documents.
                      </td>
                    </tr>
                  ) : (
                    sortedFiltered.map((log, idx) => (
                      <motion.tr
                        key={log.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: idx * 0.02 }}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{log.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{log.phone}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{log.email}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{log.documentTitle}</td>
                        <td className="px-4 py-3 text-sm text-gray-500 whitespace-nowrap">
                          {new Date(log.timestamp).toLocaleString()}
                        </td>
                      </motion.tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cards — mobile */}
          <div className="md:hidden space-y-3">
            {sortedFiltered.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <Download className="h-10 w-10 text-gray-300 mx-auto mb-3" />
                No download logs yet.
              </div>
            ) : (
              sortedFiltered.map((log) => (
                <div key={log.id} className="bg-white rounded-lg border border-gray-200 p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="font-medium text-gray-900 text-sm">{log.name}</div>
                    <div className="text-xs text-gray-400">
                      {new Date(log.timestamp).toLocaleString()}
                    </div>
                  </div>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-gray-400" />
                      {log.phone}
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5 text-gray-400" />
                      {log.email}
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-3.5 w-3.5 text-gray-400" />
                      {log.documentTitle}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
