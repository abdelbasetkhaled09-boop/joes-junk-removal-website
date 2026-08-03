import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, CheckCircle2, Phone, ChevronsLeftRight, MoveHorizontal } from 'lucide-react';
import { BEFORE_AFTER_CASES, COMPANY_INFO } from '../data/companyData';

interface BeforeAfterGalleryProps {
  onOpenQuote: () => void;
}

export const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ onOpenQuote }) => {
  const [activeCase, setActiveCase] = useState(BEFORE_AFTER_CASES[0]);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // 0 to 100 percentage
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle position calculation based on client X
  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            Interactive Transformations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Drag to Compare Before & After
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Slide the handle left or right to reveal how Joe's crew transforms junk-filled spaces in a single visit!
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {BEFORE_AFTER_CASES.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCase(item);
                setSliderPosition(50);
              }}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeCase.id === item.id
                  ? 'bg-emerald-800 text-white shadow-md scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Active Case Viewer */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
          
          {/* DRAGGABLE BEFORE / AFTER SLIDER */}
          <div className="lg:col-span-7 space-y-3">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onTouchStart={(e) => handleMove(e.touches[0].clientX)}
              className="relative rounded-2xl overflow-hidden border-2 border-slate-200 h-80 sm:h-96 shadow-lg bg-slate-900 select-none cursor-ew-resize group"
            >
              {/* Layer 1: AFTER Image (Full Background) */}
              <img
                src={activeCase.imageAfter}
                alt={`${activeCase.title} - After Cleanout`}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />

              {/* Layer 2: BEFORE Image (Clipped dynamically based on slider position) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none transition-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={activeCase.imageBefore}
                  alt={`${activeCase.title} - Before Junk Removal`}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Badges Overlay */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="px-3 py-1 rounded-lg text-[11px] sm:text-xs font-black uppercase tracking-wider bg-amber-600/90 text-white shadow-md border border-amber-400/50 backdrop-blur-xs">
                  ⚠️ BEFORE (Junk)
                </span>
              </div>
              <div className="absolute top-4 right-4 z-10 pointer-events-none">
                <span className="px-3 py-1 rounded-lg text-[11px] sm:text-xs font-black uppercase tracking-wider bg-emerald-800/90 text-white shadow-md border border-emerald-400/50 backdrop-blur-xs">
                  ✨ AFTER (Clean)
                </span>
              </div>

              {/* Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.8)] z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Handle Knob */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-emerald-800 shadow-2xl border-2 border-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ChevronsLeftRight className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-800" />
                </div>
              </div>

              {/* Range Input for Native Touch, Mouse & Accessibility */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Drag before and after slider"
              />

              {/* Drag Instruction Banner overlay on bottom */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-slate-900/85 text-white backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700/80 text-[11px] font-extrabold uppercase tracking-wider z-10 pointer-events-none flex items-center gap-1.5 shadow-md">
                <MoveHorizontal className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>Drag handle to compare</span>
              </div>
            </div>

            {/* Preset Buttons for Quick Viewing */}
            <div className="flex items-center justify-between gap-2 pt-1">
              <div className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Quick View Presets:
              </div>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setSliderPosition(100)}
                  className={`px-3 py-1 rounded-lg text-xs font-extrabold transition-colors cursor-pointer border ${
                    sliderPosition === 100
                      ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                  }`}
                >
                  Full Before
                </button>
                <button
                  onClick={() => setSliderPosition(50)}
                  className={`px-3 py-1 rounded-lg text-xs font-extrabold transition-colors cursor-pointer border ${
                    sliderPosition === 50
                      ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                  }`}
                >
                  50 / 50 Split
                </button>
                <button
                  onClick={() => setSliderPosition(0)}
                  className={`px-3 py-1 rounded-lg text-xs font-extrabold transition-colors cursor-pointer border ${
                    sliderPosition === 0
                      ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                  }`}
                >
                  Full After
                </button>
              </div>
            </div>
          </div>

          {/* Details & Copy */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">{activeCase.category}</span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">{activeCase.title}</h3>
            </div>

            <div className="space-y-4 text-sm">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-amber-600 text-xs uppercase">Before Condition:</div>
                <p className="text-slate-700 font-medium">{activeCase.beforeDesc}</p>
              </div>

              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 space-y-1">
                <div className="font-bold text-emerald-800 text-xs uppercase flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>After Joe's Cleanout:</span>
                </div>
                <p className="text-emerald-950 font-medium">{activeCase.afterDesc}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenQuote}
                className="flex-1 bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold py-3.5 px-4 rounded-xl text-sm text-center shadow-md transition-colors cursor-pointer"
              >
                Get Similar Transformation
              </button>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold py-3.5 px-4 rounded-xl text-sm text-center border border-slate-200 flex items-center justify-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-emerald-800 fill-current" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
