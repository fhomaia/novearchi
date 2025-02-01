
import React, { useEffect, useState, useRef } from 'react';
import '../App.css';
import Carousel from './Carrossel';
import CarouselMobile from './CarrousselMobile';
import { useSwipeable } from 'react-swipeable';
import kitchen from '../assets/virgini.jpg';
import clinic from '../assets/clinic.jpg'
import sala from '../assets/Post40F.jpg';
import outside from '../assets/Insta12.jpg';
import gym from '../assets/Velo3.jpg';

import livingRoom from '../assets/livingRoom.jpg';
const Main: React.FC = () => {

  const imagens = [
    [{ src: kitchen, color: "#cfc7c7", backgroundPositionY: '13%', backgroundSize: 'cover', backgroundPositionX: 'center' }, { src: outside, color: "#d5a567", backgroundPositionY: '-114%', backgroundSize: '150%', backgroundPositionX: 'center' }],
    [{ src: sala, color: "#cfc7c7", backgroundPositionY: '36%', backgroundSize: 'cover', backgroundPositionX: 'center' }, { src: livingRoom, color: "#b37745", backgroundPositionY: '22%', backgroundSize: 'cover', backgroundPositionX: 'center' }],
    [{ src: clinic, color: "#cfc7c7", backgroundPositionY: '50%', backgroundSize: 'cover', backgroundPositionX: '60%' }, { src: gym, color: "#d5a567", backgroundPositionY: '-3%', backgroundSize: 'cover', backgroundPositionX: 'center' }]
  ]
  const imagensMobile = [
    { src: kitchen, color: "#cfc7c7", backgroundPositionY: '13%', backgroundSize: 'cover', backgroundPositionX: 'center' },
    { src: outside, color: "#d5a567", backgroundPositionY: '-114%', backgroundSize: 'cover', backgroundPositionX: 'center' },
    { src: sala, color: "#cfc7c7", backgroundPositionY: '36%', backgroundSize: 'cover', backgroundPositionX: 'center' },
    { src: livingRoom, color: "#b37745", backgroundPositionY: '22%', backgroundSize: 'cover', backgroundPositionX: 'center' },
    { src: clinic, color: "#cfc7c7", backgroundPositionY: '50%', backgroundSize: 'cover', backgroundPositionX: '60%' },
    { src: gym, color: "#d5a567", backgroundPositionY: '-3%', backgroundSize: 'cover', backgroundPositionX: 'center' }
  ]


  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [indiceAtual, setIndiceAtual] = useState(2);
  const [indiceAtualMobile, setIndiceAtualMobile] = useState(0);
  const [stopTrigger, setStopTrigger] = useState<boolean>(false);


  const proximo = () => {
    setIndiceAtual((prev) => {
      const novoIndice = prev === imagens.length - 1 ? 0 : prev + 1;
      return novoIndice;
    });

    setIndiceAtualMobile((prev) => {
      const novoIndice = prev === imagensMobile.length - 1 ? 0 : prev + 1;
      return novoIndice;
    });
  };

  const anterior = () => {
    setIndiceAtual((prev) => {
      const novoIndice = prev === 0 ? imagens.length - 1 : prev - 1;
      return novoIndice;
    });
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: anterior,
    onSwipedRight: proximo,
    delta: 10,
    trackMouse: true,
  }); 

  const iniciarIntervalo = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      proximo();
    }, 3000);
  };

  useEffect(() => {
    iniciarIntervalo();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStopTrigger(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let box = document.querySelectorAll('.box');
    if (box) {
      setTimeout(() => {
        box[0].classList.add('slide-out');
        box[1].classList.add('slide-out');
      }, 0);
    };
  }, []);


  return (
    <>
      <main  style={{ height: '100vh', width: '100vw' }} className='d-none d-md-flex overflow-hidden position-relative' >
        <div className='position-absolute d-none text-white d-md-flex justify-content-between col-4 fs-2' style={{zIndex: 3, left: '20%', bottom: '20%', fontStyle: 'italic'}}>
          {imagens.map((_image, index) => (
            <div className='col-3' style={{cursor: "pointer"}} onClick={() => {setIndiceAtual(index); iniciarIntervalo()}} key={index}>
            <span>{index +1}</span>
            <div className={indiceAtual == index? 'bg-white mw-100 col-6' : 'bg-transparent col-1'} style={{height: '2px' , transition: 'width 3s ease-out'}}></div>
          </div>
          ))}
        </div>
        {imagens.map((imagem, index) => (
            <Carousel key={index} imagem={imagem} index={index} indiceAtual={indiceAtual} stopTrigger={stopTrigger} endIndex={imagens.length} />
        ))}
      </main>
      <main {...swipeHandlers} style={{ height: '100vh', width: '100vw', minHeight: '665px' }} className='d-flex d-md-none overflow-hidden position-relative' onScroll={proximo} >
        {imagensMobile.map((imagem, index) => (
          <CarouselMobile key={index} imagem={imagem} index={index} indiceAtual={indiceAtualMobile} stopTrigger={stopTrigger} endIndex={imagens.length} />
        ))}
      </main>
      <div className='sentence d-flex flex-column align-items-center 100-vw flex-lg-row'>
        <div>Soluções</div> 
        <div className="middle d-block"> 
          <span>reais, funcionais e harmoniosas</span>
        </div>
        <div>para seu espaço</div>
      </div>
    </>
  )
}

export default Main
