'use client';

import { useEffect, useState } from 'react';

export default function Navigation() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 backdrop-blur-sm ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tight">
            LÉA BRASSEUR
          </a>

          <div className="flex gap-8">
            <a
              href="#modeling"
              className="text-sm uppercase tracking-wider hover:text-purple-400 transition-colors relative group"
            >
              Mannequinat
              <span className="absolute bottom-0 left-0 w-0 h-px bg-purple-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#acting"
              className="text-sm uppercase tracking-wider hover:text-purple-400 transition-colors relative group"
            >
              Comédie
              <span className="absolute bottom-0 left-0 w-0 h-px bg-purple-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#about"
              className="text-sm uppercase tracking-wider hover:text-purple-400 transition-colors relative group"
            >
              À propos
              <span className="absolute bottom-0 left-0 w-0 h-px bg-purple-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#contact"
              className="text-sm uppercase tracking-wider hover:text-purple-400 transition-colors relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-px bg-purple-400 transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
