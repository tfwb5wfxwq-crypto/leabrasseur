'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import * as THREE from 'three';
import { ViewMode } from '@/app/page';

interface HeroSplitProps {
  setViewMode: (mode: ViewMode) => void;
}

export default function HeroSplit({ setViewMode }: HeroSplitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const canvasLeftRef = useRef<HTMLCanvasElement>(null);
  const canvasRightRef = useRef<HTMLCanvasElement>(null);
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  // Three.js particles for each side
  useEffect(() => {
    if (!canvasLeftRef.current || !canvasRightRef.current) return;

    const createParticleScene = (canvas: HTMLCanvasElement, color: string) => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 2 / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(window.innerWidth / 2, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const geometry = new THREE.BufferGeometry();
      const count = 800;
      const positions = new Float32Array(count * 3);

      for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 10;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const material = new THREE.PointsMaterial({
        size: 0.015,
        color,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      const animate = () => {
        requestAnimationFrame(animate);
        particles.rotation.y += 0.0005;
        particles.rotation.x += 0.0002;
        renderer.render(scene, camera);
      };

      animate();

      return { renderer, camera };
    };

    const leftScene = createParticleScene(canvasLeftRef.current, '#ec4899');
    const rightScene = createParticleScene(canvasRightRef.current, '#3b82f6');

    const handleResize = () => {
      const width = window.innerWidth / 2;
      const height = window.innerHeight;
      
      leftScene.camera.aspect = width / height;
      leftScene.camera.updateProjectionMatrix();
      leftScene.renderer.setSize(width, height);

      rightScene.camera.aspect = width / height;
      rightScene.camera.updateProjectionMatrix();
      rightScene.renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      leftScene.renderer.dispose();
      rightScene.renderer.dispose();
    };
  }, []);

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

  const handleClick = (side: 'left' | 'right') => {
    const target = side === 'left' ? leftRef.current : rightRef.current;
    
    gsap.to(target, {
      width: '100%',
      duration: 1.2,
      ease: 'power4.inOut',
      onComplete: () => {
        setViewMode(side === 'left' ? 'modeling' : 'acting');
      },
    });

    gsap.to(side === 'left' ? rightRef.current : leftRef.current, {
      width: '0%',
      duration: 1.2,
      ease: 'power4.inOut',
    });

    gsap.to(dividerRef.current, {
      opacity: 0,
      duration: 0.6,
    });
  };

  return (
    <div ref={containerRef} className="relative h-screen w-screen overflow-hidden flex">
      {/* LEFT SIDE - Mannequinat */}
      <div
        ref={leftRef}
        className="relative h-full cursor-pointer transition-all"
        style={{ width: '50%' }}
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => handleClick('left')}
      >
        <canvas
          ref={canvasLeftRef}
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: 'none' }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black/60 to-pink-900/40" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center p-12">
          <div className="text-center transform transition-transform duration-700" style={{
            transform: hoveredSide === 'left' ? 'scale(1.1)' : 'scale(1)',
          }}>
            <h2 className="text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Mannequinat
            </h2>
            <p className="text-2xl text-white/70 mb-8 font-light">
              Mode • Editorial • Haute Couture
            </p>
            <div className={`inline-block px-8 py-4 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 transition-all duration-500 ${
              hoveredSide === 'left' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <span className="text-white font-semibold">Découvrir →</span>
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div
        ref={dividerRef}
        className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/50 to-transparent z-20"
        style={{ transform: 'translateX(-50%)' }}
      />

      {/* RIGHT SIDE - Comédie */}
      <div
        ref={rightRef}
        className="relative h-full cursor-pointer transition-all"
        style={{ width: '50%' }}
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => handleClick('right')}
      >
        <canvas
          ref={canvasRightRef}
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: 'none' }}
        />

        <div className="absolute inset-0 bg-gradient-to-bl from-blue-900/40 via-black/60 to-purple-900/40" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center p-12">
          <div className="text-center transform transition-transform duration-700" style={{
            transform: hoveredSide === 'right' ? 'scale(1.1)' : 'scale(1)',
          }}>
            <h2 className="text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Comédie
            </h2>
            <p className="text-2xl text-white/70 mb-8 font-light">
              Cinéma • Série • Théâtre
            </p>
            <div className={`inline-block px-8 py-4 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 transition-all duration-500 ${
              hoveredSide === 'right' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <span className="text-white font-semibold">Découvrir →</span>
            </div>
          </div>
        </div>
      </div>

      {/* CENTER LOGO */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-2 tracking-tight">
            LÉA BRASSEUR
          </h1>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        </div>
      </div>
    </div>
  );
}
