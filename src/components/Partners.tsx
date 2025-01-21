
import React, { useEffect } from 'react';
import '../App.css';
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from 'react-use-measure';
import csm from '../assets/logos/csm.svg';
import CEMIG from '../assets/logos/CEMIG.svg';
import velotime from '../assets/logos/velotime.svg';
import bmg from '../assets/logos/bmg.svg';
import plr from '../assets/logos/plr.svg';
import amcnb from '../assets/logos/amcnb.svg';
import tryboo from '../assets/logos/tryboo.svg';
import kakilang from '../assets/logos/kakilang.svg';


const Partners: React.FC = () => {

    interface ImageObject {
        src: string;
        height: string;
    }

  const logos:ImageObject[] = [
    {src: csm, height: '70'},
    {src: CEMIG, height: '40'},
    {src: velotime, height: '70'},
    {src: bmg, height: '110'},
    {src: plr, height: '40'},
    {src: amcnb, height: '50'},
    {src: tryboo, height: '110'},
    {src: kakilang, height: '70'}
  ]

  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width - logos.length

    controls = animate(xTranslation, [0, finalPosition], {
        ease: 'linear',
        duration: 35,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0
    })
    
    return controls.stop
  }, [xTranslation, width])


  return (
    <div className="d-flex partners" style={{background:'linear-gradient(141deg, #ccc 25%, #eee 40%, #ddd 55%)', height: '15vh'}}>
      <motion.div ref={ref} className='d-flex vw-100 align-items-center p-4 justify-content-between' style={{x: xTranslation}}>
        {
            [...logos, ...logos, ...logos].map((logo, i) => {
                return (
                    <div key={i}>
                        <div className='border-end p-4 my-auto d-flex align-items-center' style={{height: '14vh', boxSizing: 'border-box'}}> 
                            <img src={logo.src} height={logo.height}/>
                        </div>
                    </div>
                )
            })
        }
        </motion.div>
    </div>
  )
}

export default Partners
