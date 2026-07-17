import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Increment progress counter
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Set visible false shortly after reaching 100%
          setTimeout(() => setVisible(false), 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 60);

    return () => clearInterval(progressInterval);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-[#090a0f] z-50 flex flex-col items-center justify-center transition-all duration-500 ease-in-out">
      <div className="text-center relative max-w-xs w-full px-6">
        
        {/* Animated outer glowing halo */}
        <div className="absolute inset-0 bg-emerald-500/10 blur-[50px] animate-pulse rounded-full pointer-events-none"></div>

        {/* Brand Icon Spinner */}
        <div className="relative mb-6 inline-flex p-5 rounded-2xl bg-white/5 border border-white/5 shadow-2xl animate-spin-slow">
          <ShoppingBag size={32} className="text-emerald-400" />
        </div>

        {/* Brand Name Typography */}
        <h2 className="font-display font-extrabold text-2xl tracking-tight text-white mb-2">
          Shayan Sheikh
        </h2>
        
        {/* Platform taglines summary subtitle */}
        <p className="text-[9px] font-mono tracking-[0.25em] text-gray-500 uppercase mb-8">
          CMS & E-commerce Portfolio
        </p>

        {/* Smooth slider bar progress */}
        <div className="w-full bg-white/5 rounded-full h-1 overflow-hidden border border-white/5 mb-4">
          <div
            className="bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500 h-full transition-all duration-100 ease-out rounded-full"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>

        {/* Progress Percentage Indicator */}
        <span className="font-mono text-xs font-bold text-emerald-400">
          {Math.min(progress, 100)}%
        </span>

      </div>
    </div>
  );
}
