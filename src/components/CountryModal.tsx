import React from 'react';
import { CountryInfo } from '../types';
import { X, CheckCircle2, ArrowRight, Bed, Clock, Languages, IndianRupee, ShieldCheck } from 'lucide-react';

interface CountryModalProps {
  country: CountryInfo | null;
  onClose: () => void;
  onExploreUniversities: (countryName: string) => void;
}

export const CountryModal: React.FC<CountryModalProps> = ({
  country,
  onClose,
  onExploreUniversities,
}) => {
  if (!country) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-150">
        
        {/* Banner with flag and photo */}
        <div className="relative h-56 w-full shrink-0 bg-slate-900">
          <img
            src={country.image}
            alt={country.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102B46] via-[#102B46]/60 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold text-slate-900 flex items-center gap-1.5 shadow-sm">
            <span className="text-base">{country.flag}</span>
            <span>{country.name} Overview</span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="text-xs font-semibold text-[#16A6A1] uppercase tracking-wider">
              NMC FMGL 2021 Compliant
            </div>
            <h3 className="text-2xl font-bold font-display leading-tight">
              MBBS in {country.name} for Indian Students
            </h3>
            <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">{country.tagline}</p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-600">
          
          {/* Quick Specifications */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Tuition / Year</div>
              <div className="font-extrabold text-[#102B46] text-xs font-display">
                {country.avgTuitionPerYearINR}
              </div>
            </div>

            <div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Living Cost</div>
              <div className="font-bold text-slate-800 text-xs">
                {country.avgLivingCostPerMonthINR}/mo
              </div>
            </div>

            <div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Course Duration</div>
              <div className="font-bold text-slate-800 text-xs">
                {country.courseDuration}
              </div>
            </div>

            <div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Indian Food</div>
              <div className="font-bold text-emerald-700 text-xs">
                {country.indianFoodAvailability} Availability
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <div className="text-xs font-bold text-[#102B46] uppercase tracking-wider mb-2">
              Country Overview:
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {country.description}
            </p>
          </div>

          {/* Key Advantages */}
          <div>
            <div className="text-xs font-bold text-[#102B46] uppercase tracking-wider mb-2">
              Why Indian Students Choose {country.name}:
            </div>
            <ul className="space-y-1.5">
              {country.keyHighlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700 leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-[#16A6A1] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Universities list */}
          <div>
            <div className="text-xs font-bold text-[#102B46] uppercase tracking-wider mb-2">
              Recognized State Universities:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {country.popularUniversities.map((u) => (
                <span
                  key={u}
                  className="px-2.5 py-1 bg-slate-100 rounded-lg text-slate-800 font-medium text-xs border border-slate-200"
                >
                  {u}
                </span>
              ))}
            </div>
          </div>

          {/* Climate & Food note */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="font-bold text-[#102B46] text-xs">Climate & Living:</div>
            <p className="text-slate-600">{country.climate}</p>
          </div>

          {/* Eligibility Note */}
          <div className="p-3.5 rounded-xl bg-teal-50/60 border border-teal-200/60 space-y-1">
            <div className="font-bold text-[#102B46] text-xs">Eligibility Note:</div>
            <p className="text-slate-700">{country.eligibilityNotes}</p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-xl transition cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onExploreUniversities(country.name);
            }}
            className="px-6 py-2.5 text-xs font-bold text-white bg-[#102B46] hover:bg-[#2457A6] rounded-xl shadow transition flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Universities in {country.name}</span>
            <ArrowRight className="w-4 h-4 text-[#16A6A1]" />
          </button>
        </div>

      </div>
    </div>
  );
};
