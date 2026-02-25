'use client';

import { useState } from 'react';

export default function Home() {
  const [view, setView] = useState<'home' | 'modeling' | 'acting'>('home');

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&family=Inter:wght@300;400;500&display=swap');
      `}</style>

      <div className="min-h-screen bg-white">
        {/* Navigation - Grande et centrée */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
          <div className="text-center py-10">
            <button
              onClick={() => setView('home')}
              className="block mx-auto mb-6 text-2xl hover:opacity-60 transition-opacity"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Lea Brasseur
            </button>
            <div className="flex justify-center gap-16">
              <button
                onClick={() => setView('modeling')}
                className={`text-xs uppercase tracking-widest ${
                  view === 'modeling' ? 'opacity-100' : 'opacity-40 hover:opacity-100'
                } transition-opacity`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Mannequin
              </button>
              <button
                onClick={() => setView('acting')}
                className={`text-xs uppercase tracking-widest ${
                  view === 'acting' ? 'opacity-100' : 'opacity-40 hover:opacity-100'
                } transition-opacity`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Comédie
              </button>
            </div>
          </div>
        </nav>

        {/* HOME - Tout centré */}
        {view === 'home' && (
          <main className="min-h-screen flex items-center justify-center px-8" style={{ paddingTop: '200px', paddingBottom: '100px' }}>
            <div className="max-w-2xl w-full text-center">
              <h1
                className="text-8xl mb-10"
                style={{ fontFamily: "'Lora', serif", fontWeight: 500 }}
              >
                Lea Brasseur
              </h1>
              <div className="w-20 h-px bg-black mx-auto mb-10"></div>
              <p className="text-lg text-gray-600 mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                Mannequin & Comédienne
              </p>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-16" style={{ fontFamily: "'Inter', sans-serif" }}>
                Paris
              </p>

              <div className="max-w-sm mx-auto mb-16">
                <img
                  src="/photos/IMG_4302.jpg"
                  alt="Lea Brasseur"
                  className="w-full aspect-[3/4] object-cover shadow-lg"
                />
              </div>

              <div className="flex gap-6 justify-center">
                <button
                  onClick={() => setView('modeling')}
                  className="px-10 py-4 bg-black text-white text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Portfolio
                </button>
                <button
                  onClick={() => setView('acting')}
                  className="px-10 py-4 border border-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Filmographie
                </button>
              </div>
            </div>
          </main>
        )}

        {/* MANNEQUIN - Tout centré */}
        {view === 'modeling' && (
          <main className="px-8" style={{ paddingTop: '240px', paddingBottom: '100px' }}>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-32">
                <h2 className="text-7xl mb-8" style={{ fontFamily: "'Lora', serif" }}>
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
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              <div className="max-w-2xl mx-auto space-y-24 text-center">
                <div className="border-t border-gray-200 pt-16">
                  <h3 className="text-6xl mb-6" style={{ fontFamily: "'Lora', serif" }}>
                    2025
                  </h3>
                  <p className="text-lg mb-3" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                    Campagne digitale et print — Papik
                  </p>
                  <p className="text-sm text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Test shoots avec Florian Boggia, Karina et Yoann
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-16">
                  <h3 className="text-6xl mb-6" style={{ fontFamily: "'Lora', serif" }}>
                    2021
                  </h3>
                  <p className="text-lg mb-3" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                    Miss Luxembourg
                  </p>
                  <p className="text-sm text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Défilés au Luxembourg pour Émilie Bolland · Mannequin pour la marque Boger
                  </p>
                </div>
              </div>

              <div className="text-center mt-24">
                <p className="text-xs uppercase tracking-widest text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Photographie · Florian Boggia
                </p>
              </div>
            </div>
          </main>
        )}

        {/* COMÉDIE - Tout centré */}
        {view === 'acting' && (
          <main className="px-8" style={{ paddingTop: '240px', paddingBottom: '100px' }}>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-32">
                <h2 className="text-7xl mb-8" style={{ fontFamily: "'Lora', serif" }}>
                  Comédie
                </h2>
                <div className="w-16 h-px bg-black mx-auto"></div>
              </div>

              {/* Vidéo - Petite et centrée */}
              <div className="max-w-xl mx-auto mb-32">
                <div className="bg-black shadow-lg">
                  <video controls preload="metadata" className="w-full aspect-video">
                    <source src="/videos/monologue.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="text-center mt-8">
                  <p className="text-lg mb-2" style={{ fontFamily: "'Lora', serif" }}>
                    Tape Monologue
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Extrait
                  </p>
                </div>
              </div>

              {/* Filmographie - Tout centré */}
              <div className="max-w-2xl mx-auto space-y-24">
                {[
                  { title: 'On Me', type: 'Clip musical', year: '2025', role: 'Rôle principal', details: 'Valentino & Harrison (DJ)' },
                  { title: 'UGC', type: 'Publicité', year: '2023', role: 'Comédienne', details: 'Paris' },
                  { title: 'Friends', type: 'Clip musical', year: '2021', role: 'Participation', details: 'Nathan Morrison' },
                  { title: 'Mary Shelley', type: 'Long-métrage', year: '2018', role: 'Figurante rapprochée', details: 'Réalisé par Haifaa al-Mansour' },
                  { title: 'Gainsbourg, Gainsbourg, Faubourg', type: 'Théâtre', year: '2016', role: 'Rôle', details: 'Luxembourg - "Poupée de cire, poupée de son"' },
                ].map((project, i) => (
                  <div key={i} className="border-t border-gray-200 pt-16 text-center">
                    <h3 className="text-5xl mb-4" style={{ fontFamily: "'Lora', serif" }}>
                      {project.title}
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {project.type} · {project.year}
                    </p>
                    <p className="text-base mb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                      {project.role}
                    </p>
                    {project.details && (
                      <p className="text-sm text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
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
          <p className="text-center text-xs uppercase tracking-widest text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>
            © 2026 Lea Brasseur
          </p>
        </footer>
      </div>
    </>
  );
}
