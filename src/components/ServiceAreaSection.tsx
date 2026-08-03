import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, Phone, AlertCircle, Sparkles } from 'lucide-react';
import { SERVICE_AREAS, COMPANY_INFO } from '../data/companyData';

export const ServiceAreaSection: React.FC = () => {
  const [zipQuery, setZipQuery] = useState('');
  const [searchResult, setSearchResult] = useState<{ covered: boolean; message: string } | null>(null);

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipQuery.trim()) return;

    const query = zipQuery.trim().toLowerCase();
    const match = SERVICE_AREAS.find(area => 
      area.name.toLowerCase().includes(query) || 
      area.zipCodes.some(z => z.includes(query))
    );

    if (match || query.startsWith('87')) {
      setSearchResult({
        covered: true,
        message: `Great news! ${zipQuery} is in our primary Albuquerque metro service area. Same-Day and Next-Day pickups available!`
      });
    } else {
      setSearchResult({
        covered: true,
        message: `Yes! We service ${zipQuery} and surrounding New Mexico areas. Call (505) 527-6573 for dispatch timing!`
      });
    }
  };

  return (
    <section id="service-area" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            Service Area Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Serving Albuquerque & Surrounding NM Communities
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Our haul trucks operate daily throughout the entire Albuquerque metropolitan area.
          </p>
        </div>

        {/* Zip Code Interactive Checker */}
        <div className="max-w-2xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-12 shadow-sm">
          <form onSubmit={handleZipCheck} className="space-y-4">
            <label className="block text-sm font-bold text-slate-900 text-center">
              Check Instant Availability in Your Zip Code or City:
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={zipQuery}
                  onChange={(e) => setZipQuery(e.target.value)}
                  placeholder="e.g. 87109 or Rio Rancho"
                  className="w-full bg-white border border-slate-300 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-700 font-medium"
                />
              </div>
              <button
                type="submit"
                className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors cursor-pointer"
              >
                Check Coverage
              </button>
            </div>
          </form>

          {searchResult && (
            <div className={`mt-4 p-4 rounded-xl border flex items-start gap-3 text-sm animate-in fade-in ${
              searchResult.covered
                ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                : 'bg-slate-100 border-slate-200 text-slate-800'
            }`}>
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">{searchResult.message}</p>
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-xs text-emerald-900 font-extrabold underline mt-1 inline-block">
                  Call {COMPANY_INFO.phone} to lock in your slot now &rarr;
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Primary Service Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SERVICE_AREAS.slice(0, 6).map((area, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-emerald-700 transition-all space-y-3 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-emerald-700" />
                  <span>{area.name}</span>
                </h3>
                <span className="text-[11px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  Active Crews
                </span>
              </div>

              <p className="text-xs text-slate-600 font-medium">
                {area.highlight}
              </p>

              <div className="pt-2 flex flex-wrap gap-1 text-[11px] text-slate-500 font-mono">
                {area.zipCodes.map(z => (
                  <span key={z} className="bg-white px-2 py-0.5 rounded border border-slate-200">
                    {z}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Albuquerque Neighborhood Tag Cloud */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-xs">
          <h4 className="text-base font-extrabold text-slate-900">Albuquerque Neighborhoods We Serve Daily:</h4>
          <div className="flex flex-wrap justify-center gap-2 text-xs text-slate-700">
            {[
              'NE Heights', 'Westside', 'Nob Hill', 'Downtown Albuquerque', 'Old Town',
              'Foothills', 'Taylor Ranch', 'Paradise Hills', 'Eubank', 'Tramway',
              'San Mateo', 'Montgomery', 'Coors Corridor', 'South Valley', 'North Valley'
            ].map(tag => (
              <span key={tag} className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 font-medium">
                📍 {tag}
              </span>
            ))}
            <span className="bg-emerald-100 text-emerald-900 px-3 py-1.5 rounded-lg border border-emerald-200 font-bold">
              + All Nearby Communities
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
