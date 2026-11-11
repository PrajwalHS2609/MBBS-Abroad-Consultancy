import React from 'react';
import { Shield, Home, Utensils, PhoneCall, HeartPulse, UserCheck, CheckCircle } from 'lucide-react';

interface ParentSupportSectionProps {
  onOpenCounselling: () => void;
}

export const ParentSupportSection: React.FC<ParentSupportSectionProps> = ({ onOpenCounselling }) => {
  const assurances = [
    {
      icon: Home,
      title: 'Monitored Campus Accommodations',
      desc: 'All recommended universities feature campus-enclosed student dormitories with 24/7 security desks, CCTV surveillance, electronic turnstile access, and separate residential floors for male and female students.',
    },
    {
      icon: Utensils,
      title: 'Hygienic Indian Food Mess',
      desc: 'Dedicated Indian canteen facilities prepare fresh North and South Indian vegetarian and non-vegetarian meals daily, managed by Indian culinary staff using authentic ingredients.',
    },
    {
      icon: PhoneCall,
      title: '24/7 Parent Emergency Hotline',
      desc: 'A permanent communication line between family in India and our on-ground city coordinators. Whether dealing with sudden health issues or academic queries, parents have direct telephone access.',
    },
    {
      icon: HeartPulse,
      title: 'Medical Insurance & Care Protocol',
      desc: 'Every student is enrolled in full-coverage state health insurance upon arrival, granting complimentary medical consultations, emergency diagnostic care, and hospitalization if required.',
    },
    {
      icon: UserCheck,
      title: 'Periodic Academic Progress Reports',
      desc: 'We assist parents in staying informed of semester class attendance percentages, clinical quiz grades, and Dean’s office academic updates without bureaucratic hurdles.',
    },
    {
      icon: Shield,
      title: 'Local Police Registration & Legal Status',
      desc: 'Our local staff accompanies every student to the migration department for legal residence permit stamping, biometric registration, and annual visa renewal well before expiration.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-[#16A6A1] uppercase tracking-wider mb-1.5">
            Parent Peace of Mind
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#102B46] tracking-tight font-display">
            Supporting Students. Building Parent Confidence.
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Sending your child abroad to study medicine is an act of deep trust. We establish institutional safeguards to ensure your child is secure, nourished, and focused on their medical studies.
          </p>
        </div>

        {/* 6 Assurance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {assurances.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[#F4F6F9] border border-slate-200 hover:border-[#16A6A1]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#102B46] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#16A6A1]" />
                  </div>
                  <h3 className="text-base font-bold text-[#102B46] font-display mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Parent Consultation Strip */}
        <div className="rounded-2xl bg-[#102B46] text-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1">
            <div className="text-xs font-semibold text-[#D6AD60] uppercase tracking-wider">
              Speak Directly with Senior Guardians
            </div>
            <h3 className="text-xl font-bold font-display">
              Would you like to speak with parents of current students from your city?
            </h3>
            <p className="text-xs text-slate-300 max-w-xl">
              We arrange parent-to-parent reference video calls so you can hear unfiltered first-hand experiences about living conditions, faculty dedication, and climate adaptation.
            </p>
          </div>

          <button
            onClick={onOpenCounselling}
            className="px-6 py-3 text-xs font-bold text-[#102B46] bg-white hover:bg-slate-100 rounded-xl shadow transition shrink-0 cursor-pointer"
          >
            Request Parent Reference Connect
          </button>
        </div>

      </div>
    </section>
  );
};
