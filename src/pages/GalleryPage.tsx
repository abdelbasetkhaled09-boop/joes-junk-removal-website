import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BeforeAfterGallery } from '../components/BeforeAfterGallery';
import { Camera, Calendar, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const GalleryPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-emerald-700" />
            Proof of Work
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Before & After Cleanout Gallery
          </h1>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            Take a look at real Albuquerque cleanouts completed by Joe's crew. Drag the slider or click tabs to toggle before and after views!
          </p>
        </div>

        {/* Gallery Component */}
        <BeforeAfterGallery onOpenQuote={() => navigate('/contact')} />

        {/* Transformation Callout Banner */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 text-slate-900 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
              Your Space Could Be Next
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Ready to Turn Your Cluttered Area into Clean Space?
            </h3>
            <p className="text-slate-600 text-sm font-medium max-w-xl">
              Whether it's a garage, backyard, attic, or commercial warehouse, Joe's crew leaves every space swept clean and fresh.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold px-6 py-3.5 rounded-xl text-sm flex items-center gap-2 shadow"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Joe: {COMPANY_INFO.phone}</span>
            </a>
            <button
              onClick={() => navigate('/contact')}
              className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold px-6 py-3.5 rounded-xl text-sm flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>Get Free Quote</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
