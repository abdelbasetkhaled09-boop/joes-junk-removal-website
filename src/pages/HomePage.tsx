import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { GoogleMapSection } from '../components/GoogleMapSection';
import vintagePosterImg from '../assets/images/joes_vintage_poster_1785784585634.jpg';
import bobcatDemoImg from '../assets/images/bobcat_demolition_1785784572132.jpg';
import yardBrushImg from '../assets/images/yard_brush_before_after_1785784597080.jpg';
import lotCleanoutImg from '../assets/images/lot_cleanout_before_after_1785784611020.jpg';
import {
  Truck,
  Calculator,
  Camera,
  MapPin,
  Star,
  Info,
  Phone,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Package,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';

interface HomePageProps {
  onSelectServiceForQuote: (title: string) => void;
  onPreFillFromEstimator: (summary: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectServiceForQuote,
}) => {
  const navigate = useNavigate();
  const smsUrl = `sms:${COMPANY_INFO.phoneRaw}?body=${encodeURIComponent("Hi Joe! Here are photos of my junk in Albuquerque for a quote:")}`;

  const pages = [
    {
      title: 'Our 10 Hauling Services',
      path: '/services',
      icon: Truck,
      color: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      badge: 'Full Catalog',
      description: 'Furniture, appliances, yard debris, estate cleanouts, shed demolition, and commercial junk removal.',
      cta: 'View All Services',
    },
    {
      title: 'Before & After Gallery',
      path: '/gallery',
      icon: Camera,
      color: 'bg-amber-100 text-amber-800 border-amber-200',
      badge: 'Proof of Work',
      description: 'Interactive before-and-after sliders showing real Albuquerque cleanouts completed by Joe.',
      cta: 'See Transformations',
    },
    {
      title: 'Service Areas & Zip Codes',
      path: '/service-area',
      icon: MapPin,
      color: 'bg-purple-100 text-purple-800 border-purple-200',
      badge: 'Albuquerque Metro',
      description: 'Check coverage in ABQ, Rio Rancho, Los Lunas, Corrales, Bernalillo, and East Mountains.',
      cta: 'Check Your Zip Code',
    },
    {
      title: 'Customer Reviews & Rating',
      path: '/reviews',
      icon: Star,
      color: 'bg-amber-100 text-amber-900 border-amber-200',
      badge: '4.9 ★ (380+ Reviews)',
      description: 'Read verified feedback from local homeowners and see why Joe beats expensive national chains.',
      cta: 'Read Reviews',
    },
    {
      title: 'About & Eco-Donations',
      path: '/about',
      icon: Info,
      color: 'bg-teal-100 text-teal-800 border-teal-200',
      badge: 'Local & Donation First',
      description: 'Learn about our Albuquerque roots, local charity partnerships, and answers to common FAQs.',
      cta: 'Learn About Joe',
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <HeroSection
        onOpenQuote={() => navigate('/contact')}
      />

      {/* Quick Value Prop Bar */}
      <section className="bg-slate-900 text-white py-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 space-y-1">
              <ShieldCheck className="w-5 h-5 text-emerald-400 mx-auto" />
              <div className="font-extrabold text-xs sm:text-sm">Upfront Pricing</div>
              <div className="text-[11px] text-slate-400">No surprise fees</div>
            </div>
            <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 space-y-1">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto" />
              <div className="font-extrabold text-xs sm:text-sm">Same-Day Service</div>
              <div className="text-[11px] text-slate-400 font-medium">Subject to ABQ dispatch</div>
            </div>
            <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 space-y-1">
              <HeartHandshake className="w-5 h-5 text-emerald-400 mx-auto" />
              <div className="font-extrabold text-xs sm:text-sm">Donation First</div>
              <div className="text-[11px] text-slate-400 font-medium">Reused & donated in NM</div>
            </div>
            <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 space-y-1">
              <Camera className="w-5 h-5 text-emerald-400 mx-auto" />
              <div className="font-extrabold text-xs sm:text-sm">Text Photo Quotes</div>
              <div className="text-[11px] text-slate-400 font-medium">Instant picture estimates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Portal Cards Grid */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              Explore Our Site & Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Select a Page to Get Started
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              We've organized our services, real transformations, and service areas into separate dedicated pages for quick browsing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.path}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${p.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 uppercase tracking-wider">
                        {p.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-800 transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link
                      to={p.path}
                      className="w-full inline-flex items-center justify-between bg-white hover:bg-emerald-800 hover:text-white border border-slate-300 font-bold px-4 py-3 rounded-xl text-xs text-slate-800 transition-all group-hover:border-emerald-800 shadow-xs"
                    >
                      <span>{p.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REAL JOBSITE PHOTOS & JOE'S OFFICIAL FLYER SHOWCASE */}
      <section className="py-16 bg-amber-50/50 border-b border-amber-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-200 border border-amber-300 text-amber-900 text-xs font-black uppercase tracking-wider">
              <Camera className="w-4 h-4 text-amber-800" />
              Real Albuquerque Jobsites
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Big or Small — We Haul It All, Burque!
            </h2>
            <p className="text-slate-700 text-sm sm:text-base font-medium">
              From quick grab-and-go junk pickups to heavy Bobcat demolition and full lot cleanouts. Take a look at real Albuquerque projects completed by Joe's crew!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            
            {/* Card 1: Official Poster */}
            <div className="bg-white border-2 border-amber-300 rounded-3xl overflow-hidden shadow-md flex flex-col justify-between group hover:shadow-xl transition-all">
              <div className="relative overflow-hidden bg-amber-100">
                <img
                  src={vintagePosterImg}
                  alt="Joe's Junk Removal Albuquerque Heavy Hitter Poster"
                  className="w-full h-64 object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-amber-900 text-amber-100 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow">
                  Official Poster
                </div>
              </div>
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between bg-amber-50/30">
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Albuquerque's Heavy Hitter</h3>
                  <p className="text-xs text-slate-600 font-medium mt-1">
                    "Don't call a franchise. Call a neighbor." Cheap for the quick jobs, ready to hustle for the big ones!
                  </p>
                </div>
                <a
                  href={smsUrl}
                  className="w-full bg-amber-900 hover:bg-amber-950 text-white font-extrabold text-xs py-3 rounded-xl text-center flex items-center justify-center gap-1.5 uppercase tracking-wider"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-amber-300" />
                  <span>Text Photos To Joe</span>
                </a>
              </div>
            </div>

            {/* Card 2: Bobcat Demolition */}
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-md flex flex-col justify-between group hover:shadow-xl transition-all">
              <div className="relative overflow-hidden bg-slate-900 h-64">
                <img
                  src={bobcatDemoImg}
                  alt="Bobcat skid steer clearing heavy demolition debris in Albuquerque"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-emerald-800 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow">
                  Heavy Equipment
                </div>
              </div>
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Bobcat Heavy Demo</h3>
                  <p className="text-xs text-slate-600 font-medium mt-1">
                    Equipped with Bobcat track loaders for shed teardowns, heavy wood debris, concrete, and lot leveling.
                  </p>
                </div>
                <Link
                  to="/services"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs py-3 rounded-xl text-center flex items-center justify-center gap-1.5 uppercase tracking-wider"
                >
                  <span>Demolition Services &rarr;</span>
                </Link>
              </div>
            </div>

            {/* Card 3: Yard Bush Cleanout */}
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-md flex flex-col justify-between group hover:shadow-xl transition-all">
              <div className="relative overflow-hidden bg-slate-900 h-64">
                <img
                  src={yardBrushImg}
                  alt="Before and after overgrown bush removal in Albuquerque"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-emerald-800 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow">
                  Before & After
                </div>
              </div>
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Yard & Shrub Cleanout</h3>
                  <p className="text-xs text-slate-600 font-medium mt-1">
                    Extracting overgrown shrubs, tree branches, root balls, and raking dirt yards spotless.
                  </p>
                </div>
                <Link
                  to="/gallery"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs py-3 rounded-xl text-center flex items-center justify-center gap-1.5 uppercase tracking-wider"
                >
                  <span>See Before & After &rarr;</span>
                </Link>
              </div>
            </div>

            {/* Card 4: Heavy Lot Cleanout */}
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-md flex flex-col justify-between group hover:shadow-xl transition-all">
              <div className="relative overflow-hidden bg-slate-900 h-64">
                <img
                  src={lotCleanoutImg}
                  alt="Albuquerque lot cleanout site before and after"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-emerald-800 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow">
                  Full Site Clearout
                </div>
              </div>
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Demolition & Lot Clearing</h3>
                  <p className="text-xs text-slate-600 font-medium mt-1">
                    Multi-ton site clearouts including old timber, tin roofs, concrete slabs, and scrap metal.
                  </p>
                </div>
                <a
                  href={smsUrl}
                  className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-xs py-3 rounded-xl text-center flex items-center justify-center gap-1.5 uppercase tracking-wider"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Get Lot Quote</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Service Teaser */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
                Popular Services
              </div>
              <h2 className="text-3xl font-black text-slate-900">
                What Items Are You Looking to Haul?
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-emerald-800 hover:text-emerald-900 font-extrabold text-sm group shrink-0"
            >
              <span>View Full 10 Service Catalog</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.slice(0, 4).map((s) => (
              <div key={s.id} className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 flex flex-col justify-between shadow-xs">
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <Package className="w-4 h-4" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">{s.title}</h3>
                  <p className="text-xs text-slate-600 font-medium line-clamp-2">{s.shortDescription}</p>
                </div>
                <a
                  href={smsUrl}
                  className="w-full bg-emerald-50 hover:bg-emerald-800 hover:text-white border border-emerald-200 font-bold text-xs py-2.5 rounded-xl text-emerald-900 transition-colors text-center cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Text Photos For Quote</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Location & Coverage Map */}
      <GoogleMapSection />

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900 border border-emerald-700 text-emerald-300 text-xs font-extrabold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Fastest Way To Get A Quote
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Ready to Get Rid of Your Junk?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-medium max-w-xl">
              Tap below to open Messages and text photos of your junk pile directly to Joe at (505) 527-6573 for an immediate price estimate!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href={smsUrl}
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-black px-8 py-4 rounded-xl text-base flex items-center gap-2.5 shadow-md transition-all active:scale-95 uppercase tracking-wider"
            >
              <MessageSquare className="w-5 h-5 fill-current text-emerald-300" />
              <span>Text Photos To Joe</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="bg-white hover:bg-slate-100 text-slate-900 font-extrabold px-6 py-4 rounded-xl text-base shadow transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-700 fill-current" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
