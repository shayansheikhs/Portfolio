import React from 'react';
import { Briefcase, GraduationCap, Languages, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const workExperience = [
    {
      role: 'WordPress & Shopify Developer',
      company: 'Richmond Tech Group',
      duration: 'April 2025 – Present',
      bullets: [
        'Develop and customize WordPress websites using Elementor and other page builders',
        'Build and manage WooCommerce stores, including product setup and checkout configuration',
        'Perform custom WordPress theme development based on client requirements',
        'Customize Shopify themes to match client branding and design requirements',
        'Integrate third-party Shopify apps to extend store functionality',
        'Set up complete Shopify stores including products, payment gateways, and shipping configuration'
      ]
    },
    {
      role: 'WordPress & Shopify Developer',
      company: 'Mey Mey Prodigy Code',
      duration: 'October 2023 – March 2025',
      bullets: [
        'Built responsive WordPress websites using Elementor and custom theme development',
        'Configured WooCommerce stores for clients, including products and payment setup',
        'Developed Shopify stores from scratch, including theme customization and app integration',
        'Set up Shopify store configurations including products, payment gateways, and shipping'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-dark-bg dark:bg-dark-bg light:bg-light-bg relative border-t border-white/5 dark:border-t-white/5 light:border-t-black/5 px-4 sm:px-6 lg:px-8">
      {/* Background ambient blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 dark:text-emerald-400 light:text-emerald-600">/ 03. CAREER TIMELINE</span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white dark:text-white light:text-slate-900 tracking-tighter uppercase mt-2 mb-4 leading-none">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-gray-400 dark:text-gray-400 light:text-slate-600 leading-relaxed font-sans">
            A history of delivering premium e-commerce builds, responsive layouts, and secure backend integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Work Experience Column (Left) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Briefcase size={22} />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-white dark:text-white light:text-slate-900 uppercase">
                Work Experience
              </h3>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-y-1 before:left-[23px] before:w-0.5 before:bg-white/5 dark:before:bg-white/5 light:before:bg-black/5">
              {workExperience.map((exp, idx) => (
                <div key={idx} className="relative pl-12 group">
                  {/* Timeline dot */}
                  <div className="absolute left-[12px] top-1.5 w-6 h-6 rounded-full bg-dark-bg dark:bg-dark-bg light:bg-light-bg border-2 border-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform z-10 shadow-lg shadow-emerald-500/10">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>

                  <div className="glass-panel p-6 rounded-2xl border border-white/5 dark:border-white/5 light:border-slate-200 hover:border-emerald-500/20 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h4 className="font-display font-bold text-lg text-white dark:text-white light:text-slate-900 group-hover:text-emerald-400 transition-colors">
                          {exp.role}
                        </h4>
                        <p className="text-sm font-mono text-gray-400 dark:text-gray-400 light:text-slate-600">
                          {exp.company}
                        </p>
                      </div>
                      <span className="inline-block text-xs font-mono font-semibold px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 dark:text-emerald-400 light:text-emerald-600 border border-emerald-500/20 self-start sm:self-center">
                        {exp.duration}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 dark:text-gray-300 light:text-slate-700 leading-relaxed font-sans">
                          <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Languages (Right) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Education Card */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                  <GraduationCap size={22} />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-white dark:text-white light:text-slate-900 uppercase">
                  Education
                </h3>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/5 dark:border-white/5 light:border-slate-200 hover:border-blue-500/20 transition-all">
                <h4 className="font-display font-bold text-lg text-white dark:text-white light:text-slate-900 mb-1">
                  Intermediate (ICS)
                </h4>
                <p className="text-xs font-mono text-blue-400 mb-4">Computer Science Branch</p>
                <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-400 light:text-slate-600 leading-relaxed font-sans">
                  Fundamental studies in software architecture, computer networking, programming basics, database management systems, and web technologies.
                </p>
              </div>
            </div>

            {/* Languages Card */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                  <Languages size={22} />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-white dark:text-white light:text-slate-900 uppercase">
                  Languages
                </h3>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/5 dark:border-white/5 light:border-slate-200 hover:border-purple-500/20 transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-sm text-white dark:text-white light:text-slate-900">Urdu</h4>
                    <p className="text-[10px] font-mono text-gray-500 uppercase">Native / Mother Tongue</p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white/5 dark:bg-white/5 light:bg-black/5 text-gray-300 dark:text-gray-300 light:text-slate-700">Native</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-sm text-white dark:text-white light:text-slate-900">English</h4>
                    <p className="text-[10px] font-mono text-gray-500 uppercase">Professional Competency</p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white/5 dark:bg-white/5 light:bg-black/5 text-gray-300 dark:text-gray-300 light:text-slate-700">Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
