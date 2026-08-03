import React, { useState } from 'react';
import { 
  Home, Building2, Sofa, Refrigerator, Trees, HardHat, Warehouse, 
  KeyRound, Flame, Hammer, ArrowRight, CheckCircle2, Phone, X, ShieldAlert 
} from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'residential' | 'commercial' | 'specialty'>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="w-6 h-6 text-emerald-700" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-emerald-700" />;
      case 'Sofa': return <Sofa className="w-6 h-6 text-emerald-700" />;
      case 'Refrigerator': return <Refrigerator className="w-6 h-6 text-emerald-700" />;
      case 'Trees': return <Trees className="w-6 h-6 text-emerald-700" />;
      case 'HardHat': return <HardHat className="w-6 h-6 text-emerald-700" />;
      case 'Warehouse': return <Warehouse className="w-6 h-6 text-emerald-700" />;
      case 'KeyRound': return <KeyRound className="w-6 h-6 text-emerald-700" />;
      case 'Flame': return <Flame className="w-6 h-6 text-emerald-700" />;
      case 'Hammer': return <Hammer className="w-6 h-6 text-emerald-700" />;
      default: return <Home className="w-6 h-6 text-emerald-700" />;
    }
  };

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Our Hauling Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Comprehensive Junk Removal in Albuquerque
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From single item pickups to full property cleanouts, our professional crew handles loading, hauling, sweep-up, and proper disposal.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 mb-12">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'residential', label: 'Residential' },
            { id: 'commercial', label: 'Commercial' },
            { id: 'specialty', label: 'Specialty Cleanouts' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-emerald-800 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-emerald-700 transition-all group flex flex-col justify-between hover:shadow-lg shadow-sm"
            >
              <div>
                {/* Header info */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    From {service.startingPrice}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-800 transition-colors mb-2">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                {/* Typical Items checklist */}
                <div className="space-y-1.5 mb-6">
                  <div className="text-xs font-bold uppercase text-slate-400 tracking-wider">Typical Items Removed:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.typicalItems.slice(0, 4).map((item, idx) => (
                      <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 font-medium">
                        • {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="flex-1 text-xs font-bold text-slate-800 hover:text-emerald-800 bg-slate-100 hover:bg-emerald-50 py-2.5 rounded-lg border border-slate-200 transition-colors text-center cursor-pointer"
                >
                  View Details & Pricing
                </button>
                <button
                  onClick={() => onSelectServiceForQuote(service.title)}
                  className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-3.5 py-2.5 rounded-lg text-xs transition-colors cursor-pointer shadow-sm"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for custom/unlisted junk */}
        <div className="mt-12 bg-slate-900 text-white border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white">Have something unusual or not listed above?</h3>
            <p className="text-sm text-slate-300">We haul almost anything except toxic hazardous chemicals. Give Joe a call for a quick 2-minute phone answer!</p>
          </div>
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="shrink-0 bg-emerald-600 hover:bg-emerald-500 text-white font-black px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Ask Joe: {COMPANY_INFO.phone}</span>
          </a>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative space-y-6 shadow-2xl text-slate-900">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-900 rounded-full bg-slate-100 hover:bg-slate-200 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                {getServiceIcon(selectedService.iconName)}
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">{selectedService.title}</h3>
                <span className="text-xs font-bold text-emerald-800 uppercase">Starting at {selectedService.startingPrice}</span>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              {selectedService.fullDescription}
            </p>

            <div>
              <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Typical Items Covered:</h4>
              <ul className="grid grid-cols-2 gap-2 text-sm text-slate-800">
                {selectedService.typicalItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg border border-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-200 space-y-3">
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForQuote(title);
                }}
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold py-3.5 rounded-xl shadow-lg transition-colors cursor-pointer text-center"
              >
                Request Free Quote for {selectedService.title}
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold py-3 rounded-xl border border-slate-200 flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 fill-current text-emerald-700" />
                <span>Call {COMPANY_INFO.phone} for Same-Day Slot</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
