'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [view, setView] = useState<'home' | 'modeling' | 'acting'>('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,600;0,6..96,700;1,6..96,400&family=Archivo:wght@300;400;500;600&display=swap');
      `}</style>

      <div className="min-h-screen bg-white text-black">
        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/98 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
            <button
              onClick={() => setView('home')}
              className="text-2xl tracking-wider transition-opacity hover:opacity-60"
              style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 600 }}
            >
              LEA BRASSEUR
            </button>

            <div className="flex gap-12 items-center">
              <button
                onClick={() => setView('modeling')}
                className={`text-sm tracking-[0.25em] uppercase transition-all ${
                  view === 'modeling'
                    ? 'text-black border-b border-black'
                    : 'text-gray-400 hover:text-black'
                }`}
                style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 400 }}
              >
                Mannequin
              </button>
              <button
                onClick={() => setView('acting')}
                className={`text-sm tracking-[0.25em] uppercase transition-all ${
                  view === 'acting'
                    ? 'text-black border-b border-black'
                    : 'text-gray-400 hover:text-black'
                }`}
                style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 400 }}
              >
                Comédie
              </button>
            </div>
          </div>
        </nav>

        {/* HOME */}
        {view === 'home' && (
          <main className="min-h-screen pt-32">
            <div className="max-w-7xl mx-auto px-8">
              {/* Hero Section */}
              <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
                {/* Left: Text */}
                <div className="space-y-12 animate-fadeIn">
                  <div>
                    <h1
                      className="text-7xl md:text-8xl lg:text-9xl leading-[0.9] mb-8"
                      style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 700 }}
                    >
                      Lea<br />
                      Brasseur
                    </h1>

                    <div className="w-20 h-[1px] bg-black mb-8"></div>

                    <p
                      className="text-xl md:text-2xl text-gray-700 tracking-wide mb-4"
                      style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 300 }}
                    >
                      Mannequin & Comédienne
                    </p>

                    <p
                      className="text-sm tracking-[0.3em] uppercase text-gray-400"
                      style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 400 }}
                    >
                      Paris
                    </p>
                  </div>

                  <div className="flex gap-6 pt-8">
                    <button
                      onClick={() => setView('modeling')}
                      className="group relative px-12 py-5 overflow-hidden transition-all duration-300"
                      style={{ fontFamily: "'Archivo', sans-serif" }}
                    >
                      <div className="absolute inset-0 bg-black transition-transform duration-300 group-hover:scale-105"></div>
                      <span className="relative text-white text-xs tracking-[0.25em] uppercase">
                        Portfolio
                      </span>
                    </button>

                    <button
                      onClick={() => setView('acting')}
                      className="group relative px-12 py-5 border border-black overflow-hidden transition-all duration-300"
                      style={{ fontFamily: "'Archivo', sans-serif" }}
                    >
                      <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      <span className="relative text-black group-hover:text-white text-xs tracking-[0.25em] uppercase transition-colors duration-300">
                        Filmographie
                      </span>
                    </button>
                  </div>
                </div>

                {/* Right: Photo */}
                <div className="relative animate-fadeInRight">
                  <div className="relative aspect-[3/4] overflow-hidden shadow-2xl">
                    <img
                      src="/photos/IMG_4302.jpg"
                      alt="Lea Brasseur"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
        )}

        {/* MODELING */}
        {view === 'modeling' && (
          <main className="pt-40 pb-32 animate-fadeIn">
            <div className="max-w-7xl mx-auto px-8">
              {/* Header */}
              <div className="text-center mb-24">
                <h2
                  className="text-6xl md:text-7xl mb-6"
                  style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 600 }}
                >
                  Mannequin
                </h2>
                <div className="w-16 h-[1px] bg-black mx-auto mb-6"></div>
                <p
                  className="text-sm tracking-[0.3em] uppercase text-gray-400"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Portfolio
                </p>
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-32">
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
                  <div
                    key={i}
                    className="aspect-[3/4] overflow-hidden group cursor-pointer"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <img
                      src={src}
                      alt={`Photo ${i + 1}`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                  </div>
                ))}
              </div>

              {/* Experience */}
              <div className="max-w-4xl mx-auto space-y-16">
                <div className="border-t border-gray-200 pt-12">
                  <div className="flex flex-col md:flex-row gap-8">
                    <h3
                      className="text-5xl md:text-6xl w-32"
                      style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 500 }}
                    >
                      2025
                    </h3>
                    <div className="flex-1">
                      <p
                        className="text-xl mb-3"
                        style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 500 }}
                      >
                        Campagne digitale et print — Papik
                      </p>
                      <p
                        className="text-gray-500"
                        style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 300 }}
                      >
                        Test shoots avec Florian Boggia, Karina et Yoann
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-12">
                  <div className="flex flex-col md:flex-row gap-8">
                    <h3
                      className="text-5xl md:text-6xl w-32"
                      style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 500 }}
                    >
                      2021
                    </h3>
                    <div className="flex-1">
                      <p
                        className="text-xl mb-3"
                        style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 500 }}
                      >
                        Miss Luxembourg
                      </p>
                      <p
                        className="text-gray-500"
                        style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 300 }}
                      >
                        Défilés au Luxembourg pour Émilie Bolland · Mannequin pour la marque Boger
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Credits */}
              <div className="text-center mt-24">
                <p
                  className="text-xs tracking-[0.2em] text-gray-400"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  PHOTOGRAPHIE · FLORIAN BOGGIA
                </p>
              </div>
            </div>
          </main>
        )}

        {/* ACTING */}
        {view === 'acting' && (
          <main className="pt-40 pb-32 animate-fadeIn">
            <div className="max-w-6xl mx-auto px-8">
              {/* Header */}
              <div className="text-center mb-24">
                <h2
                  className="text-6xl md:text-7xl mb-6"
                  style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 600 }}
                >
                  Comédie
                </h2>
                <div className="w-16 h-[1px] bg-black mx-auto mb-6"></div>
                <p
                  className="text-sm tracking-[0.3em] uppercase text-gray-400"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Filmographie
                </p>
              </div>

              {/* Video Player */}
              <div className="mb-32 max-w-5xl mx-auto">
                <div className="relative bg-black overflow-hidden shadow-2xl">
                  <video
                    controls
                    preload="metadata"
                    className="w-full aspect-video"
                  >
                    <source src="/videos/monologue.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la vidéo.
                  </video>
                </div>
                <div className="mt-12 text-center">
                  <h3
                    className="text-3xl md:text-4xl mb-3"
                    style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 500 }}
                  >
                    Tape Monologue
                  </h3>
                  <p
                    className="text-sm tracking-[0.2em] text-gray-400"
                    style={{ fontFamily: "'Archivo', sans-serif" }}
                  >
                    EXTRAIT DE TRAVAIL PERSONNEL
                  </p>
                </div>
              </div>

              {/* Filmography */}
              <div className="max-w-4xl mx-auto space-y-16">
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
                  <div key={i} className="border-t border-gray-200 pt-12">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-1">
                        <h3
                          className="text-4xl md:text-5xl mb-4"
                          style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 500 }}
                        >
                          {project.title}
                        </h3>
                        <p
                          className="text-lg mb-2"
                          style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 500 }}
                        >
                          {project.role}
                        </p>
                        {project.details && (
                          <p
                            className="text-gray-500"
                            style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 300 }}
                          >
                            {project.details}
                          </p>
                        )}
                      </div>
                      <div className="md:text-right space-y-2">
                        <p
                          className="text-sm tracking-[0.2em] uppercase text-gray-600"
                          style={{ fontFamily: "'Archivo', sans-serif" }}
                        >
                          {project.type}
                        </p>
                        <p
                          className="text-2xl"
                          style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 500 }}
                        >
                          {project.year}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        )}

        {/* Footer */}
        <footer className="py-16 border-t border-gray-100">
          <p
            className="text-center text-xs tracking-[0.3em] text-gray-300 uppercase"
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            © 2026 Lea Brasseur
          </p>
        </footer>
      </div>
    </>
  );
}
