'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface ActingShowcaseProps {
  onBack: () => void;
}

export default function ActingShowcase({ onBack }: ActingShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [playingId, setPlayingId] = useState<number | null>(null);

  useEffect(() => {
    // Dramatic entrance
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: 'power2.out' }
    );

    gsap.fromTo(
      '.video-card',
      { opacity: 0, y: 80, rotateX: 15 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.12,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3
      }
    );

    // Spotlight flicker effect
    const spotlights = containerRef.current?.querySelectorAll('.spotlight');
    spotlights?.forEach((spotlight, i) => {
      gsap.to(spotlight, {
        opacity: 0.8,
        duration: 2 + i * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: i * 0.3
      });
    });
  }, []);

  const videos = [
    {
      id: 1,
      title: 'ECLIPSE',
      type: 'Court-métrage · 2025',
      role: 'Rôle Principal',
      description: 'Une histoire de résilience dans l\'obscurité',
      thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=80',
      duration: '12:34'
    },
    {
      id: 2,
      title: 'LUMIÈRE',
      type: 'Série TV · 2024-2025',
      role: 'Rôle Récurrent',
      description: 'Saison 1 - 8 épisodes',
      thumbnail: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&q=80',
      duration: '45:00'
    },
    {
      id: 3,
      title: 'CHANEL N°5',
      type: 'Publicité · 2024',
      role: 'Commercial',
      description: 'Campagne internationale',
      thumbnail: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=1200&q=80',
      duration: '0:30'
    },
    {
      id: 4,
      title: 'LES OMBRES',
      type: 'Théâtre · 2024',
      role: 'Personnage Principal',
      description: 'Théâtre du Châtelet, Paris',
      thumbnail: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=1200&q=80',
      duration: '2:15:00'
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden">
      {/* Film grain */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none z-50"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
           }} />

      {/* Spotlights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="spotlight absolute w-96 h-96 rounded-full blur-[120px] bg-yellow-400/20 top-20 left-1/4" />
        <div className="spotlight absolute w-96 h-96 rounded-full blur-[120px] bg-amber-400/15 bottom-40 right-1/4" />
      </div>

      {/* Toggle button to Mannequin */}
      <button
        onClick={onBack}
        className="fixed top-8 right-8 z-50 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-700 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
          <div className="relative px-6 py-3 bg-gradient-to-r from-amber-700/80 to-yellow-800/80 backdrop-blur-xl rounded-full border border-amber-400/30 flex items-center gap-3 hover:scale-105 transition-all duration-300">
            <svg width="20" height="20" viewBox="0 0 120 120" fill="none" className="opacity-80">
              <rect x="25" y="40" width="70" height="50" rx="8" fill="currentColor" stroke="#c9a87c" strokeWidth="2"/>
              <circle cx="60" cy="65" r="10" fill="#c9a87c"/>
            </svg>
            <span className="text-amber-200 font-bold tracking-widest text-sm"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              MANNEQUIN
            </span>
          </div>
        </div>
      </button>

      {/* Main content */}
      <div className="relative z-10 pt-32 pb-20 px-8 max-w-7xl mx-auto">
        {/* Hero title */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            {/* Clap icon */}
            <svg width="80" height="80" viewBox="0 0 120 120" fill="none">
              <rect x="20" y="60" width="80" height="35" fill="#1a1a1a" stroke="#ffd700" strokeWidth="2"/>
              <path d="M20 50 L35 60 L20 60 Z M40 50 L55 60 L40 60 Z M60 50 L75 60 L60 60 Z M80 50 L95 60 L80 60 Z"
                    fill="#ffd700"/>
              <rect x="20" y="40" width="80" height="20" fill="#ffd700" stroke="#ffd700" strokeWidth="2"/>
              <line x1="30" y1="40" x2="30" y2="60" stroke="#000" strokeWidth="2"/>
              <line x1="50" y1="40" x2="50" y2="60" stroke="#000" strokeWidth="2"/>
              <line x1="70" y1="40" x2="70" y2="60" stroke="#000" strokeWidth="2"/>
              <line x1="90" y1="40" x2="90" y2="60" stroke="#000" strokeWidth="2"/>
            </svg>
            <h1 className="text-9xl font-bold tracking-wider"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  color: '#ffd700',
                  textShadow: '0 0 60px rgba(255,215,0,0.6), 0 0 100px rgba(255,215,0,0.3)'
                }}>
              COMÉDIENNE
            </h1>
          </div>
          <p className="text-2xl text-white/60 tracking-wide ml-24"
             style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
            De la scène au grand écran, une passion viscérale pour l'art de raconter des histoires
          </p>
        </div>

        {/* Videos grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="video-card group relative aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setPlayingId(video.id)}
              onMouseLeave={() => setPlayingId(null)}
            >
              {/* Thumbnail */}
              <img
                src={video.thumbnail}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

              {/* Film strip border */}
              <div className="absolute inset-0 border-4 border-yellow-400/0 group-hover:border-yellow-400/50 transition-all duration-500" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                {/* Duration badge */}
                <div className="self-end">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-yellow-400 text-sm font-bold border border-yellow-400/30">
                    {video.duration}
                  </span>
                </div>

                <div>
                  {/* Type */}
                  <p className="text-yellow-400/80 text-sm tracking-widest mb-2 font-bold"
                     style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {video.type}
                  </p>

                  {/* Title */}
                  <h3 className="text-5xl font-bold text-white mb-2 tracking-wider transform group-hover:translate-x-2 transition-transform duration-500"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        textShadow: '0 2px 20px rgba(0,0,0,0.8)'
                      }}>
                    {video.title}
                  </h3>

                  {/* Role */}
                  <p className="text-yellow-400 text-lg mb-2"
                     style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
                    {video.role}
                  </p>

                  {/* Description */}
                  <p className="text-white/70 text-sm">{video.description}</p>
                </div>
              </div>

              {/* Play button overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                style={{ opacity: playingId === video.id ? 1 : 0 }}
              >
                <div className="relative">
                  {/* Glow */}
                  <div className="absolute inset-0 bg-yellow-400 rounded-full blur-2xl opacity-60 animate-pulse" />

                  {/* Button */}
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center border-4 border-white/30 shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="black" className="ml-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Spotlight sweep */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 pointer-events-none"
                style={{
                  transform: playingId === video.id ? 'translateX(100%)' : 'translateX(-100%)'
                }}
              />
            </div>
          ))}
        </div>

        {/* Decorative film strip */}
        <div className="mt-20 opacity-20">
          <div className="flex items-center gap-2">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="w-8 h-12 border-2 border-yellow-400/50" />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400;1,700&display=swap');
      `}</style>
    </div>
  );
}
