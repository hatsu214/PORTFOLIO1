import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/siteConfig';

export default function Skills() {
  const { capabilities, tools } = siteConfig;

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8 scroll-mt-20" id="skills">
      {/* Section Header */}
      <motion.div 
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs uppercase font-bold tracking-widest text-[#F25623] mb-2">— MY SKILLS —</p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
          Core Capabilities & Software Mastery
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-[#6260F3] to-[#F25623] mx-auto mt-3 rounded-full"></div>
      </motion.div>

      {/* Core Capabilities: Progress Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {capabilities.map((cap, i) => (
          <motion.div 
            key={i} 
            className="glass-card p-6 sm:p-7 rounded-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base sm:text-lg font-bold text-white">{cap.name}</h3>
              <span className="text-sm font-bold" style={{ color: cap.color }}>{cap.percentage}%</span>
            </div>
            {/* Progress Bar with Framer Motion Fill Animation */}
            <div className="w-full bg-zinc-800 rounded-full h-2.5 mb-4 overflow-hidden p-0.5">
              <motion.div 
                className={`h-full rounded-full ${i === 0 ? 'bg-gradient-to-r from-[#6260F3] to-[#F25623]' : 'bg-gradient-to-r from-[#F25623] to-[#6260F3]'}`} 
                initial={{ width: 0 }}
                whileInView={{ width: `${cap.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
              ></motion.div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-body">
              {cap.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Tools I Use Daily */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs uppercase font-bold tracking-wider text-zinc-400 mb-8">TOOLS I USE DAILY</p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {tools.map((tool, i) => (
            <motion.div 
              key={i} 
              className="glass-card w-28 h-28 sm:w-32 sm:h-32 rounded-2xl flex flex-col items-center justify-center gap-2.5 p-3 hover:border-white/40 transition duration-300 shadow-lg cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.08, y: -5 }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-zinc-900/90 flex items-center justify-center shadow-md border border-white/10 shrink-0">
                <img src={tool.icon} alt={tool.name} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-zinc-300 text-center leading-tight truncate max-w-full px-1">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
