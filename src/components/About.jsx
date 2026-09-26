import React from 'react';
import { siteConfig } from '../data/siteConfig';

export default function About() {
  const { personal } = siteConfig;

  return (
    <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-8 scroll-mt-20" id="about">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-xs uppercase font-bold tracking-widest text-[#F25623] mb-2">— ABOUT ME —</p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
          Passionate Creator Behind Every Frame & Pixel
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-[#6260F3] to-[#F25623] mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Portrait Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm rounded-2xl overflow-hidden glass-card p-3 border border-white/10 group shadow-2xl">
            {/* Portrait Container */}
            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-zinc-800 relative">
              <img src={personal.aboutImage} alt="About Me" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
            </div>
            {/* Bottom Availability Pill Badge */}
            <div className="mt-3 py-2.5 px-4 rounded-xl bg-zinc-900/90 border border-white/5 flex items-center justify-between text-xs font-medium">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-zinc-200">Available for Freelance & Full-time</span>
              </div>
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative, Quote & Stats */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          {/* Quote */}
          <blockquote className="text-base sm:text-lg font-semibold text-white leading-relaxed border-l-2 border-[#6260F3] pl-4">
            {personal.aboutQuote}
          </blockquote>
          
          {/* Descriptions */}
          <div className="space-y-4 text-sm sm:text-base font-body text-zinc-300 leading-relaxed">
            {personal.aboutParagraphs.map((p, i) => (
              <p key={i} className={i === 1 ? 'text-zinc-400 text-sm' : ''}>
                {p}
              </p>
            ))}
          </div>

          {/* Stats Counters */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 py-2">
            <div className="glass-card p-4 rounded-xl text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white">
                {personal.projectsFinished}
              </span>
              <span className="text-[11px] sm:text-xs text-zinc-400 font-medium">Projects Finished</span>
            </div>
            <div className="glass-card p-4 rounded-xl text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white">
                {personal.yearsExperience}
              </span>
              <span className="text-[11px] sm:text-xs text-zinc-400 font-medium">Years Experience</span>
            </div>
            <div className="glass-card p-4 rounded-xl text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white">
                {personal.satisfiedClients}
              </span>
              <span className="text-[11px] sm:text-xs text-zinc-400 font-medium">Satisfied Clients</span>
            </div>
          </div>

          {/* Download CV Button */}
          <div>
            <a className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-white text-xs sm:text-sm font-semibold gradient-brand shadow-lg hover:shadow-orange-500/20 transition-transform active:scale-95" href="#contact">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              <span>Download Curriculum Vitae (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
