
import React from 'react';
import '../App.css';
import velotime from '../assets/projects/Velo5.jpg';
import project_2 from '../assets/projects/1c.jpg';
import project_3 from '../assets/projects/IMG_2386.jpg';
import project_4 from '../assets/projects/Post 5.jpg';
import project_5 from '../assets/projects/Marcel.jpg';
import project_6 from '../assets/projects/bathroom.jpg';
import Card from './Card';
import CSM_1 from '../assets/projects/CSM/Post 31.jpg'
import CSM_2 from '../assets/projects/CSM/Post 32-L.jpg'
import CSM_3 from '../assets/projects/CSM/Post 34.jpg'
import CSM_4 from '../assets/projects/CSM/Post 35.jpg'

const Projects: React.FC = () => {

  const projects = [
    {
      src: velotime,
      title: 'Velotime',
      tag: "Projeto comercial",
      pictures: []
    },
    {
      src: project_2,
      title: 'Celia Soutto',
      tag: "Projeto comercial",
      pictures: [CSM_1, CSM_2, CSM_3, CSM_4]
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
    {
      src: project_5,
      title: 'Projeto Funcionários',
      tag: "Projeto comercial",
      pictures: []
    },
    {
      src: project_6,
      title: 'Projeto Funcionários',
      tag: "Projeto residencial",
      pictures: []
    }
  ]

  return (
    <div className='d-flex flex-wrap vw-100 justify-content-center align-items center mb-4' style={{gap: '3rem'}}>
      {
        projects.map((project, i) => {
          return <Card project={project} duration={1 + (projects.length - (i + 1))*0.25} initial={-300 + (projects.length - (i + 1))/(projects.length)*(-300) } key={i}/>
        })
      }
    </div>
  )
}

export default Projects
