import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/services';
import { ServiceItem } from '../types';
import { Compass, Globe, GraduationCap, CheckCircle2, FileText, ShieldCheck, Mail, Stamp, BadgePercent, Plane, Home, HeartHandshake, ArrowRight, AlertTriangle } from 'lucide-react';

interface ServicesSectionProps {
  onOpenCounselling: () => void;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Compass,
  Globe,
  GraduationCap,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Mail,
  Stamp,
  BadgePercent,
  Plane,
  Home,
  HeartHandshake,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenCounselling }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<'All' | 'Counselling' | 'Admissions' | 'Documentation' | 'Post-Arrival'>('All');

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (activeCategory === 'All') return true;
    return s.category === activeCategory;
  });

  return (
    <section id="services" className="py-16 md:py-24 bg-[#F4F6F9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold text-[#16A6A1] uppercase tracking-wider mb-1.5">
              Comprehensive Student Support
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#102B46] tracking-tight font-display">
              End-to-End Admission & Support Services
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-2xl">
              We guide students and parents through every milestone—from your very first career consultation to hostel room allotment and graduation support.
            </p>
          </div>

          <button
            onClick={onOpenCounselling}
            className="px-5 py-2.5 text-xs font-bold text-white bg-[#102B46] hover:bg-[#2457A6] rounded-xl transition flex items-center gap-2 cursor-pointer shadow-sm shrink-0"
          >
            <span>Request Full Service Brochure</span>
            <ArrowRight className="w-4 h-4 text-[#16A6A1]" />
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 pb-6 border-b border-slate-200 overflow-x-auto">
          {(['All', 'Counselling', 'Admissions', 'Documentation', 'Post-Arrival'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#102B46] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-200/60'
              }`}
            >
              {cat === 'All' ? 'All 12 Services' : cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.iconName] || Compass;
            return (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#16A6A1]/50 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 text-[#102B46] flex items-center justify-center group-hover:bg-[#102B46] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6 text-[#16A6A1] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-600">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#102B46] font-display mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables snippet */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <div className="text-[10px] font-bold text-slate-700 uppercase">Includes:</div>
                    {service.deliverables.slice(0, 2).map((item, i) => (
                      <div key={i} className="text-xs text-slate-600 flex items-start gap-1.5 leading-snug">
                        <span className="text-[#16A6A1] font-bold">✓</span>
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Transparency Note required by prompt (§10) */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-[#16A6A1] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Full Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] text-slate-600">Transparent Scope</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsible Disclaimer Box */}
        <div className="mt-10 p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Regulatory & Agency Transparency:</strong> Aventis Medical acts as an authorized education advisory and liaison service. We do not guarantee admission, visa issuance, scholarship awards, bank loan sanctions, or foreign government decisions, as all final authorities rest exclusively with the respective university senate, embassies, and regulatory commissions.
          </p>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <span className="text-xs font-semibold text-[#16A6A1] uppercase tracking-wider">
                {selectedService.category} · Service Scope
              </span>
              <button
                onClick={() => setSelectedService(null)}
                className="text-slate-400 hover:text-slate-700 text-sm font-bold cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            <h3 className="text-xl font-bold text-[#102B46] font-display mb-2">
              {selectedService.title}
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {selectedService.detailedDesc}
            </p>

            <div className="space-y-2 mb-4">
              <div className="text-xs font-bold text-[#102B46] uppercase tracking-wide">
                What We Provide:
              </div>
              {selectedService.deliverables.map((d, i) => (
                <div key={i} className="text-xs text-slate-700 flex items-start gap-2">
                  <span className="text-[#16A6A1] font-bold">✓</span>
                  <span>{d}</span>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 mb-5">
              <div className="font-bold text-[#102B46] mb-1">What We Do Not Do:</div>
              <p className="italic">{selectedService.whatWeDoNotDo}</p>
            </div>

            <button
              onClick={() => {
                setSelectedService(null);
                onOpenCounselling();
              }}
              className="w-full py-2.5 text-xs font-bold text-white bg-[#102B46] hover:bg-[#2457A6] rounded-xl transition"
            >
              Discuss This Service With a Counselor
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
