import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, MessageSquare, Truck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const smsUrl = `sms:${COMPANY_INFO.phoneRaw}?body=${encodeURIComponent("Hi Joe! Here are photos of my junk in Albuquerque for a quote:")}`;

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Service Area', path: '/service-area' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Emergency Announcement Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold text-white">Albuquerque Dispatch Active:</span>
            <span>{COMPANY_INFO.sameDayCutoff}</span>
          </div>

          <div className="flex items-center gap-4 font-bold">
            <a
              href={smsUrl}
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Text Photos: {COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="hover:text-white flex items-center gap-1 transition-colors hidden sm:flex"
            >
              <Phone className="w-3 h-3 fill-current text-emerald-400" />
              <span>Call Dispatch</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header with Direct Menu Buttons */}
      <header className="sticky top-0 z-40 bg-red-700 text-white shadow-md border-b border-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5">
          <div className="flex items-center justify-between gap-3">
            
            {/* Logo & Brand Name */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white text-red-700 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform font-black">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="font-black text-base sm:text-2xl text-white tracking-tight leading-none group-hover:text-red-100 transition-colors uppercase">
                  JOE'S JUNK REMOVAL
                </div>
                <div className="text-[9px] sm:text-[10px] font-bold text-red-200 tracking-wider uppercase">
                  Albuquerque & Metro NM
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Buttons */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all border ${
                      isActive
                        ? 'bg-white text-red-700 border-white shadow-xs'
                        : 'bg-red-800/80 hover:bg-red-800 text-white border-red-500/60 hover:border-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Phone Button */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 px-3 sm:px-3.5 py-2 rounded-lg text-white font-black text-xs uppercase tracking-wider transition-all shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 fill-current text-emerald-400" />
                <span className="hidden sm:inline">{COMPANY_INFO.phone}</span>
                <span className="sm:hidden">CALL</span>
              </a>
            </div>

          </div>

          {/* Mobile Navigation Row: Menu Links as Direct Buttons */}
          <div className="lg:hidden mt-2 pt-2 border-t border-red-600/50 flex items-center justify-between gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-wider whitespace-nowrap transition-all border shrink-0 ${
                    isActive
                      ? 'bg-white text-red-700 border-white shadow-xs'
                      : 'bg-red-800/90 hover:bg-red-900 text-white border-red-500/60'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

        </div>
      </header>

      {/* Sticky Bottom Bar for Mobile Devices */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2 shadow-2xl flex items-center gap-2">
        {/* TEXT PHOTOS SMS LINK */}
        <a
          href={smsUrl}
          className="flex-1 bg-emerald-800 hover:bg-emerald-700 text-white font-black py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 text-xs shadow-lg active:scale-95 transition-transform uppercase tracking-wider min-h-[48px]"
        >
          <MessageSquare className="w-4 h-4 fill-current text-emerald-300 shrink-0" />
          <div className="text-left leading-tight">
            <div className="text-[9px] text-emerald-200 font-extrabold">FAST QUOTE</div>
            <div className="text-xs font-black">TEXT PHOTOS</div>
          </div>
        </a>

        {/* CALL DIRECTLY LINK */}
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="flex-1 bg-red-700 hover:bg-red-600 text-white font-black py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 text-xs shadow-md active:scale-95 transition-transform uppercase tracking-wider min-h-[48px]"
        >
          <Phone className="w-4 h-4 fill-current text-white shrink-0" />
          <div className="text-left leading-tight">
            <div className="text-[9px] text-red-200 font-extrabold">DISPATCH</div>
            <div className="text-xs font-black">CALL NOW</div>
          </div>
        </a>
      </div>
    </>
  );
};
