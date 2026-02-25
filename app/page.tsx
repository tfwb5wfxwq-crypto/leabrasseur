'use client';

import { useState } from 'react';

export default function Home() {
  const [view, setView] = useState<'home' | 'modeling' | 'acting'>('home');

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Raleway:wght@300;400;500&display=swap');
      `}</style>

      <div className="min-h-screen bg-white relative">
        {/* HOME */}
        {view === 'home' && (
          <main className="min-h-screen flex items-center justify-center px-8 animate-fadeIn">
            <div className="max-w-2xl w-full text-center space-y-16">
              {/* Photo */}
              <div className="max-w-md mx-auto">
                <img
                  src="/photos/IMG_4302.jpg"
                  alt="Lea Brasseur"
                  className="w-full aspect-[3/4] object-cover shadow-2xl"
                />
              </div>

              {/* Nom */}
              <div>
                <h1
                  className="text-6xl md:text-7xl mb-4"
                  style={{ fontFamily: "'Cinzel', serif", fontWeight: 500 }}
                >
                  Lea Brasseur
                </h1>
                <div className="w-20 h-px bg-black mx-auto mb-6"></div>
                <p
                  className="text-base text-gray-600"
                  style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300 }}
                >
                  Mannequin & Comédienne
                </p>
                <p
                  className="text-xs uppercase tracking-widest text-gray-400 mt-2"
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  Paris
                </p>
              </div>

              {/* Catégories */}
              <div className="flex gap-8 justify-center pt-8">
                <button
                  onClick={() => setView('modeling')}
                  className="group relative overflow-hidden px-14 py-6 border-2 border-black hover:bg-black transition-all duration-300"
                >
                  <span
                    className="relative text-sm uppercase tracking-widest group-hover:text-white transition-colors"
                    style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}
                  >
                    Mannequin
                  </span>
                </button>

                <button
                  onClick={() => setView('acting')}
                  className="group relative overflow-hidden px-14 py-6 border-2 border-black hover:bg-black transition-all duration-300"
                >
                  <span
                    className="relative text-sm uppercase tracking-widest group-hover:text-white transition-colors"
                    style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}
                  >
                    Comédie
                  </span>
                </button>
              </div>
            </div>
          </main>
        )}

        {/* MANNEQUIN */}
        {view === 'modeling' && (
          <div className="min-h-screen animate-slideIn">
            {/* Bouton fermer */}
            <button
              onClick={() => setView('home')}
              className="fixed top-8 right-8 z-50 w-12 h-12 border-2 border-black hover:bg-black hover:text-white transition-all flex items-center justify-center text-2xl"
            >
              ×
            </button>

            {/* Bouton switcher vers Comédie */}
            <button
              onClick={() => setView('acting')}
              className="fixed top-8 left-8 z-50 text-sm uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              → Comédie
            </button>

            <div className="pt-32 pb-20 px-8">
              <div className="max-w-6xl mx-auto">
                {/* Titre */}
                <div className="text-center mb-24">
                  <h2
                    className="text-6xl mb-6"
                    style={{ fontFamily: "'Cinzel', serif", fontWeight: 500 }}
                  >
                    Mannequin
                  </h2>
                  <div className="w-20 h-px bg-black mx-auto"></div>
                </div>

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
                    <div key={i} className="aspect-[3/4] overflow-hidden bg-gray-100">
                      <img
                        src={src}
                        alt={`Photo ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>

                {/* Expériences */}
                <div className="max-w-3xl mx-auto text-center space-y-16">
                  <h3
                    className="text-4xl mb-12"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Expériences
                  </h3>

                  <div className="border-t-2 border-black pt-12">
                    <span
                      className="text-5xl block mb-6"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      2025
                    </span>
                    <p
                      className="text-lg mb-2"
                      style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}
                    >
                      Campagne digitale et print — Papik
                    </p>
                    <p
                      className="text-sm text-gray-600"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      Test shoots avec Florian Boggia, Karina et Yoann
                    </p>
                  </div>

                  <div className="border-t-2 border-black pt-12">
                    <span
                      className="text-5xl block mb-6"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      2021
                    </span>
                    <p
                      className="text-lg mb-2"
                      style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}
                    >
                      Miss Luxembourg
                    </p>
                    <p
                      className="text-sm text-gray-600"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      Défilés au Luxembourg pour Émilie Bolland · Mannequin pour la marque Boger
                    </p>
                  </div>

                  <p
                    className="text-xs uppercase tracking-widest text-gray-400 pt-12"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    Photographie · Florian Boggia
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* COMÉDIE */}
        {view === 'acting' && (
          <div className="min-h-screen animate-slideIn">
            {/* Bouton fermer */}
            <button
              onClick={() => setView('home')}
              className="fixed top-8 right-8 z-50 w-12 h-12 border-2 border-black hover:bg-black hover:text-white transition-all flex items-center justify-center text-2xl"
            >
              ×
            </button>

            {/* Bouton switcher vers Mannequin */}
            <button
              onClick={() => setView('modeling')}
              className="fixed top-8 left-8 z-50 text-sm uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              → Mannequin
            </button>

            <div className="pt-32 pb-20 px-8">
              <div className="max-w-5xl mx-auto">
                {/* Titre */}
                <div className="text-center mb-24">
                  <h2
                    className="text-6xl mb-6"
                    style={{ fontFamily: "'Cinzel', serif", fontWeight: 500 }}
                  >
                    Comédie
                  </h2>
                  <div className="w-20 h-px bg-black mx-auto"></div>
                </div>

                {/* Tape */}
                <div className="max-w-3xl mx-auto mb-24">
                  <div className="bg-black shadow-2xl">
                    <video
                      controls
                      preload="metadata"
                      className="w-full aspect-video"
                    >
                      <source src="/videos/monologue.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="text-center mt-10 border-t-2 border-black pt-8">
                    <h3
                      className="text-2xl mb-2"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Tape Monologue
                    </h3>
                    <p
                      className="text-sm text-gray-600"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      Extrait de travail personnel · 2026
                    </p>
                  </div>
                </div>

                {/* Filmographie */}
                <div className="max-w-3xl mx-auto text-center">
                  <h3
                    className="text-4xl mb-16"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Filmographie
                  </h3>

                  <div className="space-y-12">
                    {[
                      { title: 'On Me', type: 'Clip musical', year: '2025', role: 'Rôle principal', details: 'Valentino & Harrison (DJ)' },
                      { title: 'UGC', type: 'Publicité', year: '2023', role: 'Comédienne', details: 'Paris' },
                      { title: 'Friends', type: 'Clip musical', year: '2021', role: 'Participation', details: 'Nathan Morrison' },
                      { title: 'Mary Shelley', type: 'Long-métrage', year: '2018', role: 'Figurante rapprochée', details: 'Réalisé par Haifaa al-Mansour' },
                      { title: 'Gainsbourg, Gainsbourg, Faubourg', type: 'Théâtre', year: '2016', role: 'Rôle', details: 'Luxembourg - "Poupée de cire, poupée de son"' },
                    ].map((project, i) => (
                      <div key={i} className="border-t-2 border-black pt-10">
                        <span
                          className="text-4xl block mb-4"
                          style={{ fontFamily: "'Cinzel', serif" }}
                        >
                          {project.year}
                        </span>
                        <h4
                          className="text-3xl mb-3"
                          style={{ fontFamily: "'Cinzel', serif" }}
                        >
                          {project.title}
                        </h4>
                        <p
                          className="text-xs uppercase tracking-widest text-gray-400 mb-3"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          {project.type}
                        </p>
                        <p
                          className="text-base mb-2"
                          style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}
                        >
                          {project.role}
                        </p>
                        {project.details && (
                          <p
                            className="text-sm text-gray-600"
                            style={{ fontFamily: "'Raleway', sans-serif" }}
                          >
                            {project.details}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        {view !== 'home' && (
          <footer className="py-12 border-t border-gray-100">
            <p
              className="text-center text-xs uppercase tracking-widest text-gray-300"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              © 2026 Lea Brasseur
            </p>
          </footer>
        )}
      </div>
    </>
  );
}
