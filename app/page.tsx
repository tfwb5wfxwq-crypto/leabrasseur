'use client';

import { useState } from 'react';

export default function Home() {
  const [view, setView] = useState<'home' | 'modeling' | 'acting'>('home');
  const [animating, setAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  const handleTransition = (newView: 'modeling' | 'acting') => {
    setSlideDirection(newView === 'modeling' ? 'right' : 'left');
    setAnimating(true);
    setTimeout(() => {
      setView(newView);
      setTimeout(() => setAnimating(false), 100);
    }, 800);
  };

  const switchMode = () => {
    if (view === 'modeling') {
      handleTransition('acting');
    } else if (view === 'acting') {
      handleTransition('modeling');
    }
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Italiana&family=Lexend:wght@300;400;500&display=swap');

        @keyframes slideRight {
          from {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
          to {
            transform: translateX(100%) scale(0.9);
            opacity: 0;
          }
        }

        @keyframes slideLeft {
          from {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
          to {
            transform: translateX(-100%) scale(0.9);
            opacity: 0;
          }
        }

        @keyframes fillFromLeft {
          from {
            clip-path: inset(0 100% 0 0);
          }
          to {
            clip-path: inset(0 0 0 0);
          }
        }

        @keyframes fillFromRight {
          from {
            clip-path: inset(0 0 0 100%);
          }
          to {
            clip-path: inset(0 0 0 0);
          }
        }

        .slide-right {
          animation: slideRight 0.8s cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }

        .slide-left {
          animation: slideLeft 0.8s cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }
      `}</style>

      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Overlay d'animation */}
        {animating && (
          <div
            className={`fixed inset-0 z-[100] ${
              slideDirection === 'right' ? 'bg-black' : 'bg-white'
            }`}
            style={{
              animation: slideDirection === 'right'
                ? 'fillFromLeft 0.8s cubic-bezier(0.76, 0, 0.24, 1) forwards'
                : 'fillFromRight 0.8s cubic-bezier(0.76, 0, 0.24, 1) forwards'
            }}
          ></div>
        )}

        {/* LANDING */}
        {view === 'home' && (
          <main className={`h-screen ${animating ? (slideDirection === 'right' ? 'slide-right' : 'slide-left') : ''}`}>
            <div className="h-full flex">
              {/* MANNEQUIN - Gauche */}
              <button
                onClick={() => handleTransition('modeling')}
                className="w-1/2 bg-black text-white relative overflow-hidden group transition-all duration-500 hover:w-[55%]"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2
                      className="text-7xl mb-6 group-hover:scale-105 transition-transform duration-500"
                      style={{ fontFamily: "'Italiana', serif" }}
                    >
                      Mannequin
                    </h2>
                    <div className="w-24 h-px bg-white mx-auto opacity-60"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              </button>

              {/* COMÉDIE - Droite */}
              <button
                onClick={() => handleTransition('acting')}
                className="w-1/2 bg-white text-black relative overflow-hidden group transition-all duration-500 hover:w-[55%] border-l border-black"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2
                      className="text-7xl mb-6 group-hover:scale-105 transition-transform duration-500"
                      style={{ fontFamily: "'Italiana', serif" }}
                    >
                      Comédie
                    </h2>
                    <div className="w-24 h-px bg-black mx-auto opacity-60"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              </button>
            </div>

            {/* Nom + Photo centrés */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <div className="text-center mb-8">
                <h1
                  className="text-6xl mb-3 text-black bg-white px-8 py-2"
                  style={{ fontFamily: "'Italiana', serif" }}
                >
                  Lea Brasseur
                </h1>
                <p
                  className="text-xs tracking-[0.3em] uppercase text-gray-600 bg-white px-6 py-1 inline-block"
                  style={{ fontFamily: "'Lexend', sans-serif" }}
                >
                  Mannequin & Comédienne · Paris
                </p>
              </div>
              <div className="w-48 mx-auto">
                <img
                  src="/photos/IMG_4302.jpg"
                  alt="Lea Brasseur"
                  className="w-full aspect-square object-cover shadow-2xl"
                />
              </div>
            </div>
          </main>
        )}

        {/* MANNEQUIN */}
        {view === 'modeling' && (
          <div className={`min-h-screen ${animating && slideDirection === 'left' ? 'slide-left' : ''}`}>
            {/* Header cliquable pour switcher */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white border-b border-white/20">
              <button
                onClick={switchMode}
                className="w-full max-w-7xl mx-auto px-8 py-8 text-center hover:opacity-80 transition-opacity"
              >
                <h1
                  className="text-4xl mb-2"
                  style={{ fontFamily: "'Italiana', serif" }}
                >
                  Lea Brasseur
                </h1>
                <p
                  className="text-sm tracking-[0.3em] uppercase opacity-60"
                  style={{ fontFamily: "'Lexend', sans-serif" }}
                >
                  Mannequin · Cliquer pour Comédie →
                </p>
              </button>
            </header>

            <main className="pt-40 pb-20 bg-black text-white min-h-screen">
              <div className="max-w-7xl mx-auto px-8">
                {/* Photos */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
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
                    <div key={i} className="aspect-[3/4] overflow-hidden bg-gray-900">
                      <img
                        src={src}
                        alt={`Photo ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0"
                      />
                    </div>
                  ))}
                </div>

                {/* Expériences */}
                <div className="max-w-5xl mx-auto">
                  <div className="text-center mb-16">
                    <h3
                      className="text-5xl mb-4"
                      style={{ fontFamily: "'Italiana', serif" }}
                    >
                      Expériences
                    </h3>
                    <div className="w-20 h-px bg-white mx-auto opacity-60"></div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center p-8 border border-white/30 hover:bg-white hover:text-black transition-all duration-300">
                      <span
                        className="text-6xl block mb-4"
                        style={{ fontFamily: "'Italiana', serif" }}
                      >
                        2025
                      </span>
                      <h4
                        className="text-xl mb-3"
                        style={{ fontFamily: "'Lexend', sans-serif", fontWeight: 500 }}
                      >
                        Campagne Papik
                      </h4>
                      <p className="text-sm mb-2" style={{ fontFamily: "'Lexend', sans-serif" }}>
                        Digital & Print
                      </p>
                      <p className="text-xs opacity-60" style={{ fontFamily: "'Lexend', sans-serif" }}>
                        Florian Boggia · Karina · Yoann
                      </p>
                    </div>

                    <div className="text-center p-8 border border-white/30 hover:bg-white hover:text-black transition-all duration-300">
                      <span
                        className="text-6xl block mb-4"
                        style={{ fontFamily: "'Italiana', serif" }}
                      >
                        2021
                      </span>
                      <h4
                        className="text-xl mb-3"
                        style={{ fontFamily: "'Lexend', sans-serif", fontWeight: 500 }}
                      >
                        Miss Luxembourg
                      </h4>
                      <p className="text-sm" style={{ fontFamily: "'Lexend', sans-serif" }}>
                        Défilés Luxembourg · Émilie Bolland · Marque Boger
                      </p>
                    </div>
                  </div>

                  <p
                    className="text-center text-xs uppercase tracking-widest opacity-40 mt-16"
                    style={{ fontFamily: "'Lexend', sans-serif" }}
                  >
                    Photographie · Florian Boggia
                  </p>
                </div>
              </div>
            </main>

            <button
              onClick={() => setView('home')}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 px-8 py-3 bg-white text-black text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors"
              style={{ fontFamily: "'Lexend', sans-serif" }}
            >
              ← Retour
            </button>
          </div>
        )}

        {/* COMÉDIE */}
        {view === 'acting' && (
          <div className={`min-h-screen ${animating && slideDirection === 'right' ? 'slide-right' : ''}`}>
            {/* Header cliquable pour switcher */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
              <button
                onClick={switchMode}
                className="w-full max-w-7xl mx-auto px-8 py-8 text-center hover:opacity-80 transition-opacity"
              >
                <h1
                  className="text-4xl mb-2"
                  style={{ fontFamily: "'Italiana', serif" }}
                >
                  Lea Brasseur
                </h1>
                <p
                  className="text-sm tracking-[0.3em] uppercase text-gray-600"
                  style={{ fontFamily: "'Lexend', sans-serif" }}
                >
                  Comédie · Cliquer pour Mannequin →
                </p>
              </button>
            </header>

            <main className="pt-40 pb-20 min-h-screen">
              <div className="max-w-6xl mx-auto px-8">
                {/* Vidéo */}
                <div className="max-w-4xl mx-auto mb-24">
                  <div className="bg-black shadow-2xl">
                    <video controls preload="metadata" className="w-full aspect-video">
                      <source src="/videos/monologue.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="text-center mt-10 p-6 border border-black/20">
                    <h3 className="text-3xl mb-2" style={{ fontFamily: "'Italiana', serif" }}>
                      Tape Monologue
                    </h3>
                    <p className="text-sm text-gray-600" style={{ fontFamily: "'Lexend', sans-serif" }}>
                      Extrait de travail personnel · 2026
                    </p>
                  </div>
                </div>

                {/* Filmographie */}
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-16">
                    <h3 className="text-5xl mb-4" style={{ fontFamily: "'Italiana', serif" }}>
                      Filmographie
                    </h3>
                    <div className="w-20 h-px bg-black mx-auto opacity-60"></div>
                  </div>

                  <div className="space-y-6">
                    {[
                      { title: 'On Me', type: 'Clip musical', year: '2025', role: 'Rôle principal', details: 'Valentino & Harrison (DJ)' },
                      { title: 'UGC', type: 'Publicité', year: '2023', role: 'Comédienne', details: 'Paris' },
                      { title: 'Friends', type: 'Clip musical', year: '2021', role: 'Participation', details: 'Nathan Morrison' },
                      { title: 'Mary Shelley', type: 'Long-métrage', year: '2018', role: 'Figurante rapprochée', details: 'Réalisé par Haifaa al-Mansour' },
                      { title: 'Gainsbourg, Gainsbourg, Faubourg', type: 'Théâtre', year: '2016', role: 'Rôle', details: 'Luxembourg - "Poupée de cire, poupée de son"' },
                    ].map((project, i) => (
                      <div
                        key={i}
                        className="grid md:grid-cols-[120px,1fr] gap-6 p-6 border border-black/20 hover:bg-black hover:text-white transition-all duration-300"
                      >
                        <div className="text-center md:text-left">
                          <span className="text-5xl block" style={{ fontFamily: "'Italiana', serif" }}>
                            {project.year}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-3xl mb-2" style={{ fontFamily: "'Italiana', serif" }}>
                            {project.title}
                          </h4>
                          <p
                            className="text-xs uppercase tracking-widest opacity-60 mb-2"
                            style={{ fontFamily: "'Lexend', sans-serif" }}
                          >
                            {project.type}
                          </p>
                          <p className="text-base mb-1" style={{ fontFamily: "'Lexend', sans-serif", fontWeight: 500 }}>
                            {project.role}
                          </p>
                          {project.details && (
                            <p className="text-sm opacity-60" style={{ fontFamily: "'Lexend', sans-serif" }}>
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

            <button
              onClick={() => setView('home')}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 px-8 py-3 bg-black text-white text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors"
              style={{ fontFamily: "'Lexend', sans-serif" }}
            >
              ← Retour
            </button>
          </div>
        )}
      </div>
    </>
  );
}
