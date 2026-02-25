'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

export type Mode = 'model' | 'actress';

interface ModeToggleProps {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
}

export default function ModeToggle({ mode, onModeChange }: ModeToggleProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = (newMode: Mode) => {
    if (newMode === mode || isAnimating) return;

    setIsAnimating(true);
    onModeChange(newMode);

    // Animation de transition
    gsap.to('.mode-transition-overlay', {
      scaleX: 1,
      duration: 0.6,
      ease: 'power4.inOut',
      onComplete: () => {
        gsap.to('.mode-transition-overlay', {
          scaleX: 0,
          duration: 0.6,
          ease: 'power4.inOut',
          delay: 0.2,
          onComplete: () => setIsAnimating(false),
        });
      },
    });
  };

  return (
    <>
      {/* Overlay de transition */}
      <div
        className="mode-transition-overlay fixed inset-0 z-50 origin-left pointer-events-none"
        style={{
          transform: 'scaleX(0)',
          background: mode === 'model' ? 'linear-gradient(135deg, #8b5cf6, #ec4899)' : 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        }}
      />

      {/* Toggle UI */}
      <div className="fixed top-1/2 right-8 -translate-y-1/2 z-40 flex flex-col gap-4">
        <button
          onClick={() => handleToggle('model')}
          className={`group relative px-8 py-4 rounded-full transition-all duration-500 ${
            mode === 'model'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white scale-110 shadow-2xl'
              : 'bg-white/10 backdrop-blur-sm text-gray-400 hover:bg-white/20 hover:scale-105'
          }`}
          disabled={isAnimating}
        >
          <span className="font-bold uppercase tracking-wider text-sm">Mannequinat</span>
          {mode === 'model' && (
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur-xl opacity-50" />
          )}
        </button>

        <button
          onClick={() => handleToggle('actress')}
          className={`group relative px-8 py-4 rounded-full transition-all duration-500 ${
            mode === 'actress'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-110 shadow-2xl'
              : 'bg-white/10 backdrop-blur-sm text-gray-400 hover:bg-white/20 hover:scale-105'
          }`}
          disabled={isAnimating}
        >
          <span className="font-bold uppercase tracking-wider text-sm">Comédie</span>
          {mode === 'actress' && (
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-50" />
          )}
        </button>
      </div>
    </>
  );
}
