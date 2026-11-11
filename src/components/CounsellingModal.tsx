import React, { useState } from 'react';
import { X, Calendar, Clock, Video, Building, Phone, CheckCircle2, ArrowRight } from 'lucide-react';

interface CounsellingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (booking: any) => void;
}

export const CounsellingModal: React.FC<CounsellingModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [mode, setMode] = useState<'video' | 'in-person' | 'phone'>('video');
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    neetScore: '',
    date: '2026-03-20',
    timeSlot: '11:00 AM - 12:00 PM',
    center: 'Bengaluru (MG Road HQ)',
    destination: 'Open to Counselor Advice',
  });
  const [confirmed, setConfirmed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName.trim() || !formData.phone.trim()) {
      setError('Please provide student name and mobile number.');
      return;
    }
    setError('');
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setConfirmed(true);
      onSuccess({ ...formData, mode });
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 md:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
          <div>
            <span className="text-[10px] font-bold text-[#16A6A1] uppercase tracking-wider">
              Complimentary 1-on-1 Guidance
            </span>
            <h3 className="text-xl font-bold text-[#102B46] font-display">
              Book Free MBBS Admission Counselling
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmed ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-[#102B46] font-display">
              Counselling Session Confirmed!
            </h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              We have reserved your slot on <strong className="text-slate-900">{formData.date}</strong> at <strong className="text-slate-900">{formData.timeSlot}</strong>.
            </p>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 max-w-xs mx-auto text-left space-y-1 font-mono">
              <div>Mode: {mode.toUpperCase()}</div>
              <div>Student: {formData.studentName}</div>
              <div>Destination: {formData.destination}</div>
            </div>
            <p className="text-[11px] text-slate-500">
              A calendar link and Zoom meeting invite has been sent to your WhatsApp and email.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 text-xs font-bold text-white bg-[#102B46] hover:bg-[#2457A6] rounded-xl transition cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {error && (
              <div className="p-2.5 bg-rose-50 border border-rose-200 text-rose-700 rounded-lg text-xs">
                {error}
              </div>
            )}

            {/* Mode selection */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1.5">
                Preferred Counselling Mode:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setMode('video')}
                  className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 transition cursor-pointer ${
                    mode === 'video'
                      ? 'bg-[#102B46] text-white border-[#102B46]'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  <Video className="w-4 h-4" />
                  <span className="font-semibold text-[11px]">Video Call (Zoom)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setMode('in-person')}
                  className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 transition cursor-pointer ${
                    mode === 'in-person'
                      ? 'bg-[#102B46] text-white border-[#102B46]'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  <Building className="w-4 h-4" />
                  <span className="font-semibold text-[11px]">In-Person Office</span>
                </button>

                <button
                  type="button"
                  onClick={() => setMode('phone')}
                  className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 transition cursor-pointer ${
                    mode === 'phone'
                      ? 'bg-[#102B46] text-white border-[#102B46]'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold text-[11px]">Direct Phone Call</span>
                </button>
              </div>
            </div>

            {mode === 'in-person' && (
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Select Consultation Center:
                </label>
                <select
                  value={formData.center}
                  onChange={(e) => setFormData({ ...formData, center: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white"
                >
                  <option value="Bengaluru (MG Road HQ)">Bengaluru (MG Road HQ)</option>
                  <option value="New Delhi (Connaught Place)">New Delhi (Connaught Place)</option>
                  <option value="Hyderabad (Jubilee Hills)">Hyderabad (Jubilee Hills)</option>
                </select>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Student Name *
                </label>
                <input
                  type="text"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  placeholder="Student full name"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Parent / Guardian Name
                </label>
                <input
                  type="text"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  placeholder="Parent name"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Mobile Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="10-digit number"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@email.com"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Preferred Time Slot
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white"
                >
                  <option value="10:00 AM - 11:00 AM">10:00 AM – 11:00 AM</option>
                  <option value="11:30 AM - 12:30 PM">11:30 AM – 12:30 PM</option>
                  <option value="02:30 PM - 03:30 PM">02:30 PM – 03:30 PM</option>
                  <option value="04:00 PM - 05:00 PM">04:00 PM – 05:00 PM</option>
                  <option value="06:00 PM - 07:00 PM">06:00 PM – 07:00 PM (Evening)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Primary Destination Interest
              </label>
              <select
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white"
              >
                <option value="Open to Counselor Advice">Open to Counselor's Advice</option>
                <option value="Russia">Russia</option>
                <option value="Georgia">Georgia</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Nepal">Nepal</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 text-xs font-bold text-white bg-[#102B46] hover:bg-[#2457A6] rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-sm mt-2"
            >
              {submitting ? 'Confirming Appointment...' : 'Confirm Free Counselling Session'}
            </button>

            <p className="text-[10px] text-slate-500 text-center">
              100% Free · No Obligation · Authorized Direct Admissions Guidance
            </p>
          </form>
        )}

      </div>
    </div>
  );
};
