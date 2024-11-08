import React, { useState } from 'react';
import '../App.css';
import '../styles/card.css';
import { motion } from 'framer-motion';
import CardDetail from './Carddetails';

interface projectData {
  src: string,
  title: string,
  tag: string,
  pictures: any[]
}

interface CardProps {
  project: projectData;
  duration: number;
  initial: number
}

const Card: React.FC <CardProps> = ({project, duration, initial}) => {

  const [modalShow, setModalShow] = useState<boolean>(false);
  const handleShowModal = () => setModalShow(true);
  const handleCloseModal = () => setModalShow(false);


  return (
    <>
      <motion.div 
      id="card-container"
      onClick={handleShowModal}
      className='overflow-hidden col-12 col-md-6 col-lg-3 position-relative'
      initial= {{ x: initial}}
      whileInView={{x: 0}}
      transition={{ duration: duration}}
      >
        <div id="card" className='w-100 h-100' style={{backgroundImage: `url(${project.src})`}}>
        </div>
        <div id="card-title" className='position-absolute bottom-0 left-0 w-100 text-white p-3'>
          <p className='mb-0 pb-0 fs-5'>{project.title}</p>
          <p className='mb-0 pb-0 muted'>{project.tag}</p>
          <a className='text-white'>Ver mais fotos</a>
        </div>
      </motion.div>
      <CardDetail 
        title={project.title}
        tag={project.tag}
        pictures={project.pictures}
        show={modalShow}
        onClose={handleCloseModal}
      />
    </>
  )
}

export default Card
