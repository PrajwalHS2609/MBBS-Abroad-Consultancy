import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustHighlights } from './components/TrustHighlights';
import { AboutSection } from './components/AboutSection';
import { DestinationsSection } from './components/DestinationsSection';
import { WhyStudyAbroad } from './components/WhyStudyAbroad';
import { UniversityExplorer } from './components/UniversityExplorer';
import { EligibilityChecker } from './components/EligibilityChecker';
import { AdmissionTimeline } from './components/AdmissionTimeline';
import { ServicesSection } from './components/ServicesSection';
import { FeeBudgetPlanner } from './components/FeeBudgetPlanner';
import { NmcRegulatorySection } from './components/NmcRegulatorySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CampusGallery } from './components/CampusGallery';
import { ParentSupportSection } from './components/ParentSupportSection';
import { FaqAccordion } from './components/FaqAccordion';
import { BlogSection } from './components/BlogSection';
import { ConversionBanner } from './components/ConversionBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals
import { CounsellingModal } from './components/CounsellingModal';
import { UniversityModal } from './components/UniversityModal';
import { CountryModal } from './components/CountryModal';
import { CountryComparisonModal } from './components/CountryComparisonModal';
import { LegalModal } from './components/LegalModals';

// Types
import { University, CountryInfo, LeadEnquiry } from './types';
import { MessageSquare, PhoneCall, CheckCircle2, X } from 'lucide-react';

export function App() {
  // Modal states
  const [counsellingModalOpen, setCounsellingModalOpen] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<CountryInfo | null>(null);
  const [comparisonModalOpen, setComparisonModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  // Active filter pass-through for universities
  const [universityFilterCountry, setUniversityFilterCountry] = useState<string>('All');

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleLeadSubmit = (lead: Partial<LeadEnquiry>) => {
    // Save to localStorage for client lead persistence
    try {
      const existing = JSON.parse(localStorage.getItem('aventis_leads') || '[]');
      existing.push(lead);
      localStorage.setItem('aventis_leads', JSON.stringify(existing));
    } catch (e) {
      // Storage unavailable or quota exceeded
    }
    showToast(`Thank you, ${lead.studentName || 'Student'}! Your MBBS admission inquiry has been registered. Our senior counselor will call you within 2 hours.`);
  };

  const handleBookingSuccess = (booking: any) => {
    setCounsellingModalOpen(false);
    showToast(`Counselling session confirmed for ${booking.studentName} on ${booking.date} (${booking.timeSlot}).`);
  };

  const handleExploreUniversitiesInCountry = (countryName: string) => {
    setUniversityFilterCountry(countryName);
    const element = document.getElementById('universities');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyToUniversity = (uni: University) => {
    setSelectedUniversity(null);
    setCounsellingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#16A6A1] selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md bg-[#102B46] text-white p-4 rounded-2xl shadow-2xl border border-slate-700 flex items-start gap-3 animate-in slide-in-from-bottom-3 duration-200">
          <div className="w-8 h-8 rounded-full bg-[#16A6A1]/20 text-[#16A6A1] flex items-center justify-center shrink-0 mt-0.5">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="text-xs leading-relaxed flex-1">
            <div className="font-bold text-white mb-0.5">Notification</div>
            <p className="text-slate-200">{toastMessage}</p>
          </div>
          <button
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white p-1 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Quick Consultation Button (bottom left/right) */}
      <aside aria-label="Quick contact" className="fixed bottom-6 left-6 z-40">
        <a
          href="https://wa.me/918008892345?text=Hello%20Aventis%20Medical,%20I%20would%20like%20guidance%20for%20MBBS%20Abroad%20admissions"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all font-semibold text-xs group cursor-pointer"
          aria-label="Chat with MBBS counselor on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline font-bold">Chat with Counselor</span>
        </a>
      </aside>

      {/* Section 1: Header & Navigation */}
      <Header
        onOpenCounselling={() => setCounsellingModalOpen(true)}
        activeSection=""
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Section 2: Hero Banner */}
        <Hero
          onOpenCounselling={() => setCounsellingModalOpen(true)}
          onLeadSubmit={handleLeadSubmit}
        />

        {/* Section 3: Trust & Credibility Highlights */}
        <TrustHighlights />

        {/* Section 4: About Our Consultancy */}
        <AboutSection
          onOpenCounselling={() => setCounsellingModalOpen(true)}
        />

        {/* Section 5: Explore MBBS Abroad Destinations */}
        <DestinationsSection
          onSelectCountry={(country) => setSelectedCountry(country)}
          onExploreUniversities={handleExploreUniversitiesInCountry}
          onOpenCompare={() => setComparisonModalOpen(true)}
        />

        {/* Section 6: Why Study MBBS Abroad? */}
        <WhyStudyAbroad />

        {/* Section 7: Featured Medical Universities */}
        <UniversityExplorer
          onSelectUniversity={(uni) => setSelectedUniversity(uni)}
          initialCountryFilter={universityFilterCountry}
        />

        {/* Section 8: MBBS Admission Eligibility Checker */}
        <EligibilityChecker
          onOpenCounselling={() => setCounsellingModalOpen(true)}
        />

        {/* Section 9: Our MBBS Admission Process */}
        <AdmissionTimeline
          onOpenCounselling={() => setCounsellingModalOpen(true)}
        />

        {/* Section 10: Our Services */}
        <ServicesSection
          onOpenCounselling={() => setCounsellingModalOpen(true)}
        />

        {/* Section 11: MBBS Abroad Fees & Budget Planning */}
        <FeeBudgetPlanner
          onOpenCounselling={() => setCounsellingModalOpen(true)}
        />

        {/* Section 12: NEET & Indian Medical Licensing Awareness (NMC) */}
        <NmcRegulatorySection />

        {/* Section 13: Student Success Stories & Testimonials */}
        <TestimonialsSection />

        {/* Section 14: Student Gallery & Campus Experience */}
        <CampusGallery />

        {/* Section 15: Parent Support & Student Safety */}
        <ParentSupportSection
          onOpenCounselling={() => setCounsellingModalOpen(true)}
        />

        {/* Section 16: Frequently Asked Questions */}
        <FaqAccordion />

        {/* Section 17: Latest Blogs & Educational Resources */}
        <BlogSection />

        {/* Section 18: Strong Conversion CTA */}
        <ConversionBanner
          onOpenCounselling={() => setCounsellingModalOpen(true)}
        />

        {/* Section 19: Contact & Admission Enquiry */}
        <ContactSection
          onLeadSubmit={handleLeadSubmit}
        />

      </main>

      {/* Section 20: Footer Design */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenDisclaimer={() => setLegalModalType('disclaimer')}
      />

      {/* Interactive Modals */}
      <CounsellingModal
        isOpen={counsellingModalOpen}
        onClose={() => setCounsellingModalOpen(false)}
        onSuccess={handleBookingSuccess}
      />

      <UniversityModal
        university={selectedUniversity}
        onClose={() => setSelectedUniversity(null)}
        onApply={handleApplyToUniversity}
      />

      <CountryModal
        country={selectedCountry}
        onClose={() => setSelectedCountry(null)}
        onExploreUniversities={handleExploreUniversitiesInCountry}
      />

      <CountryComparisonModal
        isOpen={comparisonModalOpen}
        onClose={() => setComparisonModalOpen(false)}
        onSelectCountry={(c) => {
          setComparisonModalOpen(false);
          setSelectedCountry(c);
        }}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}

export default App;
