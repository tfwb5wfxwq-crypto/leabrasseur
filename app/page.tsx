'use client';

import { useState, useRef } from 'react';

function VideoPlayer({
  src,
  thumb,
  title
}: {
  src: string;
  thumb: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div className="relative bg-black shadow-2xl aspect-video group">
      {/* Thumbnail + Play Button */}
      {!playing && (
        <div
          className="absolute inset-0 cursor-pointer z-10"
          onClick={handlePlay}
        >
          {/* Thumbnail */}
          <img
            src={thumb}
            alt={title}
            className="w-full h-full object-cover"
          />

          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>

          {/* Bouton Play */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-2xl">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className="ml-1"
              >
                <path
                  d="M8 5v14l11-7L8 5z"
                  fill="#000"
                />
              </svg>
            </div>
          </div>

          {/* Titre vidéo en bas */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <p
              className="text-white text-sm"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
                letterSpacing: '0.1em'
              }}
            >
              {title}
            </p>
          </div>
        </div>
      )}

      {/* Vidéo */}
      <video
        ref={videoRef}
        controls={playing}
        className="w-full h-full"
        onEnded={() => setPlaying(false)}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

export default function Home() {
  const [activeVideo, setActiveVideo] = useState<'demo' | 'monologue'>('demo');

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500&family=Montserrat:wght@200;300;400;500&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Montserrat', sans-serif;
          color: #1a1a1a;
          background: #fff;
          overflow-x: hidden;
        }

        ::selection {
          background: #1a1a1a;
          color: #fff;
        }
      `}</style>

      <div className="min-h-screen bg-white">
        {/* HEADER */}
        <header className="pt-16 pb-12 px-6 border-b border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            {/* Photo circulaire */}
            <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden ring-1 ring-gray-200">
              <img
                src="/photos/IMG_4302.jpg"
                alt="Lea Brasseur"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Nom */}
            <h1
              className="text-5xl md:text-6xl mb-3"
              style={{
                fontFamily: "'Cormorant', serif",
                fontWeight: 300,
                letterSpacing: '0.15em',
                textTransform: 'uppercase'
              }}
            >
              LEA BRASSEUR
            </h1>

            {/* Sous-titre */}
            <p
              className="text-xs mb-4"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#666'
              }}
            >
              COMÉDIENNE · MANNEQUIN
            </p>

            {/* Contact */}
            <div
              className="text-xs space-y-1"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
                color: '#888'
              }}
            >
              <p>leasevenig13@icloud.com</p>
              <p>+33 6 64 32 20 24</p>
              <p>Paris, France</p>
            </div>
          </div>
        </header>

        {/* PROFIL */}
        <section className="bg-black text-white py-6 px-6">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-xs mb-3"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                letterSpacing: '0.3em',
                textTransform: 'uppercase'
              }}
            >
              PROFIL
            </h2>
            <div
              className="text-sm leading-relaxed"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
                maxWidth: '600px'
              }}
            >
              <p className="mb-2">NÉE LE <span className="font-normal">13 février 2000</span></p>
              <p className="mb-2">TAILLE <span className="font-normal">178 cm</span> · POINTURE <span className="font-normal">39 EU</span></p>
              <p className="mb-2">MENSURATIONS <span className="font-normal">82-63-94</span> · CONFECTION <span className="font-normal">34-36</span></p>
              <p>CHEVEUX <span className="font-normal">Blond</span> · YEUX <span className="font-normal">Bleu</span></p>
            </div>
          </div>
        </section>

        {/* VIDÉOS */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-xs mb-8 text-center"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                letterSpacing: '0.3em',
                textTransform: 'uppercase'
              }}
            >
              VIDÉOS
            </h2>

            {/* Onglets */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveVideo('demo')}
                className={`px-6 py-2 text-xs transition-all duration-300 ${
                  activeVideo === 'demo'
                    ? 'bg-black text-white'
                    : 'bg-white text-black border border-gray-300 hover:border-black'
                }`}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase'
                }}
              >
                Bande Démo
              </button>
              <button
                onClick={() => setActiveVideo('monologue')}
                className={`px-6 py-2 text-xs transition-all duration-300 ${
                  activeVideo === 'monologue'
                    ? 'bg-black text-white'
                    : 'bg-white text-black border border-gray-300 hover:border-black'
                }`}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase'
                }}
              >
                Monologue
              </button>
            </div>

            {/* Vidéo active */}
            <div className="max-w-3xl mx-auto">
              {activeVideo === 'demo' ? (
                <VideoPlayer
                  src="/videos/bande-demo.mp4"
                  thumb="/videos/bande-demo-thumb.jpg"
                  title="BANDE DÉMO · COMPILATION DE PROJETS · 2025-2026"
                />
              ) : (
                <VideoPlayer
                  src="/videos/monologue.mp4"
                  thumb="/videos/monologue-thumb.jpg"
                  title="MONOLOGUE · EXTRAIT DE TRAVAIL PERSONNEL · 2026"
                />
              )}
            </div>
          </div>
        </section>

        {/* COMÉDIE · ACTRICE */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-xs mb-10 pb-3 border-b border-gray-300"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                letterSpacing: '0.3em',
                textTransform: 'uppercase'
              }}
            >
              COMÉDIE · ACTRICE
            </h2>

            <div className="space-y-8">
              {[
                {
                  year: '2025',
                  title: 'Rôle principal — Clip "On Me"',
                  details: 'VALENTINO × HARRISON',
                  type: 'CLIP MUSICAL'
                },
                {
                  year: '2023',
                  title: 'Publicité UGC',
                  details: 'PARIS',
                  type: 'PUBLICITÉ'
                },
                {
                  year: '2021',
                  title: 'Clip "Friends"',
                  details: 'NATHAN MORRISON',
                  type: 'CLIP MUSICAL'
                },
                {
                  year: '2018',
                  title: 'Figurante — Mary Shelley',
                  details: 'HAIFAA AL-MANSOUR',
                  type: 'LONG-MÉTRAGE'
                },
                {
                  year: '2016',
                  title: 'Gainsbourg, Gainsbourg, Faubourg',
                  details: 'LUXEMBOURG',
                  type: 'THÉÂTRE'
                },
              ].map((project, i) => (
                <div key={i} className="flex gap-8 items-start border-b border-gray-100 pb-8">
                  <div
                    className="text-3xl w-20 flex-shrink-0"
                    style={{
                      fontFamily: "'Cormorant', serif",
                      fontWeight: 300
                    }}
                  >
                    {project.year}
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-base mb-1"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 400
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-xs mb-2"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 300,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#888'
                      }}
                    >
                      {project.type}
                    </p>
                    <p
                      className="text-sm"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 300,
                        color: '#666'
                      }}
                    >
                      {project.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MANNEQUINAT · MODE */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-xs mb-10 pb-3 border-b border-gray-300"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                letterSpacing: '0.3em',
                textTransform: 'uppercase'
              }}
            >
              MANNEQUINAT · MODE
            </h2>

            <div className="space-y-8">
              {[
                {
                  year: '2025',
                  title: 'Campagne Papik',
                  details: 'DIGITAL & PRINT',
                  type: 'CAMPAGNE'
                },
                {
                  year: '2025',
                  title: 'Test shoots — F. Boggia, Karla, J. Lek',
                  details: 'PHOTOGRAPHIE',
                  type: 'SHOOTING'
                },
                {
                  year: '2021',
                  title: 'Miss Luxembourg — Défilés É. Bolland',
                  details: 'LUXEMBOURG',
                  type: 'DÉFILÉ'
                },
                {
                  year: '2021',
                  title: 'Mannequin Boger',
                  details: 'LUXEMBOURG',
                  type: 'MARQUE'
                },
              ].map((project, i) => (
                <div key={i} className="flex gap-8 items-start border-b border-gray-100 pb-8">
                  <div
                    className="text-3xl w-20 flex-shrink-0"
                    style={{
                      fontFamily: "'Cormorant', serif",
                      fontWeight: 300
                    }}
                  >
                    {project.year}
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-base mb-1"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 400
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-xs mb-2"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 300,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#888'
                      }}
                    >
                      {project.type}
                    </p>
                    <p
                      className="text-sm"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 300,
                        color: '#666'
                      }}
                    >
                      {project.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALERIE PHOTOS */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-xs mb-10 pb-3 border-b border-gray-300"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                letterSpacing: '0.3em',
                textTransform: 'uppercase'
              }}
            >
              PHOTOGRAPHIE
            </h2>

            <div className="grid grid-cols-3 gap-4">
              {[
                '/photos/FlorianBoggia_Lea_37.jpg',
                '/photos/FlorianBoggia_Lea_40.jpg',
                '/photos/FlorianBoggia_Lea_18.jpg',
                '/photos/IMG_4313 2.jpg',
                '/photos/IMG_4345.jpg',
                '/photos/IMG_4278.jpg',
                '/photos/IMG_4280.jpg',
                '/photos/IMG_4302.jpg',
                '/photos/IMG_5088.jpg',
              ].map((src, i) => (
                <div key={i} className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={src}
                    alt={`Photo ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>

            <p
              className="text-center text-xs mt-8"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
                letterSpacing: '0.1em',
                color: '#888'
              }}
            >
              Photographie · Florian Boggia
            </p>
          </div>
        </section>

        {/* COMPÉTENCES */}
        <section className="bg-black text-white py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-xs mb-6 text-center"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                letterSpacing: '0.3em',
                textTransform: 'uppercase'
              }}
            >
              COMPÉTENCES
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                'CHANT',
                'THÉÂTRE',
                'PERFORMANCE',
                'CLIP MUSICAL',
                'PHOTOGRAPHIE MODE',
                'DÉFILÉ',
                'PERMIS B'
              ].map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white text-black text-xs"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    letterSpacing: '0.1em'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-8 px-6 border-t border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <p
              className="text-xs"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
                color: '#888',
                letterSpacing: '0.1em'
              }}
            >
              © 2026 Lea Brasseur · Tous droits réservés
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
