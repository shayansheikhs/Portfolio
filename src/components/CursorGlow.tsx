import React, { useState, useEffect } from 'react';

interface CursorGlowProps {
  darkMode: boolean;
}

export default function CursorGlow({ darkMode }: CursorGlowProps) {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop (non-touch devices)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Only show in dark mode
  if (!darkMode) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-opacity duration-300"
      style={{
        left: position.x - 150,
        top: position.y - 150,
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, rgba(56,189,248,0.03) 40%, transparent 70%)',
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
}
