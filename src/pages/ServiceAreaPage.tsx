import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ServiceAreaSection } from '../components/ServiceAreaSection';
import { GoogleMapSection } from '../components/GoogleMapSection';
import { MapPin, Phone, Calendar, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const ServiceAreaPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            Albuquerque Metro Coverage
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Service Areas & Zip Code Checker
          </h1>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            We operate local haul trucks across Albuquerque, Rio Rancho, Los Lunas, Corrales, Bernalillo, and East Mountain communities. Enter your zip code to check coverage!
          </p>
        </div>

        {/* Interactive Google Map Section */}
        <GoogleMapSection />

        {/* Service Area Zip Checker Component */}
        <ServiceAreaSection />

        {/* Dispatch Banner */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 text-slate-900 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-emerald-700" />
              Same-Day Dispatch Available
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Not Sure If We Service Your Specific Street?
            </h3>
            <p className="text-slate-600 text-sm font-medium max-w-xl">
              Give our local ABQ dispatch desk a call! We frequently accommodate nearby rural and outer metro properties.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold px-6 py-3.5 rounded-xl text-sm flex items-center gap-2 shadow"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Dispatch: {COMPANY_INFO.phone}</span>
            </a>
            <button
              onClick={() => navigate('/contact')}
              className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold px-6 py-3.5 rounded-xl text-sm flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>Request Quote</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
