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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
          <div className="flex items-center justify-between px-6 md:px-12 py-5 max-w-7xl mx-auto">
            <button
              onClick={() => setView('home')}
              className="text-xl md:text-2xl font-light tracking-[0.15em]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              LEA BRASSEUR
            </button>
            <div className="flex gap-8 text-xs tracking-[0.15em] uppercase font-light">
              <button
                onClick={() => setView('modeling')}
                className={view === 'modeling' ? 'text-black' : 'text-gray-400 hover:text-black'}
              >
                Mannequin
              </button>
              <button
                onClick={() => setView('acting')}
                className={view === 'acting' ? 'text-black' : 'text-gray-400 hover:text-black'}
              >
                Comédie
              </button>
            </div>
          </div>
        </nav>

        {/* HOME */}
        {view === 'home' && (
          <main className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center min-h-[calc(100vh-12rem)]">
                <div>
                  <h1
                    className="text-6xl md:text-8xl font-light leading-[0.9] mb-8"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Lea<br />Brasseur
                  </h1>
                  <p className="text-lg text-gray-600 mb-2 font-light tracking-wide">
                    Mannequin & Comédienne
                  </p>
                  <p className="text-sm text-gray-400 mb-12 tracking-widest uppercase">
                    Paris
                  </p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setView('modeling')}
                      className="px-8 py-3 bg-black text-white text-sm tracking-wider uppercase font-light hover:bg-gray-800"
                    >
                      Mannequin
                    </button>
                    <button
                      onClick={() => setView('acting')}
                      className="px-8 py-3 border border-black text-black text-sm tracking-wider uppercase font-light hover:bg-black hover:text-white"
                    >
                      Comédie
                    </button>
                  </div>
                </div>
                <div>
                  <img
                    src="/photos/FlorianBoggia_Lea_37.jpg"
                    alt="Lea Brasseur"
                    className="w-full aspect-[3/4] object-cover"
                  />
                  <p className="text-xs text-gray-400 mt-2 tracking-wide">© Florian Boggia</p>
                </div>
              </div>
            </div>
          </main>
        )}

        {/* MODELING */}
        {view === 'modeling' && (
          <main className="pt-28 pb-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="mb-16">
                <h2
                  className="text-5xl md:text-6xl font-light mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Mannequin
                </h2>
                <p className="text-sm text-gray-400 tracking-widest uppercase">
                  Portfolio
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                  <div key={i} className="aspect-[3/4] overflow-hidden">
                    <img
                      src={src}
                      alt={`Photo ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <p className="text-xs text-gray-400 tracking-wide">
                  Florian Boggia · Studio Sessions
                </p>
              </div>
            </div>
          </main>
        )}

        {/* ACTING */}
        {view === 'acting' && (
          <main className="pt-28 pb-16">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
              <div className="mb-16">
                <h2
                  className="text-5xl md:text-6xl font-light mb-2"
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
                  { title: 'Eclipse', type: 'Court-métrage', year: '2025', role: 'Rôle principal' },
                  { title: 'Lumière', type: 'Série TV', year: '2024', role: 'Rôle récurrent' },
                  { title: 'Chanel N°5', type: 'Publicité', year: '2024', role: 'Commercial' },
                  { title: 'Les Ombres', type: 'Théâtre', year: '2024', role: 'Premier rôle' },
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
                        <p className="text-gray-600 font-light">{project.role}</p>
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
