import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Award, ThumbsUp, Code2, FileText } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = '', duration = 1500 }: CounterProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <div ref={elementRef} className="text-3xl sm:text-5xl font-extrabold font-display bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
      {count}
      {suffix}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark-bg dark:bg-dark-bg light:bg-light-bg relative border-t border-white/5 dark:border-t-white/5 light:border-t-black/5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Profile/Avatar Placeholder */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Spinning background glow ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 via-teal-500 to-blue-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-45 transition-opacity duration-500"></div>
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-white/10 dark:border-white/10 light:border-black/10 flex items-center justify-center p-3">
                
                {/* Visual Avatar frame */}
                <div className="w-full h-full rounded-[24px] bg-dark-card dark:bg-dark-card light:bg-slate-100 flex flex-col items-center justify-center relative overflow-hidden border border-white/10 dark:border-white/10 light:border-black/10 p-6 shadow-inner text-center">
                  
                  {/* Subtle decorative mesh background */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
                  
                  {/* Avatar graphic (Premium SVG Monogram representing Shayan) */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-4 transform group-hover:scale-105 transition-transform duration-300">
                    <span className="text-3xl font-extrabold text-white tracking-tighter">SS</span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-white dark:text-white light:text-slate-900">Shayan Sheikh</h3>
                  <p className="text-xs font-mono text-emerald-400 dark:text-emerald-400 light:text-emerald-600 mt-1 uppercase tracking-wider">WordPress & Shopify Developer</p>
                  
                  <div className="mt-4 flex gap-2 justify-center">
                    <span className="text-[10px] font-mono bg-white/5 dark:bg-white/5 light:bg-black/5 text-gray-400 dark:text-gray-400 light:text-slate-600 px-2 py-1 rounded-md border border-white/5 dark:border-white/5 light:border-black/5">Shopify</span>
                    <span className="text-[10px] font-mono bg-white/5 dark:bg-white/5 light:bg-black/5 text-gray-400 dark:text-gray-400 light:text-slate-600 px-2 py-1 rounded-md border border-white/5 dark:border-white/5 light:border-black/5">WordPress</span>
                    <span className="text-[10px] font-mono bg-white/5 dark:bg-white/5 light:bg-black/5 text-gray-400 dark:text-gray-400 light:text-slate-600 px-2 py-1 rounded-md border border-white/5 dark:border-white/5 light:border-black/5">BigCommerce</span>
                  </div>
                  
                  {/* Experience Badge */}
                  <div className="absolute bottom-4 left-4 right-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                    <span className="font-mono text-xs font-bold text-emerald-400 dark:text-emerald-400 light:text-emerald-600">⚡ 3+ Years Professional Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Info */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 dark:text-emerald-400 light:text-emerald-600 mb-2">/ 01. ABOUT ME</span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white dark:text-white light:text-slate-900 tracking-tighter uppercase mb-6 leading-none">
              Empowering Brands with High-Performance, Custom E-commerce Storefronts
            </h2>

            <p className="text-gray-400 dark:text-gray-400 light:text-slate-600 font-sans leading-relaxed mb-6">
              I am Shayan Sheikh, a dedicated WordPress Developer and Shopify Developer with 3 years of professional experience in website development, theme customization, and e-commerce store development. I bridge the gap between creative visual designs and powerful technical performance to build websites that aren't just beautiful, but drive maximum conversions.
            </p>

            <p className="text-gray-400 dark:text-gray-400 light:text-slate-600 font-sans leading-relaxed mb-8">
              Whether it is custom liquid programming for premium Shopify themes, app integrations, custom WooCommerce stores, or building customized solutions with Elementor and ACF, I deliver clean and efficient code. Proficient in end-to-end setup including products, payment gateways, and shipping configuration, currently working at Richmond Tech Group to build SEO-friendly and highly functional online stores.
            </p>

            {/* Stats Counter Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/5 dark:border-white/5 light:border-slate-200">
              <div className="text-center md:text-left">
                <Counter end={150} suffix="+" />
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-400 light:text-slate-600 mt-2 font-display">Projects Completed</p>
              </div>

              <div className="text-center md:text-left">
                <Counter end={3} suffix="+" />
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-400 light:text-slate-600 mt-2 font-display">Years Experience</p>
              </div>

              <div className="text-center md:text-left">
                <Counter end={99} suffix="%" />
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-400 light:text-slate-600 mt-2 font-display">Client Satisfaction</p>
              </div>

              <div className="text-center md:text-left">
                <Counter end={6} suffix="+" />
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-400 light:text-slate-600 mt-2 font-display">Platforms Mastered</p>
              </div>
            </div>

            {/* Resume Request Action button */}
            <div className="mt-8 flex justify-center md:justify-start">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40 transition-all flex items-center gap-2 cursor-pointer"
              >
                <FileText size={14} />
                View &amp; Download CV / Resume PDF
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
