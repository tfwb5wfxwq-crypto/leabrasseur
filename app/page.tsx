'use client';

import { useState } from 'react';

export default function Home() {
  const [view, setView] = useState<'home' | 'modeling' | 'acting'>('home');

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@300;400;500&display=swap');
      `}</style>

      <div className="min-h-screen bg-white">
        {/* Nav */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-8 py-8 flex items-center justify-center gap-16">
            <button
              onClick={() => setView('home')}
              className="text-xl font-light tracking-wider hover:opacity-60 transition-opacity"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Lea Brasseur
            </button>
            <button
              onClick={() => setView('modeling')}
              className={`text-sm tracking-widest uppercase transition-opacity ${
                view === 'modeling' ? 'opacity-100' : 'opacity-40 hover:opacity-100'
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Mannequin
            </button>
            <button
              onClick={() => setView('acting')}
              className={`text-sm tracking-widest uppercase transition-opacity ${
                view === 'acting' ? 'opacity-100' : 'opacity-40 hover:opacity-100'
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Comédie
            </button>
          </div>
        </nav>

        {/* HOME */}
        {view === 'home' && (
          <main className="min-h-screen flex items-center justify-center px-8 pt-32 pb-20">
            <div className="max-w-4xl w-full text-center space-y-12">
              <div>
                <h1
                  className="text-8xl md:text-9xl font-light mb-8"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Lea Brasseur
                </h1>
                <div className="w-24 h-px bg-black mx-auto mb-8"></div>
                <p
                  className="text-lg text-gray-600 tracking-wide"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
                >
                  Mannequin & Comédienne
                </p>
                <p
                  className="text-xs tracking-widest uppercase text-gray-400 mt-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Paris
                </p>
              </div>

              <div className="max-w-md mx-auto">
                <img
                  src="/photos/IMG_4302.jpg"
                  alt="Lea Brasseur"
                  className="w-full aspect-[3/4] object-cover shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="flex gap-6 justify-center pt-8">
                <button
                  onClick={() => setView('modeling')}
                  className="px-12 py-4 bg-black text-white text-xs tracking-widest uppercase hover:bg-gray-800 transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Portfolio
                </button>
                <button
                  onClick={() => setView('acting')}
                  className="px-12 py-4 border border-black text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-all"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Filmographie
                </button>
              </div>
            </div>
          </main>
        )}

        {/* MODELING */}
        {view === 'modeling' && (
          <main className="pt-40 pb-32">
            <div className="max-w-6xl mx-auto px-8">
              <div className="text-center mb-32">
                <h2
                  className="text-7xl mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                >
                  Mannequin
                </h2>
                <div className="w-16 h-px bg-black mx-auto"></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
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
                      className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
                    />
                  </div>
                ))}
              </div>

              <div className="max-w-3xl mx-auto space-y-20 text-center">
                <div className="border-t border-gray-200 pt-16">
                  <h3
                    className="text-6xl mb-6"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    2025
                  </h3>
                  <p
                    className="text-lg mb-3"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
                  >
                    Campagne digitale et print — Papik
                  </p>
                  <p
                    className="text-gray-500 text-sm"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
                  >
                    Test shoots avec Florian Boggia, Karina et Yoann
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-16">
                  <h3
                    className="text-6xl mb-6"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    2021
                  </h3>
                  <p
                    className="text-lg mb-3"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
                  >
                    Miss Luxembourg
                  </p>
                  <p
                    className="text-gray-500 text-sm"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
                  >
                    Défilés au Luxembourg pour Émilie Bolland · Mannequin pour la marque Boger
                  </p>
                </div>
              </div>

              <div className="text-center mt-24">
                <p
                  className="text-xs tracking-widest text-gray-400 uppercase"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Photographie · Florian Boggia
                </p>
              </div>
            </div>
          </main>
        )}

        {/* ACTING */}
        {view === 'acting' && (
          <main className="pt-40 pb-32">
            <div className="max-w-6xl mx-auto px-8">
              <div className="text-center mb-32">
                <h2
                  className="text-7xl mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                >
                  Comédie
                </h2>
                <div className="w-16 h-px bg-black mx-auto"></div>
              </div>

              {/* Video - Plus petit */}
              <div className="max-w-2xl mx-auto mb-32">
                <div className="bg-black shadow-xl">
                  <video
                    controls
                    preload="metadata"
                    className="w-full aspect-video"
                  >
                    <source src="/videos/monologue.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="text-center mt-8">
                  <p
                    className="text-xl mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Tape Monologue
                  </p>
                  <p
                    className="text-xs tracking-widest uppercase text-gray-400"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Extrait
                  </p>
                </div>
              </div>

              {/* Filmographie - Centré */}
              <div className="max-w-3xl mx-auto space-y-20">
                {[
                  {
                    title: 'On Me',
                    type: 'Clip musical',
                    year: '2025',
                    role: 'Rôle principal',
                    details: 'Valentino & Harrison (DJ)'
                  },
                  {
                    title: 'UGC',
                    type: 'Publicité',
                    year: '2023',
                    role: 'Comédienne',
                    details: 'Paris'
                  },
                  {
                    title: 'Friends',
                    type: 'Clip musical',
                    year: '2021',
                    role: 'Participation',
                    details: 'Nathan Morrison'
                  },
                  {
                    title: 'Mary Shelley',
                    type: 'Long-métrage',
                    year: '2018',
                    role: 'Figurante rapprochée',
                    details: 'Réalisé par Haifaa al-Mansour'
                  },
                  {
                    title: 'Gainsbourg, Gainsbourg, Faubourg',
                    type: 'Théâtre',
                    year: '2016',
                    role: 'Rôle',
                    details: 'Luxembourg - "Poupée de cire, poupée de son"'
                  },
                ].map((project, i) => (
                  <div key={i} className="border-t border-gray-200 pt-16 text-center">
                    <h3
                      className="text-5xl mb-4"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-sm tracking-widest uppercase text-gray-400 mb-3"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {project.type} · {project.year}
                    </p>
                    <p
                      className="text-base mb-2"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
                    >
                      {project.role}
                    </p>
                    {project.details && (
                      <p
                        className="text-sm text-gray-500"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
                      >
                        {project.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </main>
        )}

        <footer className="py-16 border-t border-gray-100">
          <p
            className="text-center text-xs tracking-widest text-gray-300 uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            © 2026 Lea Brasseur
          </p>
        </footer>
      </div>
    </>
  );
}
