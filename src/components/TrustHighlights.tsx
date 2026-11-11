import React from 'react';
import { UserCheck, Building2, FileCheck2, Send, PlaneTakeoff, HeartHandshake } from 'lucide-react';

export const TrustHighlights: React.FC = () => {
  const pillars = [
    {
      icon: UserCheck,
      title: 'Personalised Admission Guidance',
      desc: 'One-on-one mapping of student NEET scores and parental budgets to the right overseas medical institution.',
    },
    {
      icon: Building2,
      title: 'University Selection Assistance',
      desc: 'Shortlisting solely among WHO-listed, government-accredited universities with English medium continuity.',
    },
    {
      icon: FileCheck2,
      title: 'Documentation & MEA Apostille',
      desc: 'Complete liaison for Ministry of External Affairs apostille, certified translations, and notary verification.',
    },
    {
      icon: Send,
      title: 'Application & Invitation Coordination',
      desc: 'Direct coordination with university rectors and federal migration ministries for official invitation letters.',
    },
    {
      icon: PlaneTakeoff,
      title: 'Pre-Departure & Group Travel',
      desc: 'Escorted student group flights, extra luggage allowance, forex cards, and airport pickup by our local teams.',
    },
    {
      icon: HeartHandshake,
      title: 'Student-Focused Counselling',
      desc: 'Transparent, commission-free ethics: No false promises, no unaccredited private tie-ups, and year-round on-ground care.',
    },
  ];

  return (
    <section className="bg-white py-12 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Lead */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold text-[#16A6A1] uppercase tracking-wider mb-1.5">
            Our Foundation of Integrity
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#102B46] tracking-tight font-display">
            Built on Transparency, Verification, and Student Well-being
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Every step in our guidance model is structured to protect parents from misleading agent practices and position students for long-term clinical licensing success.
          </p>
        </div>

        {/* 6 Key Operational Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-xl border border-slate-200 bg-white hover:border-[#16A6A1]/40 hover:shadow-sm transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 text-[#102B46] flex items-center justify-center shrink-0 group-hover:bg-[#102B46] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5 text-[#16A6A1] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#102B46] mb-1 font-display">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
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
