import React from 'react';
import { X, ShieldCheck, Scale, AlertTriangle } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'disclaimer' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 md:p-8 shadow-2xl border border-slate-200 max-h-[85vh] overflow-y-auto animate-in zoom-in-95 duration-150 space-y-4 text-xs text-slate-700 leading-relaxed">
        
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            {type === 'privacy' && <ShieldCheck className="w-5 h-5 text-[#16A6A1]" />}
            {type === 'terms' && <Scale className="w-5 h-5 text-[#16A6A1]" />}
            {type === 'disclaimer' && <AlertTriangle className="w-5 h-5 text-amber-600" />}
            <h3 className="text-lg font-bold text-[#102B46] font-display">
              {type === 'privacy' && 'Privacy & Student Data Protection Policy'}
              {type === 'terms' && 'Terms of Service & Advisory Agreement'}
              {type === 'disclaimer' && 'Statutory Legal & NMC Disclaimer'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {type === 'privacy' && (
          <div className="space-y-3">
            <p>
              Aventis Medical Education Services Pvt. Ltd. respects the privacy of students and parents who submit inquiries via our digital platforms.
            </p>
            <h4 className="font-bold text-slate-900">1. Information Collection</h4>
            <p>
              We collect information provided voluntarily: student name, contact details, academic scores, and study preferences. This data is used solely to assess university eligibility and deliver requested prospectuses.
            </p>
            <h4 className="font-bold text-slate-900">2. No Third-Party Sale</h4>
            <p>
              We strictly maintain confidentiality. Your phone number and email will never be sold, leased, or broadcast to unsolicited third-party coaching institutes or lenders.
            </p>
            <h4 className="font-bold text-slate-900">3. Data Retention & Erasure</h4>
            <p>
              You may request complete erasure of your contact record from our counseling database at any time by writing to <em>privacy@aventismedical.com</em>.
            </p>
          </div>
        )}

        {type === 'terms' && (
          <div className="space-y-3">
            <p>
              By accessing Aventis Medical advisory services and submitting application dossiers, students and guardians agree to the following operational parameters:
            </p>
            <h4 className="font-bold text-slate-900">1. Advisory Capacity</h4>
            <p>
              Aventis Medical operates as an authorized education consultancy. All university admissions, degree awards, course curriculums, and hospital postings are governed solely by the respective foreign universities.
            </p>
            <h4 className="font-bold text-slate-900">2. Direct Remittances</h4>
            <p>
              Tuition and hostel fees must be remitted directly to the official bank accounts of the chosen foreign state university. Aventis Medical accepts service coordination charges solely for administrative documentation, MEA apostille, visa guidance, and pre-departure arrangements.
            </p>
            <h4 className="font-bold text-slate-900">3. Academic Honesty</h4>
            <p>
              Students must submit authentic educational mark sheets and NEET scorecards. Submission of forged or manipulated documents results in immediate cancellation of advisory representation.
            </p>
          </div>
        )}

        {type === 'disclaimer' && (
          <div className="space-y-3">
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 font-medium">
              “Medical education and registration requirements are subject to applicable Indian laws and regulations. Students must verify the latest National Medical Commission guidelines and relevant official requirements before selecting a university.”
            </div>
            <h4 className="font-bold text-slate-900">1. NMC FMGL Compliance Notice</h4>
            <p>
              As per the Foreign Medical Graduate Licentiate (FMGL) Regulations 2021 published in the Gazette of India, Indian students completing medical degrees abroad must satisfy 54 months of theory education, a 12-month internship in the same institution, instruction in English, and licensing eligibility in the foreign country.
            </p>
            <h4 className="font-bold text-slate-900">2. National Exit Test (NExT)</h4>
            <p>
              To practice medicine in India, foreign medical graduates must qualify the National Exit Test (NExT) and undergo a 1-year Compulsory Rotating Medical Internship in an approved Indian teaching hospital. Passing licensing examinations is the sole academic responsibility of the candidate.
            </p>
          </div>
        )}

        <div className="pt-3 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition cursor-pointer"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};
