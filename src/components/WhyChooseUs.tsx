import React from 'react';
import { 
  MapPin, Zap, DollarSign, Users, ShieldCheck, Clock, CheckCircle2, XCircle, Award 
} from 'lucide-react';
import { WHY_CHOOSE_US, COMPANY_INFO } from '../data/companyData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'MapPin': return <MapPin className="w-6 h-6 text-emerald-700" />;
      case 'Zap': return <Zap className="w-6 h-6 text-emerald-700" />;
      case 'DollarSign': return <DollarSign className="w-6 h-6 text-emerald-700" />;
      case 'Users': return <Users className="w-6 h-6 text-emerald-700" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-700" />;
      case 'Clock': return <Clock className="w-6 h-6 text-emerald-700" />;
      default: return <Award className="w-6 h-6 text-emerald-700" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Why Choose Joe's
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Albuquerque's Most Trusted Junk Removal Team
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We combine local pride, prompt service, and transparent pricing to give you a stress-free junk removal experience.
          </p>
        </div>

        {/* 6 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-emerald-700 transition-all hover:shadow-md group shadow-xs"
            >
              <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {getIcon(item.iconName)}
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table: Joe's vs Franchise Chains vs Unlicensed Guys */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <h3 className="text-2xl font-black text-slate-900">How Joe's Compares</h3>
            <p className="text-xs text-slate-500">See why local homeowners and businesses choose Joe's over franchises or random gig listings.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-extrabold uppercase tracking-wider">
                  <th className="py-4 px-4 text-slate-500">Feature</th>
                  <th className="py-4 px-4 bg-emerald-800 text-white rounded-t-xl font-black text-sm">
                    Joe's Junk Removal LLC
                  </th>
                  <th className="py-4 px-4 text-slate-500">National Franchise Chains</th>
                  <th className="py-4 px-4 text-slate-500">Unlicensed Online Posters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium text-slate-700">
                {[
                  {
                    feature: 'Upfront Guaranteed Quote',
                    joes: true,
                    franchise: 'Vague until arrival',
                    unlicensed: 'Surprise add-ons later'
                  },
                  {
                    feature: 'Locally Owned in ABQ',
                    joes: true,
                    franchise: false,
                    unlicensed: 'Varies'
                  },
                  {
                    feature: 'Fully Insured & Bonded',
                    joes: true,
                    franchise: true,
                    unlicensed: false
                  },
                  {
                    feature: 'Same-Day Service',
                    joes: true,
                    franchise: 'Extra fee or 3-day wait',
                    unlicensed: 'Unreliable timing'
                  },
                  {
                    feature: 'Local Charity Donations',
                    joes: true,
                    franchise: 'Rarely',
                    unlicensed: false
                  },
                  {
                    feature: 'Sweep Clean After Hauling',
                    joes: true,
                    franchise: 'Inconsistent',
                    unlicensed: false
                  },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{row.feature}</td>
                    
                    {/* Joe's Column */}
                    <td className="py-3.5 px-4 bg-emerald-50 border-x border-emerald-200 text-emerald-900 font-bold">
                      {row.joes === true ? (
                        <div className="flex items-center gap-1.5 text-emerald-800">
                          <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                          <span>Yes (Included)</span>
                        </div>
                      ) : (
                        <span>{row.joes}</span>
                      )}
                    </td>

                    {/* Franchise Column */}
                    <td className="py-3.5 px-4 text-slate-600">
                      {row.franchise === true ? (
                        <CheckCircle2 className="w-4 h-4 text-slate-500 inline mr-1" />
                      ) : row.franchise === false ? (
                        <XCircle className="w-4 h-4 text-rose-500 inline mr-1" />
                      ) : null}
                      <span>{typeof row.franchise === 'string' ? row.franchise : row.franchise ? 'Yes' : 'No'}</span>
                    </td>

                    {/* Unlicensed Column */}
                    <td className="py-3.5 px-4 text-slate-500">
                      {row.unlicensed === false ? (
                        <XCircle className="w-4 h-4 text-rose-500 inline mr-1" />
                      ) : null}
                      <span>{typeof row.unlicensed === 'string' ? row.unlicensed : row.unlicensed ? 'Yes' : 'No'}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
