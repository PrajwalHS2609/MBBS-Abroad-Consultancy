import React, { useState } from 'react';
import { MessagesSquare, FileSearch, University, FileCheck, CheckCircle, Stamp, Plane, ArrowRight } from 'lucide-react';

interface AdmissionTimelineProps {
  onOpenCounselling: () => void;
}

export const AdmissionTimeline: React.FC<AdmissionTimelineProps> = ({ onOpenCounselling }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      step: 1,
      icon: MessagesSquare,
      title: 'Free Counselling',
      duration: 'Day 1–2',
      summary: 'Understand the student’s academic background, preferences, NEET score, and career goals.',
      details: 'Our senior educational counselor meets with the student and parents (in person or via secure video call). We evaluate your academic strengths, budget constraints, preferred climate, and long-term residency plans (India NExT, US USMLE, UK PLAB).',
      checklist: ['Review Class 10 & 12 mark sheets', 'NEET score analysis & validity check', 'Parent budget & fee transparency alignment', 'Direct Q&A with former graduates']
    },
    {
      step: 2,
      icon: FileSearch,
      title: 'Eligibility Assessment',
      duration: 'Day 3–4',
      summary: 'Review academic qualifications and relevant statutory admission requirements.',
      details: 'Our legal and compliance team audits candidate documents against National Medical Commission (NMC FMGL 2021) guidelines and individual university minimum criteria.',
      checklist: ['PCB 50% / 40% aggregate verification', 'Age criteria (17 years by Dec 31)', 'Aadhaar / Passport validity review', 'Formal eligibility compliance report issued']
    },
    {
      step: 3,
      icon: University,
      title: 'Country & University Selection',
      duration: 'Day 5–7',
      summary: 'Shortlist suitable universities based on eligibility, budget, preferences, and verified information.',
      details: 'Select from verified government state medical universities in Russia, Georgia, Kazakhstan, Uzbekistan, or Nepal. Compare bed counts, clinical rotations, and campus accommodation.',
      checklist: ['Side-by-side fee & hostel comparison', 'Verification of WDOMS & WHO listing', 'Discussion of English-medium curriculum continuity', 'Final university choice locked with family consent']
    },
    {
      step: 4,
      icon: FileCheck,
      title: 'Application & Documentation',
      duration: 'Week 2–3',
      summary: 'Guide students through application forms, MEA apostille, and required documents.',
      details: 'We file official application dossiers directly with the foreign university admission department and coordinate Ministry of External Affairs (MEA) apostille and notarized translations.',
      checklist: ['Official university application filing', 'MEA Apostille on Class 10 & 12 certificates', 'Sworn translation into Russian/Georgian/etc.', 'Police Clearance & Medical Fitness reports']
    },
    {
      step: 5,
      icon: CheckCircle,
      title: 'Admission Confirmation',
      duration: 'Week 3–5',
      summary: 'Assist with the university’s admission-related communication and government invitation letter.',
      details: 'Receive official Provisional Admission Letter followed by the Government Student Invitation Letter issued by the host country’s Federal Migration Service (FMS).',
      checklist: ['Provisional Admission Letter receipt', 'Procurement of official FMS Government Invitation', 'Verification of university seal and rector signature', 'Direct remittance of official university registration']
    },
    {
      step: 6,
      icon: Stamp,
      title: 'Visa Guidance',
      duration: 'Week 5–7',
      summary: 'Provide structured guidance on the applicable student visa process and embassy dossier.',
      details: 'Our dedicated visa team prepares the comprehensive embassy submission package, handles biometric scheduling, and conducts mock visa interview drills with the student.',
      checklist: ['VFS / Embassy appointment booking', 'Financial proof & bank statement verification', 'Mock interview preparation sessions', 'Passport submission & visa stamping tracking']
    },
    {
      step: 7,
      icon: Plane,
      title: 'Pre-Departure Assistance',
      duration: 'Week 8 onwards',
      summary: 'Help students prepare for travel, accommodation arrangements, and joining formalities.',
      details: 'We arrange group flights accompanied by our senior manager, provide international forex cards and SIM cards, arrange airport pickup, and secure hostel room allotment.',
      checklist: ['Pre-departure orientation for parents & students', 'Group air tickets with extra 40kg baggage', 'Hostel room reservation & Indian mess enrollment', 'Airport pickup & local police registration by Aventis team']
    }
  ];

  const currentStepData = steps.find((s) => s.step === activeStep) || steps[0];

  return (
    <section id="process" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-[#16A6A1] uppercase tracking-wider mb-1.5">
            Step-by-Step Transparency
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#102B46] tracking-tight font-display">
            Our 7-Stage MBBS Admission Journey
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            A structured, stress-free pathway from your first consultation to arriving safely at your international university campus.
          </p>
        </div>

        {/* Step Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 pb-8 border-b border-slate-200">
          {steps.map((st) => {
            const Icon = st.icon;
            const isSelected = activeStep === st.step;
            return (
              <button
                key={st.step}
                onClick={() => setActiveStep(st.step)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#102B46] text-white border-[#102B46] shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-bold font-mono px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    0{st.step}
                  </span>
                  <span className={`text-[10px] ${isSelected ? 'text-[#16A6A1]' : 'text-slate-400'}`}>
                    {st.duration}
                  </span>
                </div>
                <div className="text-xs font-bold leading-tight line-clamp-1">
                  {st.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase */}
        <div className="mt-8 p-6 md:p-8 rounded-2xl bg-[#F4F6F9] border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#16A6A1] uppercase tracking-wider">
              <span>Stage 0{currentStepData.step}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500 font-normal">{currentStepData.duration} Timeline</span>
            </div>

            <h3 className="text-2xl font-bold text-[#102B46] font-display">
              {currentStepData.title}
            </h3>

            <p className="text-sm text-slate-700 font-medium leading-relaxed">
              {currentStepData.summary}
            </p>

            <p className="text-xs text-slate-600 leading-relaxed">
              {currentStepData.details}
            </p>

            {/* Checklist */}
            <div className="pt-2">
              <div className="text-xs font-bold text-[#102B46] mb-2 uppercase tracking-wide">
                Key Action Deliverables:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentStepData.checklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <span className="text-[#16A6A1] font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenCounselling}
                className="px-5 py-2.5 text-xs font-bold text-white bg-[#102B46] hover:bg-[#2457A6] rounded-xl transition flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Initiate Your Admission Process</span>
                <ArrowRight className="w-4 h-4 text-[#16A6A1]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200 space-y-4 shadow-sm">
            <div className="text-xs font-bold text-[#102B46] uppercase tracking-wider border-b border-slate-100 pb-2">
              Why Parents Trust Our Process
            </div>

            <ul className="text-xs text-slate-600 space-y-2.5">
              <li className="flex items-start gap-2">
                <span className="text-[#16A6A1] font-bold">✓</span>
                <span><strong>No Advance Tuition:</strong> Tuition is remitted directly to the foreign university treasury account only after official admission is secured.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#16A6A1] font-bold">✓</span>
                <span><strong>Government Verified:</strong> MEA Apostille and FMS official invitation letters guarantee complete immigration legality.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#16A6A1] font-bold">✓</span>
                <span><strong>Full Flight Escort:</strong> First-year batches never travel alone; our senior coordinator accompanies students on board.</span>
              </li>
            </ul>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span>Average Duration: 6–8 Weeks</span>
              <span className="text-emerald-700 font-semibold">100% Document Verification</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
