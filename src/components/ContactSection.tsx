import React from 'react';
import { Phone, MapPin, Clock, MessageSquare, Camera, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ContactSectionProps {
  initialPreFill?: string;
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const smsUrl = `sms:${COMPANY_INFO.phoneRaw}?body=${encodeURIComponent("Hi Joe! Here are photos of my junk in Albuquerque for a quote:")}`;

  return (
    <section id="contact" className="py-16 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* PRIMARY FEATURED ACTION: Text Photos Directly Card */}
        <div className="bg-emerald-900 border-2 border-emerald-700 rounded-3xl p-6 sm:p-10 shadow-xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800/30 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800 border border-emerald-600 text-emerald-200 text-xs font-black uppercase tracking-wider">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Fastest & Easiest Option</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Text Pictures to Joe for an Instant Quote!
              </h2>

              <p className="text-slate-200 text-sm sm:text-base max-w-2xl font-medium leading-relaxed">
                Skip typing out forms! Just tap the button below to open your Messages app, snap a couple photos of your junk, and text them directly to Joe at <strong className="text-white font-black underline">{COMPANY_INFO.phone}</strong>.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-bold text-emerald-200">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Opens Messages Directly
                </span>
                <span className="flex items-center gap-1.5">
                  <Camera className="w-4 h-4 text-emerald-400" /> Attach Unlimited Photos
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-400" /> Replies in 5–15 Mins
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              {/* Text Photos SMS Link Button */}
              <a
                href={smsUrl}
                className="w-full bg-white hover:bg-emerald-50 text-emerald-950 font-black text-lg px-6 py-5 rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95 uppercase tracking-wide text-center"
              >
                <MessageSquare className="w-6 h-6 fill-emerald-800 text-emerald-800 shrink-0" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-widest text-emerald-900 font-extrabold">TAP TO OPEN MESSAGES</div>
                  <div className="text-lg font-black leading-tight">Text Photos To {COMPANY_INFO.phone}</div>
                </div>
              </a>

              {/* Call Link */}
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full bg-emerald-800/80 hover:bg-emerald-800 text-white font-bold text-sm px-5 py-3 rounded-xl border border-emerald-600 flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 fill-current text-emerald-300" />
                <span>Or Call Joe Directly: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* SECONDARY SECTION: Direct Contact Info Cards */}
        <div className="pt-2 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
              Direct Contact
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Joe's Local Albuquerque Dispatch
            </h3>
            <p className="text-slate-600 text-sm font-medium">
              We are locally owned and operated right here in Albuquerque, NM. You talk directly with Joe and our local crew.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6 text-emerald-800" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Text Photos Line</div>
                <a href={smsUrl} className="text-lg font-black text-emerald-800 hover:underline block mt-0.5">
                  {COMPANY_INFO.phone}
                </a>
                <p className="text-xs text-slate-600 font-medium mt-1">Text photos anytime for instant pricing</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-emerald-800 fill-current" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Call Dispatch</div>
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-lg font-black text-slate-900 hover:text-emerald-800 block mt-0.5">
                  {COMPANY_INFO.phone}
                </a>
                <p className="text-xs text-slate-600 font-medium mt-1">Open Mon-Sat 7am-7pm | Sun 8am-5pm</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-emerald-800" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Service Coverage</div>
                <div className="text-base font-black text-slate-900 mt-0.5">Albuquerque & Surrounding</div>
                <p className="text-xs text-slate-600 font-medium mt-1">Bernalillo, Sandoval, Rio Rancho & Los Lunas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
