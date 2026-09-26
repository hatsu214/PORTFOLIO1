import React from 'react';
import { siteConfig } from '../data/siteConfig';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 py-8 px-6 lg:px-8 relative z-10" data-purpose="site-footer">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
        {/* Brand & Available Status */}
        <div className="flex items-center gap-3">
          <span className="font-bold text-white tracking-wide">{siteConfig.personal.name}</span>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-600/40">Available for hire</span>
        </div>
        {/* Copyright */}
        <p className="text-zinc-500 font-body">
          © {new Date().getFullYear()} {siteConfig.personal.name}. All rights reserved.
        </p>
        {/* Back To Top Button */}
        <a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-card text-zinc-300 hover:text-white transition hover:border-white/20" href="#home">
          <span>↑ Back to top</span>
        </a>
      </div>
    </footer>
  );
}
