import React, { useState } from 'react';
import { Search, LayoutGrid, Code, Zap, Rocket, Check } from 'lucide-react';
import { TIMELINE_STEPS } from '../data';

export default function Process() {
  const [activeStep, setActiveStep] = useState<string>('01');

  const getStepIcon = (iconName: string, isActive: boolean) => {
    const size = 20;
    const colorClass = isActive
      ? 'text-white'
      : 'text-emerald-400 dark:text-emerald-400 light:text-emerald-600';

    switch (iconName) {
      case 'Search':
        return <Search size={size} className={colorClass} />;
      case 'LayoutGrid':
        return <LayoutGrid size={size} className={colorClass} />;
      case 'Code':
        return <Code size={size} className={colorClass} />;
      case 'Zap':
        return <Zap size={size} className={colorClass} />;
      default:
        return <Rocket size={size} className={colorClass} />;
    }
  };

  return (
    <section id="process" className="py-24 bg-dark-bg dark:bg-dark-bg light:bg-light-bg relative border-t border-white/5 dark:border-t-white/5 light:border-t-black/5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 dark:text-emerald-400 light:text-emerald-600">/ 06. THE WORKFLOW</span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white dark:text-white light:text-slate-900 tracking-tighter uppercase mt-2 mb-4 leading-none">
            A Proven E-commerce Process
          </h2>
          <p className="text-sm sm:text-base text-gray-400 dark:text-gray-400 light:text-slate-600 leading-relaxed font-sans">
            How I collaborate with brands to transform their digital storefronts from audit to high-converting launch.
          </p>
        </div>

        {/* Steps Grid / Timeline Layout */}
        <div className="relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-blue-500/20 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {TIMELINE_STEPS.map((step) => {
              const isActive = activeStep === step.step;
              const isPast = parseInt(step.step) < parseInt(activeStep);
              
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(step.step)}
                  className={`group rounded-2xl glass-panel p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'border-emerald-500/40 bg-white/[0.08] dark:bg-white/[0.08] light:bg-slate-50 ring-2 ring-emerald-500/10'
                      : 'border-white/5 dark:border-white/5 light:border-slate-200 hover:border-emerald-500/10 hover:bg-white/[0.02] dark:hover:bg-white/[0.02] light:hover:bg-slate-50/50'
                  }`}
                >
                  <div>
                    {/* Visual Number indicator circle */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/20'
                            : isPast
                            ? 'bg-emerald-500/10 border border-emerald-500/30'
                            : 'bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/5'
                        }`}
                      >
                        {isPast ? (
                          <Check size={18} className="text-emerald-400" />
                        ) : (
                          getStepIcon(step.icon, isActive)
                        )}
                      </div>

                      <span
                        className={`font-mono text-sm font-bold tracking-widest ${
                          isActive
                            ? 'text-emerald-400'
                            : 'text-gray-500'
                        }`}
                      >
                        {step.step}
                      </span>
                    </div>

                    {/* Step Title & Description */}
                    <h3
                      className={`font-display font-extrabold text-lg mb-2 transition-colors ${
                        isActive
                          ? 'text-emerald-400 dark:text-emerald-400 light:text-emerald-600'
                          : 'text-white dark:text-white light:text-slate-900 group-hover:text-gray-300'
                      }`}
                    >
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-400 light:text-slate-600 leading-relaxed font-sans">
                      {step.description}
                    </p>
                  </div>

                  {/* Desktop Underline status indicator */}
                  <div className="mt-6 pt-4 border-t border-white/5 dark:border-t-white/5 light:border-t-black/5 flex justify-between items-center">
                    <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase">
                      {isActive ? 'CURRENT STEP' : isPast ? 'COMPLETED' : 'UPCOMING'}
                    </span>
                    <div
                      className={`h-1.5 w-1.5 rounded-full ${
                        isActive ? 'bg-emerald-400 animate-ping' : isPast ? 'bg-emerald-500' : 'bg-gray-700'
                      }`}
                    ></div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
