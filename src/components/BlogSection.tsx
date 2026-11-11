import React, { useState } from 'react';
import { BLOGS_DATA } from '../data/blogs';
import { BlogPost } from '../types';
import { BookOpen, Calendar, Clock, User, ArrowRight, X } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'NMC Guidelines', 'Country Guide', 'Admission Guide', 'Financial Planning'];

  const filteredPosts = BLOGS_DATA.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="blog" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold text-[#16A6A1] uppercase tracking-wider mb-1.5">
              Knowledge & Guidance Hub
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#102B46] tracking-tight font-display">
              Latest MBBS Guides & Educational Insights
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-2xl">
              In-depth research papers, statutory breakdowns, country comparisons, and financial checklists compiled by our senior academic team.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#102B46] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-[#16A6A1]/50 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="p-6 space-y-3">
                {/* Meta row - unboxed text per §1.A */}
                <div className="flex items-center gap-2 text-[11px] text-slate-500">
                  <span className="font-semibold text-[#16A6A1]">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-base font-bold text-[#102B46] font-display line-clamp-2 group-hover:text-[#2457A6] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>

                {/* Key takeaways pills replacement: clean bullet */}
                <div className="pt-2 border-t border-slate-100">
                  <div className="text-[10px] font-bold text-slate-700 uppercase mb-1">
                    Key Highlight:
                  </div>
                  <p className="text-xs text-slate-500 italic line-clamp-1">
                    “{post.keyTakeaways[0]}”
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-50 mt-2">
                <div className="text-[11px] text-slate-500">
                  By <strong className="text-slate-800">{post.author}</strong>
                </div>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="text-xs font-bold text-[#16A6A1] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full Article Reading Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-150 space-y-5">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="font-semibold text-[#16A6A1]">{selectedPost.category}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedPost.readTime}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedPost.date}</span>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h2 className="text-2xl font-bold text-[#102B46] font-display leading-snug">
              {selectedPost.title}
            </h2>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
              <div className="w-8 h-8 rounded-full bg-[#102B46] text-white flex items-center justify-center font-bold text-xs">
                {selectedPost.author.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-slate-900">{selectedPost.author}</div>
                <div className="text-slate-500 text-[11px]">{selectedPost.authorRole}</div>
              </div>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedPost.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-200/60 space-y-2">
              <div className="text-xs font-bold text-[#102B46] uppercase tracking-wide">
                Key Strategic Takeaways:
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5">
                {selectedPost.keyTakeaways.map((k, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#16A6A1] font-bold">✓</span>
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition cursor-pointer"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
