
import React, { useState } from 'react';
import '../App.css';
import noveLogo from '../assets/logo_9arq_vert_rgb_laranja_pos_final_pc 1.svg';
import Menu from './Menu';

const Headers: React.FC = () => {

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(prevState => !prevState);
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
        <Menu classStyle={'d-lg-flex gap-4 d-none cursor-pointer'} />
      </header>
      <div className={`vh-100 vw-100 menu p-5 position-absolute cursor-pointer ${showMenu ? 'slide-menu' : ''}`}>
        <Menu classStyle={'d-flex gap-4 flex-column'} />
      </div>
    </>
  )
}

export default Headers
