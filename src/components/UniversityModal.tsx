import React from 'react';
import { University } from '../types';
import { X, MapPin, Building, Bed, Clock, Globe, ShieldCheck, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

interface UniversityModalProps {
  university: University | null;
  onClose: () => void;
  onApply: (uni: University) => void;
}

export const UniversityModal: React.FC<UniversityModalProps> = ({
  university,
  onClose,
  onApply,
}) => {
  if (!university) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-150">
        
        {/* Modal Header with Hero Photo Banner */}
        <div className="relative h-56 w-full shrink-0 bg-slate-900">
          <img
            src={university.image}
            alt={university.name}
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

          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold text-slate-900 flex items-center gap-1.5 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#16A6A1]" />
            <span>{university.city}, {university.country}</span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="text-xs font-semibold text-[#16A6A1] uppercase tracking-wider">
              {university.type} · Est. {university.established}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display leading-tight">
              {university.name}
            </h3>
            {university.nativeName && (
              <p className="text-xs text-slate-300 italic">{university.nativeName}</p>
            )}
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-600">
          
          {/* Quick Specification Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Tuition / Year</div>
              <div className="font-extrabold text-[#102B46] text-sm tabular-nums font-display">
                ₹{(university.tuitionPerYearINR / 100000).toFixed(2)} Lakh
              </div>
              <div className="text-[10px] text-slate-500 font-mono">
                (${university.tuitionPerYearUSD.toLocaleString()} USD)
              </div>
            </div>

            <div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Hostel / Year</div>
              <div className="font-bold text-slate-800 text-xs tabular-nums">
                ₹{(university.hostelPerYearINR / 1000).toFixed(0)}k INR
              </div>
              <div className="text-[10px] text-slate-500">Heating & Wi-Fi incl.</div>
            </div>

            <div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Duration</div>
              <div className="font-bold text-slate-800 text-xs">
                {university.totalCourseDuration}
              </div>
              <div className="text-[10px] text-emerald-700 font-medium">{university.medium}</div>
            </div>

            <div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Hospital Beds</div>
              <div className="font-bold text-[#16A6A1] text-xs flex items-center gap-1">
                <Bed className="w-3.5 h-3.5" />
                <span className="tabular-nums">{university.hospitalBeds.toLocaleString()} Beds</span>
              </div>
              <div className="text-[10px] text-slate-500">In-Patient Wards</div>
            </div>
          </div>

          {/* Academic Highlights */}
          <div>
            <div className="text-xs font-bold text-[#102B46] uppercase tracking-wider mb-2">
              Key Academic Highlights:
            </div>
            <ul className="space-y-1.5">
              {university.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700 leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-[#16A6A1] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recognition & Accreditation */}
          <div>
            <div className="text-xs font-bold text-[#102B46] uppercase tracking-wider mb-2">
              Official Recognition & Regulatory Listing:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {university.recognition.map((rec) => (
                <span
                  key={rec}
                  className="px-2.5 py-1 bg-[#102B46]/5 border border-[#102B46]/10 rounded-lg text-[#102B46] font-mono text-xs font-semibold"
                >
                  ✓ {rec}
                </span>
              ))}
            </div>
          </div>

          {/* Eligibility Requirements */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="text-xs font-bold text-[#102B46] uppercase tracking-wide">
              Admission Eligibility Criteria:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-700">
              <div>
                <strong>Class 12 PCB:</strong> Min {university.eligibilityCriteria.min12thPCB}% aggregate (40% for reserved)
              </div>
              <div>
                <strong>NEET Requirement:</strong> Mandatory qualifying score
              </div>
              <div>
                <strong>Minimum Age:</strong> 17 years by Dec 31
              </div>
            </div>
          </div>

          {/* Official Website Link */}
          <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-100">
            <span className="text-slate-500">Official University Portal:</span>
            <a
              href={university.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#16A6A1] hover:underline flex items-center gap-1 font-mono font-medium"
            >
              <span>{university.officialWebsite}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-xl transition cursor-pointer"
          >
            Back to Directory
          </button>

          <button
            onClick={() => onApply(university)}
            className="px-6 py-2.5 text-xs font-bold text-white bg-[#102B46] hover:bg-[#2457A6] rounded-xl shadow transition flex items-center gap-2 cursor-pointer"
          >
            <span>Apply to {university.name.split(' ')[0]} Now</span>
            <ArrowRight className="w-4 h-4 text-[#16A6A1]" />
          </button>
        </div>

      </div>
    </div>
  );
};
