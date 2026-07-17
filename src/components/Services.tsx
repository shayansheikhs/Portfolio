import React from 'react';
import { ArrowLeftRight, Paintbrush, Zap, Code, TrendingUp, ShieldCheck, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data';

export default function Services() {
  const getServiceIcon = (iconName: string) => {
    const size = 26;
    switch (iconName) {
      case 'ArrowLeftRight':
        return <ArrowLeftRight size={size} className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600" />;
      case 'Paintbrush':
        return <Paintbrush size={size} className="text-blue-400 dark:text-blue-400 light:text-blue-600" />;
      case 'Zap':
        return <Zap size={size} className="text-amber-400 dark:text-amber-400 light:text-amber-600" />;
      case 'Code':
        return <Code size={size} className="text-purple-400 dark:text-purple-400 light:text-purple-600" />;
      case 'TrendingUp':
        return <TrendingUp size={size} className="text-rose-400 dark:text-rose-400 light:text-rose-600" />;
      default:
        return <ShieldCheck size={size} className="text-teal-400 dark:text-teal-400 light:text-teal-600" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-dark-bg dark:bg-dark-bg light:bg-light-bg relative border-t border-white/5 dark:border-t-white/5 light:border-t-black/5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 dark:text-emerald-400 light:text-emerald-600">/ 04. SERVICES</span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white dark:text-white light:text-slate-900 tracking-tighter uppercase mt-2 mb-4 leading-none">
            Professional CMS & E-commerce Services
          </h2>
          <p className="text-sm sm:text-base text-gray-400 dark:text-gray-400 light:text-slate-600 leading-relaxed font-sans">
            Engineered to boost user experience, technical SEO, checkout speed, and increase lifetime value.
          </p>
        </div>

        {/* Services Bento/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl glass-panel p-8 border border-white/5 dark:border-white/5 light:border-slate-200 hover:border-emerald-500/30 hover:bg-white/[0.04] dark:hover:bg-white/[0.04] light:hover:bg-slate-50/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Top Accent Strip */}
                <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-6 group-hover:w-20 transition-all duration-300"></div>

                {/* Header Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3.5 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/5 dark:border-white/5 light:border-black/5 group-hover:scale-105 transition-transform duration-300">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-white dark:text-white light:text-slate-900 leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-400 light:text-slate-600 leading-relaxed mb-6 font-sans">
                  {service.description}
                </p>
              </div>

              {/* Bullet Features list */}
              <div className="border-t border-white/5 dark:border-t-white/5 light:border-t-black/5 pt-5">
                <ul className="space-y-3">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300 dark:text-gray-300 light:text-slate-700">
                      <div className="p-0.5 rounded-full bg-emerald-500/10 text-emerald-400 dark:text-emerald-400 light:text-emerald-600 mt-0.5 shrink-0">
                        <Check size={11} className="stroke-[3]" />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
