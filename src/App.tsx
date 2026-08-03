import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ServiceAreaPage } from './pages/ServiceAreaPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

function AppContent() {
  const [quotePreFill, setQuotePreFill] = useState('');
  const [selectedServiceTitle, setSelectedServiceTitle] = useState('');
  const navigate = useNavigate();

  const handleSelectServiceForQuote = (title: string) => {
    setSelectedServiceTitle(title);
  };

  const handlePreFillFromEstimator = (summary: string) => {
    setQuotePreFill(summary);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-emerald-800 selection:text-white flex flex-col">
      {/* Navigation Header */}
      <Header
        onOpenQuote={() => navigate('/contact')}
      />

      {/* Main Routed Content */}
      <main className="flex-1 pb-16 sm:pb-0">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onSelectServiceForQuote={handleSelectServiceForQuote}
                onPreFillFromEstimator={handlePreFillFromEstimator}
              />
            }
          />
          <Route
            path="/services"
            element={
              <ServicesPage
                onSelectServiceForQuote={handleSelectServiceForQuote}
              />
            }
          />
          <Route
            path="/gallery"
            element={<GalleryPage />}
          />
          <Route
            path="/service-area"
            element={<ServiceAreaPage />}
          />
          <Route
            path="/reviews"
            element={<ReviewsPage />}
          />
          <Route
            path="/about"
            element={<AboutPage />}
          />
          <Route
            path="/contact"
            element={
              <ContactPage
                initialPreFill={quotePreFill}
                initialService={selectedServiceTitle}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}
