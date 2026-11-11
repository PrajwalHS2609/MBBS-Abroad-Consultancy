import React from 'react';
import { ShieldCheck, Scale, AlertTriangle, ExternalLink, CheckCircle2, BookOpen, Clock, FileBadge } from 'lucide-react';

export const NmcRegulatorySection: React.FC = () => {
  return (
    <section id="nmc-guidelines" className="py-16 md:py-24 bg-[#F4F6F9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-[#16A6A1] uppercase tracking-wider mb-1.5">
            Statutory Awareness & Compliance
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#102B46] tracking-tight font-display">
            NEET & National Medical Commission (NMC) Guidelines
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            The National Medical Commission Foreign Medical Graduate Licentiate (FMGL) Regulations 2021 protect students from substandard institutions. Here is exactly what you must know.
          </p>
        </div>

        {/* 4 Pillars of FMGL Regulations 2021 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#16A6A1] flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#102B46] font-display">
              1. Minimum 54 Months Study
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The foreign medical degree must encompass at least <strong>54 months (4.5 years)</strong> of rigorous theoretical medical study, excluding internship. Short 3-year or 4-year fast-track degrees are non-compliant.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#16A6A1] flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#102B46] font-display">
              2. 100% English Medium
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The entire syllabus, clinical bedside demonstrations, examinations, and viva-voce must be conducted in the <strong>English language</strong>. Bilingual tracks where later years revert to local language are invalid.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#16A6A1] flex items-center justify-center">
              <FileBadge className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#102B46] font-display">
              3. 12-Month Internship
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              A compulsory rotating internship of at least <strong>12 continuous months</strong> must be completed in the same foreign university hospital where the student studied.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#16A6A1] flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#102B46] font-display">
              4. Host Country License
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The candidate must be registered with the respective medical council of the host country, conferring equivalent <strong>right to practice medicine</strong> in that nation on par with native citizens.
            </p>
          </div>

        </div>

        {/* Licensing & Registration Pathway to Practice in India */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-xs font-semibold text-[#16A6A1] uppercase tracking-wider">
              Graduation Pathway
            </span>
            <h3 className="text-xl font-bold text-[#102B46] font-display mt-0.5">
              How to Register & Practice Medicine in India (NExT Exam)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
              <div className="font-bold text-[#102B46] text-sm">
                Step 1: Complete Degree & Local License
              </div>
              <p className="leading-relaxed">
                Graduate from the accredited foreign university, complete the 12-month host hospital internship, and obtain your local medical practitioner registration.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
              <div className="font-bold text-[#102B46] text-sm">
                Step 2: NExT Step 1 (Theory Examination)
              </div>
              <p className="leading-relaxed">
                Appear for the National Exit Test (NExT Step 1), a unified computer-based test conducted for both foreign and Indian medical graduates for clinical licensure.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
              <div className="font-bold text-[#102B46] text-sm">
                Step 3: Indian Internship & NExT Step 2
              </div>
              <p className="leading-relaxed">
                Complete a 1-year Compulsory Rotating Medical Internship (CRMI) in an NMC-approved Indian teaching hospital, clear NExT Step 2 clinical exam, and receive permanent registration.
              </p>
            </div>
          </div>

          {/* Official Resources */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-4 text-slate-600">
              <span className="font-semibold text-slate-800">Official Reference Links:</span>
              <a
                href="https://www.nmc.org.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#16A6A1] hover:underline flex items-center gap-1 font-medium"
              >
                <span>National Medical Commission (NMC India)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://www.wdoms.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#16A6A1] hover:underline flex items-center gap-1 font-medium"
              >
                <span>World Directory of Medical Schools (WDOMS)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Prominent Statutory Disclaimer - Mandated by prompt Section 12 */}
        <div className="mt-8 p-6 rounded-2xl bg-amber-50/80 border border-amber-300 text-amber-950 flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs leading-relaxed">
            <div className="font-bold text-amber-900 uppercase tracking-wide">
              Official Statutory Disclaimer & Student Advisory
            </div>
            <p>
              “Medical education and registration requirements are subject to applicable Indian laws and regulations. Students must verify the latest National Medical Commission guidelines and relevant official requirements before selecting a university.”
            </p>
            <p className="text-amber-800 text-[11px] pt-1">
              Aventis Medical provides guidance strictly in alignment with published Gazette Notifications. We do not represent regulatory bodies and advise every student and guardian to maintain up-to-date awareness of statutory council notifications.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
