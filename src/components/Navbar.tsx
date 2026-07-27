import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Expertise', href: '#expertise', id: 'expertise' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy logic
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of floating navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4 ${
        scrolled
          ? 'bg-dark-bg/85 dark:bg-dark-bg/85 light:bg-light-bg/85 backdrop-blur-md shadow-lg border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
      id="navbar-header"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 group"
          aria-label="Shayan Sheikh Portfolio Home"
        >
          <div className="relative">
            <span className="font-display font-black text-2xl tracking-tighter text-white dark:text-white light:text-slate-900">
              S.<span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600">SHEIKH</span>
            </span>
            {/* Pulsing indicator of availability */}
            <span className="absolute -top-1 -right-3.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          </div>
          <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 uppercase">
            Available
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 dark:bg-white/5 light:bg-black/5 px-2 py-1.5 rounded-full border border-white/5 dark:border-white/5 light:border-black/5" aria-label="Desktop navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 relative group/nav ${
                activeSection === item.id
                  ? 'text-emerald-400 dark:text-emerald-400 light:text-emerald-600 bg-emerald-500/10'
                  : 'text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-black'
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              <span className={`absolute bottom-0.5 left-4 right-4 h-[2px] bg-emerald-400 rounded-full transition-transform duration-300 origin-left z-0 ${
                activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover/nav:scale-x-70'
              }`} />
            </a>
          ))}
        </nav>

        {/* Right Side Buttons: Dark Mode & Call to Action */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full bg-white/5 dark:bg-white/5 light:bg-black/5 text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-emerald-400 dark:hover:text-emerald-400 light:hover:text-emerald-600 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 border border-white/5 dark:border-white/5 light:border-black/5 transition-all cursor-pointer"
            aria-label="Toggle visual theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:-translate-y-0.5 transition-all text-center"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile controls row (Hamburger & Toggle) */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-white/5 dark:bg-white/5 light:bg-black/5 text-gray-400 dark:text-gray-400 light:text-gray-600 border border-white/5 dark:border-white/5 light:border-black/5 transition-all"
            aria-label="Toggle theme mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-white/5 dark:bg-white/5 light:bg-black/5 text-gray-400 dark:text-gray-400 light:text-gray-600 border border-white/5 dark:border-white/5 light:border-black/5 transition-all focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-[70px] left-0 right-0 p-6 mx-4 rounded-2xl bg-white dark:bg-[#0a0f1c] shadow-2xl transition-all duration-300 lg:hidden flex flex-col gap-4 border border-black/10 dark:border-white/10 z-50 ${
          isOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                activeSection === item.id
                  ? 'text-emerald-400 dark:text-emerald-400 light:text-emerald-600 bg-emerald-500/10 pl-6'
                  : 'text-gray-400 dark:text-gray-400 light:text-gray-600 hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-black/5 pl-4'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="border-t border-white/5 dark:border-white/5 light:border-black/5 pt-4 flex flex-col gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="w-full py-3.5 rounded-xl text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-emerald-500 to-teal-500 text-center text-white"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
