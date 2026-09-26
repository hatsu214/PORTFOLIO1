import React, { useState, useEffect } from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'skills', label: 'Skill' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActive(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4">
      <nav className="glass-card px-4 py-2 sm:px-6 sm:py-2.5 rounded-full shadow-2xl flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base font-medium border border-white/10" data-purpose="floating-navbar">
        {navItems.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full transition-all duration-300 ${
              active === item.id
                ? 'bg-[#F25623] text-white shadow-md font-semibold'
                : 'text-zinc-300 hover:text-white hover:bg-white/5'
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
