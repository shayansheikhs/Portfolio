import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused]);

  return (
    <section id="testimonials" className="py-24 bg-dark-bg dark:bg-dark-bg light:bg-light-bg relative border-t border-white/5 dark:border-t-white/5 light:border-t-black/5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 dark:text-emerald-400 light:text-emerald-600">/ 07. CLIENT REVIEWS</span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white dark:text-white light:text-slate-900 tracking-tighter uppercase mt-2 mb-4 leading-none">
            Trusted by Growing Brands
          </h2>
          <p className="text-sm sm:text-base text-gray-400 dark:text-gray-400 light:text-slate-600 leading-relaxed font-sans">
            Hear from global store owners, agency heads, and commerce directors on their outcomes.
          </p>
        </div>

        {/* Carousel stage */}
        <div
          className="relative min-h-[350px] sm:min-h-[280px] rounded-2xl glass-panel p-8 sm:p-12 border border-white/5 dark:border-white/5 light:border-slate-200 shadow-2xl flex flex-col justify-between overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Large aesthetic decorative quote background */}
          <div className="absolute top-4 right-8 opacity-[0.03] text-white dark:text-white light:text-slate-900">
            <Quote size={120} className="stroke-[1]" />
          </div>

          {/* Active Testimonial Card */}
          <div className="relative z-10 transition-all duration-300">
            {/* Stars */}
            <div className="flex items-center gap-1.5 mb-6">
              {[...Array(TESTIMONIALS_DATA[activeIndex].rating)].map((_, i) => (
                <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-sm sm:text-base md:text-lg text-gray-200 dark:text-gray-200 light:text-slate-800 leading-relaxed font-medium mb-8 font-sans italic">
              "{TESTIMONIALS_DATA[activeIndex].text}"
            </blockquote>

            {/* Profile Credentials row */}
            <div className="flex items-center gap-4">
              {/* Profile Initials Avatar */}
              <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${TESTIMONIALS_DATA[activeIndex].bgGradient} flex items-center justify-center border border-white/10`}>
                <span className="font-display font-extrabold text-sm text-emerald-400">
                  {TESTIMONIALS_DATA[activeIndex].initials}
                </span>
              </div>

              <div>
                <cite className="not-italic font-display font-extrabold text-sm sm:text-base text-white dark:text-white light:text-slate-900 block">
                  {TESTIMONIALS_DATA[activeIndex].name}
                </cite>
                <span className="text-xs font-mono text-gray-500 block mt-0.5">
                  {TESTIMONIALS_DATA[activeIndex].role} at{' '}
                  <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600 font-semibold">
                    {TESTIMONIALS_DATA[activeIndex].company}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="mt-8 pt-6 border-t border-white/5 dark:border-t-white/5 light:border-t-black/5 flex items-center justify-between z-10 relative">
            
            {/* Nav Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 text-gray-400 dark:text-gray-400 light:text-gray-600 border border-white/5 dark:border-white/5 light:border-slate-200 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 transition-all cursor-pointer"
                aria-label="Previous client testimonial"
              >
                <ChevronLeft size={16} />
              </button>

              <button
                onClick={nextSlide}
                className="p-2 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 text-gray-400 dark:text-gray-400 light:text-gray-600 border border-white/5 dark:border-white/5 light:border-slate-200 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 transition-all cursor-pointer"
                aria-label="Next client testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeIndex === idx
                      ? 'w-6 bg-emerald-400'
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Jump to review slide ${idx + 1}`}
                ></button>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
