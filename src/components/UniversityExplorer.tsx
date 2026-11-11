import React, { useState } from 'react';
import { UNIVERSITIES_DATA } from '../data/universities';
import { University } from '../types';
import { Search, Filter, Building2, MapPin, ExternalLink, ShieldCheck, Stethoscope, ArrowRight, Bed, Clock } from 'lucide-react';

interface UniversityExplorerProps {
  onSelectUniversity: (uni: University) => void;
  initialCountryFilter?: string;
}

export const UniversityExplorer: React.FC<UniversityExplorerProps> = ({
  onSelectUniversity,
  initialCountryFilter = 'All',
}) => {
  const [selectedCountry, setSelectedCountry] = useState<string>(initialCountryFilter);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedBudget, setSelectedBudget] = useState<string>('All');

  const countries = ['All', 'Russia', 'Georgia', 'Kazakhstan', 'Uzbekistan', 'Kyrgyzstan', 'Nepal'];

  const filteredUniversities = UNIVERSITIES_DATA.filter((uni) => {
    // Country filter
    if (selectedCountry !== 'All' && uni.country.toLowerCase() !== selectedCountry.toLowerCase()) {
      return false;
    }
    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = uni.name.toLowerCase().includes(q);
      const matchCity = uni.city.toLowerCase().includes(q);
      const matchCountry = uni.country.toLowerCase().includes(q);
      if (!matchName && !matchCity && !matchCountry) return false;
    }
    // Type filter
    if (selectedType !== 'All') {
      if (selectedType === 'Public' && !uni.type.includes('Public')) return false;
      if (selectedType === 'Autonomous' && !uni.type.includes('Autonomous')) return false;
    }
    // Budget filter
    if (selectedBudget === 'under35') {
      if (uni.tuitionPerYearINR > 350000) return false;
    } else if (selectedBudget === '35to60') {
      if (uni.tuitionPerYearINR <= 350000 || uni.tuitionPerYearINR > 600000) return false;
    } else if (selectedBudget === 'above60') {
      if (uni.tuitionPerYearINR <= 600000) return false;
    }

    return true;
  });

  return (
    <section id="universities" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold text-[#16A6A1] uppercase tracking-wider mb-1.5">
              Verified Medical Faculties
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#102B46] tracking-tight font-display">
              Featured Medical Universities Abroad
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-2xl">
              Browse world-recognized government state medical institutions. Filter by destination, tuition range, bed capacity, and accreditation standards.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Showing <strong className="text-[#102B46] font-bold">{filteredUniversities.length}</strong> accredited institutions
          </div>
        </div>

        {/* Filter Bar Controls */}
        <div className="bg-[#F4F6F9] p-4 rounded-2xl border border-slate-200 mb-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search university or city..."
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#16A6A1]/40 focus:border-[#16A6A1]"
              />
            </div>

            {/* Country Selector */}
            <div>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#16A6A1]/40 focus:border-[#16A6A1]"
              >
                {countries.map((c) => (
                  <option key={c} value={c}>
                    Country: {c}
                  </option>
                ))}
              </select>
            </div>

            {/* University Type Selector */}
            <div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#16A6A1]/40 focus:border-[#16A6A1]"
              >
                <option value="All">Institution Type: All Types</option>
                <option value="Public">Public / State University</option>
                <option value="Autonomous">Autonomous State Academy</option>
              </select>
            </div>

            {/* Budget Range Selector */}
            <div>
              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#16A6A1]/40 focus:border-[#16A6A1]"
              >
                <option value="All">Annual Tuition: Any Budget</option>
                <option value="under35">Under ₹3.5 Lakh / Year</option>
                <option value="35to60">₹3.5 Lakh – ₹6.0 Lakh / Year</option>
                <option value="above60">Above ₹6.0 Lakh / Year</option>
              </select>
            </div>

          </div>
        </div>

        {/* Universities List Grid */}
        {filteredUniversities.length === 0 ? (
          <div className="text-center py-12 bg-[#F4F6F9] rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-600">No medical universities match your filter criteria.</p>
            <button
              onClick={() => {
                setSelectedCountry('All');
                setSearchQuery('');
                setSelectedType('All');
                setSelectedBudget('All');
              }}
              className="mt-3 text-xs font-bold text-[#16A6A1] hover:underline cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUniversities.map((uni) => (
              <div
                key={uni.id}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-[#16A6A1]/50 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* University Campus Image */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    <img
                      src={uni.image}
                      alt={uni.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    {/* Location Badge */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md flex items-center gap-1 shadow-sm">
                      <MapPin className="w-3 h-3 text-[#16A6A1]" />
                      <span className="text-[11px] font-bold text-slate-800">
                        {uni.city}, {uni.country}
                      </span>
                    </div>

                    {/* Establishment year */}
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-white">
                      Est. {uni.established}
                    </div>

                    {/* Title inside bottom of photo banner */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-sm font-bold text-white line-clamp-1 font-display">
                        {uni.name}
                      </h3>
                      {uni.nativeName && (
                        <p className="text-[10px] text-slate-300 truncate">
                          {uni.nativeName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    
                    {/* Metadata unboxed display */}
                    <div className="flex items-center gap-2 text-[11px] text-slate-500">
                      <span>{uni.type}</span>
                      <span aria-hidden="true">·</span>
                      <span>{uni.totalCourseDuration}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-emerald-700 font-medium">{uni.medium}</span>
                    </div>

                    {/* Key stats row */}
                    <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                      <div>
                        <div className="text-[10px] text-slate-600 uppercase font-semibold">Tuition / Year</div>
                        <div className="font-extrabold text-[#102B46] font-display tabular-nums">
                          ₹{(uni.tuitionPerYearINR / 100000).toFixed(2)} Lakh
                        </div>
                        <div className="text-[10px] text-slate-600 font-mono">
                          (${uni.tuitionPerYearUSD.toLocaleString()} USD)
                        </div>
                      </div>

                      <div>
                        <div className="text-[10px] text-slate-600 uppercase font-semibold">Teaching Hospital</div>
                        <div className="font-bold text-slate-800 flex items-center gap-1">
                          <Bed className="w-3.5 h-3.5 text-[#16A6A1]" />
                          <span className="tabular-nums">{uni.hospitalBeds.toLocaleString()} Beds</span>
                        </div>
                        <div className="text-[10px] text-slate-600">Clinical Postings</div>
                      </div>
                    </div>

                    {/* Recognition Tags */}
                    <div>
                      <div className="text-[10px] text-slate-600 uppercase font-semibold mb-1">
                        Accreditations & Recognition:
                      </div>
                      <div className="flex flex-wrap gap-1 text-[11px] text-slate-600">
                        {uni.recognition.map((rec) => (
                          <span key={rec} className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-700 font-mono text-[10px]">
                            {rec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bullet highlights */}
                    <ul className="text-xs text-slate-600 space-y-1 pt-1">
                      {uni.highlights.slice(0, 2).map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5 leading-snug">
                          <span className="text-[#16A6A1] font-bold">✓</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => onSelectUniversity(uni)}
                    className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#102B46] hover:bg-[#2457A6] rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>View University Profile & Fees</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#16A6A1]" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
