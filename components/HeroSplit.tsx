'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ViewMode } from '@/app/page';

interface HeroSplitProps {
  setViewMode: (mode: ViewMode) => void;
}

export default function HeroSplit({ setViewMode }: HeroSplitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in the hero image
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' }
      );

      // Animate the name entrance
      gsap.fromTo(
        '.name-letter',
        { opacity: 0, y: 100, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.05,
          ease: 'power3.out',
          delay: 0.5
        }
      );

      // Animate subtitle
      gsap.fromTo(
        '.subtitle',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          delay: 1.5
        }
      );

      // Animate CTA buttons
      gsap.fromTo(
        '.cta-button',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          delay: 2
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const nameLetters = 'LEA BRASSEUR'.split('');

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black overflow-hidden">
      {/* Hero Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 opacity-0"
      >
        <img
          src="/photos/FlorianBoggia_Lea_37.jpg"
          alt="Lea Brasseur"
          className="w-full h-full object-cover object-center"
          style={{ objectPosition: '50% 20%' }}
        />
        {/* Elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8 text-center">
        {/* Name */}
        <div ref={nameRef} className="mb-8">
          <h1 className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {nameLetters.map((letter, i) => (
              <span
                key={i}
                className="name-letter inline-block text-[clamp(3rem,12vw,9rem)] font-light tracking-[0.02em] opacity-0"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#ffffff',
                  textShadow: '0 2px 30px rgba(0,0,0,0.8), 0 0 80px rgba(255,255,255,0.1)'
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>
        </div>

        {/* Subtitle */}
        <div className="subtitle opacity-0 mb-16">
          <div className="flex items-center gap-6 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/40" />
            <p
              className="text-xl tracking-[0.3em] uppercase text-white/90"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Paris
            </p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/40" />
          </div>
          <p
            className="text-3xl text-white/80 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300 }}
          >
            Mannequin & Comédienne
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <button
            onClick={() => setViewMode('modeling')}
            className="cta-button group relative opacity-0"
          >
            <div className="absolute inset-0 bg-white rounded-none blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative px-12 py-5 bg-white text-black border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300">
              <span
                className="text-lg tracking-[0.2em] uppercase font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Portfolio Mannequin
              </span>
            </div>
          </button>

          <button
            onClick={() => setViewMode('acting')}
            className="cta-button group relative opacity-0"
          >
            <div className="absolute inset-0 bg-white rounded-none blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative px-12 py-5 border-2 border-white/60 text-white hover:bg-white hover:text-black transition-all duration-300">
              <span
                className="text-lg tracking-[0.2em] uppercase font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Portfolio Comédie
              </span>
            </div>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-delayed">
          <div className="flex flex-col items-center gap-3">
            <p
              className="text-xs tracking-[0.3em] uppercase text-white/50"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Découvrir
            </p>
            <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');

        @keyframes fade-in-delayed {
          0% { opacity: 0; }
          80% { opacity: 0; }
          100% { opacity: 1; }
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
