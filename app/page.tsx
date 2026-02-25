'use client';

import { useState } from 'react';

export default function Home() {
  const [view, setView] = useState<'home' | 'modeling' | 'acting'>('home');
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Outfit:wght@300;400;500;600&display=swap');
      `}</style>

      <div className="min-h-screen bg-white">
        {/* LANDING - Split Reveal */}
        {view === 'home' && (
          <main className="h-screen relative overflow-hidden">
            {/* Split gauche - Mannequin */}
            <div
              className="absolute inset-0 w-1/2 left-0 cursor-pointer transition-all duration-700"
              onMouseEnter={() => setHoveredSide('left')}
              onMouseLeave={() => setHoveredSide(null)}
              onClick={() => setView('modeling')}
            >
              <div
                className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
                  hoveredSide === 'left' ? 'scale-105 opacity-100' : 'opacity-0 scale-100'
                }`}
                style={{ backgroundImage: 'url(/photos/IMG_4302.jpg)' }}
              ></div>
              <div
                className={`absolute inset-0 bg-black transition-opacity duration-700 ${
                  hoveredSide === 'left' ? 'opacity-60' : 'opacity-0'
                }`}
              ></div>
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                  hoveredSide === 'left' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="text-white text-center">
                  <h2
                    className="text-6xl mb-6"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
                  >
                    Mannequin
                  </h2>
                  <div className="w-16 h-px bg-white mx-auto mb-4"></div>
                  <p
                    className="text-sm uppercase tracking-widest opacity-80"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Portfolio
                  </p>
                </div>
              </div>
            </div>

            {/* Split droite - Comédie */}
            <div
              className="absolute inset-0 w-1/2 right-0 cursor-pointer transition-all duration-700"
              onMouseEnter={() => setHoveredSide('right')}
              onMouseLeave={() => setHoveredSide(null)}
              onClick={() => setView('acting')}
            >
              <div
                className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
                  hoveredSide === 'right' ? 'scale-105 opacity-100' : 'opacity-0 scale-100'
                }`}
                style={{ backgroundImage: 'url(/photos/FlorianBoggia_Lea_37.jpg)' }}
              ></div>
              <div
                className={`absolute inset-0 bg-black transition-opacity duration-700 ${
                  hoveredSide === 'right' ? 'opacity-60' : 'opacity-0'
                }`}
              ></div>
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                  hoveredSide === 'right' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="text-white text-center">
                  <h2
                    className="text-6xl mb-6"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
                  >
                    Comédie
                  </h2>
                  <div className="w-16 h-px bg-white mx-auto mb-4"></div>
                  <p
                    className="text-sm uppercase tracking-widest opacity-80"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Filmographie
                  </p>
                </div>
              </div>
            </div>

            {/* Ligne centrale */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-300 z-10"></div>

            {/* Nom centré */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none">
              <h1
                className="text-7xl mb-6 text-black"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
              >
                Lea Brasseur
              </h1>
              <p
                className="text-sm uppercase tracking-widest text-gray-600"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Mannequin & Comédienne · Paris
              </p>
            </div>
          </main>
        )}

        {/* MANNEQUIN */}
        {view === 'modeling' && (
          <div className="min-h-screen animate-fadeIn">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
              <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
                <button
                  onClick={() => setView('home')}
                  className="text-2xl hover:opacity-60 transition-opacity"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
                >
                  Lea Brasseur
                </button>
                <button
                  onClick={() => setView('acting')}
                  className="text-sm uppercase tracking-widest hover:opacity-60 transition-opacity"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  → Comédie
                </button>
              </div>
            </header>

            <main className="pt-32 pb-20">
              <div className="max-w-6xl mx-auto px-8">
                {/* Titre */}
                <div className="text-center mb-20">
                  <h2
                    className="text-7xl mb-6"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
                  >
                    Mannequin
                  </h2>
                  <div className="w-24 h-px bg-black mx-auto"></div>
                </div>

                {/* Photos */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
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
                    <div
                      key={i}
                      className="aspect-[3/4] overflow-hidden bg-gray-100"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <img
                        src={src}
                        alt={`Photo ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>

                {/* Expériences */}
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-16">
                    <h3
                      className="text-5xl mb-4"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      Expériences
                    </h3>
                    <div className="w-16 h-px bg-black mx-auto"></div>
                  </div>

                  <div className="space-y-16">
                    <div className="text-center border-t border-gray-200 pt-12">
                      <span
                        className="text-6xl block mb-6"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        2025
                      </span>
                      <h4
                        className="text-2xl mb-3"
                        style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500 }}
                      >
                        Campagne digitale et print — Papik
                      </h4>
                      <p
                        className="text-gray-600"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        Test shoots avec Florian Boggia, Karina et Yoann
                      </p>
                    </div>

                    <div className="text-center border-t border-gray-200 pt-12">
                      <span
                        className="text-6xl block mb-6"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        2021
                      </span>
                      <h4
                        className="text-2xl mb-3"
                        style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500 }}
                      >
                        Miss Luxembourg
                      </h4>
                      <p
                        className="text-gray-600"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        Défilés au Luxembourg pour Émilie Bolland · Mannequin pour la marque Boger
                      </p>
                    </div>
                  </div>

                  <p
                    className="text-center text-xs uppercase tracking-widest text-gray-400 mt-20"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Photographie · Florian Boggia
                  </p>
                </div>
              </div>
            </main>
          </div>
        )}

        {/* COMÉDIE */}
        {view === 'acting' && (
          <div className="min-h-screen animate-fadeIn">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
              <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
                <button
                  onClick={() => setView('home')}
                  className="text-2xl hover:opacity-60 transition-opacity"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
                >
                  Lea Brasseur
                </button>
                <button
                  onClick={() => setView('modeling')}
                  className="text-sm uppercase tracking-widest hover:opacity-60 transition-opacity"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  → Mannequin
                </button>
              </div>
            </header>

            <main className="pt-32 pb-20">
              <div className="max-w-5xl mx-auto px-8">
                {/* Titre */}
                <div className="text-center mb-20">
                  <h2
                    className="text-7xl mb-6"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
                  >
                    Comédie
                  </h2>
                  <div className="w-24 h-px bg-black mx-auto"></div>
                </div>

                {/* Vidéo */}
                <div className="max-w-3xl mx-auto mb-24">
                  <div className="bg-black shadow-2xl overflow-hidden">
                    <video
                      controls
                      preload="metadata"
                      className="w-full aspect-video"
                    >
                      <source src="/videos/monologue.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="text-center mt-10">
                    <h3
                      className="text-3xl mb-3"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      Tape Monologue
                    </h3>
                    <p
                      className="text-sm text-gray-600"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      Extrait de travail personnel · 2026
                    </p>
                  </div>
                </div>

                {/* Filmographie */}
                <div className="max-w-3xl mx-auto">
                  <div className="text-center mb-16">
                    <h3
                      className="text-5xl mb-4"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      Filmographie
                    </h3>
                    <div className="w-16 h-px bg-black mx-auto"></div>
                  </div>

                  <div className="space-y-12">
                    {[
                      { title: 'On Me', type: 'Clip musical', year: '2025', role: 'Rôle principal', details: 'Valentino & Harrison (DJ)' },
                      { title: 'UGC', type: 'Publicité', year: '2023', role: 'Comédienne', details: 'Paris' },
                      { title: 'Friends', type: 'Clip musical', year: '2021', role: 'Participation', details: 'Nathan Morrison' },
                      { title: 'Mary Shelley', type: 'Long-métrage', year: '2018', role: 'Figurante rapprochée', details: 'Réalisé par Haifaa al-Mansour' },
                      { title: 'Gainsbourg, Gainsbourg, Faubourg', type: 'Théâtre', year: '2016', role: 'Rôle', details: 'Luxembourg - "Poupée de cire, poupée de son"' },
                    ].map((project, i) => (
                      <div key={i} className="text-center border-t border-gray-200 pt-10">
                        <span
                          className="text-5xl block mb-4"
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                          {project.year}
                        </span>
                        <h4
                          className="text-3xl mb-3"
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                          {project.title}
                        </h4>
                        <p
                          className="text-xs uppercase tracking-widest text-gray-400 mb-3"
                          style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                          {project.type}
                        </p>
                        <p
                          className="text-lg mb-2"
                          style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500 }}
                        >
                          {project.role}
                        </p>
                        {project.details && (
                          <p
                            className="text-sm text-gray-600"
                            style={{ fontFamily: "'Outfit', sans-serif" }}
                          >
                            {project.details}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>
          </div>
        )}

        {/* Footer */}
        {view !== 'home' && (
          <footer className="py-12 border-t border-gray-100">
            <p
              className="text-center text-xs uppercase tracking-widest text-gray-300"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              © 2026 Lea Brasseur
            </p>
          </footer>
        )}
      </div>
    </>
  );
}
