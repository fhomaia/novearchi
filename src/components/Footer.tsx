
import React from 'react';
import '../App.css';
import noveLogo from '../assets/logo_9arq_vert_rgb_laranja_pos_final_pc 1.svg';
import whatsapp from '../assets/icons8-whatsapp.svg';
import instagram from '../assets/icons8-instagram.svg';
import { useInView } from 'react-intersection-observer';


interface FooterProps {
    onVisibilityChange: (inView: boolean) => void; // Função para informar a visibilidade
  }
  

const Footer: React.FC<FooterProps> = ({ onVisibilityChange }) => {

  const { ref, inView } = useInView({
      triggerOnce: false,
      threshold: 0,
      });
      
  React.useEffect(() => {
      onVisibilityChange(inView);
      }, [inView, onVisibilityChange]);


  return (
    <>
      <footer ref={ref} id="contact" className="d-flex  text-white justify-content-between 100-vw align-items-center">
        <div className="d-flex flex-column align-items-start gap-2">
          <img src={noveLogo} width='40' />
          <h1 className="mb-0 fs-5 text-white"><span className="fw-bold">NOVE</span><br /><span>ARQUITETURA</span></h1>
        </div>
        <div className='d-flex flex-column gap-2'>
            <div className='text-white d-flex gap-2 align-items-center justify-content-end'>
                <a target="_blank" href="https://wa.me/553199790999?text=Olá!%20Gostaria%20de%20tirar%20dúvidas%20sobre%20os%20projetos."><img src={whatsapp} width="40"/></a>
                <a href="https://www.instagram.com/9arquitetura/" target="_blank"><img src={instagram} width="40"/></a>
            </div>
            <span>contato@9arquitetura.com.br</span>
            <div className='text-end'>
                <span className='d-block'>Av. Rio Grande do Norte, 726</span>
                <span className='d-block'>Funcionários</span>
                <span>BH - MG</span>
            </div>
        </div>
      </footer>
      <div  className="text-center" style={{backgroundColor: 'rgb(43, 43, 43)'}}>
        <span><a href="https://github.com/fhomaia/" className="text-muted fw-normal text-no-decoration" target="_blank">Criado por Fernando Maia</a></span>
    </div>
    </>
  )
}

export default Footer
