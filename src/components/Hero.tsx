import React, { useState } from 'react';
import { ShieldCheck, Award, ArrowRight, CheckCircle2, UserCheck, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { LeadEnquiry } from '../types';

interface HeroProps {
  onOpenCounselling: () => void;
  onLeadSubmit: (lead: Partial<LeadEnquiry>) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCounselling, onLeadSubmit }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    mobileNumber: '',
    email: '',
    neetStatus: 'Qualified' as 'Qualified' | 'Appearing' | 'Not Qualified' | 'Planning',
    preferredCountry: 'Russia',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.studentName.trim()) errs.studentName = 'Please enter student name';
    if (!formData.mobileNumber.trim() || formData.mobileNumber.replace(/\D/g, '').length < 10) {
      errs.mobileNumber = 'Enter a valid 10-digit mobile number';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Enter a valid email address';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      onLeadSubmit({
        studentName: formData.studentName,
        mobileNumber: formData.mobileNumber,
        email: formData.email,
        neetStatus: formData.neetStatus,
        preferredCountry: formData.preferredCountry,
        timestamp: new Date().toISOString(),
      });
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F6F9] via-white to-white py-12 md:py-18 border-b border-slate-200/80">
      {/* Decorative background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#102B46 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines, Trust Signals & Direct CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust Kicker - Zero-Pill text with bullet */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#102B46] tracking-wide uppercase">
              <span className="text-[#16A6A1]">Official Admission Guidance</span>
              <span aria-hidden="true">·</span>
              <span>100% NMC (FMGL) Compliant Universities</span>
              <span aria-hidden="true">·</span>
              <span>Zero Donation</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#102B46] tracking-tight leading-[1.15] text-balance font-display">
              Your Dream of Becoming a Doctor <span className="text-[#2457A6]">Starts Here.</span>
            </h1>

            {/* Supporting Headline */}
            <h2 className="text-lg sm:text-xl font-semibold text-slate-700 leading-snug">
              Explore MBBS Opportunities Abroad with Expert Admission Guidance for Indian Students.
            </h2>

            {/* Detailed Description */}
            <p className="text-slate-600 text-base leading-relaxed max-w-2xl">
              From choosing the right country and accredited university to application, documentation, MEA apostille, visa stamping, and pre-departure assistance—get personalized, transparent guidance throughout your medical education journey.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenCounselling}
                className="px-6 py-3.5 text-sm font-bold text-white bg-[#102B46] hover:bg-[#2457A6] rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <span>Book Free Counselling</span>
                <ArrowRight className="w-4 h-4 text-[#16A6A1]" />
              </button>

              <a
                href="#countries"
                className="px-6 py-3.5 text-sm font-bold text-[#102B46] bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-colors flex items-center gap-2"
              >
                <span>Explore MBBS Countries</span>
              </a>
            </div>

            {/* Proof Indicators - Unboxed rigorous layout */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200/80">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#102B46] font-display tabular-nums">
                  14+
                </div>
                <div className="text-xs text-slate-600 font-medium mt-0.5">
                  Years of Medical Mentorship
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#102B46] font-display tabular-nums">
                  3,200+
                </div>
                <div className="text-xs text-slate-600 font-medium mt-0.5">
                  Indian Students Guided
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#16A6A1] font-display tabular-nums">
                  100%
                </div>
                <div className="text-xs text-slate-600 font-medium mt-0.5">
                  Direct University Tuition Payment
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Visual Overlay + Quick Enquiry Form */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual backdrop card with photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
              
              {/* Image banner with overlay */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <img
                  src="/src/assets/images/hero_indian_med_students_1794401014765.jpg"
                  alt="Indian medical students walking through international university campus"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102B46] via-[#102B46]/60 to-transparent" />
                
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <div className="text-xs font-semibold text-[#16A6A1] uppercase tracking-wider">
                      2026–27 Admission Intake
                    </div>
                    <div className="text-sm font-bold">
                      Direct Application & Evaluation Desk
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D6AD60]" />
                    <span>NMC Certified</span>
                  </div>
                </div>
              </div>

              {/* Quick Enquiry Form */}
              <div className="p-6">
                {submitted ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#102B46]">Enquiry Received Successfully!</h3>
                    <p className="text-xs text-slate-600 max-w-xs mx-auto">
                      Thank you, <span className="font-semibold text-slate-800">{formData.studentName}</span>. Our senior medical admission counselor will call you within 2 hours to share tailored university brochures and fee estimates.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-[#16A6A1] hover:underline pt-2 inline-block cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center justify-between">
                      <span>Quick Eligibility & Fee Enquiry</span>
                      <span className="text-[11px] text-slate-600 font-normal">Free · Confidential</span>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Student Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-3 py-2 text-sm rounded-lg border ${
                          errors.studentName ? 'border-rose-500 bg-rose-50/50' : 'border-slate-300'
                        } focus:outline-none focus:ring-2 focus:ring-[#16A6A1]/40 focus:border-[#16A6A1] transition`}
                      />
                      {errors.studentName && (
                        <p className="text-[11px] text-rose-500 mt-0.5">{errors.studentName}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.mobileNumber}
                          onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                          placeholder="10-digit number"
                          className={`w-full px-3 py-2 text-sm rounded-lg border ${
                            errors.mobileNumber ? 'border-rose-500 bg-rose-50/50' : 'border-slate-300'
                          } focus:outline-none focus:ring-2 focus:ring-[#16A6A1]/40 focus:border-[#16A6A1] transition`}
                        />
                        {errors.mobileNumber && (
                          <p className="text-[11px] text-rose-500 mt-0.5">{errors.mobileNumber}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@email.com"
                          className={`w-full px-3 py-2 text-sm rounded-lg border ${
                            errors.email ? 'border-rose-500 bg-rose-50/50' : 'border-slate-300'
                          } focus:outline-none focus:ring-2 focus:ring-[#16A6A1]/40 focus:border-[#16A6A1] transition`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-rose-500 mt-0.5">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          NEET Qualification Status
                        </label>
                        <select
                          value={formData.neetStatus}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              neetStatus: e.target.value as any,
                            })
                          }
                          className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#16A6A1]/40 focus:border-[#16A6A1] transition"
                        >
                          <option value="Qualified">NEET Qualified (Current/Past Year)</option>
                          <option value="Appearing">Appearing in NEET 2026</option>
                          <option value="Planning">Planning for Next Year</option>
                          <option value="Not Qualified">Did Not Qualify Yet</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Preferred Destination
                        </label>
                        <select
                          value={formData.preferredCountry}
                          onChange={(e) => setFormData({ ...formData, preferredCountry: e.target.value })}
                          className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#16A6A1]/40 focus:border-[#16A6A1] transition"
                        >
                          <option value="Russia">Russia (🇷🇺)</option>
                          <option value="Georgia">Georgia (🇬🇪)</option>
                          <option value="Kazakhstan">Kazakhstan (🇰🇿)</option>
                          <option value="Uzbekistan">Uzbekistan (🇺🇿)</option>
                          <option value="Kyrgyzstan">Kyrgyzstan (🇰🇬)</option>
                          <option value="Nepal">Nepal (🇳🇵)</option>
                          <option value="Open to Advice">Open to Expert Advice</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3 px-4 text-xs font-bold text-white bg-[#102B46] hover:bg-[#2457A6] rounded-xl shadow transition flex items-center justify-center gap-2 cursor-pointer mt-1"
                    >
                      {submitting ? (
                        <span>Submitting Details...</span>
                      ) : (
                        <>
                          <span>Submit Enquiry & Get Free University List</span>
                          <ArrowRight className="w-4 h-4 text-[#16A6A1]" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-between text-[11px] text-slate-600 pt-1">
                      <span>✓ No obligation · 100% Free</span>
                      <span>✓ Strict Privacy Protection</span>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Floating verification badge */}
            <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white border border-slate-200 rounded-xl px-4 py-2.5 shadow-lg items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#16A6A1] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-[#102B46]">WHO & WDOMS Listed</div>
                <div className="text-[10px] text-slate-600">English Medium Quotas</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
