'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ModelingSection() {
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

      // Parallax effect on images
      const images = sectionRef.current?.querySelectorAll('.parallax-image');
      images?.forEach((img) => {
        gsap.to(img, {
          y: -50,
          scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const shoots = [
    { id: 1, title: 'Editorial Fashion', year: '2025', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80' },
    { id: 2, title: 'Commercial Shoot', year: '2025', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80' },
    { id: 3, title: 'Haute Couture', year: '2024', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80' },
    { id: 4, title: 'Street Style', year: '2024', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80' },
  ];

  return (
    <section
      id="modeling"
      ref={sectionRef}
      className="min-h-screen py-32 px-6 bg-gradient-to-b from-black to-purple-950/20"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold mb-20 text-center"
        >
          Mannequinat
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {shoots.map((shoot, index) => (
            <div
              key={shoot.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <div className="parallax-image absolute inset-0">
                  <img
                    src={shoot.image}
                    alt={shoot.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-3xl font-bold mb-2">{shoot.title}</h3>
                  <p className="text-gray-400">{shoot.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
