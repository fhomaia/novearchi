
import React, { useEffect, useState, useRef } from 'react';
import '../App.css';
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from 'react-use-measure'

const Partners: React.FC = () => {

    interface ImageObject {
        src: string;
        height: string;
    }

  const logos:ImageObject[] = [
    {src: 'src/assets/logos/csm.svg', height: '100'},
    {src: 'src/assets/logos/CEMIG.svg', height: '50'},
    {src: 'src/assets/logos/velotime.svg', height: '100'},
    {src: 'src/assets/logos/bmg.svg', height: '200'},
    {src: 'src/assets/logos/plr.svg', height: '60'},
    {src: 'src/assets/logos/amcnb.svg', height: '80'},
    {src: 'src/assets/logos/tryboo.svg', height: '200'},
    {src: 'src/assets/logos/kakilang.svg', height: '100'}
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
