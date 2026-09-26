import React from 'react';
import { siteConfig } from '../data/siteConfig';

export default function Hero() {
  const { personal } = siteConfig;

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-[75vh]" id="home">
      {/* Left Column: Bio & Introduction */}
      <div className="flex-1 text-center lg:text-left">
        {/* Greetings Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-zinc-200 mb-6 shadow-sm">
          <span>✨ Hi, I'm</span>
        </div>
        
        {/* Name Header with Exact Brand Color Split */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3">
          <span className="text-[#6260F3]">{personal.firstName}</span> <span className="text-[#F25623]">{personal.lastName}</span>
        </h1>
        
        {/* Professional Role Subtitle */}
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-5 tracking-wide">
          {personal.role}
        </h2>
        
        {/* Bio Paragraph */}
        <p className="text-zinc-400 font-body text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
          {personal.bio}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
          <a className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 bg-gradient-to-r from-[#6260F3] to-[#F25623] hover:opacity-95 transform hover:-translate-y-0.5" href="#portfolio">
            <span>Lihat Portfolio</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
          <a className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 text-sm font-semibold transition-all duration-300" href="#contact">
            <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            <span>Hubungi Saya</span>
          </a>
        </div>
      </div>

      {/* Right Column: Hero Profile Image Frame with Badges */}
      <div className="flex-1 flex justify-center items-center relative">
        <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96 flex items-center justify-center">
          {/* Outer Colored Ring Indicator */}
          <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-tr from-[#6260F3] via-transparent to-[#F25623] opacity-80 animate-pulse"></div>
          
          {/* Profile Portrait Frame */}
          <div className="w-full h-full rounded-full overflow-hidden p-1.5 bg-[#171717]/80 backdrop-blur-md shadow-2xl relative z-10 border border-white/10">
            <div className="w-full h-full rounded-full overflow-hidden bg-zinc-800 relative group">
              <img src={personal.profileImage} alt={personal.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>
          
          {/* Floating Badge: Experience */}
          <div className="absolute top-2 left-0 sm:-left-2 z-20 glass-card px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-xl border border-white/15">
            <span className="text-xs text-amber-400">✦</span>
            <span className="text-xs font-semibold text-white tracking-wide">{personal.yearsExperience} Years experience</span>
          </div>
          
          {/* Floating Badge: Video Editor */}
          <div className="absolute top-28 -right-2 sm:-right-6 z-20 glass-card px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-xl border border-white/15">
            <svg className="w-3.5 h-3.5 text-[#F25623]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            <span className="text-xs font-semibold text-white">Video Editor</span>
          </div>
          
          {/* Floating Badge: UI/UX Designer */}
          <div className="absolute bottom-6 left-6 z-20 glass-card px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-xl border border-white/15">
            <span className="w-2 h-2 rounded-full bg-[#6260F3]"></span>
            <span className="text-xs font-semibold text-white">UI/UX Designer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
