import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../styles/about-proposal.css';
import ProjectMosaic from './ProjectMosaic';
import RevealOnScrollDown from './RevealOnScrollDown';
import hero from '../assets/projects/Isabela/Isabela3.jpg';
import founders from '../assets/team/founders.jpg';
import isabella from '../assets/team/isabella.jpg';
import pedro from '../assets/team/pedro.jpg';
import mosaic1 from '../assets/projects/lorrah/lorrah2.jpg';
import mosaic2 from '../assets/projects/CSM/CSM3.jpg';
import mosaic3 from '../assets/projects/Virginie/1f.jpg';
import mosaic4 from '../assets/projects/medReview/medReview5.jpg';
import mosaic5 from '../assets/projects/lorrah/lorrah10.jpg';
// Placeholders until the client sends a photo for each step
import stepConception from '../assets/medReviewRender.jpg?w=800';
import stepFollowUp from '../assets/before.jpg?w=800';
import stepApproval from '../assets/projects/Velo/Velo4.jpg?w=800';
import stepDelivery from '../assets/medReviewReal.jpg?w=800';

const facts = [
  { label: 'Desde', value: '2015' },
  { label: 'Em', value: 'Belo Horizonte' },
  { label: 'Projetos', value: 'Residenciais, comerciais e institucionais' },
];

const steps = [
  { title: 'Concepção', image: stepConception, description: 'Cada trabalho começa na concepção do projeto, com soluções criativas e personalizadas para cada cliente.' },
  { title: 'Acompanhamento', image: stepFollowUp, description: 'Acompanhamento minucioso em todas as etapas, com visitas técnicas e acompanhamento de obras.' },
  { title: 'Aprovação', image: stepApproval, description: 'Regularização e aprovação do projeto nas prefeituras.' },
  { title: 'Entrega', image: stepDelivery, description: 'Entrega completa e compatibilizada.' },
];

const people = [
  { name: 'Isabella Lumi', photo: isabella },
  { name: 'Pedro Souza', photo: pedro },
];

const mosaicImages = [mosaic1, mosaic2, mosaic3, mosaic4, mosaic5];

const whatsapp = `https://wa.me/5531990790999?text=${encodeURIComponent('Olá! Gostaria de conversar sobre um projeto.')}`;

const AboutProposal: React.FC = () => {
  return (
    <div className='about-proposal'>
      <section className='ap-hero' style={{ backgroundImage: `url(${hero})` }}>
        <div className='ap-hero-content'>
          <p className='ap-eyebrow'>Sobre a Nove Arquitetura</p>
          <h2>Soluções reais, funcionais e harmoniosas para seu espaço</h2>
        </div>
      </section>

      <section className='ap-facts'>
        {facts.map((fact) => (
          <div key={fact.label}>
            <span>{fact.label}</span>
            <strong>{fact.value}</strong>
          </div>
        ))}
      </section>

      <section className='ap-section ap-story'>
        <RevealOnScrollDown>
          <div className='ap-story-grid'>
            <img src={founders} alt='Os arquitetos fundadores da Nove Arquitetura' loading='lazy' decoding='async' />
            <div>
              <p className='ap-eyebrow'>Nossa história</p>
              <h3>Fundada por dois arquitetos em Belo Horizonte</h3>
              <p>
                Fundada em Belo Horizonte no ano de 2015 pelos arquitetos Isabella Lumi e Pedro Souza, a Nove Arquitetura fornece serviços de arquitetura, elaborando projetos e apresentando soluções criativas e personalizadas para cada cliente.
              </p>
            </div>
          </div>
        </RevealOnScrollDown>
      </section>

      <section className='ap-process'>
        <div className='ap-section'>
          <p className='ap-eyebrow'>Como trabalhamos</p>
          <h3>Da primeira ideia à entrega do espaço</h3>
          <ol className='ap-steps'>
            {steps.map((step, index) => (
              <li key={step.title}>
                <img src={step.image} alt='' loading='lazy' decoding='async' />
                <span className='ap-step-number'>{index + 1}</span>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className='ap-section ap-vision'>
        <div>
          <RevealOnScrollDown>
            <p className='ap-eyebrow'>Nosso olhar</p>
            <h3>Cada detalhe pensado para quem vai viver o espaço</h3>
            <p>
              O propósito do escritório é prezar pela excelência e qualidade de atendimento, aliando a necessidade de seus clientes à experiência e ao conhecimento técnico adquiridos na realização de desenhos executivos, detalhamentos e as-builts, em parceria com empresas de grande porte dos setores de arquitetura, engenharia e construção civil.
            </p>
            <Link to='/#projects' className='ap-link'>Ver mais projetos</Link>
          </RevealOnScrollDown>
        </div>
        <ProjectMosaic images={mosaicImages} />
      </section>

      <section className='ap-people'>
        <div className='ap-section'>
          <RevealOnScrollDown>
            <p className='ap-eyebrow'>Quem está à frente</p>
            <h3>Isabella e Pedro acompanham cada projeto de perto</h3>
          </RevealOnScrollDown>
          <div className='ap-people-grid'>
            {people.map((person) => (
              <figure key={person.name}>
                <img src={person.photo} alt={`Retrato de ${person.name}`} loading='lazy' decoding='async' />
                <figcaption>{person.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className='ap-cta'>
        <h3>Vamos conversar sobre o seu espaço?</h3>
        <a href={whatsapp} target='_blank' className='ap-button'>Falar pelo WhatsApp</a>
        <p>
          <a href='https://www.instagram.com/9arquitetura/' target='_blank' className='ap-link'>Acompanhe nosso dia a dia no Instagram</a>
        </p>
      </section>
    </div>
  )
}

export default AboutProposal
