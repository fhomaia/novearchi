import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Transform: React.FC = () => {
  const [showChild, setShowChild] = useState<boolean>(true);

  // UseEffect para alternar automaticamente a visibilidade a cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setShowChild((prev) => !prev); // Alterna entre true e false
    }, 4000); // 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="col-12 col-lg-6 position-relative">
      {/* Componente Pai */}
      <motion.div
        className="w-100"
        initial={{ opacity: 1 }}
        animate={{ opacity: showChild ? 0 : 1 }} // Pai desaparece quando showChild é true
        transition={{ duration: 1 }}
        style={{
          height: '33vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: 'url(src/assets/medReviewReal.JPG)',
        }}
      >
      </motion.div>

      {/* Componente Filho */}
      <motion.div
        className="w-100 position-absolute top-0 left-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: showChild ? 1 : 0 }} // Filho aparece quando showChild é true
        transition={{ duration: 1 }}
        style={{
          height: '33vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: 'url(src/assets/medReviewRender.jpg)',
        }}
      >
      </motion.div>
    </div>
  );
};

export default Transform;
