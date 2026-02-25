'use client';

import { useState } from 'react';
import HeroSplit from '@/components/HeroSplit';
import Navigation from '@/components/Navigation';
import ModelingShowcase from '@/components/ModelingShowcase';
import ActingShowcase from '@/components/ActingShowcase';

export type ViewMode = 'split' | 'modeling' | 'acting';

export default function Home() {
  const [viewMode, setViewMode] = useState<ViewMode>('split');

  return (
    <>
      <Navigation viewMode={viewMode} setViewMode={setViewMode} />
      
      <main className="min-h-screen bg-black">
        {viewMode === 'split' && <HeroSplit setViewMode={setViewMode} />}
        {viewMode === 'modeling' && <ModelingShowcase onBack={() => setViewMode('split')} />}
        {viewMode === 'acting' && <ActingShowcase onBack={() => setViewMode('split')} />}
      </main>
    </>
  );
}
