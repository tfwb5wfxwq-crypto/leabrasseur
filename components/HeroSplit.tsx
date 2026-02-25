'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ViewMode } from '@/app/page';

interface HeroSplitProps {
  setViewMode: (mode: ViewMode) => void;
}

export default function HeroSplit({ setViewMode }: HeroSplitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  // Hover animations
  useEffect(() => {
    if (!leftRef.current || !rightRef.current || !dividerRef.current) return;

    if (hoveredSide === 'left') {
      gsap.to(leftRef.current, { width: '55%', duration: 0.8, ease: 'power3.out' });
      gsap.to(rightRef.current, { width: '45%', duration: 0.8, ease: 'power3.out' });
    } else if (hoveredSide === 'right') {
      gsap.to(leftRef.current, { width: '45%', duration: 0.8, ease: 'power3.out' });
      gsap.to(rightRef.current, { width: '55%', duration: 0.8, ease: 'power3.out' });
    } else {
      gsap.to(leftRef.current, { width: '50%', duration: 0.8, ease: 'power3.out' });
      gsap.to(rightRef.current, { width: '50%', duration: 0.8, ease: 'power3.out' });
    }
  }, [hoveredSide]);

  // Initial fade in animation
  useEffect(() => {
    gsap.from('.fade-in', {
      opacity: 0,
      y: 40,
      duration: 1.5,
      ease: 'power3.out',
      stagger: 0.15,
      delay: 0.2,
    });
  }, []);

  const handleClick = (mode: ViewMode) => {
    if (!containerRef.current) return;

    // Fade out animation
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.inOut',
      onComplete: () => setViewMode(mode),
    });
  };

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden bg-white">
      {/* Left side - Mannequin */}
      <div
        ref={leftRef}
        className="absolute left-0 top-0 h-full w-1/2 cursor-pointer transition-all"
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => handleClick('modeling')}
      >
        {/* Subtle gradient on hover */}
        <div className={`absolute inset-0 bg-gradient-to-r from-gray-50/50 to-transparent transition-opacity duration-700 ${
          hoveredSide === 'left' ? 'opacity-100' : 'opacity-0'
        }`} />

        {/* Mannequin label */}
        <div className="absolute left-12 top-1/2 -translate-y-1/2">
          <div className="fade-in flex items-center gap-8">
            <div className={`h-px bg-black transition-all duration-700 ${
              hoveredSide === 'left' ? 'w-16' : 'w-8'
            }`} />
            <h3 className={`font-serif text-sm tracking-[0.5em] transition-all duration-700 ${
              hoveredSide === 'left' ? 'text-black' : 'text-gray-400'
            }`}>
              MANNEQUIN
            </h3>
          </div>
        </div>
      </div>

      {/* Right side - Comédienne */}
      <div
        ref={rightRef}
        className="absolute right-0 top-0 h-full w-1/2 cursor-pointer transition-all"
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => handleClick('acting')}
      >
        {/* Subtle gradient on hover */}
        <div className={`absolute inset-0 bg-gradient-to-l from-gray-50/50 to-transparent transition-opacity duration-700 ${
          hoveredSide === 'right' ? 'opacity-100' : 'opacity-0'
        }`} />

        {/* Comédienne label */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2">
          <div className="fade-in flex items-center gap-8">
            <h3 className={`font-serif text-sm tracking-[0.5em] transition-all duration-700 ${
              hoveredSide === 'right' ? 'text-black' : 'text-gray-400'
            }`}>
              COMEDIENNE
            </h3>
            <div className={`h-px bg-black transition-all duration-700 ${
              hoveredSide === 'right' ? 'w-16' : 'w-8'
            }`} />
          </div>
        </div>
      </div>

      {/* Center name */}
      <div
        ref={nameRef}
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <div className="fade-in mb-8 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-black/20" />
          <span className="font-serif text-xs tracking-[0.3em] text-gray-400">PORTFOLIO</span>
          <div className="h-px w-12 bg-black/20" />
        </div>

        <h1 className="fade-in font-serif text-[120px] font-light leading-none tracking-tight text-black">
          LEA
          <br />
          <span className="text-[140px] font-extralight tracking-wider">BRASSEUR</span>
        </h1>

        <div className="fade-in mt-8 text-xs font-light tracking-[0.4em] text-gray-500">
          PARIS
        </div>
      </div>

      {/* Vertical divider */}
      <div
        ref={dividerRef}
        className="absolute left-1/2 top-0 z-0 h-full w-px -translate-x-1/2 bg-black/10"
      />

      {/* Scroll indicator */}
      <div className="fade-in absolute bottom-12 left-1/2 z-30 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3">
          <p className="font-serif text-[10px] tracking-[0.3em] text-gray-400">CHOISISSEZ VOTRE UNIVERS</p>
          <div className="h-12 w-px animate-pulse bg-gradient-to-b from-black/40 to-transparent" />
        </div>
      </div>
    </div>
  );
}
