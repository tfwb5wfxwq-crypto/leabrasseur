'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ModelingShowcaseProps {
  onBack: () => void;
}

export default function ModelingShowcase({ onBack }: ModelingShowcaseProps) {
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
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  const shoots = [
    {
      id: 1,
      title: 'Vogue Editorial',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&q=80',
      tag: 'Editorial',
    },
    {
      id: 2,
      title: 'Chanel Campaign',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80',
      tag: 'Commercial',
    },
    {
      id: 3,
      title: 'Paris Fashion Week',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80',
      tag: 'Haute Couture',
    },
    {
      id: 4,
      title: 'Street Style',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80',
      tag: 'Street',
    },
    {
      id: 5,
      title: 'Dior Spring',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&q=80',
      tag: 'Runway',
    },
    {
      id: 6,
      title: 'Minimalist Beauty',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80',
      tag: 'Beauty',
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen pt-32 pb-20 px-8 bg-gradient-to-b from-black via-purple-950/20 to-black">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-20 showcase-item">
        <h1 className="text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Mannequinat
        </h1>
        <p className="text-2xl text-white/60 font-light max-w-2xl">
          Une sélection de mes collaborations avec les plus grandes maisons de mode
          et photographes internationaux.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {shoots.map((shoot) => (
          <div
            key={shoot.id}
            className="showcase-item group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <img
              src={shoot.image}
              alt={shoot.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-4 py-2 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm border border-white/30 text-white mb-4">
                  {shoot.tag}
                </span>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {shoot.title}
                </h3>
                <p className="text-white/70">{shoot.year}</p>
              </div>
            </div>

            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>
        ))}
      </div>
    </div>
  );
}
