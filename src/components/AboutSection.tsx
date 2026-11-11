import React, { useState } from 'react';
import { ArrowRight, Check, Shield, BookOpen, Stethoscope, Award, Users } from 'lucide-react';

interface AboutSectionProps {
  onOpenCounselling: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCounselling }) => {
  const [showFullCharter, setShowFullCharter] = useState(false);

  return (
    <section id="about" className="py-16 md:py-24 bg-[#F4F6F9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Campus & Student Editorial Image Montage */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
              <img
                src="/src/assets/images/campus_university_russia_1794401015785.jpg"
                alt="European State Medical University historic campus"
                className="w-full h-80 object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="p-5 bg-white border-t border-slate-100">
                <div className="text-xs font-semibold text-[#16A6A1] uppercase tracking-wider">
                  Accreditation & Ethics
                </div>
                <div className="text-sm font-bold text-[#102B46] mt-0.5">
                  Direct Liaison with Ministry & University Senate Bodies
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  We maintain official institutional representations, ensuring transparent university fees and zero hidden agent commissions.
                </p>
              </div>
            </div>

            {/* Editorial Quote Box */}
            <div className="bg-[#102B46] text-white p-6 rounded-2xl shadow-sm border border-slate-800">
              <div className="text-xs uppercase tracking-widest text-[#D6AD60] font-semibold mb-2">
                Our Solemn Commitment
              </div>
              <blockquote className="text-sm font-medium text-slate-200 leading-relaxed italic">
                “Every student who walks through our doors is treated like our own son or daughter. We will never recommend a university we wouldn’t entrust our own children to.”
              </blockquote>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-white">Board of Academic Directors</span>
                <span>Aventis Medical Group</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Core Propositions */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="text-xs font-semibold text-[#16A6A1] uppercase tracking-wider">
              About Our Consultancy
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#102B46] tracking-tight font-display text-balance">
              Guiding Your Journey Towards a Global Medical Career.
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Founded by former foreign medical graduates and senior educational administrators, Aventis Medical was established to replace opaque agent commissions with verified, student-centric academic counselling. 
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              We understand that pursuing an MBBS degree abroad is a life-defining family decision. Our mission is to demystify complex National Medical Commission (NMC) regulations, screen universities for authentic clinical bed exposure, and provide continuous on-ground guardianship until graduation.
            </p>

            {/* Core Operational Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-50 text-[#16A6A1] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs text-slate-700 font-medium">
                  Direct University Tuition Payment
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-50 text-[#16A6A1] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs text-slate-700 font-medium">
                  100% English Medium Guaranteed
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-50 text-[#16A6A1] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs text-slate-700 font-medium">
                  On-Ground Indian Student Coordinators
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-50 text-[#16A6A1] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs text-slate-700 font-medium">
                  NMC (FMGL 2021) Curricular Audit
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-50 text-[#16A6A1] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs text-slate-700 font-medium">
                  MEA Apostille & Translation Desk
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-50 text-[#16A6A1] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs text-slate-700 font-medium">
                  Indian Mess & Hostel Guardianship
                </span>
              </div>
            </div>

            {/* Expandable Company Charter details */}
            {showFullCharter && (
              <div className="mt-4 p-5 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-3 animate-in fade-in duration-200">
                <div className="font-bold text-[#102B46] text-sm">
                  The Aventis Transparency Charter:
                </div>
                <p>
                  <strong>1. No Capitation or Hidden Surcharges:</strong> You receive the official university fee schedule stamped by the dean’s office. You remit all tuition and hostel dues directly to the foreign university’s authorized treasury account via bank wire transfer.
                </p>
                <p>
                  <strong>2. Zero Bilingual Bait-and-Switch:</strong> Many private agents admit students under false pretenses where lectures revert to Russian or local languages from Year 3. We exclusively work with recognized English faculties.
                </p>
                <p>
                  <strong>3. Dedicated Parent Bridge:</strong> We provide parents with regular semester attendance transcripts and exam scores, maintaining a proactive bridge between family and faculty.
                </p>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => setShowFullCharter(!showFullCharter)}
                className="px-5 py-2.5 text-xs font-bold text-[#102B46] bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition cursor-pointer"
              >
                {showFullCharter ? 'Hide Detailed Charter' : 'Know More About Our Charter'}
              </button>

              <button
                onClick={onOpenCounselling}
                className="px-5 py-2.5 text-xs font-bold text-white bg-[#102B46] hover:bg-[#2457A6] rounded-xl transition flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Schedule a 1-on-1 Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#16A6A1]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
