import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ServicesSection } from '../components/ServicesSection';
import { Phone, Calendar, ShieldCheck, HeartHandshake, Camera } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ServicesPageProps {
  onSelectServiceForQuote: (title: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectServiceForQuote,
}) => {
  const navigate = useNavigate();

  const handleSelectService = (title: string) => {
    onSelectServiceForQuote(title);
    navigate('/contact');
  };

  const smsUrl = `sms:${COMPANY_INFO.phoneRaw}?body=${encodeURIComponent("Hi Joe! Here are photos of my junk in Albuquerque for a quote:")}`;

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            All-Inclusive Junk Hauling
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Our Full Range of Junk Removal Services
          </h1>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            From single item couches to full estate cleanouts and light demolition in Albuquerque and surrounding NM communities. We handle all loading, hauling, and eco-friendly disposal.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4 flex-wrap text-xs text-slate-600 font-semibold">
            <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-700" /> Fully Insured & Licensed
            </span>
            <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
              <HeartHandshake className="w-4 h-4 text-emerald-700" /> Donation First Initiative
            </span>
            <a
              href={smsUrl}
              className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-full border border-emerald-200 hover:bg-emerald-100 transition-colors font-bold"
            >
              <Camera className="w-4 h-4 text-emerald-700" /> Text Photos for Instant Quote
            </a>
          </div>
        </div>

        {/* Services Component Grid */}
        <ServicesSection onSelectServiceForQuote={handleSelectService} />

        {/* Bottom Banner */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Need Something Special or Custom Hauled?
            </h3>
            <p className="text-slate-300 text-sm font-medium">
              We take almost anything! Give Joe a quick call or request an online quote for instant answers.
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
              className="bg-white hover:bg-slate-100 text-slate-900 font-extrabold px-6 py-3.5 rounded-xl text-sm flex items-center gap-2"
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
