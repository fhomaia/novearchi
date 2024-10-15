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
import { motion } from "framer-motion";

const App: React.FC = () => {

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);


  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false); // Reseta a animação quando o elemento sai da tela
          }
        });
      },
      { threshold: 0.1 } // Ajusta o threshold para determinar quando o elemento deve aparecer
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

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
      {/* <button  className="btn btn-outline-dark" onClick={anterior}>Anterior</button>
      <button className="btn btn-outline-dark" onClick={proximo}>Próximo</button> */}

      <div className={`vh-100 vw-100 menu p-5 position-absolute ${showMenu ? 'slide-menu' : ''}`}>
        <Menu classStyle={'d-flex gap-4 flex-column'} />
      </div>
      <main style={{ height: '100vh', width: '100vw' }} className='d-none d-md-flex overflow-hidden position-relative' >
        <div className='position-absolute d-none text-white d-md-flex justify-content-between col-4 fs-2' style={{zIndex: 3, left: '20%', bottom: '20%', fontStyle: 'italic'}}>
          {imagens.map((image, index) => (
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
      <motion.div
      ref={ref}
      initial={{ y: 200 }}
      animate={isVisible ? { y: 0 } : { y: 200 }}
      transition={{ duration: 0.8 }}
      >
        <div className="w-100 d-none  text-white d-md-flex align-items-center justify-content-center dotted-background fw-bold" style={{height: '20vh'}}>
          <h5>SOLUÇÕES <span>REAIS, FUNCIONAIS E HARMONIOSAS</span> PARA SEU ESPAÇO</h5>
        </div>
        <div className='d-flex flex-column w-100 align-items-center p-4 dotted-background'>
          <div id="comparison" className="col-10">
            <figure>
              <div id="divisor" style={{ width: `${sliderValue}%`}}></div>
            </figure>
            <input type="range" min="0" max="100" value={sliderValue} id="slider" onChange={moveDivisor}/>
          </div>
          <div className='col-10 d-flex align-items-center justify-content-center'>
            <div className='col-12 pt-3 text-white text-center'>
              <h5>Usamos tecnologia de ponta para produzir imagens realistas que se traduzem em mais confiança nas suas escolhas de projeto.</h5>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default App
