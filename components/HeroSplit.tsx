'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import type { ViewMode } from '@/app/page';

interface HeroSplitProps {
  setViewMode: (mode: ViewMode) => void;
}

export default function HeroSplit({ setViewMode }: HeroSplitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  useEffect(() => {
    // Initial entrance animation
    gsap.fromTo(
      [leftRef.current, rightRef.current],
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.15
      }
    );

    // Grain animation
    const grainElements = containerRef.current?.querySelectorAll('.grain');
    if (grainElements) {
      gsap.to(grainElements, {
        opacity: 0.4,
        duration: 0.1,
        repeat: -1,
        yoyo: true,
        ease: 'steps(5)'
      });
    }
  }, []);

  const handleClick = (side: 'acting' | 'modeling') => {
    const targetRef = side === 'acting' ? leftRef : rightRef;
    const otherRef = side === 'acting' ? rightRef : leftRef;

    // Dramatic exit animation
    gsap.to(otherRef.current, {
      x: side === 'acting' ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: 'power3.inOut'
    });

    gsap.to(targetRef.current, {
      width: '100%',
      duration: 0.8,
      ease: 'power3.inOut',
      onComplete: () => {
        setViewMode(side);
      }
    });
  };

  return (
    <div ref={containerRef} className="h-screen w-full overflow-hidden relative bg-black">
      {/* Film grain overlay */}
      <div className="grain absolute inset-0 pointer-events-none z-50 opacity-30 mix-blend-overlay"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
           }} />

      {/* Split container */}
      <div className="h-full flex">
        {/* ACTING SIDE - Dark Cinema */}
        <div
          ref={leftRef}
          onClick={() => handleClick('acting')}
          onMouseEnter={() => setHoveredSide('left')}
          onMouseLeave={() => setHoveredSide(null)}
          className="relative h-full cursor-pointer transition-all duration-500 ease-out overflow-hidden"
          style={{
            width: hoveredSide === 'left' ? '55%' : hoveredSide === 'right' ? '45%' : '50%',
            backgroundColor: '#0a0a0a'
          }}
        >
          {/* Spotlight effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute w-[800px] h-[800px] rounded-full blur-[150px] transition-all duration-700"
              style={{
                background: 'radial-gradient(circle, rgba(255,215,0,0.15) 0%, transparent 70%)',
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) scale(${hoveredSide === 'left' ? 1.3 : 1})`,
                opacity: hoveredSide === 'left' ? 1 : 0.5
              }}
            />
          </div>

          {/* Film strip decoration */}
          <div className="absolute left-0 top-0 h-full w-8 opacity-20 flex flex-col justify-around py-4">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="h-6 w-full bg-white/80" />
            ))}
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center px-12 z-10">
            {/* Clapper icon */}
            <div className="mb-8 transition-all duration-500"
                 style={{
                   transform: hoveredSide === 'left' ? 'scale(1.1) rotate(-5deg)' : 'scale(1) rotate(0deg)'
                 }}>
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <rect x="20" y="60" width="80" height="40" fill="#1a1a1a" stroke="#ffd700" strokeWidth="2"/>
                <path d="M20 50 L35 60 L20 60 Z M40 50 L55 60 L40 60 Z M60 50 L75 60 L60 60 Z M80 50 L95 60 L80 60 Z"
                      fill="#ffd700"/>
                <rect x="20" y="40" width="80" height="20" fill="#ffd700" stroke="#ffd700" strokeWidth="2"/>
                <line x1="30" y1="40" x2="30" y2="60" stroke="#000" strokeWidth="3"/>
                <line x1="50" y1="40" x2="50" y2="60" stroke="#000" strokeWidth="3"/>
                <line x1="70" y1="40" x2="70" y2="60" stroke="#000" strokeWidth="3"/>
                <line x1="90" y1="40" x2="90" y2="60" stroke="#000" strokeWidth="3"/>
              </svg>
            </div>

            {/* Title */}
            <h1 className="text-8xl font-bold mb-4 text-center tracking-wider"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  color: '#ffd700',
                  textShadow: '0 0 40px rgba(255,215,0,0.5)',
                  transform: hoveredSide === 'left' ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.5s ease-out'
                }}>
              COMÉDIENNE
            </h1>

            {/* Subtitle */}
            <p className="text-2xl text-white/70 mb-12 text-center tracking-widest"
               style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
              Cinéma · Théâtre · Voix
            </p>

            {/* CTA */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
              <button className="relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold text-lg rounded-full tracking-wider transition-all duration-300 hover:scale-105"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                DÉCOUVRIR MES RÔLES
              </button>
            </div>

            {/* Animated spotlight lines */}
            <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-slide" />
            </div>
          </div>

          {/* Vignette effect */}
          <div className="absolute inset-0 pointer-events-none"
               style={{
                 background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.8) 100%)'
               }} />
        </div>

        {/* Center divider with logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-rose-400 to-amber-600 blur-2xl opacity-60 animate-pulse" />

            {/* Logo circle */}
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-slate-900 via-neutral-800 to-black flex items-center justify-center border-2 border-white/20 shadow-2xl">
              <span className="text-3xl font-bold bg-gradient-to-br from-yellow-400 to-rose-400 bg-clip-text text-transparent"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
                LB
              </span>
            </div>
          </div>
        </div>

        {/* MODELING SIDE - Light Fashion */}
        <div
          ref={rightRef}
          onClick={() => handleClick('modeling')}
          onMouseEnter={() => setHoveredSide('right')}
          onMouseLeave={() => setHoveredSide(null)}
          className="relative h-full cursor-pointer transition-all duration-500 ease-out overflow-hidden"
          style={{
            width: hoveredSide === 'right' ? '55%' : hoveredSide === 'left' ? '45%' : '50%',
            background: 'linear-gradient(135deg, #faf8f5 0%, #f5f1ea 100%)'
          }}
        >
          {/* Camera flash effect */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-200"
            style={{
              background: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.9) 0%, transparent 50%)',
              opacity: hoveredSide === 'right' ? 0.6 : 0
            }}
          />

          {/* Bokeh lights */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-float"
                style={{
                  width: `${60 + i * 20}px`,
                  height: `${60 + i * 20}px`,
                  background: `radial-gradient(circle, rgba(${255 - i * 10}, ${200 - i * 15}, ${150 - i * 10}, 0.2) 0%, transparent 70%)`,
                  left: `${10 + i * 12}%`,
                  top: `${10 + i * 10}%`,
                  animationDelay: `${i * 0.5}s`,
                  filter: 'blur(8px)'
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center px-12 z-10">
            {/* Camera icon */}
            <div className="mb-8 transition-all duration-500"
                 style={{
                   transform: hoveredSide === 'right' ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
                 }}>
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <rect x="25" y="40" width="70" height="50" rx="8" fill="#2a2a2a" stroke="#c9a87c" strokeWidth="3"/>
                <circle cx="60" cy="65" r="15" fill="none" stroke="#c9a87c" strokeWidth="4"/>
                <circle cx="60" cy="65" r="10" fill="#c9a87c"/>
                <rect x="50" y="30" width="20" height="10" rx="3" fill="#2a2a2a" stroke="#c9a87c" strokeWidth="2"/>
                <circle cx="80" cy="48" r="4" fill="#d4af37"/>
                <path d="M30 90 L45 75 L60 85 L75 70 L90 90 Z" fill="#c9a87c" opacity="0.3"/>
              </svg>
            </div>

            {/* Title */}
            <h1 className="text-8xl font-bold mb-4 text-center tracking-wider"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  background: 'linear-gradient(135deg, #c9a87c 0%, #8b7355 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 2px 10px rgba(201,168,124,0.3)',
                  transform: hoveredSide === 'right' ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.5s ease-out'
                }}>
              MANNEQUIN
            </h1>

            {/* Subtitle */}
            <p className="text-2xl mb-12 text-center tracking-widest"
               style={{
                 fontFamily: "'Cormorant Garamond', serif",
                 fontStyle: 'italic',
                 color: '#6b5d4d'
               }}>
              Mode · Editorial · Commercial
            </p>

            {/* CTA */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
              <button className="relative px-8 py-4 bg-gradient-to-r from-amber-700 to-yellow-800 text-white font-bold text-lg rounded-full tracking-wider transition-all duration-300 hover:scale-105"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                VOIR MES SHOOTS
              </button>
            </div>

            {/* Sparkle effect */}
            <div className="absolute top-20 right-20">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-sparkle"
                  style={{
                    animationDelay: `${i * 0.3}s`,
                    left: `${i * 30}px`,
                    top: `${i * 25}px`
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <path d="M10 0 L11 9 L20 10 L11 11 L10 20 L9 11 L0 10 L9 9 Z" fill="#d4af37" opacity="0.6"/>
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Light gradient overlay */}
          <div className="absolute inset-0 pointer-events-none"
               style={{
                 background: 'radial-gradient(ellipse at center, transparent 30%, rgba(245,241,234,0.6) 100%)'
               }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        .animate-slide {
          animation: slide 3s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
