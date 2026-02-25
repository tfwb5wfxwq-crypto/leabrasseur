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
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  // Hover animations
  useEffect(() => {
    if (!leftRef.current || !rightRef.current || !dividerRef.current) return;

    if (hoveredSide === 'left') {
      gsap.to(leftRef.current, { width: '60%', duration: 0.8, ease: 'power3.out' });
      gsap.to(rightRef.current, { width: '40%', duration: 0.8, ease: 'power3.out' });
      gsap.to(dividerRef.current, { x: '10%', duration: 0.8, ease: 'power3.out' });
    } else if (hoveredSide === 'right') {
      gsap.to(leftRef.current, { width: '40%', duration: 0.8, ease: 'power3.out' });
      gsap.to(rightRef.current, { width: '60%', duration: 0.8, ease: 'power3.out' });
      gsap.to(dividerRef.current, { x: '-10%', duration: 0.8, ease: 'power3.out' });
    } else {
      gsap.to(leftRef.current, { width: '50%', duration: 0.8, ease: 'power3.out' });
      gsap.to(rightRef.current, { width: '50%', duration: 0.8, ease: 'power3.out' });
      gsap.to(dividerRef.current, { x: '0%', duration: 0.8, ease: 'power3.out' });
    }
  }, [hoveredSide]);

  // Initial fade in animation
  useEffect(() => {
    gsap.from('.fade-in', {
      opacity: 0,
      y: 30,
      duration: 1.2,
      ease: 'power3.out',
      stagger: 0.2,
      delay: 0.3,
    });
  }, []);

  const handleClick = (mode: ViewMode) => {
    if (!containerRef.current) return;

    // Fade out animation before transition
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: () => setViewMode(mode),
    });
  };

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden bg-black">
      {/* Left side - Mannequin */}
      <div
        ref={leftRef}
        className="absolute left-0 top-0 h-full w-1/2 cursor-pointer overflow-hidden transition-all"
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => handleClick('modeling')}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-transparent to-transparent opacity-60" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center p-12 text-center">
          <h2 className="fade-in mb-4 text-7xl font-light tracking-wider text-white">
            LÉA
            <br />
            <span className="text-8xl font-thin">BRASSEUR</span>
          </h2>
          <div className="fade-in mb-8 h-px w-24 bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
          <p className="fade-in text-2xl font-light tracking-[0.3em] text-pink-200">
            MANNEQUIN
          </p>

          {/* Hover indicator */}
          <div className={`fade-in mt-12 text-sm font-light tracking-widest text-white/60 transition-opacity ${
            hoveredSide === 'left' ? 'opacity-100' : 'opacity-0'
          }`}>
            VOIR LE PORTFOLIO →
          </div>
        </div>

        {/* Subtle animated gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-1/2 -top-1/2 h-[200%] w-[200%] animate-spin-slow bg-gradient-radial from-pink-500/10 via-transparent to-transparent" />
        </div>
      </div>

      {/* Right side - Actrice */}
      <div
        ref={rightRef}
        className="absolute right-0 top-0 h-full w-1/2 cursor-pointer overflow-hidden transition-all"
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => handleClick('acting')}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/20 via-transparent to-transparent opacity-60" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center p-12 text-center">
          <h2 className="fade-in mb-4 text-7xl font-light tracking-wider text-white">
            LÉA
            <br />
            <span className="text-8xl font-thin">BRASSEUR</span>
          </h2>
          <div className="fade-in mb-8 h-px w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
          <p className="fade-in text-2xl font-light tracking-[0.3em] text-blue-200">
            COMÉDIENNE
          </p>

          {/* Hover indicator */}
          <div className={`fade-in mt-12 text-sm font-light tracking-widest text-white/60 transition-opacity ${
            hoveredSide === 'right' ? 'opacity-100' : 'opacity-0'
          }`}>
            VOIR LE PORTFOLIO →
          </div>
        </div>

        {/* Subtle animated gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -right-1/2 -top-1/2 h-[200%] w-[200%] animate-spin-slow bg-gradient-radial from-blue-500/10 via-transparent to-transparent" />
        </div>
      </div>

      {/* Divider */}
      <div
        ref={dividerRef}
        className="absolute left-1/2 top-0 z-20 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/30 to-transparent"
      />

      {/* Scroll indicator */}
      <div className="fade-in absolute bottom-12 left-1/2 z-30 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-px animate-bounce bg-gradient-to-b from-white/40 to-transparent" />
          <p className="text-xs font-light tracking-widest text-white/40">CHOISISSEZ</p>
        </div>
      </div>
    </div>
  );
}
