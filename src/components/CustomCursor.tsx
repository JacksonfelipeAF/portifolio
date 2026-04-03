import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [role="button"], .group, input, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-50 mix-blend-difference transition-transform duration-100"
        style={{
          left: `${position.x - 10}px`,
          top: `${position.y - 10}px`,
        }}
      >
        <div
          className={`w-5 h-5 border-2 border-yellow-400 rounded-full transition-all duration-200 ${
            isHovering ? 'scale-150 bg-yellow-400/20' : 'scale-100'
          }`}
        />
      </div>
      <div
        className="pointer-events-none fixed z-50"
        style={{
          left: `${position.x - 2}px`,
          top: `${position.y - 2}px`,
        }}
      >
        <div
          className={`w-1 h-1 bg-yellow-400 rounded-full transition-all duration-300 ${
            isHovering ? 'scale-200' : 'scale-100'
          }`}
        />
      </div>
    </>
  );
};
