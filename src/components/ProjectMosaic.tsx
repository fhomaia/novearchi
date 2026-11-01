import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/project-mosaic.css';

const VISIBLE_IMAGES = 3;
const ROTATION_DELAY = 3000;
const TRANSITION_SECONDS = 0.7;

const ProjectMosaic: React.FC<{images: string[]}> = ({ images }) => {
  const [order, setOrder] = useState(images);
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.2 });
  const reduceMotion = useReducedMotion();
  // The hovered slot, not the image: promoting an image puts another one under
  // a resting cursor, which must not trigger a new swap.
  const hoveredSlot = useRef<string | undefined>(undefined);
  // A growing image passes under the cursor, which reads as entering its slot.
  const isSwapping = useRef(false);

  useEffect(() => {
    if (!inView) return;

    images.forEach((src) => {
      new Image().src = src;
    });
  }, [inView, images]);

  useEffect(() => {
    if (!inView || reduceMotion || isHovered) return;

    const timeout = setTimeout(() => {
      setOrder((prev) => [...prev.slice(1), prev[0]]);
    }, ROTATION_DELAY);

    return () => clearTimeout(timeout);
  }, [inView, reduceMotion, isHovered, order]);

  const promote = (position: number) => {
    if (position === 0) return;

    isSwapping.current = true;
    setTimeout(() => {
      isSwapping.current = false;
    }, TRANSITION_SECONDS * 1000);

    setOrder((prev) => {
      const next = [...prev];
      [next[0], next[position]] = [next[position], next[0]];
      return next;
    });
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isSwapping.current) return;

    const slot = (event.target as HTMLElement).dataset.position;

    if (slot !== hoveredSlot.current) {
      hoveredSlot.current = slot;
      if (slot) promote(Number(slot));
    }
  };

  const handleTap = (event: React.PointerEvent<HTMLImageElement>, position: number) => {
    if (event.pointerType !== 'mouse') promote(position);
  };

  return (
    <div
      ref={ref}
      className='ap-mosaic'
      onMouseMove={handleMouseMove}
      onPointerEnter={(event) => setIsHovered(event.pointerType === 'mouse')}
      onPointerLeave={() => {
        hoveredSlot.current = undefined;
        setIsHovered(false);
      }}
    >
      <AnimatePresence mode='popLayout' initial={false}>
        {order.slice(0, VISIBLE_IMAGES).map((src, position) => (
          <motion.img
            key={src}
            layout
            src={src}
            alt=''
            decoding='async'
            data-position={position}
            onPointerUp={(event) => handleTap(event, position)}
            className={position === 0 ? 'ap-mosaic-main' : undefined}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, zIndex: 0 }}
            transition={{ duration: TRANSITION_SECONDS, ease: 'easeInOut' }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default ProjectMosaic
