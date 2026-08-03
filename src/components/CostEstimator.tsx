import React, { useState } from 'react';
import { Truck, Calculator, Check, ArrowRight, Phone, Sparkles, DollarSign, Info } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface CostEstimatorProps {
  onPreFillQuote: (estimateSummary: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onPreFillQuote }) => {
  const [loadSize, setLoadSize] = useState<'single' | 'quarter' | 'half' | 'three-quarter' | 'full'>('quarter');
  const [selectedItems, setSelectedItems] = useState<string[]>(['Old Couch', 'Cardboard Boxes']);

  const loadTiers = [
    {
      id: 'single',
      label: 'Single Item',
      capacity: '1-2 Individual Items',
      priceMin: 75,
      priceMax: 125,
      description: 'Perfect for a lone mattress, refrigerator, sofa, or recliner.',
      fillPercent: 15
    },
    {
      id: 'quarter',
      label: '1/4 Truck Load',
      capacity: 'Approx. 2 Pickup Truck Beds',
      priceMin: 125,
      priceMax: 225,
      description: 'Great for small room cleanouts, a sofa + dresser + a few boxes.',
      fillPercent: 25
    },
    {
      id: 'half',
      label: '1/2 Truck Load',
      capacity: 'Approx. 4 Pickup Truck Beds',
      priceMin: 225,
      priceMax: 350,
      description: 'Ideal for garage cleanouts, 1-2 room furniture, or patio clearing.',
      fillPercent: 50
    },
    {
      id: 'three-quarter',
      label: '3/4 Truck Load',
      capacity: 'Approx. 6 Pickup Truck Beds',
      priceMin: 350,
      priceMax: 475,
      description: 'Substantial cleanouts, multiple room furniture or renovation debris.',
      fillPercent: 75
    },
    {
      id: 'full',
      label: 'Full Truck Load',
      capacity: 'Approx. 8 Pickup Truck Beds (16 ft Box Truck)',
      priceMin: 475,
      priceMax: 595,
      description: 'Whole house cleanouts, major estate clearouts, shed demolitions.',
      fillPercent: 100
    }
  ];

  const commonItemsList = [
    'Old Couch / Sofa', 'Mattress & Box Spring', 'Refrigerator / Freezer', 
    'Washer / Dryer', 'Dining Table & Chairs', 'Cardboard & Packing Boxes',
    'Branch & Yard Debris', 'Drywall & Construction Scrap', 'Patio Furniture Set',
    'Hot Tub', 'Demolished Shed Debris', 'Exercise Equipment'
  ];

  const currentTier = loadTiers.find(t => t.id === loadSize) || loadTiers[1];

  const toggleItem = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleLockInQuote = () => {
    const summary = `${currentTier.label} Estimate ($${currentTier.priceMin} - $${currentTier.priceMax}) | Items: ${selectedItems.join(', ') || 'General Junk'}`;
    onPreFillQuote(summary);
  };

  return (
    <section id="estimator" className="py-20 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-emerald-700" />
            Transparent Upfront Estimator
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Estimate Your Junk Removal Cost
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We charge based on how much truck space your junk occupies. No hidden labor fees or mileage surprises!
          </p>
        </div>

        {/* Interactive Estimator Container */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Truck Load Size Selector */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <Truck className="w-5 h-5 text-emerald-700" />
              <span>Step 1: Select Your Estimated Volume</span>
            </h3>

            {/* Truck Visual Representation */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-4 shadow-xs">
              <div className="flex items-center justify-between text-xs font-bold uppercase text-slate-500">
                <span>Joe's Haul Truck Bed (16 ft Capacity)</span>
                <span className="text-emerald-800 font-extrabold">{currentTier.fillPercent}% Full</span>
              </div>

              {/* Animated Volume Meter Bar */}
              <div className="w-full h-8 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 p-1 flex gap-1">
                <div
                  className="h-full bg-emerald-700 rounded-lg transition-all duration-500 shadow-xs"
                  style={{ width: `${currentTier.fillPercent}%` }}
                />
              </div>

              <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                <span>Empty</span>
                <span>1/4</span>
                <span>1/2</span>
                <span>3/4</span>
                <span>Full Load</span>
              </div>
            </div>

            {/* Load Size Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {loadTiers.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setLoadSize(tier.id as any)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    loadSize === tier.id
                      ? 'bg-emerald-800 border-emerald-800 text-white shadow-md ring-2 ring-emerald-600/30'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className={`text-xs font-black uppercase mb-0.5 ${loadSize === tier.id ? 'text-emerald-200' : 'text-emerald-800'}`}>{tier.label}</div>
                  <div className="text-sm font-bold">${tier.priceMin}-${tier.priceMax}</div>
                </button>
              ))}
            </div>

            {/* Selected Tier Details */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 space-y-2 text-slate-900">
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold text-slate-900">{currentTier.label}</span>
                <span className="text-xs bg-emerald-800 text-white font-bold px-2.5 py-0.5 rounded-full">
                  {currentTier.capacity}
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {currentTier.description}
              </p>
            </div>

            {/* Step 2: Item Checkboxes */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <h3 className="text-sm font-extrabold text-slate-900 flex items-center justify-between">
                <span>Step 2: Check Items You Need Hauled (Optional)</span>
                <span className="text-xs font-normal text-slate-500">({selectedItems.length} selected)</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {commonItemsList.map((item) => {
                  const isChecked = selectedItems.includes(item);
                  return (
                    <button
                      key={item}
                      onClick={() => toggleItem(item)}
                      className={`text-xs p-2.5 rounded-lg border text-left flex items-center gap-2 transition-colors cursor-pointer ${
                        isChecked
                          ? 'bg-emerald-100 border-emerald-300 text-emerald-900 font-bold'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-emerald-800 border-emerald-800 text-white' : 'border-slate-300'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="truncate">{item}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Price Summary & Instant Quote Pre-fill */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 text-white rounded-2xl p-6 space-y-6 flex flex-col justify-between h-full shadow-xl">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <div className="text-xs uppercase font-bold text-emerald-400 tracking-wider">Estimated Price Range</div>
                  <div className="text-3xl sm:text-4xl font-black text-white mt-1">
                    ${currentTier.priceMin} - ${currentTier.priceMax}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400">
                  <DollarSign className="w-6 h-6" />
                </div>
              </div>

              {/* Price Includes List */}
              <div className="py-6 space-y-3">
                <div className="text-xs font-bold uppercase text-slate-400 tracking-wider">Your Price Always Includes:</div>
                <ul className="space-y-2 text-xs text-slate-300 font-medium">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>2-Man Professional Loading Crew</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>All Heavy Lifting, Stairs & Disassembly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Hauling, Gas & Local Dump Fees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Post-Cleanout Sweep-Up</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Donation & Local Recycling Sorting</span>
                  </li>
                </ul>
              </div>

              {/* Selected items badge pill list */}
              {selectedItems.length > 0 && (
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs space-y-1.5">
                  <div className="font-bold text-slate-300">Selected Items:</div>
                  <div className="flex flex-wrap gap-1">
                    {selectedItems.map((it) => (
                      <span key={it} className="bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded text-[11px] font-semibold">
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <button
                onClick={handleLockInQuote}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.01] uppercase tracking-wider"
              >
                <span>Lock In Estimate & Book</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl border border-slate-700 flex items-center justify-center gap-2 text-sm text-center"
              >
                <Phone className="w-4 h-4 fill-current text-emerald-400" />
                <span>Or Call Joe Directly: {COMPANY_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
