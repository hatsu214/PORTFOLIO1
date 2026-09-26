import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';

export default function Portfolio({ onOpenModal }) {
  const [filter, setFilter] = useState('all');
  const { portfolio } = siteConfig;

  const filters = [
    { id: 'all', label: 'All Works' },
    { id: 'design', label: 'Design' },
    { id: 'uiux', label: 'UI/UX' },
    { id: 'motion', label: 'Motion Graphic' }
  ];

  const filteredPortfolio = filter === 'all' ? portfolio : portfolio.filter(p => p.category === filter);

  return (
    <section className="py-20 lg:py-24 max-w-7xl mx-auto px-6 lg:px-8 scroll-mt-20" id="portfolio">
      {/* Section Header */}
      <div className="text-center mb-10">
        <p className="text-xs uppercase font-bold tracking-widest text-[#F25623] mb-2">— MY PORTFOLIO —</p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
          Featured Works & Case Studies
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-[#6260F3] to-[#F25623] mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center mb-12">
        <div className="glass-card p-1.5 rounded-full flex flex-wrap justify-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold border border-white/10">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                filter === f.id
                  ? 'bg-[#F25623] text-white shadow'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {filteredPortfolio.map((item, i) => (
          <article 
            key={i} 
            onClick={() => onOpenModal(item)}
            className="portfolio-card glass-card rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1.5 animate-[fadeIn_0.3s_ease-in-out]"
          >
            <div className={`relative aspect-[16/10] bg-zinc-900 overflow-hidden border-b border-white/5 flex items-center justify-center ${item.thumbnail ? 'p-0' : 'p-4'}`}>
              {/* Category Badge — shown on ALL cards */}
              <span className="absolute top-3 left-3 z-10 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-black/50 text-zinc-200 border border-white/10 backdrop-blur-sm">
                {item.category === 'motion' ? 'Motion Graphic' : item.category === 'uiux' ? 'UI/UX' : 'Design'}
              </span>

              {item.thumbnail ? (
                <div className="relative w-full h-full">
                  <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                  {item.video && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition">
                      <div className="w-12 h-12 rounded-full bg-[#F25623]/90 flex items-center justify-center text-white shadow-lg shadow-orange-500/30 group-hover:scale-110 transition duration-300">
                        <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-950 p-4 flex flex-col justify-between">
                  {/* Spacer to push content below the badge */}
                  <div></div>
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#F25623]/90 flex items-center justify-center text-white shadow-lg shadow-orange-500/30 group-hover:scale-110 transition duration-300">
                      <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 transition-all duration-500" style={{ backgroundColor: item.accent || '#F25623' }}></div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-5">
              <span 
                className="text-[11px] font-semibold block mb-1"
                style={{ color: item.category === 'motion' ? '#6260F3' : '#F25623' }}
              >
                {item.category === 'motion' ? 'SaaS • Motion Graphic' : item.category === 'uiux' ? 'Personal Project • UI/UX' : item.type}
              </span>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#F25623] transition-colors">{item.title}</h3>
              <p className="text-xs text-zinc-400 line-clamp-2 mb-4 font-body">{item.desc}</p>
              
              <div className="flex items-center gap-1.5">
                {item.tools.split(', ').map(tool => (
                  <span key={tool} className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-zinc-300 border border-white/10">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
