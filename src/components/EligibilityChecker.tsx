import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, HelpCircle, ArrowRight, Sparkles, RefreshCw } from 'lucide-react';

interface EligibilityCheckerProps {
  onOpenCounselling: () => void;
}

export const EligibilityChecker: React.FC<EligibilityCheckerProps> = ({ onOpenCounselling }) => {
  const [pcbPercentage, setPcbPercentage] = useState<number>(65);
  const [category, setCategory] = useState<'General' | 'OBC' | 'SC/ST' | 'EWS'>('General');
  const [neetStatus, setNeetStatus] = useState<'Qualified' | 'Appearing' | 'Not Qualified'>('Qualified');
  const [neetScore, setNeetScore] = useState<number>(380);
  const [age, setAge] = useState<number>(18);
  const [evaluated, setEvaluated] = useState<boolean>(true);

  // Evaluate eligibility based on NMC FMGL 2021 norms
  const minRequiredPCB = category === 'General' || category === 'EWS' ? 50 : 40;
  const isPCBEligible = pcbPercentage >= minRequiredPCB;
  const isAgeEligible = age >= 17;
  const isNeetEligible = neetStatus === 'Qualified' || neetStatus === 'Appearing';

  const isOverallEligible = isPCBEligible && isAgeEligible && isNeetEligible;

  return (
    <section id="eligibility" className="py-16 md:py-24 bg-[#F4F6F9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-[#16A6A1] uppercase tracking-wider mb-1.5">
            Self-Assessment Tool
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#102B46] tracking-tight font-display">
            Interactive MBBS Abroad Eligibility Checker
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Verify whether you meet the statutory eligibility guidelines defined by the National Medical Commission (NMC) and foreign state medical faculties.
          </p>
        </div>

        {/* 2-Column Assessment Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            
            <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
              <h3 className="text-sm font-bold text-[#102B46] uppercase tracking-wider">
                Enter Your Academic Parameters
              </h3>
              <span className="text-xs text-slate-400">Step 1 of 2</span>
            </div>

            {/* Class 12 PCB Percentage Slider & Input */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label className="font-semibold text-slate-700">
                  Class 12 PCB Aggregate Score (Physics + Chemistry + Biology)
                </label>
                <span className="font-bold text-[#102B46] font-display text-sm tabular-nums">
                  {pcbPercentage}%
                </span>
              </div>
              <input
                type="range"
                min="35"
                max="100"
                value={pcbPercentage}
                onChange={(e) => setPcbPercentage(Number(e.target.value))}
                className="w-full accent-[#16A6A1] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>35%</span>
                <span className="text-slate-600 font-medium">Min. 50% for Gen / 40% for Reserved</span>
                <span>100%</span>
              </div>
            </div>

            {/* Category Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700">
                Reservation Category (as per Govt of India)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['General', 'OBC', 'SC/ST', 'EWS'] as const).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                      category === cat
                        ? 'bg-[#102B46] text-white border-[#102B46] shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* NEET Status */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700">
                NEET Qualification Status *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'Qualified', label: 'NEET Qualified' },
                  { id: 'Appearing', label: 'Appearing in 2026' },
                  { id: 'Not Qualified', label: 'Not Qualified Yet' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setNeetStatus(item.id as any)}
                    className={`py-2 px-3 text-xs font-semibold rounded-xl border text-center transition-all cursor-pointer ${
                      neetStatus === item.id
                        ? 'bg-[#102B46] text-white border-[#102B46] shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Age selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Age on or before 31st December 2026
                </label>
                <select
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#16A6A1]"
                >
                  <option value={16}>Under 17 Years (Ineligible for 2026)</option>
                  <option value={17}>17 Years</option>
                  <option value={18}>18 Years</option>
                  <option value={19}>19 Years</option>
                  <option value={20}>20 Years</option>
                  <option value={21}>21 Years or Older</option>
                </select>
              </div>

              {neetStatus === 'Qualified' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your NEET Score (Out of 720)
                  </label>
                  <input
                    type="number"
                    min="100"
                    max="720"
                    value={neetScore}
                    onChange={(e) => setNeetScore(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#16A6A1]"
                    placeholder="e.g. 380"
                  />
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Instant Evaluation Result */}
          <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
            
            <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
              <h3 className="text-sm font-bold text-[#102B46] uppercase tracking-wider">
                Assessment Outcome
              </h3>
              <span className="text-[11px] font-semibold text-slate-400">NMC FMGL Audit</span>
            </div>

            {/* Big Status Banner */}
            <div
              className={`p-5 rounded-xl border ${
                isOverallEligible
                  ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                  : 'bg-amber-50/70 border-amber-200 text-amber-950'
              }`}
            >
              <div className="flex items-start gap-3">
                {isOverallEligible ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="text-base font-bold font-display">
                    {isOverallEligible
                      ? 'You are Eligible for MBBS Abroad Admissions!'
                      : 'Attention Needed on Eligibility Criteria'}
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    {isOverallEligible
                      ? `Your profile satisfies both Class 12 aggregate and age requirements for ${category} category.`
                      : 'One or more statutory criteria need attention before applying.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Criterion breakdown */}
            <div className="space-y-3 text-xs">
              
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-slate-700">12th PCB Aggregate (Min {minRequiredPCB}%)</span>
                <span className={`font-bold ${isPCBEligible ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {isPCBEligible ? `Eligible (${pcbPercentage}%)` : `Needs ${minRequiredPCB}%`}
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-slate-700">Minimum Age (17 yrs by Dec 31)</span>
                <span className={`font-bold ${isAgeEligible ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {isAgeEligible ? `Eligible (${age} yrs)` : 'Under 17 Yrs'}
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-slate-700">NEET Requirement</span>
                <span className={`font-bold ${isNeetEligible ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {neetStatus === 'Qualified'
                    ? 'Qualified (Valid 3 Yrs)'
                    : neetStatus === 'Appearing'
                    ? 'Provisional on 2026 Result'
                    : 'Mandatory to Qualify'}
                </span>
              </div>

            </div>

            {/* Recommended destinations for profile */}
            {isOverallEligible && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-[#102B46]">
                  Top Suitable Countries for Your Profile:
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-700">
                  <span className="px-2 py-0.5 bg-white border border-slate-200 rounded-md font-medium">🇷🇺 Russia</span>
                  <span className="px-2 py-0.5 bg-white border border-slate-200 rounded-md font-medium">🇬🇪 Georgia</span>
                  <span className="px-2 py-0.5 bg-white border border-slate-200 rounded-md font-medium">🇰🇿 Kazakhstan</span>
                  <span className="px-2 py-0.5 bg-white border border-slate-200 rounded-md font-medium">🇺🇿 Uzbekistan</span>
                  <span className="px-2 py-0.5 bg-white border border-slate-200 rounded-md font-medium">🇳🇵 Nepal</span>
                </div>
              </div>
            )}

            {/* Primary Action */}
            <button
              onClick={onOpenCounselling}
              className="w-full py-3 px-4 text-xs font-bold text-white bg-[#102B46] hover:bg-[#2457A6] rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Get Your Personalized Eligibility & University Dossier</span>
              <ArrowRight className="w-4 h-4 text-[#16A6A1]" />
            </button>

            {/* Statutory Disclaimer required by prompt */}
            <p className="text-[11px] text-slate-600 italic leading-relaxed pt-1">
              * Note: Admission eligibility and regulatory requirements may vary by university, country, and applicable Indian regulations. Students must verify the latest National Medical Commission guidelines before applying.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
