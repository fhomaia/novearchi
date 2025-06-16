
import React from 'react';
import '../App.css';
import project_3 from '../assets/projects/IMG_2386.jpg';
import project_4 from '../assets/projects/Post 5.jpg';
// import project_5 from '../assets/projects/Marcel.jpg';
import Card from './Card';
import CSM1 from '../assets/projects/CSM/CSM1.jpg';
import CSM2 from '../assets/projects/CSM/CSM2.jpg';
import CSM3 from '../assets/projects/CSM/CSM3.jpg';
import CSM5 from '../assets/projects/CSM/CSM5.jpg';
import CSM6 from '../assets/projects/CSM/CSM6.jpg';
import CSM7 from '../assets/projects/CSM/CSM7.jpg';
import virginie1 from '../assets/projects/Virginie/1f.jpg';
import virginie2 from '../assets/projects/Virginie/2.jpg';
import virginie3 from '../assets/projects/Virginie/3.jpg';
import virginie4 from '../assets/projects/Virginie/4.jpg';
import virginie5 from '../assets/projects/Virginie/5.jpg';
import virginie6 from '../assets/projects/Virginie/6f.jpg';
import virginie7 from '../assets/projects/Virginie/7f.jpg';
import isabela1 from '../assets/projects/Isabela/Isabela1.jpg';
import isabela2 from '../assets/projects/Isabela/Isabela2.jpg';
import isabela3 from '../assets/projects/Isabela/Isabela3.jpg';
import isabela4 from '../assets/projects/Isabela/Isabela4.jpg';
import isabela5 from '../assets/projects/Isabela/Isabela5.jpg';
import isabela6 from '../assets/projects/Isabela/Isabela6.jpg';
import isabela7 from '../assets/projects/Isabela/Isabela7.jpg';
import pedro1 from '../assets/projects/P/pedro1.jpg';
import pedro2 from '../assets/projects/P/pedro2.jpg';
import pedro3 from '../assets/projects/P/pedro3.jpg';
import pedro4 from '../assets/projects/P/pedro4.jpg';
import pedro5 from '../assets/projects/P/pedro5.jpg';
import pedro6 from '../assets/projects/P/pedro6.jpg';
import pedro7 from '../assets/projects/P/pedro7.jpg';
import pedro8 from '../assets/projects/P/pedro10.jpg';
import pedro9 from '../assets/projects/P/pedro9.jpg';
import pedro10 from '../assets/projects/P/pedro10.jpg';
import lorrah1 from '../assets/projects/lorrah/lorrah1.jpg';
import lorrah2 from '../assets/projects/lorrah/lorrah2.jpg';
import lorrah3 from '../assets/projects/lorrah/lorrah3.jpg';
import lorrah4 from '../assets/projects/lorrah/lorrah4.jpg';
import lorrah5 from '../assets/projects/lorrah/lorrah5.jpg';
import lorrah6 from '../assets/projects/lorrah/lorrah6.jpg';
import lorrah7 from '../assets/projects/lorrah/lorrah7.jpg';
import lorrah8 from '../assets/projects/lorrah/lorrah8.jpg';
import lorrah9 from '../assets/projects/lorrah/lorrah9.jpg';
import lorrah10 from '../assets/projects/lorrah/lorrah10.jpg';
import lorrah11 from '../assets/projects/lorrah/lorrah11.jpg';
import velo1 from '../assets/projects/Velo/Velo1.jpg';
import velo2 from '../assets/projects/Velo/Velo2.jpg';
import velo4 from '../assets/projects/Velo/Velo4.jpg';
import velo5 from '../assets/projects/Velo/Velo5.jpg';
import velo6 from '../assets/projects/Velo/Velo6.jpg';
import velo7 from '../assets/projects/Velo/Velo7.jpg';
import velo8 from '../assets/projects/Velo/Velo8.jpg';
import velo9 from '../assets/projects/Velo/Velo9.jpg';
import velo10 from '../assets/projects/Velo/Velo10.jpg';
import velo11 from '../assets/projects/Velo/Velo11.jpg';
import medReview1 from '../assets/projects/medReview/medReview1.jpg';
import medReview2 from '../assets/projects/medReview/medReview2.jpg';
import medReview4 from '../assets/projects/medReview/medReview4.jpg';
import medReview5 from '../assets/projects/medReview/medReview5.jpg';
import medReview6 from '../assets/projects/medReview/medReview6.jpg';
import medReview7 from '../assets/projects/medReview/medReview7.jpg';

const Projects: React.FC = () => {

  const projects = [
    {
      src: virginie7,
      title: 'Apartamento Santo Antônio',
      tag: 'Refúgio sofisticado',
      pictures: [virginie7,virginie1, virginie6, virginie3, virginie4, virginie5, virginie2]
    },
    {
      src: CSM1,
      title: 'Celia Soutto',
      tag: "Projeto comercial",
      pictures: [CSM1, CSM2, CSM3, CSM5, CSM6, CSM7]
    },
    {
      src: isabela1,
      title: 'Apartamento Sublime',
      tag: 'Inovação & Sofisticação',
      pictures: [isabela1 ,isabela2, isabela3, isabela4, isabela5, isabela6, isabela7]
    },
    {
      src: pedro3,
      title: 'Apartamento Floresta',
      tag: 'Lavabo Elementar: Pedra, Concreto e Madeira',
      pictures: [pedro1 ,pedro2, pedro3, pedro4, pedro5, pedro6, pedro7,pedro8, pedro9, pedro10]
    },
    {
      src: lorrah1,
      title: 'Apartamento Lourdes',
      tag: 'Addams de Alma Colorida',
      pictures: [lorrah1 ,lorrah2, lorrah3, lorrah4, lorrah5, lorrah6, lorrah7,lorrah8, lorrah9, lorrah10, lorrah11]
    },
    {
      src: velo11,
      title: 'Velotime Training',
      tag: 'Arquitetura da Performance',
      pictures: [velo11, velo1 ,velo2, velo4, velo5, velo6, velo7,velo8, velo9, velo10]
    },
    {
      src: medReview7,
      title: 'AnestReview / MedReview',
      tag: 'Estúdio da Medicina',
      pictures: [medReview1 ,medReview2, medReview4, medReview5, medReview6]
    },
    {
      src: project_3,
      title: 'Projeto Cidade Nova',
      tag: "Projeto residencial",
      pictures: []
    },
    {
      src: project_4,
      title: 'Projeto Santa Branca',
      tag: "Projeto residencial",
      pictures: []
    },
    // {
    //   src: project_5,
    //   title: 'Projeto Funcionários',
    //   tag: "Projeto comercial",
    //   pictures: []
    // }
  ]

  return (
    <div className='d-flex flex-wrap vw-100 justify-content-center align-items center mb-4' style={{gap: '3rem'}} id="projects">
      {
        projects.map((project, i) => {
          return <Card project={project} duration={1 + (projects.length - (i + 1))*0.25} initial={-300 } key={i}/>
        })
      }
    </div>
  )
}

export default Projects
