'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-text', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 40%',
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen py-32 px-6 bg-gradient-to-b from-purple-950/20 to-black"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-bold mb-20 text-center about-text">
          À propos
        </h2>

        <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
          <p className="about-text">
            Passionnée par l'art de la performance et de l'image, je navigue entre mannequinat 
            et comédie depuis plusieurs années, cultivant une approche authentique et engagée 
            dans chaque projet.
          </p>

          <p className="about-text">
            Mon parcours m'a menée à collaborer avec des créateurs talentueux sur des projets 
            variés, du défilé haute couture aux productions audiovisuelles, en passant par 
            des campagnes publicitaires internationales.
          </p>

          <p className="about-text">
            Je m'efforce de porter chaque rôle avec sensibilité et de sublimer chaque création 
            avec élégance, toujours à la recherche de nouvelles expériences artistiques.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 about-text">
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">8+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Années</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Shoots</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">15+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Productions</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">12+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Marques</div>
          </div>
        </div>
      </div>
    </section>
  );
}
