import React from 'react';
import { Microscope, Users, Stethoscope, Building, Compass, AlertCircle } from 'lucide-react';

export const WhyStudyAbroad: React.FC = () => {
  const points = [
    {
      icon: Microscope,
      title: 'Advanced Clinical Simulation & Pathology',
      desc: 'Top state medical universities abroad maintain dedicated university clinics with extensive bed capacities, robotic surgical suites, and genuine cadaver dissection from Year 1.',
    },
    {
      icon: Users,
      title: 'Multicultural International Exposure',
      desc: 'Studying alongside peers from over 40+ nations fosters clinical communication skills, cultural empathy, and an understanding of international epidemiological patterns.',
    },
    {
      icon: Stethoscope,
      title: 'Alternative to Unreasonable Private Capitation',
      desc: 'For students who qualified NEET with competitive scores but missed high-competition government seats, foreign state universities offer government-subsidized tuition without donations.',
    },
    {
      icon: Building,
      title: 'Modern Campus & Hospital Infrastructure',
      desc: 'Well-funded campus environments with state laboratories, extensive medical libraries, on-campus student housing with radiator heating, and dedicated sports complexes.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F4F6F9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-[#16A6A1] uppercase tracking-wider mb-1.5">
            Balanced & Responsible Perspective
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#102B46] tracking-tight font-display">
            Why Students & Parents Consider MBBS Abroad
          </h2>
          <p className="text-slate-600 text-sm mt-3 leading-relaxed">
            Studying medicine overseas is a viable, high-quality pathway—but it is not a shortcut. We believe in presenting an honest evaluation of the academic rigor, cultural adjustments, and regulatory requirements involved.
          </p>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.title}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#16A6A1]/40 transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#16A6A1] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#102B46] font-display mb-1.5">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Honest Suitability Box - Required by Prompt (§6 & §10) */}
        <div className="rounded-2xl bg-white border border-slate-300/80 p-6 md:p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5 text-[#D6AD60]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-[#102B46] uppercase tracking-wide">
                Important Academic & Family Suitability Assessment
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                MBBS abroad is <strong className="text-slate-800">not universally suitable for every student</strong>. It requires academic self-discipline, adaptability to different climates, willingness to learn the local language for conversational patient history-taking during hospital clerkships, and commitment to clear the National Exit Test (NExT) in India upon return. 
              </p>
              <p className="text-xs text-slate-500 italic">
                Our counselors help families evaluate whether overseas study aligns with your child’s emotional maturity, academic readiness, and long-term career specialization goals.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
