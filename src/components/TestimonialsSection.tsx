import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { Quote, ChevronLeft, ChevronRight, GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-[#16A6A1] uppercase tracking-wider mb-1.5">
              Verified Student Journeys
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#102B46] tracking-tight font-display">
              Real Stories from Indian Medical Students Abroad
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-2xl">
              Authentic admission journeys and candid feedback from students and parents guided by Aventis Medical.
            </p>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Editorial Testimonial Card */}
        <div className="rounded-3xl bg-[#F4F6F9] border border-slate-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Left: Student Image */}
          <div className="lg:col-span-5 h-72 sm:h-96 w-full relative overflow-hidden bg-slate-900">
            <img
              src={current.photoUrl}
              alt={current.studentName}
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102B46] via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="text-xs font-semibold text-[#16A6A1] uppercase tracking-wider">
                Batch of {current.yearOfAdmission} · {current.currentYear}
              </div>
              <div className="text-base font-bold font-display">
                {current.studentName}
              </div>
              <div className="text-xs text-slate-300">
                From {current.homeCity}
              </div>
            </div>
          </div>

          {/* Right: Detailed Experience Prose */}
          <div className="lg:col-span-7 p-6 md:p-10 space-y-5">
            <Quote className="w-8 h-8 text-[#16A6A1] opacity-60" />

            <blockquote className="text-base sm:text-lg font-medium text-[#102B46] leading-relaxed italic font-display">
              “{current.quote}”
            </blockquote>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {current.story}
            </p>

            {/* Credential badges */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/80 text-xs">
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">University</div>
                <div className="font-bold text-[#102B46] text-xs truncate">{current.universityName}</div>
                <div className="text-[11px] text-slate-500">{current.country}</div>
              </div>

              <div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">NEET Score</div>
                <div className="font-bold text-[#16A6A1] font-mono text-sm">{current.neetScore} / 720</div>
                <div className="text-[11px] text-slate-500">Verified Qualification</div>
              </div>

              <div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Status</div>
                <div className="font-bold text-slate-800 text-xs">{current.currentYear}</div>
                <div className="text-[11px] text-emerald-600 font-medium">In Good Standing</div>
              </div>
            </div>

            {/* Indicators */}
            <div className="flex items-center gap-2 pt-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[#102B46]' : 'w-2 bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
