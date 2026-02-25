'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface ModelingShowcaseProps {
  onBack: () => void;
}

export default function ModelingShowcase({ onBack }: ModelingShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    // Entrance animation
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.out' }
    );

    gsap.fromTo(
      '.gallery-item',
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.08,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.4
      }
    );

    // Floating bokeh animation
    const bokehElements = containerRef.current?.querySelectorAll('.bokeh');
    bokehElements?.forEach((bokeh, i) => {
      gsap.to(bokeh, {
        y: -30 + Math.random() * 60,
        x: -20 + Math.random() * 40,
        scale: 0.8 + Math.random() * 0.4,
        duration: 4 + i * 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.4
      });
    });
  }, []);

  const photos = [
    {
      id: 1,
      src: '/photos/FlorianBoggia_Lea_18.jpg',
      category: 'Editorial',
      title: 'Artistic Vision',
      photographer: 'Florian Boggia',
      span: 'row-span-2'
    },
    {
      id: 2,
      src: '/photos/FlorianBoggia_Lea_37.jpg',
      category: 'Fashion',
      title: 'Urban Elegance',
      photographer: 'Florian Boggia',
      span: ''
    },
    {
      id: 3,
      src: '/photos/FlorianBoggia_Lea_40.jpg',
      category: 'Portrait',
      title: 'Modern Classic',
      photographer: 'Florian Boggia',
      span: ''
    },
    {
      id: 4,
      src: '/photos/IMG_4278.jpg',
      category: 'Lifestyle',
      title: 'Natural Movement',
      photographer: 'Studio Session',
      span: 'row-span-2'
    },
    {
      id: 5,
      src: '/photos/IMG_4313 2.jpg',
      category: 'Street Style',
      title: 'City Lines',
      photographer: 'Urban Shoot',
      span: ''
    },
    {
      id: 6,
      src: '/photos/IMG_4345.jpg',
      category: 'Commercial',
      title: 'Clean Aesthetic',
      photographer: 'Studio Session',
      span: ''
    },
    {
      id: 7,
      src: '/photos/IMG_5088.jpg',
      category: 'Beauty',
      title: 'Color Play',
      photographer: 'Beauty Editorial',
      span: 'row-span-2'
    },
    {
      id: 8,
      src: '/photos/IMG_4302.jpg',
      category: 'Wellness',
      title: 'Natural Glow',
      photographer: 'Lifestyle',
      span: ''
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-rose-50/20 relative overflow-hidden">
      {/* Floating bokeh lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="bokeh absolute rounded-full"
            style={{
              width: `${100 + i * 30}px`,
              height: `${100 + i * 30}px`,
              background: `radial-gradient(circle, ${
                i % 3 === 0
                  ? 'rgba(255, 215, 0, 0.12)'
                  : i % 3 === 1
                  ? 'rgba(201, 168, 124, 0.15)'
                  : 'rgba(255, 240, 220, 0.1)'
              } 0%, transparent 70%)`,
              left: `${5 + i * 8}%`,
              top: `${10 + (i % 3) * 25}%`,
              filter: 'blur(40px)'
            }}
          />
        ))}
      </div>

      {/* Toggle button to Comédienne */}
      <button
        onClick={onBack}
        className="fixed top-8 left-8 z-50 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
          <div className="relative px-6 py-3 bg-gradient-to-r from-black/80 to-neutral-900/80 backdrop-blur-xl rounded-full border border-yellow-400/30 flex items-center gap-3 hover:scale-105 transition-all duration-300">
            <svg width="20" height="20" viewBox="0 0 120 120" fill="none" className="opacity-80">
              <rect x="20" y="60" width="80" height="35" fill="currentColor" stroke="#ffd700" strokeWidth="2"/>
              <path d="M20 50 L35 60 L20 60 Z M40 50 L55 60 L40 60 Z" fill="#ffd700"/>
            </svg>
            <span className="text-yellow-400 font-bold tracking-widest text-sm"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              COMÉDIENNE
            </span>
          </div>
        </div>
      </button>

      {/* Main content */}
      <div className="relative z-10 pt-32 pb-20 px-8 max-w-[1800px] mx-auto">
        {/* Hero title */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-6 mb-8">
            {/* Camera icon */}
            <svg width="100" height="100" viewBox="0 0 120 120" fill="none">
              <rect x="25" y="40" width="70" height="50" rx="8" fill="#1a1a1a" stroke="#c9a87c" strokeWidth="3"/>
              <circle cx="60" cy="65" r="15" fill="none" stroke="#c9a87c" strokeWidth="4"/>
              <circle cx="60" cy="65" r="10" fill="#c9a87c"/>
              <rect x="50" y="30" width="20" height="10" rx="3" fill="#1a1a1a" stroke="#c9a87c" strokeWidth="2"/>
              <circle cx="80" cy="48" r="4" fill="#d4af37"/>
            </svg>
            <h1 className="text-9xl font-bold tracking-wider"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  background: 'linear-gradient(135deg, #c9a87c 0%, #8b7355 50%, #d4af37 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 2px 40px rgba(201,168,124,0.3)'
                }}>
              MANNEQUIN
            </h1>
          </div>
          <p className="text-3xl text-neutral-700 tracking-wide"
             style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
            Mode · Editorial · Commercial · Beauty
          </p>
        </div>

        {/* Masonry gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={`gallery-item group relative overflow-hidden rounded-2xl cursor-pointer ${photo.span}`}
              onMouseEnter={() => setHoveredId(photo.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedImage(photo.id)}
            >
              {/* Image */}
              <img
                src={photo.src}
                alt={photo.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Border glow */}
              <div className="absolute inset-0 border-2 border-amber-400/0 group-hover:border-amber-400/60 transition-all duration-500 rounded-2xl" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Category badge */}
                <div className="self-start">
                  <span className="px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full text-amber-300 text-xs font-bold border border-amber-400/30 tracking-wider"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {photo.category}
                  </span>
                </div>

                {/* Title & photographer */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-1 tracking-wide"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                      }}>
                    {photo.title}
                  </h3>
                  <p className="text-amber-300/80 text-sm"
                     style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
                    {photo.photographer}
                  </p>
                </div>
              </div>

              {/* Hover shine effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 pointer-events-none"
                style={{
                  transform: hoveredId === photo.id ? 'translateX(100%)' : 'translateX(-100%)'
                }}
              />

              {/* Flash effect on hover */}
              <div
                className="absolute inset-0 transition-opacity duration-200 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 60% 40%, rgba(255,255,255,0.6) 0%, transparent 40%)',
                  opacity: hoveredId === photo.id ? 0.4 : 0
                }}
              />
            </div>
          ))}
        </div>

        {/* Credits */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/60 backdrop-blur-xl rounded-full border border-amber-400/20 shadow-xl">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a87c" strokeWidth="2">
              <circle cx="12" cy="8" r="4"/>
              <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
            </svg>
            <p className="text-neutral-700 text-lg tracking-wide"
               style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
              Photographies : Florian Boggia, Studio Sessions
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          <img
            src={photos.find(p => p.id === selectedImage)?.src}
            alt="Fullscreen"
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400;1,700&display=swap');
      `}</style>
    </div>
  );
}
