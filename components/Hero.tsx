'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ParticlesBackground from './ParticlesBackground';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split title into chars for animation
      if (titleRef.current) {
        const chars = titleRef.current.textContent?.split('') || [];
        titleRef.current.innerHTML = chars
          .map((char) => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
          .join('');

        gsap.from(titleRef.current.children, {
          opacity: 0,
          y: 100,
          rotationZ: 10,
          stagger: 0.02,
          duration: 1.2,
          ease: 'power4.out',
          delay: 0.5,
        });
      }

      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          delay: 1.5,
          ease: 'power3.out',
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />

      <div className="relative z-10 text-center">
        <h1
          ref={titleRef}
          className="text-7xl md:text-9xl font-bold mb-6 tracking-tight"
        >
          LÉA BRASSEUR
        </h1>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-400 uppercase tracking-widest"
        >
          Mannequin • Comédienne
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-white/50"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
