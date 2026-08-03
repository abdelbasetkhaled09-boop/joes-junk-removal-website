import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AboutSection } from '../components/AboutSection';
import { FAQSection } from '../components/FAQSection';
import { HelpCircle, Phone, Calendar, HeartHandshake, Recycle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="py-12 bg-white min-h-screen space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            100% Locally Owned & Operated
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            About Joe's Junk Removal LLC
          </h1>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            Learn about our Albuquerque roots, our donation-first initiative, and answers to common questions about our junk hauling process.
          </p>
        </div>

        {/* About Section */}
        <AboutSection />

        {/* Eco Commitment Banner */}
        <div className="bg-emerald-800 text-white rounded-3xl p-8 sm:p-12 shadow-md grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-200 text-xs font-bold uppercase tracking-wider">
              Community First
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Keeping Usable Goods Out of NM Landfills
            </h3>
            <p className="text-emerald-100 text-sm font-medium leading-relaxed">
              We partner with local Albuquerque shelters, non-profits, and recycling centers. Usable furniture, appliances, toys, and clothing are donated back to local families in need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-emerald-900/60 p-4 rounded-2xl border border-emerald-700/80 space-y-1">
              <HeartHandshake className="w-6 h-6 text-emerald-200 mb-1" />
              <div className="font-extrabold text-sm text-white">Donation Receipts</div>
              <p className="text-xs text-emerald-100">Donated items are handed over to local charities.</p>
            </div>
            <div className="bg-emerald-900/60 p-4 rounded-2xl border border-emerald-700/80 space-y-1">
              <Recycle className="w-6 h-6 text-emerald-200 mb-1" />
              <div className="font-extrabold text-sm text-white">Scrap Metal & E-Waste</div>
              <p className="text-xs text-emerald-100">Metals and electronics are recycled responsibly.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection />

        {/* Callout Banner */}
        <div className="bg-slate-900 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-white">Have a Question Not Answered Here?</h4>
            <p className="text-xs text-slate-300">Joe is standing by to answer your call and give you an instant quote over the phone!</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold px-5 py-3 rounded-xl text-xs flex items-center gap-2 shadow"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Joe: {COMPANY_INFO.phone}</span>
            </a>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white hover:bg-slate-100 text-slate-900 font-extrabold px-5 py-3 rounded-xl text-xs flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-emerald-700" />
              <span>Contact Form</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
