import React, { useState, useEffect } from 'react';
import { ArrowRight, ShoppingBag, Globe, Zap, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (window.innerWidth < 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };
  const phrases = [
    'Shopify Plus & Liquid Expert',
    'WordPress & WooCommerce Specialist',
    'BigCommerce Enterprise Developer',
    'Core Web Vitals Speed Optimizer',
    'Full-Stack E-commerce Architect'
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const fullPhrase = phrases[currentPhraseIndex];
      
      if (!isDeleting) {
        // Typing
        setCurrentText(fullPhrase.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullPhrase) {
          // Pause at end of phrase
          timer = setTimeout(() => setIsDeleting(true), 2500);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullPhrase.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          return;
        }
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex]);

  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden px-4 sm:px-6 lg:px-8 bg-dark-bg dark:bg-dark-bg light:bg-light-bg grid-bg"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Ambient Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Blob 1 — parallax layer 1 (fastest) */}
        <div
          className="absolute top-[10%] left-[5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-500/5 blur-[80px] md:blur-[120px] animate-pulse-slow"
          style={{ transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`, transition: 'transform 200ms ease-out' }}
        />
        {/* Blob 2 — parallax layer 2 (medium) */}
        <div
          className="absolute bottom-[15%] right-[5%] w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full bg-blue-500/10 dark:bg-blue-500/10 light:bg-blue-500/5 blur-[70px] md:blur-[110px] animate-pulse-slow animation-delay-2000"
          style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`, transition: 'transform 300ms ease-out' }}
        />
        {/* Blob 3 — parallax layer 3 (slowest) */}
        <div
          className="absolute top-[40%] right-[30%] w-[200px] md:w-[350px] h-[200px] md:h-[350px] rounded-full bg-teal-500/10 dark:bg-teal-500/10 light:bg-teal-500/5 blur-[60px] md:blur-[100px] animate-pulse-slow animation-delay-4000"
          style={{ transform: `translate(${mousePos.x * 15}px, ${mousePos.y * -15}px)`, transition: 'transform 400ms ease-out' }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center z-10 relative">
        {/* Intro tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 dark:text-emerald-400 light:text-emerald-600 mb-6 sm:mb-8 animate-fade-in-down">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-xs font-mono font-bold tracking-widest uppercase">[ AVAILABLE FOR CUSTOM PROJECTS ]</span>
        </div>

        {/* Main Display Typography */}
        <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-white dark:text-white light:text-slate-900 leading-[0.85] uppercase mb-8">
          <span className="block text-outline-dark">SHAYAN</span>
          <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent animate-gradient-text">SHEIKH</span>
        </h1>

        {/* Typing Line */}
        <div className="h-10 sm:h-12 md:h-16 flex items-center justify-center mb-8">
          <p className="font-mono text-sm sm:text-xl md:text-2xl text-gray-300 dark:text-gray-300 light:text-slate-600 tracking-wide">
            <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600 font-semibold">{`{ `}</span>
            {currentText}
            <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600 animate-pulse font-bold ml-1">|</span>
            <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600 font-semibold">{` }`}</span>
          </p>
        </div>

        {/* Mission / Tagline narrative */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-400 dark:text-gray-400 light:text-slate-600 mb-10 leading-relaxed font-sans px-4">
          I build, customize, and optimize enterprise-grade e-commerce solutions and websites. Specialized in custom 
          Shopify Liquid, WooCommerce, BigCommerce Stencil, and high-performance speed optimization that boosts sales.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
          <button
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:via-teal-600 hover:to-emerald-700 text-white shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            Start Project
            <ArrowRight size={16} />
          </button>

          <button
            onClick={(e) => handleScrollTo(e, 'portfolio')}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider bg-white/5 dark:bg-white/5 light:bg-black/5 text-gray-300 dark:text-gray-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-black border border-white/10 dark:border-white/10 light:border-black/10 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            Explore Work
            <ArrowUpRight size={16} className="text-gray-500" />
          </button>
        </div>

        {/* Quick Trust Badges */}
        <div className="mt-16 pt-8 border-t border-white/5 dark:border-t-white/5 light:border-t-black/5 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          <div className="flex items-center justify-center gap-3 text-left">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 dark:text-emerald-400 light:text-emerald-600">
              <ShoppingBag size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-mono">150+ STORES</p>
              <p className="text-xs sm:text-sm font-display font-semibold text-gray-300 dark:text-gray-300 light:text-slate-700">Launched & Overhauled</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 text-left">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 dark:text-blue-400 light:text-blue-600">
              <Globe size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-mono">CMS MASTERY</p>
              <p className="text-xs sm:text-sm font-display font-semibold text-gray-300 dark:text-gray-300 light:text-slate-700">Shopify, WP, BigCommerce</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 text-left">
            <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 dark:text-teal-400 light:text-teal-600">
              <Zap size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-mono">LATEST TECH</p>
              <p className="text-xs sm:text-sm font-display font-semibold text-gray-300 dark:text-gray-300 light:text-slate-700">Liquid, PHP, Stencil API</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 text-left">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 dark:text-purple-400 light:text-purple-600">
              <span className="font-mono font-bold text-sm">99%</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-mono">SATISFACTION</p>
              <p className="text-xs sm:text-sm font-display font-semibold text-gray-300 dark:text-gray-300 light:text-slate-700">5-Star Client Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
