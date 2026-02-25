'use client';

import { useState } from 'react';

export default function Home() {
  const [section, setSection] = useState<'home' | 'modeling' | 'acting'>('home');

  const modelingPhotos = [
    '/photos/FlorianBoggia_Lea_37.jpg',
    '/photos/FlorianBoggia_Lea_40.jpg',
    '/photos/FlorianBoggia_Lea_18.jpg',
    '/photos/IMG_4313 2.jpg',
    '/photos/IMG_4345.jpg',
    '/photos/IMG_4278.jpg',
    '/photos/IMG_5088.jpg',
    '/photos/IMG_4302.jpg',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-black/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <button onClick={() => setSection('home')} className="text-2xl tracking-wider font-light">
            LEA BRASSEUR
          </button>
          <nav className="flex gap-8">
            <button
              onClick={() => setSection('modeling')}
              className={`text-sm tracking-widest uppercase ${
                section === 'modeling' ? 'text-black font-medium' : 'text-black/40 hover:text-black'
              }`}
            >
              Mannequin
            </button>
            <button
              onClick={() => setSection('acting')}
              className={`text-sm tracking-widest uppercase ${
                section === 'acting' ? 'text-black font-medium' : 'text-black/40 hover:text-black'
              }`}
            >
              Comédie
            </button>
          </nav>
        </div>
      </header>

      {/* Home */}
      {section === 'home' && (
        <main className="pt-24">
          {/* Hero */}
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-6">
                  Lea<br />Brasseur
                </h1>
                <p className="text-xl text-black/60 mb-8 font-light">
                  Mannequin & Comédienne<br />
                  Paris
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => setSection('modeling')}
                    className="px-8 py-3 bg-black text-white text-sm tracking-wider uppercase hover:bg-black/80 transition-colors"
                  >
                    Portfolio Mannequin
                  </button>
                  <button
                    onClick={() => setSection('acting')}
                    className="px-8 py-3 border border-black text-black text-sm tracking-wider uppercase hover:bg-black hover:text-white transition-colors"
                  >
                    Portfolio Comédie
                  </button>
                </div>
              </div>
              <div className="aspect-[3/4] bg-black/5 overflow-hidden">
                <img
                  src="/photos/FlorianBoggia_Lea_37.jpg"
                  alt="Lea Brasseur"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Modeling Section */}
      {section === 'modeling' && (
        <main className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-4xl font-light tracking-tight mb-2">Mannequin</h2>
              <p className="text-black/60">Mode · Editorial · Commercial · Beauty</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {modelingPhotos.map((photo, i) => (
                <div key={i} className="aspect-[3/4] bg-black/5 overflow-hidden">
                  <img
                    src={photo}
                    alt={`Photo ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </main>
      )}

      {/* Acting Section */}
      {section === 'acting' && (
        <main className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-4xl font-light tracking-tight mb-2">Comédie</h2>
              <p className="text-black/60">Cinéma · Télévision · Théâtre</p>
            </div>
            <div className="space-y-8">
              {[
                { title: 'Eclipse', type: 'Court-métrage', year: '2025', role: 'Rôle principal' },
                { title: 'Lumière', type: 'Série TV', year: '2024-2025', role: 'Rôle récurrent' },
                { title: 'Chanel N°5', type: 'Publicité', year: '2024', role: 'Commercial' },
                { title: 'Les Ombres', type: 'Théâtre', year: '2024', role: 'Personnage principal' },
              ].map((project, i) => (
                <div key={i} className="border-t border-black/10 pt-6">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-light mb-1">{project.title}</h3>
                      <p className="text-black/60">{project.role}</p>
                    </div>
                    <div className="text-black/60">{project.type}</div>
                    <div className="text-black/60">{project.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="border-t border-black/10 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm text-black/40 text-center">
            © 2026 Lea Brasseur
          </p>
        </div>
      </footer>
    </div>
  );
}
