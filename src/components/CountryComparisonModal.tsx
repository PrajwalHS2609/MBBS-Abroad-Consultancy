import React, { useState } from 'react';
import { COUNTRIES_DATA } from '../data/countries';
import { CountryInfo } from '../types';
import { X, Check, Scale, ArrowRight } from 'lucide-react';

interface CountryComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCountry: (c: CountryInfo) => void;
}

export const CountryComparisonModal: React.FC<CountryComparisonModalProps> = ({
  isOpen,
  onClose,
  onSelectCountry,
}) => {
  const [c1Id, setC1Id] = useState<string>('russia');
  const [c2Id, setC2Id] = useState<string>('georgia');
  const [c3Id, setC3Id] = useState<string>('kazakhstan');

  if (!isOpen) return null;

  const c1 = COUNTRIES_DATA.find((c) => c.id === c1Id) || COUNTRIES_DATA[0];
  const c2 = COUNTRIES_DATA.find((c) => c.id === c2Id) || COUNTRIES_DATA[1];
  const c3 = COUNTRIES_DATA.find((c) => c.id === c3Id) || COUNTRIES_DATA[2];

  const compared = [c1, c2, c3];

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full p-6 md:p-8 shadow-2xl border border-slate-200 max-h-[92vh] overflow-y-auto animate-in zoom-in-95 duration-150 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-[#16A6A1]" />
            <div>
              <h3 className="text-xl font-bold text-[#102B46] font-display">
                Side-by-Side MBBS Country Comparison
              </h3>
              <p className="text-xs text-slate-500">
                Compare course duration, annual tuition, living expenses, and climate factors.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Country Selectors */}
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">Country 1</label>
            <select
              value={c1Id}
              onChange={(e) => setC1Id(e.target.value)}
              className="w-full px-3 py-2 text-xs font-bold rounded-xl border border-slate-300 bg-white"
            >
              {COUNTRIES_DATA.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.flag} {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">Country 2</label>
            <select
              value={c2Id}
              onChange={(e) => setC2Id(e.target.value)}
              className="w-full px-3 py-2 text-xs font-bold rounded-xl border border-slate-300 bg-white"
            >
              {COUNTRIES_DATA.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.flag} {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">Country 3</label>
            <select
              value={c3Id}
              onChange={(e) => setC3Id(e.target.value)}
              className="w-full px-3 py-2 text-xs font-bold rounded-xl border border-slate-300 bg-white"
            >
              {COUNTRIES_DATA.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.flag} {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto border border-slate-200 rounded-2xl">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-3 font-semibold text-slate-600 w-1/4">Criterion</th>
                {compared.map((c) => (
                  <th key={c.id} className="p-3 font-bold text-[#102B46] w-1/4">
                    <span className="text-base mr-1">{c.flag}</span> {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              
              <tr>
                <td className="p-3 font-semibold bg-slate-50/50">Tuition Fee / Year</td>
                {compared.map((c) => (
                  <td key={c.id} className="p-3 font-bold text-[#102B46]">
                    {c.avgTuitionPerYearINR}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold bg-slate-50/50">Living Cost / Month</td>
                {compared.map((c) => (
                  <td key={c.id} className="p-3">
                    {c.avgLivingCostPerMonthINR}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold bg-slate-50/50">Course Duration</td>
                {compared.map((c) => (
                  <td key={c.id} className="p-3">
                    {c.courseDuration}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold bg-slate-50/50">Instruction Medium</td>
                {compared.map((c) => (
                  <td key={c.id} className="p-3 text-emerald-700 font-medium">
                    100% English Medium
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold bg-slate-50/50">Indian Food Mess</td>
                {compared.map((c) => (
                  <td key={c.id} className="p-3">
                    <span className="font-semibold text-slate-800">{c.indianFoodAvailability}</span>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold bg-slate-50/50">NMC FMGL 2021 Norms</td>
                {compared.map((c) => (
                  <td key={c.id} className="p-3 text-emerald-700 font-bold">
                    ✓ Compliant
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold bg-slate-50/50">Climate Profile</td>
                {compared.map((c) => (
                  <td key={c.id} className="p-3 text-[11px] leading-snug">
                    {c.climate}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold bg-slate-50/50">Top State University</td>
                {compared.map((c) => (
                  <td key={c.id} className="p-3 font-medium text-slate-900 text-[11px]">
                    {c.popularUniversities[0]}
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex justify-end pt-2">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-bold text-white bg-[#102B46] hover:bg-[#2457A6] rounded-xl transition cursor-pointer"
          >
            Close Comparison
          </button>
        </div>

      </div>
    </div>
  );
};
