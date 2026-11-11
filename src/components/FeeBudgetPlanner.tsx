import React, { useState } from 'react';
import { Calculator, IndianRupee, HelpCircle, ArrowRight, ShieldCheck, Download, AlertCircle } from 'lucide-react';

interface FeeBudgetPlannerProps {
  onOpenCounselling: () => void;
}

interface CountryBudgetModel {
  country: string;
  flag: string;
  tuitionPerYearINR: number;
  hostelPerYearINR: number;
  foodPerYearINR: number;
  insuranceAndVisaPerYearINR: number;
  travelPerYearINR: number;
  years: number;
  note: string;
}

const BUDGET_PRESETS: Record<string, CountryBudgetModel> = {
  Russia: {
    country: 'Russia',
    flag: '🇷🇺',
    tuitionPerYearINR: 380000,
    hostelPerYearINR: 35000,
    foodPerYearINR: 120000,
    insuranceAndVisaPerYearINR: 25000,
    travelPerYearINR: 60000,
    years: 6,
    note: 'Tuition is heavily subsidized by the Russian Federal Ministry of Health. Hostel rates in Olympic village dorms are very economical.',
  },
  Georgia: {
    country: 'Georgia',
    flag: '🇬🇪',
    tuitionPerYearINR: 620000,
    hostelPerYearINR: 110000,
    foodPerYearINR: 150000,
    insuranceAndVisaPerYearINR: 35000,
    travelPerYearINR: 70000,
    years: 6,
    note: 'European standard clinical training with USMLE-integrated curriculum and higher living standard in capital city Tbilisi.',
  },
  Kazakhstan: {
    country: 'Kazakhstan',
    flag: '🇰🇿',
    tuitionPerYearINR: 360000,
    hostelPerYearINR: 48000,
    foodPerYearINR: 110000,
    insuranceAndVisaPerYearINR: 20000,
    travelPerYearINR: 40000,
    years: 5,
    note: 'Fast 3.5-hour direct flight from Delhi, affordable Indian mess food, and 5-year structured curriculum plus 1-year internship.',
  },
  Uzbekistan: {
    country: 'Uzbekistan',
    flag: '🇺🇿',
    tuitionPerYearINR: 310000,
    hostelPerYearINR: 40000,
    foodPerYearINR: 100000,
    insuranceAndVisaPerYearINR: 20000,
    travelPerYearINR: 40000,
    years: 5,
    note: 'One of the most budget-friendly destinations with renovated state medical faculties and close cultural hospitality.',
  },
  Nepal: {
    country: 'Nepal',
    flag: '🇳🇵',
    tuitionPerYearINR: 1050000,
    hostelPerYearINR: 85000,
    foodPerYearINR: 120000,
    insuranceAndVisaPerYearINR: 15000,
    travelPerYearINR: 25000,
    years: 5,
    note: 'Curriculum identical to Indian MBBS, highest FMGE pass rate, no passport or visa needed for Indian citizens.',
  },
};

export const FeeBudgetPlanner: React.FC<FeeBudgetPlannerProps> = ({ onOpenCounselling }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('Russia');
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [includeFood, setIncludeFood] = useState<boolean>(true);
  const [includeTravel, setIncludeTravel] = useState<boolean>(true);

  const data = BUDGET_PRESETS[selectedCountry];

  // Exchange rate approximation: 1 USD = 83.5 INR
  const exchangeRate = 83.5;

  const annualTuition = data.tuitionPerYearINR;
  const annualHostel = data.hostelPerYearINR;
  const annualFood = includeFood ? data.foodPerYearINR : 0;
  const annualInsuranceVisa = data.insuranceAndVisaPerYearINR;
  const annualTravel = includeTravel ? data.travelPerYearINR : 0;

  const annualTotalINR = annualTuition + annualHostel + annualFood + annualInsuranceVisa + annualTravel;
  const totalCompleteCourseINR = annualTotalINR * data.years;

  const formatCost = (inrVal: number) => {
    if (currency === 'INR') {
      return `₹${(inrVal / 100000).toFixed(2)} Lakh`;
    }
    return `$${Math.round(inrVal / exchangeRate).toLocaleString()}`;
  };

  return (
    <section id="budget" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-[#16A6A1] uppercase tracking-wider mb-1.5">
            Transparent Financial Planning
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#102B46] tracking-tight font-display">
            MBBS Abroad Fees & 6-Year Budget Estimator
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            No surprise escalations or concealed agent surcharges. Explore all real-world line items including tuition, hostel, meals, medical insurance, and flights.
          </p>
        </div>

        {/* Interactive Calculator Shell */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Configuration Controls */}
          <div className="lg:col-span-7 bg-[#F4F6F9] p-6 md:p-8 rounded-2xl border border-slate-200 space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
              <h3 className="text-sm font-bold text-[#102B46] uppercase tracking-wider">
                Select Study Destination
              </h3>
              
              {/* Currency toggle */}
              <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 text-xs">
                <button
                  type="button"
                  onClick={() => setCurrency('INR')}
                  className={`px-2.5 py-1 font-semibold rounded-md transition cursor-pointer ${
                    currency === 'INR' ? 'bg-[#102B46] text-white' : 'text-slate-600'
                  }`}
                >
                  INR (₹)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('USD')}
                  className={`px-2.5 py-1 font-semibold rounded-md transition cursor-pointer ${
                    currency === 'USD' ? 'bg-[#102B46] text-white' : 'text-slate-600'
                  }`}
                >
                  USD ($)
                </button>
              </div>
            </div>

            {/* Country Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {Object.keys(BUDGET_PRESETS).map((cKey) => {
                const c = BUDGET_PRESETS[cKey];
                const isSelected = selectedCountry === cKey;
                return (
                  <button
                    key={cKey}
                    type="button"
                    onClick={() => setSelectedCountry(cKey)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#102B46] text-white border-[#102B46] shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{c.flag}</span>
                      <span className="text-xs font-bold">{c.country}</span>
                    </div>
                    <span className={`text-[10px] font-mono ${isSelected ? 'text-[#16A6A1]' : 'text-slate-400'}`}>
                      {c.years} Yrs
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Inclusions Toggle */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-3">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                Budget Line-Item Inclusions:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={includeFood}
                    onChange={(e) => setIncludeFood(e.target.checked)}
                    className="accent-[#16A6A1] w-4 h-4 rounded cursor-pointer"
                  />
                  <span className="text-slate-700 font-medium">Include Indian Food Mess (3 meals/day)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={includeTravel}
                    onChange={(e) => setIncludeTravel(e.target.checked)}
                    className="accent-[#16A6A1] w-4 h-4 rounded cursor-pointer"
                  />
                  <span className="text-slate-700 font-medium">Include Annual Round-trip Flights</span>
                </label>
              </div>
            </div>

            {/* Note for selected country */}
            <div className="text-xs text-slate-600 bg-teal-50/60 border border-teal-200/60 p-3.5 rounded-xl leading-relaxed">
              <strong className="text-[#102B46]">Regional Notes:</strong> {data.note}
            </div>

          </div>

          {/* Right Column: Breakdown & Total Summary */}
          <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
            
            <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-[#16A6A1] uppercase tracking-wider">
                  Cost Breakdown
                </span>
                <h3 className="text-base font-bold text-[#102B46] font-display">
                  {data.country} ({data.years}-Year Programme)
                </h3>
              </div>
              <span className="text-2xl">{data.flag}</span>
            </div>

            {/* Breakdown lines */}
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-600">University Tuition Fee (Annual)</span>
                <span className="font-bold text-[#102B46] tabular-nums font-mono">
                  {formatCost(annualTuition)}
                </span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-600">Campus Hostel / Dormitory (Annual)</span>
                <span className="font-bold text-slate-800 tabular-nums font-mono">
                  {formatCost(annualHostel)}
                </span>
              </div>

              {includeFood && (
                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-600">Indian Mess & Living Meals (Annual)</span>
                  <span className="font-bold text-slate-800 tabular-nums font-mono">
                    {formatCost(data.foodPerYearINR)}
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-600">Medical Insurance & Visa Extension</span>
                <span className="font-bold text-slate-800 tabular-nums font-mono">
                  {formatCost(annualInsuranceVisa)}
                </span>
              </div>

              {includeTravel && (
                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-600">Estimated Annual Vacation Flight</span>
                  <span className="font-bold text-slate-800 tabular-nums font-mono">
                    {formatCost(data.travelPerYearINR)}
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between py-2 border-t border-slate-200 font-semibold text-slate-700">
                <span>Annual Total Investment</span>
                <span className="text-sm font-bold text-[#102B46] font-mono tabular-nums">
                  {formatCost(annualTotalINR)} / Year
                </span>
              </div>
            </div>

            {/* Grand Total Box */}
            <div className="p-5 rounded-xl bg-[#102B46] text-white space-y-1 text-center">
              <div className="text-xs uppercase tracking-wider text-[#D6AD60] font-semibold">
                Estimated Total Investment ({data.years} Full Years)
              </div>
              <div className="text-3xl font-extrabold font-display tabular-nums">
                {formatCost(totalCompleteCourseINR)}
              </div>
              <p className="text-[11px] text-slate-300">
                Covers all tuition, campus hostel, food mess, and health insurance.
              </p>
            </div>

            {/* Primary Action */}
            <button
              onClick={onOpenCounselling}
              className="w-full py-3 px-4 text-xs font-bold text-white bg-[#102B46] hover:bg-[#2457A6] rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Get a Personalised Fee Estimate on University Letterhead</span>
              <ArrowRight className="w-4 h-4 text-[#16A6A1]" />
            </button>

            {/* Mandatory Disclaimers required by Prompt (§11) */}
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-[10px] text-slate-500 leading-normal">
              <strong>Mandatory Disclaimer:</strong> All fee calculations presented are indicative and based on current university schedules and exchange rates. Official fees are determined by individual university senates, paid in foreign currency directly to the university account, and subject to annual exchange rate variations. Aventis Medical charges no hidden commissions.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
