import React from 'react';
import { Phone, MessageSquare, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import heroTruckImg from '../assets/images/joes_red_truck_hero_1785786805194.jpg';
import workersLoadingImg from '../assets/images/joes_workers_loading_truck_1785788627317.jpg';

interface HeroSectionProps {
  onOpenQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const smsUrl = `sms:${COMPANY_INFO.phoneRaw}?body=${encodeURIComponent("Hi Joe! Here are photos of my junk in Albuquerque for a quote:")}`;

  const junkItemsList = [
    'Furniture Removal',
    'Furniture Disposal',
    'Yard Waste Removal',
    'Yard Waste Cleanup',
    'Cleanout Service',
    'Appliance Disposal',
    'Television Disposal & Recycling',
    'Hot Tub Disposal',
    'E-Waste Disposal',
    'Trash Removal',
    'Mattress Disposal',
    'Refrigerator Disposal & Recycling',
    'Construction Debris Removal',
    'Garbage Removal',
    'Shed Demolition',
    'Concrete Removal',
    'Tree & Brush Removal',
    'Attic & Basement Clearance'
  ];

  return (
    <div className="bg-slate-100 text-slate-900 font-sans">
      
      {/* 1. HERO BANNER WITH RED TRUCK BACKGROUND */}
      <section className="relative h-[320px] sm:h-[400px] lg:h-[440px] bg-slate-900 overflow-hidden flex items-center justify-center">
        <img
          src={heroTruckImg}
          alt="Joe's Junk Removal Red Truck in Albuquerque"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />

        {/* Centered Translucent Hero Title Banner */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="bg-black/75 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-2xl shadow-2xl text-white space-y-2">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-tight">
              The #1 Rated Junk Removal Service
            </h1>
            <p className="text-sm sm:text-xl text-slate-200 font-medium italic">
              We provide superior value, service and effort in Albuquerque!
            </p>
          </div>
        </div>
      </section>

      {/* 2. TWO-OPTION FLOATING ACTION BAR (CALL / TEXT) */}
      <section className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10">
        <div className="bg-white border-2 border-slate-200 rounded-2xl shadow-xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center text-center">
          
          {/* Option 1: Call Us */}
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="flex items-center justify-center gap-3 p-4 rounded-xl hover:bg-red-50 transition-colors border border-slate-100 group"
          >
            <div className="w-12 h-12 rounded-full bg-red-700 text-white flex items-center justify-center shrink-0 shadow">
              <Phone className="w-6 h-6 fill-current" />
            </div>
            <div className="text-left">
              <div className="text-xs font-black uppercase tracking-wider text-red-700">CALL US DIRECTLY</div>
              <div className="text-lg font-black text-slate-900">{COMPANY_INFO.phone}</div>
            </div>
          </a>

          {/* Option 2: Text Us */}
          <a
            href={smsUrl}
            className="flex items-center justify-center gap-3 p-4 rounded-xl hover:bg-emerald-50 transition-colors border border-slate-100 group"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-800 text-white flex items-center justify-center shrink-0 shadow">
              <MessageSquare className="w-6 h-6 fill-current" />
            </div>
            <div className="text-left">
              <div className="text-xs font-black uppercase tracking-wider text-emerald-800">TEXT PHOTOS @</div>
              <div className="text-lg font-black text-slate-900">{COMPANY_INFO.phone}</div>
            </div>
          </a>

        </div>
      </section>

      {/* 3. MAIN SECTION (JUNK CHECKLIST & HIGH QUALITY JOB PHOTO) */}
      <section className="py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <h2 className="text-3xl sm:text-4xl font-black text-red-700 tracking-tight uppercase">
                We Take Just About Everything!
              </h2>
              <p className="text-base sm:text-lg font-bold text-slate-700">
                Some examples of the junk we haul away in Albuquerque include:
              </p>
            </div>

            {/* 3-COLUMN CHECKMARK GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              {junkItemsList.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm font-extrabold text-slate-800">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0 stroke-[3]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* LARGE ACTION PHOTO: WORKERS LOADING SOFA */}
            <div className="pt-2">
              <div className="rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-900">
                <img
                  src={workersLoadingImg}
                  alt="Joe's Junk Removal crew loading heavy furniture onto branded red truck"
                  className="w-full h-80 sm:h-[420px] object-cover object-center"
                />
                <div className="p-4 bg-red-700 text-white text-center text-sm font-black uppercase tracking-wider">
                  Licensed & Insured Professional Haulers • Same Day Albuquerque Service • Call or Text {COMPANY_INFO.phone}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};


