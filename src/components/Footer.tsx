import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, ShieldCheck, Award, Zap, MessageSquare, Truck, Star, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, SERVICES, SERVICE_AREAS } from '../data/companyData';

export const Footer: React.FC = () => {
  const smsUrl = `sms:${COMPANY_INFO.phoneRaw}?body=${encodeURIComponent("Hi Joe! Here are photos of my junk in Albuquerque for a quote:")}`;

  // Structured Data JSON-LD for Local Business SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "JunkRemovalService",
    "name": "Joe's Junk Removal LLC",
    "image": "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?auto=format&fit=crop&q=80&w=800",
    "telePhone": COMPANY_INFO.phone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Albuquerque",
      "addressRegion": "NM",
      "postalCode": "87102",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.0844,
      "longitude": -106.6504
    },
    "url": "https://joesjunkremoval.com",
    "areaServed": ["Albuquerque", "Rio Rancho", "Corrales", "Los Lunas", "Belen", "Bernalillo"],
    "description": "Licensed & Insured same-day junk removal, furniture removal, yard debris hauling, and property cleanouts in Albuquerque & Metro NM."
  };

  return (
    <footer 
      className="bg-slate-900 text-slate-300 border-t border-slate-800 text-sm"
      itemScope
      itemType="http://schema.org/LocalBusiness"
    >
      {/* Schema.org Script insertion for search engine crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Trust & Guarantees Section - SEO & Conversion Boost */}
      <section className="border-b border-slate-800 bg-slate-950/80 py-10" aria-label="Why Choose Us Trust Badges">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-black uppercase tracking-widest">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Trusted Local Haulers
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Why Albuquerque Trusts Joe's Junk Removal
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm font-medium">
              Top-rated, fully insured local hauling teams serving Albuquerque, Rio Rancho, and Valencia County.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Badge 1: Licensed & Insured */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex items-start gap-4 hover:border-emerald-500/50 transition-all shadow-md group">
              <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-700 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-inner">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-extrabold text-white text-base tracking-tight">
                    Licensed & Insured
                  </h4>
                  <span className="text-[10px] bg-emerald-950 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-800 uppercase tracking-wider">
                    NM LLC
                  </span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">
                  Full general liability insurance protecting your home, office, and property. Zero worry for residential and commercial cleanouts.
                </p>
              </div>
            </div>

            {/* Badge 2: Locally Owned */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex items-start gap-4 hover:border-red-500/50 transition-all shadow-md group">
              <div className="w-12 h-12 rounded-xl bg-red-950 border border-red-700 text-red-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-inner">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-extrabold text-white text-base tracking-tight">
                    Locally Owned
                  </h4>
                  <span className="text-[10px] bg-red-950 text-red-300 font-bold px-2 py-0.5 rounded border border-red-800 uppercase tracking-wider">
                    ABQ Native
                  </span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">
                  100% family-owned local business based in Albuquerque. No franchise markups — honest upfront pricing from local crew members.
                </p>
              </div>
            </div>

            {/* Badge 3: Same-Day Service */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex items-start gap-4 hover:border-amber-500/50 transition-all shadow-md group">
              <div className="w-12 h-12 rounded-xl bg-amber-950 border border-amber-700 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-inner">
                <Zap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-extrabold text-white text-base tracking-tight">
                    Same-Day Service
                  </h4>
                  <span className="text-[10px] bg-amber-950 text-amber-300 font-bold px-2 py-0.5 rounded border border-amber-800 uppercase tracking-wider">
                    Fast Dispatch
                  </span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">
                  Need junk cleared today? Text photos of your items before 2 PM for immediate same-day truck dispatch across Metro NM.
                </p>
              </div>
            </div>

          </div>

          {/* Micro Trust Banner */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-slate-300">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-emerald-400" />
              <span>Eco-Friendly Hauling: We donate & recycle up to 60% of collected items.</span>
            </div>
            <div className="flex items-center gap-1 text-amber-400">
              <Star className="w-4 h-4 fill-current text-amber-400" />
              <Star className="w-4 h-4 fill-current text-amber-400" />
              <Star className="w-4 h-4 fill-current text-amber-400" />
              <Star className="w-4 h-4 fill-current text-amber-400" />
              <Star className="w-4 h-4 fill-current text-amber-400" />
              <span className="ml-1 text-slate-200">5.0 Star Rating in Albuquerque, NM</span>
            </div>
          </div>

        </div>
      </section>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center text-white font-extrabold shadow-md">
                JJR
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight uppercase" itemProp="name">
                  JOE'S JUNK REMOVAL
                </span>
                <span className="ml-1 text-xs bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-800 font-bold">
                  LLC
                </span>
                <p className="text-xs text-slate-400 font-medium">Albuquerque, New Mexico & Surrounding Areas</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400 font-medium" itemProp="description">
              Joe's Junk Removal LLC provides fast, affordable, and trustworthy junk removal services across Albuquerque, NM and surrounding communities. From single items to full property cleanouts, our crew handles loading, hauling, and eco-friendly donation/recycling.
            </p>

            <address className="not-italic pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <a href={smsUrl} className="font-extrabold text-white hover:text-emerald-400">
                  Text Photos: {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 fill-current" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-extrabold text-white hover:text-emerald-400" itemProp="telephone">
                  Call Line: {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                  <span itemProp="streetAddress">{COMPANY_INFO.address}</span>, <span itemProp="addressLocality">Albuquerque</span>, <span itemProp="addressRegion">NM</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>{COMPANY_INFO.hours}</span>
              </div>
            </address>
          </div>

          {/* Quick Links / Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Our Services</h4>
            <ul className="space-y-2 text-xs font-medium">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <Link to="/services" className="hover:text-emerald-400 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Service Areas</h4>
            <ul className="space-y-2 text-xs font-medium">
              {SERVICE_AREAS.map((area, idx) => (
                <li key={idx}>
                  <Link to="/service-area" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                    <span>📍</span> {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Pages */}
          <nav aria-label="Footer Navigation">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Quick Navigation</h4>
            <div className="space-y-2 text-xs font-medium flex flex-col">
              <Link to="/" className="hover:text-emerald-400">Home</Link>
              <Link to="/services" className="hover:text-emerald-400">Services</Link>
              <Link to="/gallery" className="hover:text-emerald-400">Before & After Gallery</Link>
              <Link to="/service-area" className="hover:text-emerald-400">Service Areas & Zip Codes</Link>
              <Link to="/reviews" className="hover:text-emerald-400">Customer Reviews</Link>
              <Link to="/about" className="hover:text-emerald-400">About & FAQ</Link>
              <Link to="/contact" className="hover:text-emerald-400">Text Photos / Contact</Link>
            </div>
          </nav>

        </div>
      </div>

      {/* Bottom Copyright & Trust Bar */}
      <div className="border-t border-slate-800 bg-slate-950 py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Joe's Junk Removal LLC. All rights reserved. | Albuquerque Junk Removal Services</p>
          <div className="flex items-center gap-4 text-slate-300 font-medium">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Fully Insured & Licensed NM LLC
            </span>
            <span>•</span>
            <a href={smsUrl} className="text-emerald-400 font-bold hover:underline">
              Text Photos (505) 527-6573
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

