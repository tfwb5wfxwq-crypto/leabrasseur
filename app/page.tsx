'use client';

import Hero from '@/components/Hero';
import ModelingSection from '@/components/ModelingSection';
import ActingSection from '@/components/ActingSection';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ModelingSection />
      <ActingSection />
      <About />
      <Contact />
    </main>
  );
}
