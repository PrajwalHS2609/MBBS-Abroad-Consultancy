import React, { useState } from 'react';
import { FAQ_DATA } from '../data/faq';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';

export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'NEET & NMC', 'Fees & Budget', 'Living & Safety', 'Admission Process'];

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    if (activeCategory !== 'All' && faq.category !== activeCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchQ = faq.question.toLowerCase().includes(q);
      const matchA = faq.answer.toLowerCase().includes(q);
      if (!matchQ && !matchA) return false;
    }
    return true;
  });

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#F4F6F9] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-semibold text-[#16A6A1] uppercase tracking-wider mb-1.5">
            Clear Answers for Students & Parents
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#102B46] tracking-tight font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Everything you need to know about NMC foreign medical regulations, eligibility, tuition fees, student visas, and career pathways.
          </p>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., NEET, FMGE, food, duration, cost)..."
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#16A6A1]/40 focus:border-[#16A6A1]"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#102B46] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 bg-white rounded-xl border border-slate-200 text-xs text-slate-500">
              No matching questions found. Try searching a different keyword or category.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                  >
                    <span className="text-sm font-bold text-[#102B46] font-display">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#16A6A1] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                      <p>{faq.answer}</p>
                      <div className="mt-3 flex items-center gap-2 text-[10px] text-slate-600">
                        <span>Category: {faq.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>Verified with NMC FMGL Norms</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom prompt */}
        <div className="mt-8 text-center text-xs text-slate-500">
          Have a specific doubt not answered here?{' '}
          <a
            href="#contact"
            className="font-bold text-[#16A6A1] hover:underline"
          >
            Speak with an admission counselor directly
          </a>
        </div>

      </div>
    </section>
  );
};
