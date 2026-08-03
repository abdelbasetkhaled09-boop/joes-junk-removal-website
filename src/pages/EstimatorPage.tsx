import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CostEstimator } from '../components/CostEstimator';
import { MessageSquare, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface EstimatorPageProps {
  onPreFillFromEstimator: (summary: string) => void;
}

export const EstimatorPage: React.FC<EstimatorPageProps> = ({
  onPreFillFromEstimator,
}) => {
  const navigate = useNavigate();

  const handlePreFill = (summary: string) => {
    onPreFillFromEstimator(summary);
    navigate('/contact');
  };

  const smsUrl = `sms:${COMPANY_INFO.phoneRaw}?body=${encodeURIComponent("Hi Joe! Here are photos of my junk in Albuquerque for a quote:")}`;

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Interactive Price & Load Calculator
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Truck Load Cost Estimator
          </h1>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            Estimate your junk removal price in seconds based on truck volume! Select item types or click on truck load ratios to view estimated prices.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap pt-2">
            <a
              href={smsUrl}
              className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-200 fill-current" />
              <span>Or Text Photos To Joe</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-white text-slate-800 hover:bg-slate-100 font-bold px-5 py-2.5 rounded-xl border border-slate-200 text-xs transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-700 fill-current" />
              <span>Call For Instant Phone Quote: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Cost Estimator Component */}
        <CostEstimator onPreFillQuote={handlePreFill} />

        {/* Transparency Guarantee Banner */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-800 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Joe's Upfront Price Protection Guarantee</h3>
              <p className="text-xs text-slate-600 font-medium">No hidden fees, no disposal surcharges, no surprise heavy-lifting charges.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>All-Inclusive Labor & Fuel</span>
              </div>
              <p className="text-xs text-slate-600 font-medium">
                Our price includes 2 crew members, heavy loading, flight of stairs, sweep-up, and all NM dump or recycling fees.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>On-Site Final Approval</span>
              </div>
              <p className="text-xs text-slate-600 font-medium">
                When our crew arrives, we inspect the items and give you the exact final price before starting. If you aren't happy, you owe $0.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Fair Volume Pricing</span>
              </div>
              <p className="text-xs text-slate-600 font-medium">
                You only pay for the truck space your junk actually occupies. If it takes half a truck, you pay half a truck.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
