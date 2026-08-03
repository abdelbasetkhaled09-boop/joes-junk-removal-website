import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../data/companyData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Got Questions? Joe's Got Answers.
          </h2>
          <p className="text-slate-600 text-base">
            Everything you need to know about our junk removal process, same-day scheduling, and pricing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-colors shadow-xs"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-extrabold text-base sm:text-lg text-slate-900 hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div className={`p-1 rounded-full bg-slate-100 text-emerald-800 transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 bg-emerald-100' : ''
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-700 leading-relaxed border-t border-slate-200 pt-4 bg-slate-50/50 font-medium animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Phone Callout */}
        <div className="mt-12 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
          <h3 className="text-lg font-bold text-slate-900">Have a specific question not answered here?</h3>
          <p className="text-xs text-emerald-900 font-medium">Joe or a team dispatcher is available right now to take your call!</p>
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-black px-6 py-3 rounded-xl text-sm transition-transform hover:scale-105"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call Joe: {COMPANY_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
