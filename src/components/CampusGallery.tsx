import React, { useState } from 'react';
import { Camera, MapPin, Sparkles } from 'lucide-react';

export const CampusGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'campuses' | 'labs' | 'graduations'>('all');

  const galleryItems = [
    {
      id: 'g-1',
      category: 'campuses',
      title: 'European State Medical University Facade',
      location: 'Kazan, Russia',
      image: '/assets/images/campus_university_russia_1794401015785.jpg',
      aspect: 'col-span-12 md:col-span-8 h-80 md:h-96',
      tag: 'Academic Heritage'
    },
    {
      id: 'g-2',
      category: 'labs',
      title: 'High-Fidelity Clinical Simulation Lab',
      location: 'Almaty, Kazakhstan',
      image: '/assets/images/medical_lab_training_1794401015734.jpg',
      aspect: 'col-span-12 md:col-span-4 h-80 md:h-96',
      tag: 'Hands-on Clinical Training'
    },
    {
      id: 'g-3',
      category: 'campuses',
      title: 'Indian Medical Students on Campus Courtyard',
      location: 'Tbilisi, Georgia',
      image: '/assets/images/hero_indian_med_students_1794401014765.jpg',
      aspect: 'col-span-12 md:col-span-6 h-80',
      tag: 'Student Life'
    },
    {
      id: 'g-4',
      category: 'graduations',
      title: 'Graduation Ceremony & Medical Oath Convocation',
      location: 'Kathmandu, Nepal',
      image: '/assets/images/graduation_ceremony_doctors_1794401016581.jpg',
      aspect: 'col-span-12 md:col-span-6 h-80',
      tag: 'Doctor of Medicine Convocation'
    }
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section className="py-16 md:py-24 bg-[#F4F6F9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold text-[#16A6A1] uppercase tracking-wider mb-1.5">
              Visual Campus Experience
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#102B46] tracking-tight font-display">
              Life as an International Medical Student
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-2xl">
              From anatomical dissection laboratories and 1,000-bed referral teaching hospitals to student residence halls and graduation commencement ceremonies.
            </p>
          </div>

          {/* Gallery Filters */}
          <div className="flex items-center gap-2">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'campuses', label: 'Campuses' },
              { id: 'labs', label: 'Simulation Labs' },
              { id: 'graduations', label: 'Graduations' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-[#102B46] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-12 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`${item.aspect} relative rounded-2xl overflow-hidden group shadow-md border border-slate-200 bg-slate-900`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-slate-900">
                {item.tag}
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-1.5 text-xs text-[#16A6A1] font-medium mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold font-display leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
