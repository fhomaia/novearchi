import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import noveLogo from './assets/logo_9arq_vert_rgb_laranja_pos_final_pc 1.svg'
import Menu from './components/Menu';
import Carousel from './components/Carrossel';
import CarouselMobile from './components/CarrousselMobile';
import { useSwipeable } from 'react-swipeable';
import kitchen from './assets/kitchen.jpg'
import sala from './assets/sala.jpg'
import outside from './assets/outside.jpg'
import livingRoom from './assets/livingRoom.jpg'
import { motion, useScroll, useTransform } from "framer-motion";
import Partners from './components/Partners';
import Services from './components/Services';
import Transform from './components/Transform';

const App: React.FC = () => {

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target:  container,
    offset: ['start start', 'end end']
  })

  const imagens = [
    [{ src: sala, color: "#cfc7c7" }, { src: outside, color: "#d5a567" }],
    [{ src: kitchen, color: "#cfc7c7" }, { src: livingRoom, color: "#b37745" }],
    [{ src: sala, color: "#cfc7c7" }, { src: outside, color: "#d5a567" }]
  ]
  const imagensMobile = [
    { src: sala, color: "#cfc7c7" }, { src: outside, color: "#d5a567" },
    { src: kitchen, color: "#cfc7c7" }, { src: livingRoom, color: "#b37745" },
    { src: sala, color: "#cfc7c7" }, { src: outside, color: "#d5a567" }
  ]
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [indiceAtualMobile, setIndiceAtualMobile] = useState(0);
  const [stopTrigger, setStopTrigger] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [sliderValue, setSliderValue] = useState<number>(50); 

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


  const toggleMenu = () => {
    setShowMenu(prevState => !prevState);
  };

  const moveDivisor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
  };


  return (
    <>
      <header className="header naked d-flex justify-content-between 100-vw p-4 align-items-end">
        <div className="d-flex align-items-end">
          <img src={noveLogo} width='50' />
          <h1 className="px-4 mb-0 title"><span className="fw-bold">NOVE</span><br /><span>ARQUITETURA</span></h1>
        </div>
        <div className='d-lg-none d-block'>
          <button className="border bg-transparent text-white d-flex align-items-center" onClick={toggleMenu}>
            <span className="material-symbols-outlined p-0 m-0">menu</span>
          </button>
        </div>
        <Menu classStyle={'d-lg-flex gap-4 d-none'} />
      </header>
      <div className={`vh-100 vw-100 menu p-5 position-absolute ${showMenu ? 'slide-menu' : ''}`}>
        <Menu classStyle={'d-flex gap-4 flex-column'} />
      </div>
      <main style={{ height: '100vh', width: '100vw' }} className='d-none d-md-flex overflow-hidden position-relative' >
        <div className='position-absolute d-none text-white d-md-flex justify-content-between col-4 fs-2' style={{zIndex: 3, left: '20%', bottom: '20%', fontStyle: 'italic'}}>
          {imagens.map((_image, index) => (
            <div className='col-3' onClick={() => {setIndiceAtual(index); iniciarIntervalo()}}>
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
      <div className='sentence d-flex flex-column flex-lg-row'>
        <div>Soluções</div> 
        <div className="middle d-block text-wrap d-lg-none"> 
          <span>reais, funcionais e harmoniosas</span>
        </div>
        <div className="middle d-none d-lg-block"> 
          <span>reais, funcionais e harmoniosas</span>
        </div>
        <div>para seu espaço</div>
      </div>
      <div className="d-flex flex-column gap-4 position-relative" style={{gap: '3.5rem'}}>
        <motion.div
        initial={{ y: 200}}
        whileInView={{y: 0}}
        transition={{ duration: 0.8 }}
        viewport={{ once:  true }}
        >
          <div className='d-flex w-100 align-items-center text-center'>
            <div className='col-12 col-lg-8' style={{backgroundImage: 'url(src/assets/highlightKitchen.png)', backgroundSize: 'cover', height: '33vh', backgroundPosition: 'center'}}>
            </div>
          </div>
        </motion.div>
        <motion.div
        initial={{ y: 200 }}
        whileInView={{y: 0}}
        transition={{ duration: 0.8 }}
        viewport={{ once:  true }}
        >
          <div className='d-flex w-100 align-items-center text-center' style={{backgroundColor: 'rgb(43, 43, 43)'}}>
            <div className='d-flex col-12 d-lg-none align-items-center justify-content-center'>
              <div className='p-3 fs-2  text-center text-white'>
              <p>A palavra-chave é transformação.</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
        initial={{ y: 200}}
        whileInView={{y: 0}}
        transition={{ duration: 0.8 }}
        viewport={{ once:  true }}
        >
          <div className='d-flex w-100 align-items-center text-center' style={{backgroundColor: 'rgb(43, 43, 43)'}}>
            <div className='d-none col-lg-6 d-lg-flex align-items-center text-white justify-content-center'>
              <div className='p-3 text-center' style={{fontSize: '32px', fontWeight: '300'}}>
              <p>A palavra-chave é transformação.</p>
              </div>
            </div>
            <Transform/>
          </div>
        </motion.div>
        </div>
        <Services/>
        <div className="d-flex" style={{background:'linear-gradient(141deg, #ccc 25%, #eee 40%, #ddd 55%)', height: '30vh'}}>
          <Partners/>
        </div>
    </>
  )
}

export default App
