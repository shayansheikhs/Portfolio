import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ExternalLink, X, Check, Laptop, Sparkles, Filter, Code2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'shopify' | 'wordpress' | 'bigcommerce' | 'other'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [tiltStyle, setTiltStyle] = useState<Record<string, React.CSSProperties>>({});

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('overflow-hidden');
      document.documentElement.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
      document.documentElement.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
      document.documentElement.classList.remove('overflow-hidden');
    };
  }, [selectedProject]);

  const handleTiltMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTiltStyle(prev => ({
      ...prev,
      [id]: {
        transform: `perspective(800px) rotateX(${y * -4}deg) rotateY(${x * 4}deg) scale3d(1.02, 1.02, 1.02)`,
        transition: 'transform 150ms ease-out',
      }
    }));
  };

  const handleTiltLeave = (id: string) => {
    setTiltStyle(prev => ({
      ...prev,
      [id]: {
        transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: 'transform 400ms ease-out',
      }
    }));
  };

  const filters = [
    { label: 'All Projects', value: 'all' as const },
    { label: 'Shopify', value: 'shopify' as const },
    { label: 'WordPress', value: 'wordpress' as const },
    { label: 'BigCommerce', value: 'bigcommerce' as const },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-dark-bg dark:bg-dark-bg light:bg-light-bg relative border-t border-white/5 dark:border-t-white/5 light:border-t-black/5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 dark:text-emerald-400 light:text-emerald-600">/ 05. CASE STUDIES</span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white dark:text-white light:text-slate-900 tracking-tighter uppercase mt-2 mb-4 leading-none">
            Recent Client Deliverables
          </h2>
          <p className="text-sm sm:text-base text-gray-400 dark:text-gray-400 light:text-slate-600 leading-relaxed font-sans">
            A handpicked selection of premium commerce setups, performance overhauls, and custom API connections.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer ${activeFilter === filter.value
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-transparent shadow-lg shadow-emerald-500/10'
                : 'bg-white/5 dark:bg-white/5 light:bg-black/5 text-gray-400 dark:text-gray-400 light:text-slate-600 border-white/5 dark:border-white/5 light:border-black/5 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10'
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl glass-panel overflow-hidden border border-white/5 dark:border-white/5 light:border-slate-200 hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between"
              style={tiltStyle[project.id] || {}}
              onMouseMove={(e) => handleTiltMove(e, project.id)}
              onMouseLeave={() => handleTiltLeave(project.id)}
            >
              <div>
                {/* Visual Gradient Card Header / Mockup representation */}
                {project.image ? (
                  <div className={`h-64 bg-gradient-to-tr ${project.imageGradient} pt-4  flex items-end justify-center relative overflow-hidden`}>
                    {/* Floating Browser Mockup */}
                    <div className="w-[95%] h-[calc(100%-4px)] bg-[#090a0f] rounded-t-xl border border-white/10 shadow-2xl flex flex-col overflow-hidden relative group/mockup hover:border-emerald-500/30 transition-all duration-300">
                      {/* Browser Header Bar */}
                      <div className="h-7 bg-black/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-3 shrink-0 select-none">
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80"></span>
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80"></span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80"></span>
                        </div>
                        <div className="text-[8px] font-mono text-gray-500 truncate max-w-[120px] bg-white/5 px-2.5 py-0.5 rounded">
                          {project.projectLink ? new URL(project.projectLink).hostname : 'storefront'}
                        </div>
                        <span className="text-[8px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 uppercase tracking-widest scale-90">
                          {project.category}
                        </span>
                      </div>

                      {/* Scrollable screenshot container */}
                      <div className="w-full flex-1 overflow-hidden relative bg-[#090a0f]">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-top scroll-mockup"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={`h-64 bg-gradient-to-tr ${project.imageGradient} p-6 flex flex-col justify-between relative group-hover:opacity-95 transition-opacity`}>
                    {/* Category Pill */}
                    <span className="self-start text-[10px] font-mono tracking-wider bg-black/40 backdrop-blur-md text-emerald-400 px-2.5 py-1 rounded-full uppercase border border-white/10">
                      {project.category}
                    </span>

                    {/* Aesthetic mock layout representing e-commerce screen */}
                    <div className="w-full bg-black/40 backdrop-blur-md rounded-lg p-3 border border-white/10 flex items-center justify-between shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      </div>
                      <div className="h-2 w-2/5 bg-white/10 rounded-full"></div>
                      <Laptop size={14} className="text-gray-400" />
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6">
                  {/* Platform sector */}
                  <p className="text-[10px] font-mono font-bold text-emerald-400 dark:text-emerald-400 light:text-emerald-600 uppercase tracking-widest mb-2">
                    {project.clientSector}
                  </p>

                  <h3 className="font-display font-extrabold text-xl text-white dark:text-white light:text-slate-900 mb-3 group-hover:text-emerald-400 dark:group-hover:text-emerald-400 light:group-hover:text-emerald-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-400 light:text-slate-600 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer tags and button */}
              <div className="p-6 pt-0 border-t border-white/5 dark:border-t-white/5 light:border-t-black/5 mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[10px] font-mono bg-white/5 dark:bg-white/5 light:bg-black/5 text-gray-400 dark:text-gray-400 light:text-slate-600 px-2 py-0.5 rounded border border-white/5 dark:border-white/5 light:border-black/5">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] font-mono bg-white/5 dark:bg-white/5 light:bg-black/5 text-gray-400 dark:text-gray-400 light:text-slate-600 px-2 py-0.5 rounded border border-white/5 dark:border-white/5 light:border-black/5">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-white/5 dark:bg-white/5 light:bg-black/5 text-gray-300 dark:text-gray-300 light:text-slate-700 hover:bg-emerald-500/10 hover:text-emerald-400 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400 light:hover:bg-emerald-500/10 light:hover:text-emerald-600 border border-white/5 dark:border-white/5 light:border-black/5 hover:border-emerald-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  View Specifications
                  <ExternalLink size={12} />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Interactive Case Study Modal Overlay */}
        {selectedProject && createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Layer */}
            <div 
              className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
              onClick={() => setSelectedProject(null)}
            />
            
            {/* Modal Content Card */}
            <div
              className="relative w-full max-w-2xl rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-white/10 dark:border-white/10 light:border-slate-200 overflow-hidden shadow-2xl animate-scale-in max-h-[90vh] flex flex-col justify-between z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header representation */}
              {selectedProject.image ? (
                <div className="h-40 relative overflow-hidden bg-slate-900 border-b border-white/10 flex flex-col justify-end">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto absolute top-0 left-0 object-cover object-top opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-gray-400 hover:text-white transition-all cursor-pointer border border-white/10 z-10"
                    aria-label="Close modal"
                  >
                    <X size={18} />
                  </button>
                  <span className="self-start text-[10px] font-mono tracking-wider bg-black/60 backdrop-blur-md text-emerald-400 px-2.5 py-1 rounded-full uppercase border border-white/10 m-6 z-10">
                    {selectedProject.category} Case Study
                  </span>
                </div>
              ) : (
                <div className={`h-40 bg-gradient-to-tr ${selectedProject.imageGradient} p-6 flex flex-col justify-between relative`}>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-gray-400 hover:text-white transition-all cursor-pointer border border-white/10"
                    aria-label="Close modal"
                  >
                    <X size={18} />
                  </button>
                  <span className="self-start text-[10px] font-mono tracking-wider bg-black/40 backdrop-blur-md text-emerald-400 px-2.5 py-1 rounded-full uppercase border border-white/10">
                    {selectedProject.category} Case Study
                  </span>
                </div>
              )}

              {/* Modal scrollable body */}
              <div className="p-6 overflow-y-auto flex-1">
                <span className="text-[10px] font-mono font-bold text-emerald-400 dark:text-emerald-400 light:text-emerald-600 uppercase tracking-widest block mb-2">
                  {selectedProject.clientSector}
                </span>

                <h3 className="font-display font-extrabold text-2xl text-white dark:text-white light:text-slate-900 mb-4 leading-tight">
                  {selectedProject.title}
                </h3>

                <p className="text-sm text-gray-400 dark:text-gray-400 light:text-slate-600 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Details list */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-xs font-mono font-bold text-white dark:text-white light:text-slate-900 uppercase tracking-wider mb-2 border-b border-white/5 dark:border-t-white/5 light:border-t-black/5 pb-2">
                      Project Scope
                    </h4>
                    <p className="text-xs text-gray-300 dark:text-gray-300 light:text-slate-700 font-sans leading-relaxed">
                      {selectedProject.scope}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono font-bold text-white dark:text-white light:text-slate-900 uppercase tracking-wider mb-2 border-b border-white/5 dark:border-t-white/5 light:border-t-black/5 pb-2">
                      Implemented Features
                    </h4>
                    <ul className="space-y-1.5">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-300 dark:text-gray-300 light:text-slate-700">
                          <Check size={11} className="text-emerald-400 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech specifications tag section */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-white dark:text-white light:text-slate-900 uppercase tracking-wider mb-2">
                    Technologies Deployed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono bg-white/5 dark:bg-white/5 light:bg-black/5 text-gray-300 dark:text-gray-300 light:text-slate-700 px-3 py-1 rounded border border-white/5 dark:border-white/5 light:border-black/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Close footer area */}
              <div className="p-6 border-t border-white/5 dark:border-t-white/5 light:border-t-black/5 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-white/5 hover:bg-white/10 dark:bg-white/5 dark:hover:bg-white/10 light:bg-black/5 light:hover:bg-black/10 text-gray-300 dark:text-gray-300 light:text-slate-700 border border-white/5 dark:border-white/5 light:border-black/5 transition-all cursor-pointer"
                >
                  Close
                </button>
                {selectedProject.projectLink && (
                  <a
                    href={selectedProject.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all flex items-center gap-1.5"
                  >
                    Visit Live Site
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>

            </div>
          </div>,
          document.body
        )}

      </div>
    </section>
  );
}
