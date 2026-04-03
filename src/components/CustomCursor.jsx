import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 200 };
  const ringX = useSpring(0, springConfig);
  const ringY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('.product-card')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [ringX, ringY]);

  return (
    <>
      {/* Central Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-spice-gold-light rounded-full pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePos.x - 6,
          y: mousePos.y - 6,
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />
      {/* Precision Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-spice-gold/40 rounded-full pointer-events-none z-[9998] mix-blend-screen"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          opacity: isHovering ? 0 : 1,
        }}
      />
    </>
  );
};

export default CustomCursor;
