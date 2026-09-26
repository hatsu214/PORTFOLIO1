import React from 'react';
import { siteConfig } from '../data/siteConfig';

export default function Skills() {
  const { capabilities, tools } = siteConfig;

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8 scroll-mt-20" id="skills">
      {/* Section Header */}
      <div className="text-center mb-14">
        <p className="text-xs uppercase font-bold tracking-widest text-[#F25623] mb-2">— MY SKILLS —</p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
          Core Capabilities & Software Mastery
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-[#6260F3] to-[#F25623] mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Core Capabilities: Progress Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {capabilities.map((cap, i) => (
          <div key={i} className="glass-card p-6 sm:p-7 rounded-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base sm:text-lg font-bold text-white">{cap.name}</h3>
              <span className="text-sm font-bold" style={{ color: cap.color }}>{cap.percentage}%</span>
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-zinc-800 rounded-full h-2.5 mb-4 overflow-hidden p-0.5">
              <div 
                className={`h-full rounded-full transition-all duration-1000 ${i === 0 ? 'bg-gradient-to-r from-[#6260F3] to-[#F25623]' : 'bg-gradient-to-r from-[#F25623] to-[#6260F3]'}`} 
                style={{ width: `${cap.percentage}%` }}
              ></div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-body">
              {cap.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Tools I Use Daily */}
      <div className="text-center">
        <p className="text-xs uppercase font-bold tracking-wider text-zinc-400 mb-8">TOOLS I USE DAILY</p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {tools.map((tool, i) => (
            <div key={i} className="glass-card px-5 py-4 sm:px-6 sm:py-5 rounded-xl flex flex-col items-center gap-3 w-28 sm:w-32 hover:border-white/20 transition duration-300">
              <div className="w-14 h-14 flex items-center justify-center">
                <img src={tool.icon} alt={tool.name} className="w-14 h-14 object-contain" />
              </div>
              <span className="text-xs font-semibold text-zinc-300">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
