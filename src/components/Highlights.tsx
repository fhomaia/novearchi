
import React from 'react';
import '../App.css';
import {  motion } from "framer-motion";
import Transform from './Transform';
import highlightKitchen from '../assets/highlights.jpg';

const Highlights: React.FC = () => {

  return (
    <div id="about" className="d-flex flex-column position-relative">
        <motion.div
        initial={{ y: 100}}
        whileInView={{y: 0}}
        transition={{ duration: 0.9 }}
        >
          <div className='d-flex w-100 align-items-center text-center mb-lg-4 mb-0'>
            <div className='d-none d-lg-block col-lg-8' style={{backgroundImage: `url(${highlightKitchen})`, backgroundSize: '129%', height: '33vh', backgroundPosition: '9% 62%', transform: 'scaleX(-1)'}}>
            </div>
            <div className='col-12 d-lg-none' style={{backgroundImage: `url(${highlightKitchen})`, backgroundSize: '136%', height: '17vh', backgroundPosition: '9% 62%', transform: 'scaleX(-1)'}}>
            </div>
          </div>
        </motion.div>
        <motion.div
        initial={{ y: 100 }}
        whileInView={{y: 0}}
        transition={{ duration: 0.9 }}
        >
          <div className='d-flex  flex-column d-lg-none w-100 align-items-center text-center mt-2 mt-xl-0' style={{backgroundColor: 'rgb(43, 43, 43)', maxWidth: '100vw'}}>
            <div className='d-flex col-12 align-items-center justify-content-center'>
              <div className='p-3 fs-2  text-center text-white'>
              <p>A palavra-chave é transformação.</p>
              </div>
            </div>
            <Transform height='17vh' backgroundPosition='center 40%'/>
          </div>
        </motion.div>
        <motion.div
        initial={{ y: 100}}
        whileInView={{y: 0}}
        transition={{ duration: 0.9 }}
        >
          <div className='d-none d-lg-flex w-100 align-items-center text-center mt-2 mt-xl-0' style={{backgroundColor: 'rgb(43, 43, 43)', maxWidth: '100vw'}}>
            <div className='col-lg-6 d-flex align-items-center text-white justify-content-center'>
              <div className='p-3 text-center' style={{fontSize: '32px', fontWeight: '300'}}>
              <p>A palavra-chave é transformação.</p>
              </div>
            </div>
            <Transform height='33vh' backgroundPosition='center 40%'/>
          </div>
        </motion.div>
        <div>
          <div className='d-flex w-100 align-items-center text-center' style={{height: '50vh', maxWidth: '100vw'}}>
            <div className='d-flex col-12 align-items-center  justify-content-center'>
              <div className='p-3 text-center squish-font-mobile' style={{fontSize: '32px', fontWeight: '300'}}>
              <p>Acreditamos em soluções que valorizem cada indivíduo <br/>  que irá usufruir do ambiente.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
  )
}

export default Highlights
