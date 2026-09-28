import React, { useEffect } from 'react';

export default function ProjectModal({ isOpen, onClose, project }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <div 
      aria-modal="true" 
      role="dialog"
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-md transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={`glass-card max-w-xl w-full rounded-2xl p-6 sm:p-7 border border-white/15 shadow-2xl relative transform transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-95'}`}>
        {/* Close Button */}
        <button 
          onClick={onClose}
          aria-label="Close modal" 
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Modal Badge Category */}
        <div className="mb-3 flex items-center gap-2">
          <span className="text-xs font-bold px-2.5 py-1 rounded bg-[#6260F3]/20 text-[#6260F3] border border-[#6260F3]/40 uppercase tracking-wide">
            {project.type}
          </span>
        </div>

        {/* Modal Title */}
        <h3 className="text-xl sm:text-2xl font-black text-white mb-3">{project.title}</h3>

        {/* Modal Visual Banner / Video */}
        {project.video ? (
          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden mb-4 border border-white/10 bg-black flex items-center justify-center">
            {project.video.includes('embed') || project.video.includes('youtube') || project.video.includes('vimeo') ? (
              <iframe 
                key={project.video}
                src={project.video} 
                title={project.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video 
                key={project.video}
                controls 
                autoPlay 
                playsInline 
                poster={project.thumbnail}
                className="w-full h-full object-contain bg-black"
              >
                <source src={project.video} type="video/mp4" />
                Browser Anda tidak mendukung pemutaran video.
              </video>
            )}
          </div>
        ) : project.thumbnail ? (
          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden mb-4 border border-white/10">
            <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-full aspect-[16/9] rounded-xl bg-zinc-900 overflow-hidden mb-4 border border-white/10 flex items-center justify-center relative p-4">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-[#6260F3] to-[#F25623] flex items-center justify-center text-white mb-2 shadow-lg">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
              </div>
              <span className="text-xs text-zinc-400 font-mono">Case Study Interactive Preview</span>
            </div>
          </div>
        )}

        {/* Description */}
        <p className="text-sm text-zinc-300 font-body leading-relaxed mb-5">
          {project.desc}
        </p>

        {/* Tools & Prototype Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-zinc-400 font-medium">Tools used:</span>
            <span className="font-bold text-white">{project.tools}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.prototypeUrl && (
              <a 
                href={project.prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#6260F3] to-[#F25623] hover:opacity-95 transition shadow-lg active:scale-95"
              >
                <span>View Prototype ↗</span>
              </a>
            )}
            <a 
              onClick={onClose}
              href="#contact" 
              className="inline-flex items-center gap-1 text-xs font-bold text-[#F25623] hover:underline"
            >
              Discuss project →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
