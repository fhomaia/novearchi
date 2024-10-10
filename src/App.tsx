import React, { useEffect, useState } from 'react';
import './App.css';
import noveLogo from './assets/logo_9arq_vert_rgb_laranja_pos_final_pc 1.svg'
import Menu from './components/Menu';
import Carousel from './components/Carrossel';
import CarouselMobile from './components/CarrousselMobile';

const App: React.FC = () => {

  const imagens = [
    [{ src: "src/assets/1.jpg", color: "#cfc7c7" }, { src: "src/assets/Post6.jpg", color: "#d5a567" }],
    [{ src: "src/assets/kitchen.jpg", color: "#cfc7c7" }, { src: "src/assets/LPInsta6.jpg", color: "#b37745" }],
    [{ src: "src/assets/1.jpg", color: "#cfc7c7" }, { src: "src/assets/Post6.jpg", color: "#d5a567" }]
  ]
  const imagensMobile = [
    { src: "src/assets/1.jpg", color: "#cfc7c7" }, { src: "src/assets/Post6.jpg", color: "#d5a567" },
    { src: "src/assets/kitchen.jpg", color: "#cfc7c7" }, { src: "src/assets/LPInsta6.jpg", color: "#b37745" },
    { src: "src/assets/1.jpg", color: "#cfc7c7" }, { src: "src/assets/Post6.jpg", color: "#d5a567" }
  ]
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [stopTrigger, setStopTrigger] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  

  const proximo = () => {
    setIndiceAtual((prev) => {
      const novoIndice = prev === imagens.length - 1 ? 0 : prev + 1;
      console.log(stopTrigger)
      return novoIndice;
    });
  };

  const anterior = () => {
    setIndiceAtual((prev) => {
      const novoIndice = prev === 0 ? imagens.length - 1 : prev - 1;
      return novoIndice;
    });
  };


  useEffect(() => {
    const intervalId = setInterval(() => {
      proximo();
    }, 3000);

    return () => clearInterval(intervalId); // Limpar o intervalo ao desmontar
  }, [3000]);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(stopTrigger)
      setStopTrigger(prev => prev = true);
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

  return (
    <>
      <header className="header naked d-flex justify-content-between w-100 p-4 align-items-end">
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
        {imagens.map((imagem, index) => (
            <Carousel key={index} imagem={imagem} index={index} indiceAtual={indiceAtual} stopTrigger={stopTrigger} endIndex={imagens.length} />
        ))}
      </main>
      <main style={{ height: '100vh', width: '100vw' }} className='d-flex d-md-none overflow-hidden position-relative' >
        {imagensMobile.map((imagem, index) => (
          <CarouselMobile key={index} imagem={imagem} index={index} indiceAtual={indiceAtual} stopTrigger={stopTrigger} endIndex={imagens.length} />
        ))}
      </main>
    </>
  )
}

export default App
