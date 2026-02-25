'use client';

import { ViewMode } from '@/app/page';

interface NavigationProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

export default function Navigation({ viewMode, setViewMode }: NavigationProps) {
  if (viewMode === 'split') return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <button
          onClick={() => setViewMode('split')}
          className="group flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-white/70 group-hover:text-white transition-colors"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span className="text-white/70 group-hover:text-white transition-colors font-medium">
            Retour
          </span>
        </button>

        <h1 className="text-2xl font-bold text-white tracking-tight">
          LÉA BRASSEUR
        </h1>

        <div className="w-32" /> {/* Spacer for centering */}
      </div>
    </nav>
  );
}
