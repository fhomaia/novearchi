import React, {  useEffect, useState } from 'react';
// import { gsap } from 'gsap';
import './App.css';
import noveLogo from './assets/logo_9arq_vert_rgb_laranja_pos_final_pc 1.svg'
import Menu from './components/Menu';

const App: React.FC = () => {

  useEffect(() => {
    // let hi = document.querySelector('.header');
    // gsap.fromTo(hi, 
    //   { opacity: 0, y: -100 }, // Estado inicial
    //   { opacity: 1, y: 0, duration: 5, ease: "elastic.out(1, 0.3)" } // Estado final
    // );

    let box = document.querySelectorAll('.box');
    if (box) {
      setTimeout(() => {
        box.forEach(element => {
          element.classList.add('slide');
        });
      }, 0); // Faz o slide out acontecer logo após o carregamento
    };
  }, []);

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(prevState => !prevState); 
  };

  return (
    <>
      <header className="header naked d-flex justify-content-between w-100 p-4 align-items-end">
        <div className="d-flex align-items-end">
          <img src={noveLogo} width='50' />
          <h1 className="px-4 mb-0 title"><span className="fw-bold">NOVE</span><br/><span>ARQUITETURA</span></h1>
        </div>
        <div className='d-lg-none d-block'>
          <button className="border bg-transparent text-white d-flex align-items-center" onClick={toggleMenu}>
            <span className="material-symbols-outlined p-0 m-0">menu</span>
          </button>
        </div>
        <Menu classStyle={'d-lg-flex gap-4 d-none'}/>
      </header>

      <div className={`vh-100 vw-100 menu p-5 position-absolute ${showMenu ? 'slide-menu' : ''}`}>
        <Menu classStyle={'d-flex gap-4 flex-column'}/>
      </div>


      <main style={{ height: '100vh', width: '100vw' }} className='d-flex'>
        <div className='h-100 col-12 p-0 col-lg-6' style={{ backgroundImage: 'url(src/assets/1.jpg)', backgroundPositionX: 'center', backgroundSize: 'cover', zIndex: 1 }}>
          <div className='box h-100 col-12 p-0 col-lg-6' style={{ backgroundColor: '#cfc7c7' }}></div>
        </div>
        <div className='h-100 col-12 p-0 col-lg-6 p-0' style={{ backgroundImage: 'url(src/assets/Post6.jpg)', backgroundPositionX: 'center', backgroundSize: 'cover', zIndex: 0 }}>
          <div className='box h-100 col-12 p-0 col-lg-6 position-relative z-0' style={{ backgroundColor: '#707b74' }}></div>
        </div>
      </main>
    </>
  )
}

export default App
