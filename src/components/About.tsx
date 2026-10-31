
import React from 'react';
import '../App.css';
import profile from '../assets/aboutUs.jpg'

  

const About: React.FC = () => {

  return (
    <>
      <div id='about' className='d-flex flex-column flex-lg-row col-10 justify-content-center mx-auto' style={{minHeight: '70vh', paddingTop: '8rem', paddingBottom: '2rem', boxSizing: 'content-box'}}>
        <div className='col-12 col-lg-5' style={{backgroundImage: `url(${profile})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '50vh'}}></div>
        <div className='col-12 col-lg-5 p-4 text-center fs-3 fw-light' style={{alignContent: 'center'}}>
            <p>
            Fundada em Belo Horizonte no ano de 2015 pelos arquitetos Isabella Lumi e Pedro Souza, a Nove Arquitetura fornece serviços de arquitetura, elaborando projetos, apresentando soluções criativas e personalizadas para cada cliente.
            </p>
        </div>
        {/* Os trabalhos são desenvolvidos desde a concepção do projeto, com acompanhamento minucioso em todas as etapas, passando pela regularização e aprovação em prefeituras, até a entrega completa e compatibilizada. */}
            {/* O propósito do escritório é prezar pela excelência e qualidade de atendimento, aliando a necessidade de seus clientes à experiência e conhecimento técnico adquiridos nos últimos anos na realização de desenhos executivos, detalhamentos e as-builts de projetos residenciais, comerciais e institucionais, executados em parceria com empresas de grande porte dos setores de arquitetura, engenharia e construção civil. */}
      </div>
    </>
  )
}

export default About
