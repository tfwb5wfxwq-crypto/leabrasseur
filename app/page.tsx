'use client';

import { useState } from 'react';

export default function Home() {
  const [view, setView] = useState<'home' | 'modeling' | 'acting'>('home');
  const [transitioning, setTransitioning] = useState(false);

  const handleTransition = (newView: 'modeling' | 'acting') => {
    setTransitioning(true);
    setTimeout(() => {
      setView(newView);
      setTransitioning(false);
    }, 800);
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap');

        @keyframes scaleIn {
          from {
            transform: scale(0.5);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(60px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-scale-in {
          animation: scaleIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>

      <div className="min-h-screen bg-white">
        {/* LANDING */}
        {view === 'home' && (
          <main className="h-screen flex relative">
            {/* MANNEQUIN - Gauche */}
            <button
              onClick={() => handleTransition('modeling')}
              className="w-1/2 bg-black text-white relative overflow-hidden group transition-all duration-500 hover:w-[55%]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h2
                    className="text-[10rem] leading-none mb-8 group-hover:scale-110 transition-transform duration-500"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    MANNEQUIN
                  </h2>
                  <div className="w-32 h-1 bg-white mx-auto mb-6 group-hover:w-48 transition-all duration-500"></div>
                  <p
                    className="text-sm tracking-[0.4em] uppercase opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Cliquer pour découvrir
                  </p>
                </div>
              </div>

              {/* Effet overlay */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            </button>

            {/* COMÉDIE - Droite */}
            <button
              onClick={() => handleTransition('acting')}
              className="w-1/2 bg-white text-black relative overflow-hidden group transition-all duration-500 hover:w-[55%] border-l-2 border-black"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h2
                    className="text-[10rem] leading-none mb-8 group-hover:scale-110 transition-transform duration-500"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    COMÉDIE
                  </h2>
                  <div className="w-32 h-1 bg-black mx-auto mb-6 group-hover:w-48 transition-all duration-500"></div>
                  <p
                    className="text-sm tracking-[0.4em] uppercase opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Cliquer pour découvrir
                  </p>
                </div>
              </div>

              {/* Effet overlay */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            </button>

            {/* Logo centré */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none">
              <h1
                className="text-5xl mb-2 mix-blend-difference text-white"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                LEA BRASSEUR
              </h1>
              <p
                className="text-xs tracking-[0.3em] uppercase mix-blend-difference text-white opacity-60"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Paris
              </p>
            </div>
          </main>
        )}

        {/* MANNEQUIN */}
        {view === 'modeling' && (
          <div className={`min-h-screen ${transitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white">
              <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
                <button
                  onClick={() => setView('home')}
                  className="text-3xl hover:opacity-60 transition-opacity"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  LEA BRASSEUR
                </button>
                <button
                  onClick={() => handleTransition('acting')}
                  className="text-sm tracking-[0.3em] uppercase hover:opacity-60 transition-opacity"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  → Comédie
                </button>
              </div>
            </header>

            <main className="pt-32 pb-20 bg-black text-white">
              <div className="max-w-7xl mx-auto px-8">
                {/* Titre */}
                <div className="text-center mb-24 animate-scale-in">
                  <h2
                    className="text-[8rem] leading-none mb-6"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    MANNEQUIN
                  </h2>
                  <div className="w-32 h-1 bg-white mx-auto"></div>
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
                      className="aspect-[3/4] overflow-hidden bg-gray-900 animate-slide-up"
                      style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
                    >
                      <img
                        src={src}
                        alt={`Photo ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
                      />
                    </div>
                  ))}
                </div>

                {/* Expériences */}
                <div className="max-w-5xl mx-auto">
                  <div className="text-center mb-20">
                    <h3
                      className="text-6xl mb-6"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      EXPÉRIENCES
                    </h3>
                    <div className="w-24 h-1 bg-white mx-auto"></div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="text-center p-10 border-2 border-white hover:bg-white hover:text-black transition-all duration-300">
                      <span
                        className="text-7xl block mb-6"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        2025
                      </span>
                      <h4
                        className="text-2xl mb-4"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                      >
                        Campagne Papik
                      </h4>
                      <p
                        className="text-sm mb-3"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Digital & Print
                      </p>
                      <p
                        className="text-xs opacity-60"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Florian Boggia · Karina · Yoann
                      </p>
                    </div>

                    <div className="text-center p-10 border-2 border-white hover:bg-white hover:text-black transition-all duration-300">
                      <span
                        className="text-7xl block mb-6"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        2021
                      </span>
                      <h4
                        className="text-2xl mb-4"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                      >
                        Miss Luxembourg
                      </h4>
                      <p
                        className="text-sm"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Défilés Luxembourg · Émilie Bolland · Marque Boger
                      </p>
                    </div>
                  </div>

                  <p
                    className="text-center text-xs uppercase tracking-widest opacity-40 mt-20"
                    style={{ fontFamily: "'Inter', sans-serif" }}
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
          <div className={`min-h-screen ${transitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
              <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
                <button
                  onClick={() => setView('home')}
                  className="text-3xl hover:opacity-60 transition-opacity"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  LEA BRASSEUR
                </button>
                <button
                  onClick={() => handleTransition('modeling')}
                  className="text-sm tracking-[0.3em] uppercase hover:opacity-60 transition-opacity"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  → Mannequin
                </button>
              </div>
            </header>

            <main className="pt-32 pb-20">
              <div className="max-w-6xl mx-auto px-8">
                {/* Titre */}
                <div className="text-center mb-24 animate-scale-in">
                  <h2
                    className="text-[8rem] leading-none mb-6"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    COMÉDIE
                  </h2>
                  <div className="w-32 h-1 bg-black mx-auto"></div>
                </div>

                {/* Vidéo */}
                <div className="max-w-4xl mx-auto mb-32 animate-slide-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
                  <div className="bg-black shadow-2xl">
                    <video
                      controls
                      preload="metadata"
                      className="w-full aspect-video"
                    >
                      <source src="/videos/monologue.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="text-center mt-12 p-8 border-2 border-black">
                    <h3
                      className="text-4xl mb-3"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      TAPE MONOLOGUE
                    </h3>
                    <p
                      className="text-sm"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Extrait de travail personnel · 2026
                    </p>
                  </div>
                </div>

                {/* Filmographie */}
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-20">
                    <h3
                      className="text-6xl mb-6"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      FILMOGRAPHIE
                    </h3>
                    <div className="w-24 h-1 bg-black mx-auto"></div>
                  </div>

                  <div className="space-y-8">
                    {[
                      { title: 'On Me', type: 'Clip musical', year: '2025', role: 'Rôle principal', details: 'Valentino & Harrison (DJ)' },
                      { title: 'UGC', type: 'Publicité', year: '2023', role: 'Comédienne', details: 'Paris' },
                      { title: 'Friends', type: 'Clip musical', year: '2021', role: 'Participation', details: 'Nathan Morrison' },
                      { title: 'Mary Shelley', type: 'Long-métrage', year: '2018', role: 'Figurante rapprochée', details: 'Réalisé par Haifaa al-Mansour' },
                      { title: 'Gainsbourg, Gainsbourg, Faubourg', type: 'Théâtre', year: '2016', role: 'Rôle', details: 'Luxembourg - "Poupée de cire, poupée de son"' },
                    ].map((project, i) => (
                      <div
                        key={i}
                        className="grid md:grid-cols-[140px,1fr] gap-8 p-8 border-2 border-black hover:bg-black hover:text-white transition-all duration-300"
                      >
                        <div className="text-center md:text-left">
                          <span
                            className="text-6xl block"
                            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                          >
                            {project.year}
                          </span>
                        </div>
                        <div>
                          <h4
                            className="text-4xl mb-2"
                            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                          >
                            {project.title}
                          </h4>
                          <p
                            className="text-xs uppercase tracking-widest opacity-60 mb-3"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {project.type}
                          </p>
                          <p
                            className="text-base mb-2"
                            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                          >
                            {project.role}
                          </p>
                          {project.details && (
                            <p
                              className="text-sm opacity-60"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {project.details}
                            </p>
                          )}
                        </div>
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
          <footer className={`py-12 border-t-2 ${view === 'modeling' ? 'border-white bg-black text-white' : 'border-black'}`}>
            <p
              className="text-center text-xs uppercase tracking-widest opacity-40"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              © 2026 Lea Brasseur
            </p>
          </footer>
        )}
      </div>
    </>
  );
}
