
import React from 'react';
import '../App.css';
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

  return (
    <div className="d-flex partners overflow-hidden vw-100" style={{background:'linear-gradient(141deg, #ccc 25%, #eee 40%, #ddd 55%)', height: '15vh'}}>
      <div className='d-flex align-items-center partners-track'>
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
        </div>
    </div>
  )
}

export default Partners
