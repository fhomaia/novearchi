
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
    {src: csm, height: '100'},
    {src: CEMIG, height: '50'},
    {src: velotime, height: '100'},
    {src: bmg, height: '200'},
    {src: plr, height: '60'},
    {src: amcnb, height: '80'},
    {src: tryboo, height: '200'},
    {src: kakilang, height: '100'}
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
    <div className="d-flex" style={{background:'linear-gradient(141deg, #ccc 25%, #eee 40%, #ddd 55%)', height: '30vh'}}>
      <motion.div ref={ref} className='d-flex vw-100 align-items-center p-4 justify-content-between' style={{x: xTranslation}}>
        {
            [...logos, ...logos].map((logo) => {
                return (
                    <div>
                        <div className='border-end p-4 my-auto'> 
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
