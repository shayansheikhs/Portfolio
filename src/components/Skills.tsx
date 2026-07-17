import React, { useState } from 'react';
import { ShoppingBag, Globe, Layers, Cpu, CheckCircle2, ChevronDown } from 'lucide-react';
import { PLATFORMS_DATA } from '../data';

export default function Skills() {
  const [expandedId, setExpandedId] = useState<string | null>('shopify');

  const getPlatformIcon = (iconName: string, id: string) => {
    const size = 32;
    switch (iconName) {
      case 'ShoppingBag':
        return <ShoppingBag size={size} className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600" />;
      case 'Globe':
        return <Globe size={size} className="text-blue-400 dark:text-blue-400 light:text-blue-600" />;
      case 'Layers':
        return <Layers size={size} className="text-indigo-400 dark:text-indigo-400 light:text-indigo-600" />;
      default:
        return <Cpu size={size} className="text-purple-400 dark:text-purple-400 light:text-purple-600" />;
    }
  };

  const getGlowCardClass = (id: string) => {
    switch (id) {
      case 'shopify': return 'glow-card-green';
      case 'wordpress': return 'glow-card-blue';
      case 'bigcommerce': return 'glow-card-indigo';
      default: return 'glow-card-purple';
    }
  };

  return (
    <section id="expertise" className="py-24 bg-dark-bg dark:bg-dark-bg light:bg-light-bg relative border-t border-white/5 dark:border-t-white/5 light:border-t-black/5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 dark:text-emerald-400 light:text-emerald-600">/ 02. PLATFORM ARSENAL</span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white dark:text-white light:text-slate-900 tracking-tighter uppercase mt-2 mb-4 leading-none">
            Mastery Across Major CMS Platforms
          </h2>
          <p className="text-sm sm:text-base text-gray-400 dark:text-gray-400 light:text-slate-600 leading-relaxed font-sans">
            Specialized engineering for the world's most powerful e-commerce environments. Clicking any card below reveals detailed scope capabilities.
          </p>
        </div>

        {/* Visual Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLATFORMS_DATA.map((platform) => {
            const isExpanded = expandedId === platform.id;
            return (
              <div
                key={platform.id}
                onClick={() => setExpandedId(isExpanded ? null : platform.id)}
                className={`group rounded-2xl glass-panel p-6 border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isExpanded
                    ? 'ring-2 ring-emerald-500/30 scale-[1.01] bg-white/[0.08] dark:bg-white/[0.08] light:bg-slate-50'
                    : 'hover:bg-white/[0.04] dark:hover:bg-white/[0.04] light:hover:bg-slate-50/50'
                } ${getGlowCardClass(platform.id)} ${platform.color}`}
              >
                {/* Visual Top Decorative Corner Glow */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${platform.bgGlow} blur-xl pointer-events-none rounded-full`}></div>

                <div>
                  {/* Icon & Toggle button */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/5 dark:border-white/5 light:border-black/5 group-hover:scale-105 transition-transform duration-300">
                      {getPlatformIcon(platform.icon, platform.id)}
                    </div>
                    <span className={`text-xs text-gray-500 font-mono transition-transform duration-300 ${isExpanded ? 'rotate-180 text-emerald-400' : ''}`}>
                      <ChevronDown size={18} />
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-display font-extrabold text-xl text-white dark:text-white light:text-slate-900 mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-400 light:text-slate-600 leading-relaxed font-sans mb-4">
                    {platform.description}
                  </p>
                </div>

                {/* Animated expand area */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-[350px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="border-t border-white/5 dark:border-t-white/5 light:border-t-black/5 pt-4">
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 dark:text-emerald-400 light:text-emerald-600 mb-3">Core Scope:</p>
                    <ul className="space-y-2.5">
                      {platform.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs text-gray-300 dark:text-gray-300 light:text-slate-700">
                          <CheckCircle2 size={13} className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Micro CTA label at bottom */}
                {!isExpanded && (
                  <span className="text-[10px] font-mono tracking-widest text-emerald-400/70 dark:text-emerald-400/70 light:text-emerald-600/70 mt-4 uppercase block group-hover:text-emerald-400 transition-colors">
                    Click to reveal details
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Technologies & Tools Badges */}
        <div className="mt-16 pt-10 border-t border-white/5 dark:border-t-white/5 light:border-t-black/5">
          <h4 className="font-display font-extrabold text-sm sm:text-base text-white dark:text-white light:text-slate-900 uppercase tracking-wider text-center mb-6">
            Additional Technologies & Core Tools
          </h4>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              { label: 'HTML5 / CSS3', category: 'code' },
              { label: 'JavaScript (ES6)', category: 'code' },
              { label: 'PHP', category: 'code' },
              { label: 'Shopify Liquid', category: 'code' },
              { label: 'WordPress Theme Dev', category: 'platform' },
              { label: 'WooCommerce Storefronts', category: 'platform' },
              { label: 'Elementor Pro Builder', category: 'platform' },
              { label: 'BigCommerce Stencil API', category: 'platform' },
              { label: 'Git / GitHub Versioning', category: 'tool' },
              { label: 'Figma UI Translation', category: 'tool' },
              { label: 'Adobe XD & Canva Assets', category: 'tool' },
              { label: 'Google Analytics & SEO', category: 'tool' }
            ].map((tech, idx) => (
              <span
                key={idx}
                className={`text-[11px] sm:text-xs font-mono px-4 py-2 rounded-xl border transition-all duration-300 ${
                  tech.category === 'code'
                    ? 'bg-emerald-500/5 text-emerald-400 border-emerald-500/10 hover:border-emerald-500/25 hover:bg-emerald-500/10'
                    : tech.category === 'platform'
                    ? 'bg-blue-500/5 text-blue-400 border-blue-500/10 hover:border-blue-500/25 hover:bg-blue-500/10'
                    : 'bg-purple-500/5 text-purple-400 border-purple-500/10 hover:border-purple-500/25 hover:bg-purple-500/10'
                }`}
              >
                {tech.label}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
