'use client';

import { useState, useRef } from 'react';

function VideoPlayer({ src, thumb, title }: { src: string; thumb: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl aspect-video group">
      {!playing && (
        <div className="absolute inset-0 cursor-pointer z-10" onClick={handlePlay}>
          <img src={thumb} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/95 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-all shadow-2xl">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="ml-1">
                <path d="M8 5v14l11-7L8 5z" fill="#000" />
              </svg>
            </div>
          </div>
        </div>
      )}
      <video ref={videoRef} controls={playing} className="w-full h-full" onEnded={() => setPlaying(false)}>
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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; color: #0a0a0a; background: #fff; line-height: 1.6; }
        ::selection { background: #0a0a0a; color: #fff; }
      `}</style>

      <div className="min-h-screen bg-white">
        {/* HEADER */}
        <header className="max-w-5xl mx-auto px-8 py-20 text-center">
          {/* Photo */}
          <div className="w-40 h-40 mx-auto mb-10 rounded-full overflow-hidden ring-2 ring-gray-200 shadow-xl">
            <img src="/photos/IMG_4302.jpg" alt="Lea Brasseur" className="w-full h-full object-cover" />
          </div>

          {/* Nom */}
          <h1 className="text-6xl md:text-7xl mb-4 tracking-tight" style={{ fontFamily: "'Cormorant', serif", fontWeight: 300 }}>
            Lea Brasseur
          </h1>

          {/* Sous-titre */}
          <p className="text-sm tracking-widest uppercase text-gray-500 mb-8" style={{ letterSpacing: '0.25em' }}>
            Comédienne · Mannequin
          </p>

          {/* Contact */}
          <div className="text-sm text-gray-600 space-y-2">
            <p>leasevenig13@icloud.com</p>
            <p>+33 6 64 32 20 24</p>
            <p>Paris, France</p>
          </div>
        </header>

        {/* DIVIDER */}
        <div className="max-w-5xl mx-auto px-8">
          <div className="h-px bg-gray-200"></div>
        </div>

        {/* PROFIL */}
        <section className="max-w-5xl mx-auto px-8 py-16">
          <h2 className="text-xs tracking-widest uppercase text-gray-400 mb-8" style={{ letterSpacing: '0.3em' }}>
            Profil
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div className="space-y-3">
              <p className="flex justify-between border-b border-gray-100 pb-3">
                <span className="text-gray-500">Née le</span>
                <span className="font-medium">13 février 2000</span>
              </p>
              <p className="flex justify-between border-b border-gray-100 pb-3">
                <span className="text-gray-500">Taille</span>
                <span className="font-medium">178 cm</span>
              </p>
              <p className="flex justify-between border-b border-gray-100 pb-3">
                <span className="text-gray-500">Pointure</span>
                <span className="font-medium">39 EU</span>
              </p>
            </div>
            <div className="space-y-3">
              <p className="flex justify-between border-b border-gray-100 pb-3">
                <span className="text-gray-500">Mensurations</span>
                <span className="font-medium">82-63-94</span>
              </p>
              <p className="flex justify-between border-b border-gray-100 pb-3">
                <span className="text-gray-500">Cheveux · Yeux</span>
                <span className="font-medium">Blond · Bleu</span>
              </p>
              <p className="flex justify-between border-b border-gray-100 pb-3">
                <span className="text-gray-500">Confection</span>
                <span className="font-medium">34-36</span>
              </p>
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="max-w-5xl mx-auto px-8">
          <div className="h-px bg-gray-200"></div>
        </div>

        {/* VIDÉOS */}
        <section className="max-w-5xl mx-auto px-8 py-16">
          <h2 className="text-xs tracking-widest uppercase text-gray-400 mb-8" style={{ letterSpacing: '0.3em' }}>
            Vidéos
          </h2>

          {/* Onglets */}
          <div className="flex justify-center gap-4 mb-10">
            <button
              onClick={() => setActiveVideo('demo')}
              className={`px-8 py-3 text-xs tracking-widest uppercase transition-all ${
                activeVideo === 'demo'
                  ? 'bg-black text-white'
                  : 'bg-white text-black border border-gray-300 hover:border-black'
              }`}
            >
              Bande Démo
            </button>
            <button
              onClick={() => setActiveVideo('monologue')}
              className={`px-8 py-3 text-xs tracking-widest uppercase transition-all ${
                activeVideo === 'monologue'
                  ? 'bg-black text-white'
                  : 'bg-white text-black border border-gray-300 hover:border-black'
              }`}
            >
              Monologue
            </button>
          </div>

          {/* Vidéo */}
          <div className="max-w-4xl mx-auto">
            {activeVideo === 'demo' ? (
              <VideoPlayer
                src="/videos/bande-demo.mp4"
                thumb="/videos/bande-demo-thumb.jpg"
                title="Bande Démo · 2025-2026"
              />
            ) : (
              <VideoPlayer
                src="/videos/monologue.mp4"
                thumb="/videos/monologue-thumb.jpg"
                title="Monologue · 2026"
              />
            )}
          </div>
        </section>

        {/* DIVIDER */}
        <div className="max-w-5xl mx-auto px-8">
          <div className="h-px bg-gray-200"></div>
        </div>

        {/* EXPÉRIENCES - COMÉDIE */}
        <section className="max-w-5xl mx-auto px-8 py-16">
          <h2 className="text-xs tracking-widest uppercase text-gray-400 mb-8" style={{ letterSpacing: '0.3em' }}>
            Comédie · Actrice
          </h2>
          <div className="space-y-8">
            {[
              { year: '2025', title: 'Rôle principal — Clip "On Me"', info: 'Valentino × Harrison · Clip musical' },
              { year: '2023', title: 'Publicité UGC', info: 'Paris · Publicité' },
              { year: '2021', title: 'Clip "Friends"', info: 'Nathan Morrison · Clip musical' },
              { year: '2018', title: 'Figurante — Mary Shelley', info: 'Haifaa Al-Mansour · Long-métrage' },
              { year: '2016', title: 'Gainsbourg, Gainsbourg, Faubourg', info: 'Luxembourg · Théâtre' },
            ].map((exp, i) => (
              <div key={i} className="grid md:grid-cols-[120px_1fr] gap-6 pb-8 border-b border-gray-100">
                <div className="text-3xl" style={{ fontFamily: "'Cormorant', serif", fontWeight: 300 }}>
                  {exp.year}
                </div>
                <div>
                  <h3 className="text-base font-medium mb-2">{exp.title}</h3>
                  <p className="text-sm text-gray-500">{exp.info}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div className="max-w-5xl mx-auto px-8">
          <div className="h-px bg-gray-200"></div>
        </div>

        {/* EXPÉRIENCES - MANNEQUINAT */}
        <section className="max-w-5xl mx-auto px-8 py-16">
          <h2 className="text-xs tracking-widest uppercase text-gray-400 mb-8" style={{ letterSpacing: '0.3em' }}>
            Mannequinat · Mode
          </h2>
          <div className="space-y-8">
            {[
              { year: '2025', title: 'Campagne Papik', info: 'Digital & Print · Campagne' },
              { year: '2025', title: 'Test shoots — F. Boggia, Karla, J. Lek', info: 'Photographie · Shooting' },
              { year: '2021', title: 'Miss Luxembourg — Défilés É. Bolland', info: 'Luxembourg · Défilé' },
              { year: '2021', title: 'Mannequin Boger', info: 'Luxembourg · Marque' },
            ].map((exp, i) => (
              <div key={i} className="grid md:grid-cols-[120px_1fr] gap-6 pb-8 border-b border-gray-100">
                <div className="text-3xl" style={{ fontFamily: "'Cormorant', serif", fontWeight: 300 }}>
                  {exp.year}
                </div>
                <div>
                  <h3 className="text-base font-medium mb-2">{exp.title}</h3>
                  <p className="text-sm text-gray-500">{exp.info}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div className="max-w-5xl mx-auto px-8">
          <div className="h-px bg-gray-200"></div>
        </div>

        {/* GALERIE */}
        <section className="max-w-5xl mx-auto px-8 py-16">
          <h2 className="text-xs tracking-widest uppercase text-gray-400 mb-8" style={{ letterSpacing: '0.3em' }}>
            Photographie
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
              <div key={i} className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={src}
                  alt={`Photo ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-8">Photographie · Florian Boggia</p>
        </section>

        {/* COMPÉTENCES */}
        <section className="bg-black text-white py-12">
          <div className="max-w-5xl mx-auto px-8">
            <h2 className="text-xs tracking-widest uppercase text-gray-500 mb-8 text-center" style={{ letterSpacing: '0.3em' }}>
              Compétences
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {['Chant', 'Théâtre', 'Performance', 'Clip musical', 'Photographie mode', 'Défilé', 'Permis B'].map((skill, i) => (
                <span key={i} className="px-5 py-2 bg-white text-black text-xs tracking-wider">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10 border-t border-gray-200">
          <p className="text-center text-xs text-gray-400">© 2026 Lea Brasseur · Tous droits réservés</p>
        </footer>
      </div>
    </>
  );
}
