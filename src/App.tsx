import React, { useEffect, useState } from 'react';
import './App.css';
import noveLogo from './assets/logo_9arq_vert_rgb_laranja_pos_final_pc 1.svg'
import Menu from './components/Menu';

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
          <div key={index} className='h-100 col-12 p-0 d-flex position-absolute top-0 left-0' style={{ transition: 'transform 0.5s ease-in-out', transform: `translateX(${indiceAtual == index ? 0 : indiceAtual == (index + 1) ? -100 : index == (imagens.length - 1) && indiceAtual == 0 ? -100 : 100}%)`, zIndex: indiceAtual == index ? 2 : indiceAtual == (index + 1) ? 1 : index == (imagens.length - 1) && indiceAtual == 0 ? 1 : 0 }}>
            <div className='h-100 col-6 p-0' style={{ backgroundImage: `url(${imagem[0].src})`, backgroundPositionX: 'center', backgroundSize: 'cover', zIndex: 1 }}>
              <div className={indiceAtual == index && stopTrigger == true ? 'box h-100 col-12 p-0 slide-out' : 'box h-100 col-12 p-0'} style={{ backgroundColor: imagem[0].color }}></div>
            </div>
            <div className='h-100 col-6 p-0' style={{ backgroundImage: `url(${imagem[1].src})`, backgroundPositionX: 'center', backgroundSize: 'cover', zIndex: 0 }}>
              <div className={indiceAtual == index && stopTrigger == true ? 'box h-100 col-12 p-0 slide-out' : 'box h-100 col-12 p-0'} style={{ backgroundColor: imagem[1].color }}></div>
            </div>
          </div>
        ))}
      </main>
      <main style={{ height: '100vh', width: '100vw' }} className='d-flex d-md-none overflow-hidden position-relative' >
        {imagensMobile.map((imagem, index) => (
          <div key={index} className='h-100 col-12 p-0 d-flex position-absolute top-0 left-0' style={{ transition: 'transform 0.5s ease-in-out', transform: `translateX(${indiceAtual == index ? 0 : indiceAtual == (index + 1) ? -100 : index == (imagens.length - 1) && indiceAtual == 0 ? -100 : 100}%)`, zIndex: indiceAtual == index ? 2 : indiceAtual == (index + 1) ? 1 : index == (imagens.length - 1) && indiceAtual == 0 ? 1 : 0 }}>
            {indiceAtual == (index + 1)}
            <div className='h-100 col-12 p-0' style={{ backgroundImage: `url(${imagem.src})`, backgroundPositionX: 'center', backgroundSize: 'cover', zIndex: 1 }}>
              <div className={indiceAtual == index && stopTrigger == true ? 'box h-100 col-12 p-0 slide-out' : 'box h-100 col-12 p-0'} style={{ backgroundColor: imagem.color }}></div>
            </div>
          </div>
        ))}
      </main>
    </>
  )
}

export default App
