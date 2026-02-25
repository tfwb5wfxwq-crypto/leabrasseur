'use client';

import { useState } from 'react';

export default function Home() {
  const [expanded, setExpanded] = useState<'none' | 'modeling' | 'acting'>('none');

  const toggleSection = (section: 'modeling' | 'acting') => {
    setExpanded(expanded === section ? 'none' : section);
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Work+Sans:wght@300;400;500&display=swap');
      `}</style>

      <div className="min-h-screen bg-white">
        {/* Header fixe */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-8 py-8 text-center">
            <h1
              className="text-4xl mb-3"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
            >
              Lea Brasseur
            </h1>
            <p
              className="text-xs uppercase tracking-widest text-gray-500"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              Mannequin & Comédienne
            </p>
          </div>
        </header>

        <main className="pt-40 pb-20">
          {/* Photo - visible quand rien n'est ouvert */}
          {expanded === 'none' && (
            <div className="max-w-md mx-auto px-8 mb-16 animate-fadeIn">
              <img
                src="/photos/IMG_4302.jpg"
                alt="Lea Brasseur"
                className="w-full aspect-[3/4] object-cover shadow-xl"
              />
            </div>
          )}

          {/* Catégories */}
          <div className="max-w-6xl mx-auto px-8 space-y-6">
            {/* MANNEQUIN */}
            <div
              className={`border-2 border-black overflow-hidden transition-all duration-500 ${
                expanded === 'modeling' ? 'bg-white' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <button
                onClick={() => toggleSection('modeling')}
                className="w-full p-8 text-center"
              >
                <h2
                  className={`transition-all duration-300 ${
                    expanded === 'modeling' ? 'text-5xl' : 'text-3xl'
                  }`}
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                >
                  Mannequin
                </h2>
                <p
                  className="text-xs uppercase tracking-widest text-gray-400 mt-3"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                >
                  {expanded === 'modeling' ? 'Cliquer pour fermer' : 'Cliquer pour ouvrir'}
                </p>
              </button>

              {/* Contenu Mannequin */}
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  expanded === 'modeling' ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-8 border-t-2 border-black">
                  {/* Photos */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
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

                  {/* Expériences */}
                  <div className="max-w-3xl mx-auto text-center space-y-12">
                    <h3
                      className="text-3xl mb-8"
                      style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                    >
                      Expériences
                    </h3>

                    <div className="border-t border-gray-300 pt-8">
                      <span
                        className="text-4xl block mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        2025
                      </span>
                      <p
                        className="text-lg mb-2"
                        style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 500 }}
                      >
                        Campagne digitale et print — Papik
                      </p>
                      <p
                        className="text-sm text-gray-600"
                        style={{ fontFamily: "'Work Sans', sans-serif" }}
                      >
                        Test shoots avec Florian Boggia, Karina et Yoann
                      </p>
                    </div>

                    <div className="border-t border-gray-300 pt-8">
                      <span
                        className="text-4xl block mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        2021
                      </span>
                      <p
                        className="text-lg mb-2"
                        style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 500 }}
                      >
                        Miss Luxembourg
                      </p>
                      <p
                        className="text-sm text-gray-600"
                        style={{ fontFamily: "'Work Sans', sans-serif" }}
                      >
                        Défilés au Luxembourg pour Émilie Bolland · Mannequin pour la marque Boger
                      </p>
                    </div>

                    <p
                      className="text-xs uppercase tracking-widest text-gray-400 pt-8"
                      style={{ fontFamily: "'Work Sans', sans-serif" }}
                    >
                      Photographie · Florian Boggia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* COMÉDIE */}
            <div
              className={`border-2 border-black overflow-hidden transition-all duration-500 ${
                expanded === 'acting' ? 'bg-white' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <button
                onClick={() => toggleSection('acting')}
                className="w-full p-8 text-center"
              >
                <h2
                  className={`transition-all duration-300 ${
                    expanded === 'acting' ? 'text-5xl' : 'text-3xl'
                  }`}
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                >
                  Comédie
                </h2>
                <p
                  className="text-xs uppercase tracking-widest text-gray-400 mt-3"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                >
                  {expanded === 'acting' ? 'Cliquer pour fermer' : 'Cliquer pour ouvrir'}
                </p>
              </button>

              {/* Contenu Comédie */}
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  expanded === 'acting' ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-8 border-t-2 border-black">
                  {/* Tape */}
                  <div className="max-w-3xl mx-auto mb-16">
                    <div className="bg-black shadow-xl">
                      <video
                        controls
                        preload="metadata"
                        className="w-full aspect-video"
                      >
                        <source src="/videos/monologue.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <div className="text-center mt-8 border-t border-gray-300 pt-8">
                      <h3
                        className="text-2xl mb-2"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        Tape Monologue
                      </h3>
                      <p
                        className="text-sm text-gray-600"
                        style={{ fontFamily: "'Work Sans', sans-serif" }}
                      >
                        Extrait de travail personnel · 2026
                      </p>
                    </div>
                  </div>

                  {/* Filmographie */}
                  <div className="max-w-3xl mx-auto text-center">
                    <h3
                      className="text-3xl mb-12"
                      style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                    >
                      Filmographie
                    </h3>

                    <div className="space-y-10">
                      {[
                        { title: 'On Me', type: 'Clip musical', year: '2025', role: 'Rôle principal', details: 'Valentino & Harrison (DJ)' },
                        { title: 'UGC', type: 'Publicité', year: '2023', role: 'Comédienne', details: 'Paris' },
                        { title: 'Friends', type: 'Clip musical', year: '2021', role: 'Participation', details: 'Nathan Morrison' },
                        { title: 'Mary Shelley', type: 'Long-métrage', year: '2018', role: 'Figurante rapprochée', details: 'Réalisé par Haifaa al-Mansour' },
                        { title: 'Gainsbourg, Gainsbourg, Faubourg', type: 'Théâtre', year: '2016', role: 'Rôle', details: 'Luxembourg - "Poupée de cire, poupée de son"' },
                      ].map((project, i) => (
                        <div key={i} className="border-t border-gray-300 pt-8">
                          <span
                            className="text-3xl block mb-3"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                          >
                            {project.year}
                          </span>
                          <h4
                            className="text-2xl mb-2"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                          >
                            {project.title}
                          </h4>
                          <p
                            className="text-xs uppercase tracking-widest text-gray-400 mb-2"
                            style={{ fontFamily: "'Work Sans', sans-serif" }}
                          >
                            {project.type}
                          </p>
                          <p
                            className="text-base mb-1"
                            style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 500 }}
                          >
                            {project.role}
                          </p>
                          {project.details && (
                            <p
                              className="text-sm text-gray-600"
                              style={{ fontFamily: "'Work Sans', sans-serif" }}
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
          </div>
        </main>

        <footer className="py-12 border-t border-gray-100">
          <p
            className="text-center text-xs uppercase tracking-widest text-gray-300"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            © 2026 Lea Brasseur
          </p>
        </footer>
      </div>
    </>
  );
}
