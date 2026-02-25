'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import ModelingSection from '@/components/ModelingSection';
import ActingSection from '@/components/ActingSection';
import About from '@/components/About';
import Contact from '@/components/Contact';
import ModeToggle, { type Mode } from '@/components/ModeToggle';

export default function Home() {
  const [mode, setMode] = useState<Mode>('model');

  return (
    <>
      <ModeToggle mode={mode} onModeChange={setMode} />

      <main
        className="overflow-hidden transition-all duration-1000"
        style={{
          background: mode === 'model'
            ? 'linear-gradient(180deg, #000000 0%, #1a0033 50%, #000000 100%)'
            : 'linear-gradient(180deg, #000000 0%, #001a33 50%, #000000 100%)',
        }}
      >
        <Hero mode={mode} />

        {mode === 'model' ? (
          <>
            <ModelingSection />
            <About />
          </>
        ) : (
          <>
            <ActingSection />
            <About />
          </>
        )}

        <Contact />
      </main>
    </>
  );
}
