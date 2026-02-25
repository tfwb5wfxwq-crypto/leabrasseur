'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface ActingShowcaseProps {
  onBack: () => void;
}

export default function ActingShowcase({ onBack }: ActingShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      '.showcase-item',
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
      }
    );
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Eclipse',
      type: 'Court-métrage',
      role: 'Rôle principal',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=80',
    },
    {
      id: 2,
      title: 'Lumière',
      type: 'Série TV',
      role: 'Rôle récurrent',
      year: '2024-2025',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&q=80',
    },
    {
      id: 3,
      title: 'Chanel N°5',
      type: 'Publicité',
      role: 'Commercial',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=1200&q=80',
    },
    {
      id: 4,
      title: 'Les Ombres',
      type: 'Théâtre',
      role: 'Personnage principal',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=1200&q=80',
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen pt-32 pb-20 px-8 bg-gradient-to-b from-black via-blue-950/20 to-black">
      {/* Hero */}
      <div className="max-w-7xl mx-auto mb-20 showcase-item">
        <h1 className="text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Comédie
        </h1>
        <p className="text-2xl text-white/60 font-light max-w-2xl">
          De la scène au grand écran, une passion pour l'art de raconter des histoires.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto space-y-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`showcase-item group relative h-96 rounded-3xl overflow-hidden cursor-pointer ${
              index % 2 === 0 ? 'mr-auto' : 'ml-auto'
            } max-w-5xl`}
          >
            {/* Background Image */}
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent group-hover:from-black/90 transition-all duration-500" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center p-12">
              <div className="max-w-lg">
                <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-white/20 backdrop-blur-sm border border-white/30 text-white mb-6">
                  {project.type}
                </span>
                <h2 className="text-6xl font-bold text-white mb-4 transform group-hover:translate-x-2 transition-transform duration-500">
                  {project.title}
                </h2>
                <p className="text-xl text-white/80 mb-2">{project.role}</p>
                <p className="text-white/60">{project.year}</p>

                {/* Play Button */}
                <button className="mt-8 inline-flex items-center gap-3 px-8 py-4 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span className="text-white font-semibold">Voir la bande-annonce</span>
                </button>
              </div>
            </div>

            {/* Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
          </div>
        ))}
      </div>
    </div>
  );
}
