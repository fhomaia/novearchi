
import React from 'react';
import '../App.css';
import whatsapp from '../assets/icons8-whatsapp.svg';
import instagram from '../assets/icons8-instagram.svg';
import { Popover, OverlayTrigger} from 'react-bootstrap';
import { motion } from 'framer-motion';

interface ContactProps {
  isHeaderVisible: boolean;
  isFooterVisible: boolean;
}

const Contact: React.FC<ContactProps> = ({ isHeaderVisible, isFooterVisible }) => {

  const isVisible = !isHeaderVisible && !isFooterVisible

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3" className='text-center text-white bg-dark'>Contatos</Popover.Header>
      <Popover.Body className='bg-dark'>
        <div className='text-white d-flex gap-2 align-items-center justify-content-center'>
            <a target="_blank" href="https://wa.me/553199790999?text=Olá!%20Gostaria%20de%20tirar%20dúvidas%20sobre%20os%20projetos."><img src={whatsapp} width="40"/></a>
            <a href="https://www.instagram.com/9arquitetura/" target="_blank"><img src={instagram} width="40"/></a>
        </div>
      </Popover.Body>
    </Popover>
  );

  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className='d-flex flex-column gap-2 position-fixed z-3 bottom-0 end-0 m-4'
      role="button"
      style={{zIndex: 4}}
    >
      <OverlayTrigger trigger="click" placement="top" overlay={popover}>
        <div className='d-flex gap-2 align-items-center justify-content-end rounded-circle bg-dark p-4'>
            <img src={whatsapp} width="40"/>
        </div>
      </OverlayTrigger>
    </motion.div>
    </>
  )
}

export default Contact
