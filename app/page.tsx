'use client';

import { useState } from 'react';

export default function Home() {
  const [view, setView] = useState<'home' | 'modeling' | 'acting'>('home');

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Montserrat:wght@200;300;400;500&display=swap');

        * {
          font-family: 'Montserrat', sans-serif;
        }

        h1, h2, h3 {
          font-family: 'Cormorant Garamond', serif;
        }
      `}</style>

      <div className="min-h-screen bg-neutral-50">
        {/* Nav */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-50/80 backdrop-blur-md">
          <div className="flex items-center justify-between px-8 md:px-16 py-6">
            <button
              onClick={() => setView('home')}
              className="text-2xl md:text-3xl font-light tracking-[0.3em]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              LEA BRASSEUR
            </button>
            <div className="flex gap-8 md:gap-12 text-xs tracking-[0.2em] uppercase">
              <button
                onClick={() => setView('modeling')}
                className={view === 'modeling' ? 'font-medium' : 'text-neutral-400 hover:text-black transition-colors'}
              >
                Mannequin
              </button>
              <button
                onClick={() => setView('acting')}
                className={view === 'acting' ? 'font-medium' : 'text-neutral-400 hover:text-black transition-colors'}
              >
                Comédie
              </button>
            </div>
          </div>
        </nav>

        {/* HOME */}
        {view === 'home' && (
          <main>
            {/* Hero fullscreen */}
            <section className="h-screen flex items-center justify-center px-8 md:px-16">
              <div className="grid md:grid-cols-5 gap-12 md:gap-16 max-w-7xl w-full items-center">
                {/* Left - Text */}
                <div className="md:col-span-2 space-y-8">
                  <div>
                    <h1
                      className="text-6xl md:text-8xl font-light leading-[0.85] mb-6"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      Lea<br />Brasseur
                    </h1>
                    <div className="h-px w-24 bg-black mb-6"></div>
                    <p className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">
                      Mannequin & Comédienne
                    </p>
                    <p className="text-xs tracking-[0.3em] uppercase text-neutral-400">
                      Paris
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setView('modeling')}
                      className="group relative overflow-hidden px-8 py-3 border border-black"
                    >
                      <span className="relative z-10 text-xs tracking-[0.15em] uppercase font-light">Portfolio</span>
                      <div className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                      <span className="absolute inset-0 flex items-center justify-center text-xs tracking-[0.15em] uppercase font-light text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Portfolio
                      </span>
                    </button>
                  </div>
                </div>

                {/* Right - Photo */}
                <div className="md:col-span-3">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src="/photos/FlorianBoggia_Lea_37.jpg"
                      alt="Lea Brasseur"
                      className="w-full h-full object-cover filter grayscale contrast-110"
                    />
                  </div>
                  <p className="text-xs text-neutral-400 mt-3 tracking-wider">© Florian Boggia</p>
                </div>
              </div>
            </section>
          </main>
        )}

        {/* MODELING */}
        {view === 'modeling' && (
          <main className="pt-32 pb-20 px-8 md:px-16">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="mb-20">
                <h2
                  className="text-5xl md:text-7xl font-light mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Mannequin
                </h2>
                <div className="h-px w-32 bg-black/20 mb-4"></div>
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-400">
                  Mode · Editorial · Commercial
                </p>
              </div>

              {/* Gallery masonry */}
              <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {[
                  '/photos/FlorianBoggia_Lea_37.jpg',
                  '/photos/FlorianBoggia_Lea_40.jpg',
                  '/photos/IMG_4313 2.jpg',
                  '/photos/FlorianBoggia_Lea_18.jpg',
                  '/photos/IMG_4345.jpg',
                  '/photos/IMG_4278.jpg',
                  '/photos/IMG_5088.jpg',
                  '/photos/IMG_4302.jpg',
                ].map((src, i) => (
                  <div key={i} className="break-inside-avoid mb-4">
                    <img
                      src={src}
                      alt={`Photo ${i + 1}`}
                      className="w-full filter grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
                    />
                  </div>
                ))}
              </div>

              {/* Credits */}
              <div className="mt-20 text-center">
                <p className="text-xs tracking-wider text-neutral-400">
                  Photography by Florian Boggia & Studio Sessions
                </p>
              </div>
            </div>
          </main>
        )}

        {/* ACTING */}
        {view === 'acting' && (
          <main className="pt-32 pb-20 px-8 md:px-16">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-20">
                <h2
                  className="text-5xl md:text-7xl font-light mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Comédie
                </h2>
                <div className="h-px w-32 bg-black/20 mb-4"></div>
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-400">
                  Cinéma · Télévision · Théâtre
                </p>
              </div>

              {/* Projects */}
              <div className="space-y-16">
                {[
                  { title: 'Eclipse', type: 'Court-métrage', year: '2025', role: 'Rôle principal', desc: 'Festival de Cannes 2025 - Sélection officielle' },
                  { title: 'Lumière', type: 'Série TV', year: '2024', role: 'Rôle récurrent', desc: 'Saison 1, 8 épisodes - Arte' },
                  { title: 'Chanel N°5', type: 'Publicité', year: '2024', role: 'Commercial', desc: 'Campagne internationale' },
                  { title: 'Les Ombres', type: 'Théâtre', year: '2024', role: 'Premier rôle', desc: 'Théâtre du Châtelet, Paris' },
                ].map((project, i) => (
                  <div key={i} className="group border-t border-black/10 pt-8">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <h3
                          className="text-3xl md:text-5xl font-light mb-2 group-hover:translate-x-2 transition-transform duration-300"
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                          {project.title}
                        </h3>
                        <p className="text-base mb-1 text-neutral-600">{project.role}</p>
                        <p className="text-sm text-neutral-400 italic">{project.desc}</p>
                      </div>
                      <div className="flex md:flex-col gap-4 md:gap-1 text-xs tracking-wider text-neutral-500">
                        <span className="uppercase">{project.type}</span>
                        <span className="text-neutral-400">{project.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        )}

        {/* Footer */}
        <footer className="py-8 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-300">
            © 2026 Lea Brasseur
          </p>
        </footer>
      </div>
    </>
  );
}
