import React from 'react';
import { Phone, MessageSquare, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ConversionBannerProps {
  onOpenCounselling: () => void;
}

export const ConversionBanner: React.FC<ConversionBannerProps> = ({ onOpenCounselling }) => {
  return (
    <section className="relative overflow-hidden bg-[#102B46] text-white py-16 md:py-20 border-b border-slate-900">
      {/* Background visual texture */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#16A6A1 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-6">
        
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D6AD60] tracking-widest uppercase">
          <ShieldCheck className="w-4 h-4 text-[#16A6A1]" />
          <span>2026–2027 Academic Year Admissions Active</span>
        </div>

        {/* Primary Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-display text-balance">
          Take the First Step Towards Your Medical Career Abroad.
        </h2>

        {/* Supporting text */}
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Get personalised guidance to explore suitable countries, universities, eligibility requirements, and admission options tailored to your NEET score and budget.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenCounselling}
            className="px-6 py-3.5 text-xs sm:text-sm font-bold text-[#102B46] bg-white hover:bg-slate-100 rounded-xl shadow-lg transition flex items-center gap-2 cursor-pointer"
          >
            <span>Book Free Counselling</span>
            <ArrowRight className="w-4 h-4 text-[#16A6A1]" />
          </button>

          <a
            href="tel:+918008892345"
            className="px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#2457A6] hover:bg-[#1d478a] rounded-xl transition flex items-center gap-2 shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#16A6A1]" />
            <span>Talk to an Admission Expert</span>
          </a>

          <a
            href="https://wa.me/918008892345?text=Hello%20Aventis%20Medical,%20I%20would%20like%20to%20know%20more%20about%20MBBS%20Abroad%20admissions"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 text-xs sm:text-sm font-bold text-emerald-400 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-600/40 rounded-xl transition flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Reassurance pills replacement */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#16A6A1]" />
            <span>Zero Consultation Fees</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#16A6A1]" />
            <span>No High-Pressure Sales Calls</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#16A6A1]" />
            <span>Direct University Payment Guarantee</span>
          </span>
        </div>

      </div>
    </section>
  );
};
