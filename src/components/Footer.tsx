import React from 'react';
import { Stethoscope, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenDisclaimer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms, onOpenDisclaimer }) => {
  return (
    <footer className="bg-[#102B46] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Company Information (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <Stethoscope className="w-5 h-5 text-[#16A6A1]" />
              </div>
              <span className="text-xl font-bold font-display tracking-tight text-white">
                Aventis<span className="text-[#16A6A1]">Medical</span>
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed pr-4">
              Aventis Medical is India’s premier ethical MBBS Abroad admission consultancy. We guide Indian medical aspirants to recognized, WHO & NMC-compliant government state medical faculties across Europe and Central Asia with 100% transparency.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div><strong>HQ:</strong> Level 4, Prestige Meridian, MG Road, Bengaluru 560001</div>
              <div><strong>Direct Line:</strong> +91 80088 92345 / +91 80 4123 7890</div>
              <div><strong>Email:</strong> admissions@aventismedical.com</div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-[#D6AD60] uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#countries" className="hover:text-white transition">MBBS Countries</a></li>
              <li><a href="#universities" className="hover:text-white transition">Universities Directory</a></li>
              <li><a href="#eligibility" className="hover:text-white transition">Eligibility Checker</a></li>
              <li><a href="#process" className="hover:text-white transition">Admission Process</a></li>
              <li><a href="#budget" className="hover:text-white transition">Fee & Budget Planner</a></li>
              <li><a href="#nmc-guidelines" className="hover:text-white transition">NMC Regulations</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact & Centers</a></li>
            </ul>
          </div>

          {/* Column 3: Our Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-[#D6AD60] uppercase tracking-wider">
              Student Services
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#services" className="hover:text-white transition">MBBS Career Counselling</a></li>
              <li><a href="#services" className="hover:text-white transition">Country & University Selection</a></li>
              <li><a href="#services" className="hover:text-white transition">NMC Eligibility Audit</a></li>
              <li><a href="#services" className="hover:text-white transition">MEA Apostille & Translation</a></li>
              <li><a href="#services" className="hover:text-white transition">Government Invitation Letters</a></li>
              <li><a href="#services" className="hover:text-white transition">Student Visa Processing</a></li>
              <li><a href="#services" className="hover:text-white transition">Escorted Group Departures</a></li>
              <li><a href="#services" className="hover:text-white transition">Hostel & Indian Mess Setup</a></li>
            </ul>
          </div>

          {/* Column 4: Popular Destinations (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-[#D6AD60] uppercase tracking-wider">
              Top Study Destinations
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#countries" className="hover:text-white transition">MBBS in Russia (Top State Univs)</a></li>
              <li><a href="#countries" className="hover:text-white transition">MBBS in Georgia (European Standard)</a></li>
              <li><a href="#countries" className="hover:text-white transition">MBBS in Kazakhstan (5-Year Program)</a></li>
              <li><a href="#countries" className="hover:text-white transition">MBBS in Uzbekistan (Affordable)</a></li>
              <li><a href="#countries" className="hover:text-white transition">MBBS in Kyrgyzstan (Budget Friendly)</a></li>
              <li><a href="#countries" className="hover:text-white transition">MBBS in Nepal (Same Curriculum)</a></li>
              <li><a href="#countries" className="hover:text-white transition">MBBS in Egypt (High Bed Hospitals)</a></li>
            </ul>
          </div>

        </div>

        {/* Statutory Disclaimers per Prompt (§12 & §20) */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-400 leading-relaxed">
          <p>
            <strong className="text-white">Statutory Regulatory Notice:</strong> Medical education regulations and licentiate eligibility are governed by the National Medical Commission (NMC) of India and applicable gazette notifications, specifically the Foreign Medical Graduate Licentiate (FMGL) Regulations 2021. Students and parents are advised to review the latest guidelines on the official NMC portal (<a href="https://www.nmc.org.in" target="_blank" rel="noopener noreferrer" className="text-[#16A6A1] underline">nmc.org.in</a>). Aventis Medical provides advisory and processing services; we do not guarantee university seat allocations or visa approvals. All tuition fees are remitted directly to foreign universities.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal Policies */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Aventis Medical Education Services Pvt. Ltd. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition cursor-pointer"
            >
              Terms of Service
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenDisclaimer}
              className="hover:text-white transition cursor-pointer"
            >
              Legal Disclaimer
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
