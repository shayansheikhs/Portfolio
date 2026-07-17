import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';
import LogoMarquee from './components/LogoMarquee';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  // Setup in-memory theme preference (modern dark-mode-first by default)
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  // Scroll reveal observer — watches .reveal-on-scroll and adds .is-revealed
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    // Small delay so DOM is ready after preloader
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={darkMode ? 'dark bg-dark-bg' : 'light bg-light-bg'}>
      <div className="min-h-screen font-sans transition-colors duration-300 antialiased selection:bg-emerald-500/30 selection:text-emerald-300">
        {/* Scroll Progress Bar at the absolute top */}
        <ScrollProgress />

        {/* Custom Cursor Glow (Dark Mode Only) */}
        <CursorGlow darkMode={darkMode} />

        {/* Animated Preloader */}
        <Preloader />

        {/* Floating Glassmorphic Header / Navbar */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <main>
          {/* Hero Section — no reveal, always visible */}
          <Hero />

          {/* Logo Marquee strip */}
          <div className="reveal-on-scroll">
            <LogoMarquee />
          </div>

          <div className="reveal-on-scroll">
            <About />
          </div>

          <div className="reveal-on-scroll">
            <Skills />
          </div>

          <div className="reveal-on-scroll">
            <Experience />
          </div>

          <div className="reveal-on-scroll">
            <Services />
          </div>

          <div className="reveal-on-scroll">
            <Portfolio />
          </div>

          <div className="reveal-on-scroll">
            <Process />
          </div>

          <div className="reveal-on-scroll">
            <Testimonials />
          </div>

          <div className="reveal-on-scroll">
            <Contact />
          </div>
        </main>

        {/* Brand Footer */}
        <div className="reveal-on-scroll">
          <Footer />
        </div>

        {/* Back to top floating button */}
        <BackToTop />

        {/* WhatsApp floating contact button */}
        <WhatsAppFloat />
      </div>
    </div>
  );
}

