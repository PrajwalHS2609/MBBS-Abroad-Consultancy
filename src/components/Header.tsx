import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Stethoscope, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onOpenCounselling: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCounselling, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countriesDropdown, setCountriesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Countries', href: '#countries' },
    { name: 'Universities', href: '#universities' },
    { name: 'Eligibility', href: '#eligibility' },
    { name: 'Admission Journey', href: '#process' },
    { name: 'Services', href: '#services' },
    { name: 'Fee Planner', href: '#budget' },
    { name: 'NMC Norms', href: '#nmc-guidelines' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white border-b border-slate-100 py-4'
      }`}
    >
      {/* Top micro-bar for quick contact info */}
      <div className="hidden lg:block border-b border-slate-100 pb-2 mb-2">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-6">
            <span className="font-medium text-[#102B46]">Admissions Open for 2026–27 Academic Intake</span>
            <span className="text-slate-300">|</span>
            <span>NMC (FMGL) & WHO Listed State Universities Only</span>
            <span className="text-slate-300">|</span>
            <span>Bengaluru · New Delhi · Hyderabad · Mumbai</span>
          </div>
          <div className="flex items-center gap-6 font-medium">
            <a
              href="tel:+918008892345"
              className="flex items-center gap-1.5 text-slate-600 hover:text-[#102B46] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#16A6A1]" />
              <span>+91 80088 92345</span>
            </a>
            <a
              href="https://wa.me/918008892345?text=Hello%20Aventis%20Medical,%20I%20would%20like%20guidance%20for%20MBBS%20Abroad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Helpline</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Brand) - Zone 2 (Nav) - Zone 3 (Primary Action) */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 rounded-xl bg-[#102B46] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
            <Stethoscope className="w-5 h-5 text-[#16A6A1]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#102B46] font-display">
              Aventis<span className="text-[#16A6A1]">Medical</span>
            </span>
            <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-400">
              MBBS Abroad Consultancy
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a
            href="#about"
            className="hover:text-[#102B46] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            About Us
          </a>
          
          <div
            className="relative"
            onMouseEnter={() => setCountriesDropdown(true)}
            onMouseLeave={() => setCountriesDropdown(false)}
          >
            <a
              href="#countries"
              className="flex items-center gap-1 hover:text-[#102B46] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              <span>Countries</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </a>

            {countriesDropdown && (
              <div className="absolute top-full left-0 w-56 bg-white border border-slate-200 rounded-xl shadow-lg p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <a
                  href="#countries"
                  className="flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#102B46] rounded-lg"
                >
                  <span>Russia (Top State Univs)</span>
                  <span className="text-slate-400">🇷🇺</span>
                </a>
                <a
                  href="#countries"
                  className="flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#102B46] rounded-lg"
                >
                  <span>Georgia (European Standard)</span>
                  <span className="text-slate-400">🇬🇪</span>
                </a>
                <a
                  href="#countries"
                  className="flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#102B46] rounded-lg"
                >
                  <span>Kazakhstan (5-Yr Program)</span>
                  <span className="text-slate-400">🇰🇿</span>
                </a>
                <a
                  href="#countries"
                  className="flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#102B46] rounded-lg"
                >
                  <span>Uzbekistan (Affordable State)</span>
                  <span className="text-slate-400">🇺🇿</span>
                </a>
                <a
                  href="#countries"
                  className="flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#102B46] rounded-lg"
                >
                  <span>Nepal (Curriculum Match)</span>
                  <span className="text-slate-400">🇳🇵</span>
                </a>
              </div>
            )}
          </div>

          <a
            href="#universities"
            className="hover:text-[#102B46] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Universities
          </a>

          <a
            href="#eligibility"
            className="hover:text-[#102B46] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Eligibility Checker
          </a>

          <a
            href="#process"
            className="hover:text-[#102B46] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Admission Journey
          </a>

          <a
            href="#budget"
            className="hover:text-[#102B46] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Fee Planner
          </a>

          <a
            href="#nmc-guidelines"
            className="hover:text-[#102B46] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            NMC Compliance
          </a>

          <a
            href="#contact"
            className="hover:text-[#102B46] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Primary Action & Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://wa.me/918008892345?text=Hi%20Aventis,%20I%20want%20to%20know%20about%20MBBS%20Abroad"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-3 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-lg transition-colors whitespace-nowrap shrink-0"
            title="Chat directly on WhatsApp"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp Enquiry</span>
          </a>

          <button
            onClick={onOpenCounselling}
            className="px-4 py-2.5 text-xs font-semibold text-white bg-[#102B46] hover:bg-[#2457A6] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            Book Free Counselling
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg border border-slate-200"
            aria-label="Toggle mobile navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-4 mt-3 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-50 hover:text-[#102B46] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="tel:+918008892345"
                className="flex items-center gap-2 py-2 px-3 text-slate-700 font-semibold text-xs"
              >
                <Phone className="w-4 h-4 text-[#16A6A1]" />
                <span>Call Helpline: +91 80088 92345</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCounselling();
                }}
                className="w-full py-2.5 px-4 text-xs font-bold text-center text-white bg-[#102B46] rounded-lg"
              >
                Book Free Consultation Slot
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
