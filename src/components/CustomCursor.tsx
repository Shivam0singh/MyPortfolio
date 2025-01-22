'use client';
import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
      });
    };

    const updateHoverStatus = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.closest('[role="button"]') !== null ||
        getComputedStyle(target).cursor === 'pointer'
      );
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', (e) => {
      updateCursorPosition(e);
      updateHoverStatus(e);
    });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none" 
      style={{ 
        zIndex: 100000,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
      }}
    >
      <div
        className="cursor-dot"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: 'white',
          borderRadius: '50%',
          pointerEvents: 'none',
          mixBlendMode: 'difference',
          transition: 'transform 0.15s ease-out',
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
          zIndex: 100001,
        }}
      />
      <div
        className="cursor-ring"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          transition: 'transform 0.15s ease-out, width 0.3s ease-out, height 0.3s ease-out',
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
          zIndex: 100000,
        }}
      />
    </div>
  );
}; 