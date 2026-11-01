import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../App.css';
import '../styles/about-proposal-2.css';
import ProjectMosaic from './ProjectMosaic';
import RevealOnScrollDown from './RevealOnScrollDown';
import hero from '../assets/about-hero.jpg';
import mosaic1 from '../assets/projects/Velo/Velo5.jpg';
import mosaic2 from '../assets/projects/lorrah/lorrah2.jpg';
import mosaic3 from '../assets/projects/CSM/CSM3.jpg';
import mosaic4 from '../assets/projects/Virginie/1f.jpg';
import mosaic5 from '../assets/projects/medReview/medReview5.jpg';
import isabella from '../assets/team/isabella.jpg';
import pedro from '../assets/team/pedro.jpg';

const mosaicImages = [mosaic1, mosaic2, mosaic3, mosaic4, mosaic5];

const pillars = [
  {
    number: '01',
    title: 'Criatividade',
    description: 'Encontramos soluções com ideias originais e um olhar contemporâneo.',
    icon: 'M32 4v56M4 32h56M12 12l40 40M52 12 12 52',
  },
  {
    number: '02',
    title: 'Propósito',
    description: 'Projetamos com intenção, pensando nas pessoas e no impacto positivo.',
    icon: 'M10 56C6 34 24 14 54 6c4 26-14 46-44 50Zm0 0C20 40 32 28 54 6M18 24c-8-4-12-2-16 0 0 12 4 20 12 26',
  },
  {
    number: '03',
    title: 'Identidade',
    description: 'Criamos espaços únicos, que refletem histórias, estilos e desejos.',
    icon: 'M8 60V28a22 22 0 0 1 44 0v32H8Zm44 0h12',
  },
];

const replayIcon = (event: React.SyntheticEvent<HTMLElement>) => {
  event.currentTarget.querySelector('svg')?.getAnimations({ subtree: true }).forEach((animation) => {
    animation.currentTime = animation.effect?.getComputedTiming().delay ?? 0;
  });
};

const whatsapp = `https://wa.me/5531990790999?text=${encodeURIComponent('Olá! Gostaria de conversar sobre um projeto.')}`;

const AboutProposalTwo: React.FC = () => {
  const { ref: pillarsRef, inView: pillarsInView } = useInView({ threshold: 0.3 });

  return (
    <div className='about-proposal-2'>
      <section className='ap2-hero'>
        <span className='ap2-hero-circle' />
        <img className='ap2-hero-image' src={hero} alt='' decoding='async' />
        <div className='ap2-hero-content'>
          <p className='ap2-eyebrow'>Sobre nós</p>
          <h2>Espaços que inspiram,<br />ideias que <em>transformam.</em></h2>
          <div className='ap2-hero-text'>
            <p>
              Somos um escritório de arquitetura movido pela criatividade, pelo olhar atento aos detalhes e pela vontade de criar espaços que fazem sentido — para as pessoas, para a cidade e para o futuro.
            </p>
            <p className='ap2-hero-fact'>
              Desde 2015, já assinamos mais de 150 projetos residenciais e comerciais.
            </p>
          </div>
        </div>
      </section>

      <section className='ap2-essence'>
        <ProjectMosaic images={mosaicImages} />
        <div className='ap2-essence-text'>
          <RevealOnScrollDown>
            <p className='ap2-eyebrow'>Nossa essência</p>
            <h3>Criatividade, propósito e <em>personalidade.</em></h3>
            <p>
              Acreditamos que bons projetos vão além da estética. Eles melhoram rotinas, conectam pessoas e transformam ambientes. Por isso, unimos técnica, sensibilidade e um toque de ousadia em cada detalhe.
            </p>
          </RevealOnScrollDown>
        </div>
        <span className='ap2-essence-circle' />
      </section>

      <section className='ap2-pillars'>
        <p className='ap2-eyebrow'>Nossos pilares</p>
        <div ref={pillarsRef} className={`ap2-pillars-grid ${pillarsInView ? 'ap2-icons-active' : ''}`}>
          {pillars.map((pillar) => (
            <article key={pillar.number} onClick={replayIcon} onMouseEnter={replayIcon}>
              <svg viewBox='0 0 66 64' aria-hidden='true'><path d={pillar.icon} pathLength={1} /></svg>
              <span>{pillar.number}</span>
              <h4>{pillar.title}</h4>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className='ap2-people'>
        <div className='ap2-people-text'>
          <RevealOnScrollDown>
            <p className='ap2-eyebrow'>As pessoas</p>
            <h3>Um time que acredita <em>no que faz.</em></h3>
            <p>
              Isabella Lumi e Pedro Souza acompanham de perto cada projeto e garantem que cada detalhe da entrega siga os padrões rigorosos da Nove Arquitetura.
            </p>
            <span className='ap2-people-line' />
          </RevealOnScrollDown>
        </div>
        <img className='ap2-people-photo' src={isabella} alt='Retrato de Isabella Lumi' loading='lazy' decoding='async' />
        <img className='ap2-people-photo' src={pedro} alt='Retrato de Pedro Souza' loading='lazy' decoding='async' />
      </section>

      <section className='ap2-cta'>
        <svg className='ap2-cta-wave' viewBox='0 0 1024 64' preserveAspectRatio='none' aria-hidden='true'>
          <path d='M0 14C170 0 340 0 500 8c180 9 340 54 524 42v14H0Z' />
        </svg>
        <div className='ap2-cta-content'>
          <p>Tem uma ideia em mente? <em>Vamos pensar juntos no próximo espaço.</em></p>
          <a href={whatsapp} target='_blank'>
            Vamos conversar
            <svg viewBox='0 0 24 24' aria-hidden='true'><path d='M4 12h15m-6-6 6 6-6 6' /></svg>
          </a>
        </div>
      </section>
    </div>
  )
}

export default AboutProposalTwo
