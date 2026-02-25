'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ActingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          opacity: 0,
          y: 100,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const videos = [
    { id: 1, title: 'Court-métrage "Eclipse"', type: 'Rôle principal', thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80' },
    { id: 2, title: 'Série "Lumière"', type: 'Récurrent', thumbnail: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80' },
    { id: 3, title: 'Publicité Parfum', type: 'Commercial', thumbnail: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800&q=80' },
  ];

  return (
    <section
      id="acting"
      ref={sectionRef}
      className="min-h-screen py-32 px-6 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold mb-20 text-center"
        >
          Comédie
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-video mb-4">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">{video.title}</h3>
              <p className="text-gray-400 text-sm">{video.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
