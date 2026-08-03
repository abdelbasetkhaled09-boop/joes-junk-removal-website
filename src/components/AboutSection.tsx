import React from 'react';
import { ShieldCheck, HeartHandshake, Recycle, Award, Phone, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import furnitureHaulingImg from '../assets/images/furniture_hauling_1785782747287.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image & Crew Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src={furnitureHaulingImg}
                alt="Joe's Junk Removal crew carefully hauling furniture in Albuquerque"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center text-white font-black text-lg shrink-0">
                    JJ
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">Joe's Local Commitment</div>
                    <div className="text-xs text-emerald-800 font-bold">100% Albuquerque Owned & Operated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              About Joe's Junk Removal LLC
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Dedicated to Clearing Your Space with Care & Integrity
            </h2>

            <p className="text-slate-700 text-base leading-relaxed font-medium">
              <strong>Joe's Junk Removal LLC</strong> is committed to helping homeowners and businesses quickly clear unwanted junk with reliable service, fair pricing, and professional workmanship. Whether it's one item or a full property cleanout, the team gets the job done efficiently.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              We started in Albuquerque with a single haul truck and a simple philosophy: treat every customer like a neighbor, provide upfront pricing without surprises, and handle all the heavy lifting so our clients don't have to lift a finger.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                  <HeartHandshake className="w-5 h-5 text-emerald-700" />
                  <span>Donation-First Initiative</span>
                </div>
                <p className="text-xs text-slate-600 font-medium">
                  Gently used furniture, working appliances, and household items are donated directly to Albuquerque charities and shelters.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                  <Recycle className="w-5 h-5 text-emerald-700" />
                  <span>Eco-Friendly Recycling</span>
                </div>
                <p className="text-xs text-slate-600 font-medium">
                  Scrap metals, electronics, and yard green waste are delivered to local recycling centers to minimize landfill impact.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center gap-4">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold px-6 py-3.5 rounded-xl text-sm flex items-center gap-2 shadow-md transition-colors"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Speak with Joe: {COMPANY_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
