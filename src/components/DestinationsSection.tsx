import React, { useState } from 'react';
import { COUNTRIES_DATA } from '../data/countries';
import { CountryInfo } from '../types';
import { ArrowRight, Clock, Languages, IndianRupee, CheckCircle2, ChevronRight, Scale } from 'lucide-react';

interface DestinationsSectionProps {
  onSelectCountry: (country: CountryInfo) => void;
  onExploreUniversities: (countryName: string) => void;
  onOpenCompare: () => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onSelectCountry,
  onExploreUniversities,
  onOpenCompare,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'eurasia' | 'central-asia' | 'saarc'>('all');

  const filteredCountries = COUNTRIES_DATA.filter((country) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'eurasia') return ['russia', 'georgia'].includes(country.id);
    if (activeTab === 'central-asia') return ['kazakhstan', 'uzbekistan', 'kyrgyzstan'].includes(country.id);
    if (activeTab === 'saarc') return ['nepal', 'bangladesh'].includes(country.id);
    return true;
  });

  return (
    <section id="countries" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold text-[#16A6A1] uppercase tracking-wider mb-1.5">
              Verified Study Destinations
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#102B46] tracking-tight font-display">
              Explore Top MBBS Destinations for Indian Students
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-2xl">
              Compare accredited government state universities across world-renowned medical education hubs, thoroughly audited for NMC Foreign Medical Graduate Licentiate (FMGL) compliance.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Country comparison launcher */}
            <button
              onClick={onOpenCompare}
              className="px-4 py-2 text-xs font-bold text-[#102B46] bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-2 transition cursor-pointer"
            >
              <Scale className="w-4 h-4 text-[#16A6A1]" />
              <span>Compare Countries Side-by-Side</span>
            </button>
          </div>
        </div>

        {/* Region Filter Tabs (Interactive Filter Controls - §1.A buttons allowed) */}
        <div className="flex items-center gap-2 pb-6 border-b border-slate-100 overflow-x-auto">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#102B46] text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            All Destinations ({COUNTRIES_DATA.length})
          </button>
          <button
            onClick={() => setActiveTab('eurasia')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'eurasia'
                ? 'bg-[#102B46] text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            Russia & Georgia (European Standards)
          </button>
          <button
            onClick={() => setActiveTab('central-asia')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'central-asia'
                ? 'bg-[#102B46] text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            Central Asia (Kazakhstan, Uzbekistan, Kyrgyzstan)
          </button>
          <button
            onClick={() => setActiveTab('saarc')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'saarc'
                ? 'bg-[#102B46] text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            Neighbouring Hubs (Nepal, Bangladesh)
          </button>
        </div>

        {/* Asymmetrical Dynamic Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {filteredCountries.map((country, idx) => {
            const isFeatured = idx === 0 || country.id === 'russia' || country.id === 'georgia';

            return (
              <div
                key={country.id}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-[#16A6A1]/50 hover:shadow-md transition-all flex flex-col group"
              >
                {/* Visual Header with flag and image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={country.image}
                    alt={`${country.name} medical university campus`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Flag and Country Title */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                    <span className="text-base">{country.flag}</span>
                    <span className="text-xs font-bold text-slate-900">{country.name}</span>
                  </div>

                  {/* FMGL Compliance Tag */}
                  <div className="absolute top-3 right-3 bg-[#102B46]/90 backdrop-blur-md px-2 py-1 rounded-md text-[10px] font-semibold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>NMC Compliant</span>
                  </div>

                  {/* Tagline */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-medium text-slate-200 line-clamp-1">
                      {country.tagline}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  
                  {/* Quick specs grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs py-2 border-b border-slate-100">
                    <div>
                      <div className="text-[10px] text-slate-600 uppercase font-semibold">Tuition / Year</div>
                      <div className="font-bold text-[#102B46]">{country.avgTuitionPerYearINR}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-600 uppercase font-semibold">Course Duration</div>
                      <div className="font-bold text-slate-800">{country.courseDuration}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-600 uppercase font-semibold">Medium</div>
                      <div className="font-medium text-slate-700">100% English</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-600 uppercase font-semibold">Indian Food</div>
                      <div className="font-medium text-emerald-700">{country.indianFoodAvailability} Availability</div>
                    </div>
                  </div>

                  {/* Key Highlights list */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-bold text-slate-700">Key Advantages:</div>
                    {country.keyHighlights.slice(0, 2).map((item, hIdx) => (
                      <div key={hIdx} className="text-xs text-slate-600 flex items-start gap-1.5 leading-snug">
                        <span className="text-[#16A6A1] font-bold">·</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="pt-2 flex items-center gap-2 border-t border-slate-100">
                    <button
                      onClick={() => onSelectCountry(country)}
                      className="flex-1 py-2 px-3 text-xs font-bold text-center text-[#102B46] bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition cursor-pointer"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() => onExploreUniversities(country.name)}
                      className="py-2 px-3 text-xs font-bold text-white bg-[#102B46] hover:bg-[#2457A6] rounded-lg transition flex items-center gap-1 cursor-pointer"
                      title="View universities in this country"
                    >
                      <span>Explore</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#16A6A1]" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
