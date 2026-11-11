import React, { useState } from 'react';
import { LeadEnquiry } from '../types';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck, Download, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  onLeadSubmit: (lead: Partial<LeadEnquiry>) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onLeadSubmit }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    mobileNumber: '',
    whatsappNumber: '',
    email: '',
    city: 'Bengaluru',
    state: 'Karnataka',
    educationLevel: '12th Appearing / Completed',
    class12Year: '2026',
    pcbPercentage: '65',
    neetStatus: 'Qualified' as 'Qualified' | 'Appearing' | 'Not Qualified' | 'Planning',
    neetScore: '',
    preferredCountry: 'Russia',
    budgetRange: '₹25 Lakh – ₹35 Lakh',
    message: '',
    consent: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.studentName.trim()) errs.studentName = 'Student name is required';
    if (!formData.mobileNumber.trim() || formData.mobileNumber.replace(/\D/g, '').length < 10) {
      errs.mobileNumber = 'Valid 10-digit mobile number required';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Valid email address required';
    }
    if (!formData.consent) {
      errs.consent = 'Please agree to the privacy policy';
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
        ...formData,
        timestamp: new Date().toISOString(),
      });
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F4F6F9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-[#16A6A1] uppercase tracking-wider mb-1.5">
            Admission Desk & Consultation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#102B46] tracking-tight font-display">
            Connect with Our Medical Admission Experts
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Schedule an in-person meeting at our Bengaluru, New Delhi, or Hyderabad offices, or request a complete university dossier sent directly to your WhatsApp and email.
          </p>
        </div>

        {/* 2-Column Contact & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office Details & Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-[#102B46] uppercase tracking-wider">
                  Head Office & Counselling Center
                </span>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Open Today
                </span>
              </div>

              <div className="space-y-3.5 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#16A6A1] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Bengaluru Headquarters:</strong>
                    Level 4, Prestige Meridian Tower, 29 MG Road, Bengaluru, Karnataka 560001
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#16A6A1] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Toll-Free Helpline:</strong>
                    <a href="tel:+918008892345" className="hover:text-[#16A6A1] font-mono">
                      +91 80088 92345 / +91 80 4123 7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Direct WhatsApp Helpline:</strong>
                    <a
                      href="https://wa.me/918008892345?text=Hello%20Aventis%20Medical,%20I%20have%20an%20enquiry%20regarding%20MBBS%20Abroad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:underline font-mono"
                    >
                      +91 80088 92345 (Instant Reply)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#16A6A1] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Admissions Email:</strong>
                    <a href="mailto:admissions@aventismedical.com" className="hover:text-[#16A6A1]">
                      admissions@aventismedical.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#16A6A1] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Office Working Hours:</strong>
                    Mon – Sat: 9:30 AM – 7:00 PM IST (Sunday by prior appointment)
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Desks */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-3">
              <div className="font-bold text-[#102B46] uppercase tracking-wider text-[11px]">
                Regional Consultation Centers:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="font-bold text-slate-800">New Delhi Desk</div>
                  <div className="text-[11px] text-slate-500">Barakhamba Road, Connaught Place</div>
                  <div className="text-[11px] text-[#16A6A1] font-mono mt-1">+91 11 4987 2341</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="font-bold text-slate-800">Hyderabad Center</div>
                  <div className="text-[11px] text-slate-500">Road No. 36, Jubilee Hills</div>
                  <div className="text-[11px] text-[#16A6A1] font-mono mt-1">+91 40 6821 9900</div>
                </div>
              </div>
            </div>

            {/* Privacy note */}
            <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-200/60 text-[11px] text-teal-900 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#16A6A1] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Data Privacy Guarantee:</strong> Your contact details and academic marks will never be sold, rented, or distributed to third-party telemarketers. We communicate strictly regarding your MBBS abroad query.
              </p>
            </div>

          </div>

          {/* Right Column: Admission Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#102B46] font-display">
                  Admission Enquiry Successfully Registered!
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-900">{formData.studentName}</span>. Your enquiry ref <strong className="font-mono text-[#102B46]">#AV-{Math.floor(100000 + Math.random() * 900000)}</strong> has been assigned to our senior medical admissions counselor. You will receive an official university prospectus on WhatsApp and email shortly.
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
                  >
                    Submit Another Query
                  </button>
                  <a
                    href="https://wa.me/918008892345?text=Hello%20Aventis,%20I%20just%20submitted%20my%20enquiry%20online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Connect on WhatsApp Now</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-base font-bold text-[#102B46] font-display">
                    Formal Admission & Counselling Application
                  </h3>
                  <p className="text-xs text-slate-500">
                    Fill in your details for a complete country comparison and tailored university list.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Student Name *
                    </label>
                    <input
                      type="text"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="Student full name"
                      className={`w-full px-3 py-2 text-xs rounded-xl border ${
                        errors.studentName ? 'border-rose-500 bg-rose-50/50' : 'border-slate-300'
                      } focus:outline-none focus:ring-2 focus:ring-[#16A6A1]`}
                    />
                    {errors.studentName && (
                      <p className="text-[10px] text-rose-500 mt-0.5">{errors.studentName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Parent / Guardian Name (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="Father / Mother name"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#16A6A1]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Mobile Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      placeholder="10-digit mobile number"
                      className={`w-full px-3 py-2 text-xs rounded-xl border ${
                        errors.mobileNumber ? 'border-rose-500 bg-rose-50/50' : 'border-slate-300'
                      } focus:outline-none focus:ring-2 focus:ring-[#16A6A1]`}
                    />
                    {errors.mobileNumber && (
                      <p className="text-[10px] text-rose-500 mt-0.5">{errors.mobileNumber}</p>
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
                      placeholder="name@gmail.com"
                      className={`w-full px-3 py-2 text-xs rounded-xl border ${
                        errors.email ? 'border-rose-500 bg-rose-50/50' : 'border-slate-300'
                      } focus:outline-none focus:ring-2 focus:ring-[#16A6A1]`}
                    />
                    {errors.email && (
                      <p className="text-[10px] text-rose-500 mt-0.5">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Jaipur"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#16A6A1]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      NEET Status
                    </label>
                    <select
                      value={formData.neetStatus}
                      onChange={(e) => setFormData({ ...formData, neetStatus: e.target.value as any })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#16A6A1]"
                    >
                      <option value="Qualified">Qualified</option>
                      <option value="Appearing">Appearing in 2026</option>
                      <option value="Not Qualified">Not Qualified</option>
                      <option value="Planning">Planning Ahead</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      12th PCB %
                    </label>
                    <input
                      type="number"
                      value={formData.pcbPercentage}
                      onChange={(e) => setFormData({ ...formData, pcbPercentage: e.target.value })}
                      placeholder="e.g. 68"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#16A6A1]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Destination
                    </label>
                    <select
                      value={formData.preferredCountry}
                      onChange={(e) => setFormData({ ...formData, preferredCountry: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#16A6A1]"
                    >
                      <option value="Russia">Russia (🇷🇺)</option>
                      <option value="Georgia">Georgia (🇬🇪)</option>
                      <option value="Kazakhstan">Kazakhstan (🇰🇿)</option>
                      <option value="Uzbekistan">Uzbekistan (🇺🇿)</option>
                      <option value="Kyrgyzstan">Kyrgyzstan (🇰🇬)</option>
                      <option value="Nepal">Nepal (🇳🇵)</option>
                      <option value="Open to Counselors Advice">Open to Counselor's Advice</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Approximate 6-Year Budget
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#16A6A1]"
                    >
                      <option value="Under ₹25 Lakh">Under ₹25 Lakh Total</option>
                      <option value="₹25 Lakh – ₹35 Lakh">₹25 Lakh – ₹35 Lakh Total</option>
                      <option value="₹35 Lakh – ₹45 Lakh">₹35 Lakh – ₹45 Lakh Total</option>
                      <option value="Above ₹45 Lakh">Above ₹45 Lakh (e.g. Nepal / Georgia)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Specific Questions or Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your NEET score, preferred university, hostel food preferences, or loan guidance requirements..."
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#16A6A1]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="flex items-start gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="accent-[#16A6A1] w-4 h-4 rounded mt-0.5 cursor-pointer"
                    />
                    <span className="text-[11px] text-slate-600 leading-snug">
                      I authorize Aventis Medical to contact me via phone, WhatsApp, and email regarding MBBS admission guidance, university prospectuses, and fee estimates in accordance with their privacy policy.
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-[10px] text-rose-500">{errors.consent}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-4 text-xs font-bold text-white bg-[#102B46] hover:bg-[#2457A6] rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  {submitting ? (
                    <span>Registering Admission Dossier...</span>
                  ) : (
                    <>
                      <span>Submit Official Admission Enquiry</span>
                      <Send className="w-4 h-4 text-[#16A6A1]" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
