'use client';

import { useState } from 'react';

export default function Home() {
  const [view, setView] = useState<'home' | 'modeling' | 'acting'>('home');

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600&family=Inter:wght@300;400;500&display=swap');
      `}</style>

      <div className="min-h-screen bg-white">
        {/* Nav */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
          <div className="flex items-center justify-center gap-8 px-6 py-6">
            <button
              onClick={() => setView('home')}
              className="text-sm font-light tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Lea Brasseur
            </button>
            <div className="flex gap-6 text-xs tracking-widest uppercase font-light">
              <button
                onClick={() => setView('modeling')}
                className={view === 'modeling' ? 'text-black' : 'text-gray-400 hover:text-black transition-colors'}
              >
                Mannequin
              </button>
              <button
                onClick={() => setView('acting')}
                className={view === 'acting' ? 'text-black' : 'text-gray-400 hover:text-black transition-colors'}
              >
                Comédie
              </button>
            </div>
          </div>
        </nav>

        {/* HOME */}
        {view === 'home' && (
          <main className="min-h-screen flex items-center justify-center px-4 pt-28 pb-16">
            <div className="w-full max-w-4xl">
              <div className="grid md:grid-cols-[1.8fr,200px] gap-10 items-center">
                {/* Left: Text */}
                <div className="space-y-6">
                  <div>
                    <h1
                      className="text-5xl md:text-7xl font-light leading-[0.85] mb-5"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Lea<br />Brasseur
                    </h1>
                    <div className="h-px w-24 bg-black mb-6"></div>
                    <p className="text-2xl text-gray-700 font-light mb-3">
                      Mannequin & Comédienne
                    </p>
                    <p className="text-sm text-gray-400 tracking-[0.3em] uppercase">
                      Paris
                    </p>
                  </div>

                  <div className="flex gap-6 pt-4">
                    <button
                      onClick={() => setView('modeling')}
                      className="px-10 py-4 bg-black text-white text-xs tracking-[0.2em] uppercase font-light hover:bg-gray-800 transition-all"
                    >
                      Mannequin
                    </button>
                    <button
                      onClick={() => setView('acting')}
                      className="px-10 py-4 border border-black text-black text-xs tracking-[0.2em] uppercase font-light hover:bg-black hover:text-white transition-all"
                    >
                      Comédie
                    </button>
                  </div>
                </div>

                {/* Right: Photo */}
                <div className="relative">
                  <img
                    src="photos/IMG_4302.jpg"
                    alt="Lea Brasseur"
                    className="w-full aspect-[3/4] object-cover shadow-2xl"
                  />
                  <p className="text-xs text-gray-400 mt-4 text-center tracking-wide">
                    © Studio
                  </p>
                </div>
              </div>
            </div>
          </main>
        )}

        {/* MODELING */}
        {view === 'modeling' && (
          <main className="pt-56 pb-20">
            <div className="max-w-6xl mx-auto px-16">
              <div className="mb-24 text-center">
                <h2
                  className="text-4xl md:text-5xl font-light mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Mannequin
                </h2>
                <p className="text-sm text-gray-400 tracking-widest uppercase">
                  Portfolio
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  'photos/FlorianBoggia_Lea_37.jpg',
                  'photos/FlorianBoggia_Lea_40.jpg',
                  'photos/IMG_4313 2.jpg',
                  'photos/FlorianBoggia_Lea_18.jpg',
                  'photos/IMG_4345.jpg',
                  'photos/IMG_4278.jpg',
                  'photos/IMG_5088.jpg',
                  'photos/IMG_4302.jpg',
                ].map((src, i) => (
                  <div key={i} className="aspect-[3/4] overflow-hidden">
                    <img
                      src={src}
                      alt={`Photo ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-20 max-w-3xl mx-auto">
                <div className="space-y-8">
                  <div className="border-b border-gray-100 pb-6">
                    <h3 className="text-2xl font-light mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                      2025
                    </h3>
                    <p className="text-gray-600 font-light mb-2">Campagne digitale et print - <span className="text-gray-800">Papik</span></p>
                    <p className="text-sm text-gray-400 font-light">Test shoots avec Florian Boggia, Karina et Yoann</p>
                  </div>

                  <div className="border-b border-gray-100 pb-6">
                    <h3 className="text-2xl font-light mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                      2021
                    </h3>
                    <p className="text-gray-600 font-light mb-2">Miss Luxembourg</p>
                    <p className="text-sm text-gray-400 font-light">Défilés au Luxembourg pour Émilie Bolland · Mannequin pour la marque Boger</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <p className="text-xs text-gray-400 tracking-wide">
                  Photographie · Florian Boggia
                </p>
              </div>
            </div>
          </main>
        )}

        {/* ACTING */}
        {view === 'acting' && (
          <main className="pt-56 pb-20">
            <div className="max-w-5xl mx-auto px-16">
              <div className="mb-24 text-center">
                <h2
                  className="text-4xl md:text-5xl font-light mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Comédie
                </h2>
                <p className="text-sm text-gray-400 tracking-widest uppercase">
                  Filmographie
                </p>
              </div>

              <div className="space-y-12">
                {[
                  { title: 'On Me', type: 'Clip musical', year: '2025', role: 'Rôle principal', details: 'Valentino & Harrison (DJ)' },
                  { title: 'UGC', type: 'Publicité', year: '2023', role: 'Comédienne', details: 'Paris' },
                  { title: 'Friends', type: 'Clip musical', year: '2021', role: 'Participation', details: 'Nathan Morrison' },
                  { title: 'Mary Shelley', type: 'Long-métrage', year: '2018', role: 'Figurante rapprochée', details: 'Réalisé par Haifaa al-Mansour' },
                  { title: 'Gainsbourg, Gainsbourg, Faubourg', type: 'Théâtre', year: '2016', role: 'Rôle', details: 'Luxembourg - "Poupée de cire, poupée de son"' },
                ].map((project, i) => (
                  <div key={i} className="border-b border-gray-100 pb-8">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="md:col-span-2">
                        <h3
                          className="text-3xl md:text-4xl font-light mb-2"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {project.title}
                        </h3>
                        <p className="text-gray-600 font-light mb-1">{project.role}</p>
                        {project.details && (
                          <p className="text-sm text-gray-400 font-light">{project.details}</p>
                        )}
                      </div>
                      <div className="flex md:flex-col gap-4 md:gap-1 text-sm text-gray-500 font-light">
                        <span>{project.type}</span>
                        <span className="text-gray-400">{project.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        )}

        <footer className="py-8 text-center border-t border-gray-100">
          <p className="text-xs text-gray-300 tracking-widest uppercase">
            © 2026 Lea Brasseur
          </p>
        </footer>
      </div>
    </>
  );
}
