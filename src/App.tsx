import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SEOHead from './components/SEOHead';
import HomePage from './pages/HomePage';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import ProductsPage from './pages/ProductsPage';
import DocumentsPage from './pages/DocumentsPage';
import AdminPage from './pages/AdminPage';

export const routes = (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/case-studies" element={<CaseStudies />} />
    <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
    <Route path="/documents" element={<DocumentsPage />} />
    <Route path="/admin" element={<AdminPage />} />
  </Routes>
);

interface AppProps {
  Router: React.ComponentType<{ children?: React.ReactNode }>;
  location?: string;
}

export default function App({ Router, location = '/' }: AppProps) {
  return (
    <Router location={location}>
      <SEOHead />
      {routes}
    </Router>
  );
}
