import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { GoogleMapSection } from '../components/GoogleMapSection';
import { MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ContactPageProps {
  initialPreFill?: string;
  initialService?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialPreFill,
  initialService,
}) => {
  const smsUrl = `sms:${COMPANY_INFO.phoneRaw}?body=${encodeURIComponent("Hi Joe! Here are photos of my junk in Albuquerque for a quote:")}`;

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Fastest Response Guarantee
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Get Your Free No-Obligation Junk Quote
          </h1>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            Text photos directly to Joe for instant pricing, fill out our quick form below, or call directly for same-day scheduling in Albuquerque!
          </p>

          <div className="pt-2">
            <a
              href={smsUrl}
              className="inline-flex items-center gap-2 bg-emerald-800 text-white hover:bg-emerald-900 font-bold px-5 py-2.5 rounded-xl border border-emerald-700 text-xs transition-colors cursor-pointer uppercase tracking-wider shadow"
            >
              <MessageSquare className="w-4 h-4 text-emerald-200 fill-current" />
              <span>Text Junk Photos To Joe: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <ContactSection
          initialPreFill={initialPreFill}
          initialService={initialService}
        />

        {/* Location & Service Coverage Map */}
        <GoogleMapSection />
      </div>
    </div>
  );
};
