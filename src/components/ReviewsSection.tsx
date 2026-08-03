import React from 'react';
import { Star, CheckCircle2, Quote, ThumbsUp, ShieldCheck } from 'lucide-react';
import { REVIEWS, COMPANY_INFO } from '../data/companyData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Verified Customer Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            What Your Albuquerque Neighbors Say
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Over 380+ 5-star reviews across Google & local Albuquerque directories.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-2xl border border-slate-200 shadow-xs mt-2">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <div className="text-left">
              <span className="text-lg font-black text-slate-900">4.9 out of 5 Stars</span>
              <div className="text-xs text-slate-500">384 Verified Local Reviews</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-emerald-700 transition-all flex flex-col justify-between space-y-4 shadow-xs"
            >
              <div className="space-y-3">
                {/* Rating & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{rev.date}</span>
                </div>

                {/* Service Badge */}
                <div className="inline-block bg-slate-100 text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-md border border-slate-200">
                  Service: {rev.service}
                </div>

                {/* Comment */}
                <p className="text-slate-700 text-sm leading-relaxed italic font-medium">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-sm font-extrabold text-slate-900">{rev.author}</div>
                  <div className="text-xs text-slate-500 font-medium">{rev.location}</div>
                </div>

                {rev.verified && (
                  <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Verified Customer</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
