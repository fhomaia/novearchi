import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import medReviewRender from '../assets/before.jpg';
import medReviweReal from '../assets/after.jpg';


interface TransformProps {
  height: string;
  backgroundPosition: string
}

const Transform: React.FC <TransformProps> = ({height, backgroundPosition}) => {
  const [showChild, setShowChild] = useState<boolean>(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowChild((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="col-12 col-lg-6 position-relative">
        <motion.div
          className="w-100"
          initial={{ opacity: 1 }}
          animate={{ opacity: showChild ? 0 : 1 }}
          transition={{ duration: 1 }}
          style={{
            height: height,
            backgroundSize: 'cover',
            backgroundPosition: backgroundPosition,
            backgroundImage: `url(${medReviewRender})`,
          }}
        >
        </motion.div>
        <motion.div
          className="w-100 position-absolute top-0 left-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: showChild ? 1 : 0 }}
          transition={{ duration: 1 }}
          style={{
            height: height,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${medReviweReal})`
          }}
        >
        </motion.div>
    </div>
    </>
  );
};

export default Transform;
