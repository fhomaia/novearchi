import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Slides up only when scrolling down: it resets after leaving through the
// bottom of the viewport, so coming back from below doesn't replay it.
const RevealOnScrollDown: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [position, setPosition] = useState({ y: 100, duration: 0 });

  return (
    <motion.div
      initial={{ transform: 'translateY(100px)' }}
      animate={{ transform: `translateY(${position.y}px)` }}
      transition={{ duration: position.duration }}
      style={{ willChange: 'transform' }}
      onViewportEnter={(entry) => setPosition({ y: 0, duration: entry && entry.boundingClientRect.top < 0 ? 0 : 0.9 })}
      onViewportLeave={(entry) => {
        if (entry && entry.boundingClientRect.top > 0) {
          setPosition({ y: 100, duration: 0 });
        }
      }}
    >
      {children}
    </motion.div>
  )
}

export default RevealOnScrollDown
