import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';

export default function Contact() {
  const { personal, socials } = siteConfig;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    const form = e.target;
    const formData = new FormData(form);

    const scriptUrl = siteConfig.googleSheetScriptUrl || 'https://script.google.com/macros/s/AKfycbzFkKurN5GX5eIgLlDOVXKmcZKX2kz-yzqIU4DvjdVYMN9Ci_fe2DqM4_EdgefrsKHRbQ/exec';

    try {
      await fetch(scriptUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error('Error submitting form to Google Sheets:', error);
      setIsSuccess(true);
      form.reset();
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setIsSuccess(false);
      }, 6000);
    }
  };

  const getSocialIcon = (id) => {
    switch(id) {
      case 'linkedin':
        return <span className="text-sm font-black text-white">in</span>;
      case 'tiktok':
        return (
          <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.18 1.12 2.14 2.27 2.45.92.27 1.94.13 2.76-.36.75-.43 1.25-1.19 1.37-2.05.08-.85.08-1.7.07-2.55V.02h-.01z"></path>
          </svg>
        );
      case 'instagram':
        return (
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2"></line>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 lg:py-24 max-w-7xl mx-auto px-6 lg:px-8 scroll-mt-20" id="contact">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-xs uppercase font-bold tracking-widest text-[#F25623] mb-2">— CONTACT —</p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
          Let's Bring Your Vision to Life
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-[#6260F3] to-[#F25623] mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Left Column: Contact Info & Channels */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Have a project in mind? Let's discuss collaboration.
            </h3>
            <p className="text-sm text-zinc-400 font-body leading-relaxed mb-8">
              Whether you need a cutting-edge brand identity, a show-stopping video edit, or an intuitive SaaS dashboard UI, I am ready to collaborate.
            </p>

            {/* Direct Contact Methods */}
            <div className="space-y-4 mb-8">
              <a href={`mailto:${personal.email}`} className="glass-card p-4 rounded-xl flex items-center gap-3.5 group hover:border-[#6260F3] transition duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#6260F3]/20 flex items-center justify-center text-[#6260F3] group-hover:scale-105 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <span className="block text-[11px] text-zinc-400 font-medium">Email Address</span>
                  <span className="text-sm font-semibold text-white group-hover:text-[#6260F3] transition">{personal.email}</span>
                </div>
              </a>

              <a href={personal.waLink} target="_blank" rel="noopener noreferrer" className="glass-card p-4 rounded-xl flex items-center gap-3.5 group hover:border-emerald-500 transition duration-300">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
                  </svg>
                </div>
                <div>
                  <span className="block text-[11px] text-zinc-400 font-medium">WhatsApp</span>
                  <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition">{personal.whatsapp}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Social Icon Tiles */}
          <div>
            <p className="text-xs uppercase font-bold text-zinc-400 tracking-wider mb-3">CONNECT WITH ME</p>
            <div className="grid grid-cols-3 gap-3">
              {socials.map(social => (
                <a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer" className="glass-card p-3 rounded-xl flex flex-col items-center justify-center gap-1.5 hover:border-white/40 hover:bg-white/5 transition duration-300">
                  {getSocialIcon(social.id)}
                  <span className="text-[11px] font-semibold text-zinc-300">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Glassmorphic Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl relative">
            <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-zinc-300 mb-1.5">Nama Lengkap *</label>
                  <input type="text" id="contact-name" name="name" required placeholder="John Doe" className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-500 text-sm focus:border-[#6260F3] focus:ring-1 focus:ring-[#6260F3] transition" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-zinc-300 mb-1.5">Alamat Email *</label>
                  <input type="email" id="contact-email" name="email" required placeholder="john@example.com" className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-500 text-sm focus:border-[#6260F3] focus:ring-1 focus:ring-[#6260F3] transition" />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-semibold text-zinc-300 mb-1.5">Subjek Project *</label>
                <select id="contact-subject" name="subject" required className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white text-sm focus:border-[#6260F3] focus:ring-1 focus:ring-[#6260F3] transition">
                  <option value="" disabled selected className="bg-zinc-900 text-zinc-500">Pilih Kategori Project...</option>
                  <option value="Motion Graphic Animation" className="bg-zinc-900">Motion Graphic Animation</option>
                  <option value="UI/UX Product Design" className="bg-zinc-900">UI/UX Product Design</option>
                  <option value="Video Editing & Post-Production" className="bg-zinc-900">Video Editing & Post-Production</option>
                  <option value="Brand Identity & Campaign" className="bg-zinc-900">Brand Identity & Campaign</option>
                  <option value="Full-time / Contract Inquiry" className="bg-zinc-900">Full-time / Contract Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-zinc-300 mb-1.5">Pesan & Detail Brief *</label>
                <textarea id="contact-message" name="message" required rows="4" placeholder="Ceritakan tujuan proyek, timeline, dan ekspektasi Anda..." className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-500 text-sm focus:border-[#6260F3] focus:ring-1 focus:ring-[#6260F3] transition"></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full py-3.5 px-6 rounded-xl font-bold text-white text-sm bg-gradient-to-r from-[#6260F3] to-[#F25623] hover:opacity-95 shadow-lg shadow-indigo-500/20 active:scale-[0.99] transition flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <span>Mengirim Pesan...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span className="text-xs">▷</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-zinc-500 text-center font-medium mt-3">
                Response time within 24 hours.
              </p>

              {isSuccess && (
                <div className="text-xs text-center py-2 px-3 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Terima kasih! Pesan Anda telah terkirim dengan sukses.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
