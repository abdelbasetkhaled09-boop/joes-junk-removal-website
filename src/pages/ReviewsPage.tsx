import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReviewsSection } from '../components/ReviewsSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Star, Phone, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const ReviewsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="py-12 bg-white min-h-screen space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            4.9 / 5.0 Star Rating (380+ Local Reviews)
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Customer Reviews & Why ABQ Chooses Joe
          </h1>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            Read verified feedback from homeowners, renters, realtors, and commercial property managers across Albuquerque and Rio Rancho.
          </p>
        </div>

        {/* Reviews Component */}
        <ReviewsSection />

        {/* Why Choose Us & Franchise Comparison */}
        <WhyChooseUs />

        {/* Bottom Callout Banner */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Experience 5-Star Local Service Today
            </h3>
            <p className="text-slate-300 text-sm font-medium">
              Join hundreds of happy customers in New Mexico who trust Joe's Junk Removal LLC for upfront prices and polite service.
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
              className="bg-white hover:bg-slate-100 text-slate-900 font-extrabold px-6 py-3.5 rounded-xl text-sm flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-emerald-700" />
              <span>Get Free Quote</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
