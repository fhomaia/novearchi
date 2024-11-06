
import React from 'react';
import '../App.css';
import { motion } from "framer-motion";

const Services: React.FC = () => {
  const services = [
    {
      icon: 'calendar_month',
      title:  'Serviços externos',
      description: ['Visitas técnicas', 'Acompanhamento de obras']
    },
    {
      icon: 'emoji_objects',
      title:  'Conexão 9',
      description: ['Serviço de consultoria']
    },
    {
      icon: 'home',
      title:  'Projetos de arquitetura',
      description: ['Projetos de interiores', 'Aprovação de projetos na prefeitura']
    }
  ]

  return (
    <>
      <div className='d-flex flex-column flex-lg-row my-4'>
        {
          services.map((service)=> {
            return (
              <motion.div 
                initial={{ scale: 0.7 }}
                whileHover={{scale: 1}}
                transition={{ duration: 0.8 }}
                className="d-flex flex-column justify-content-center gap-3 mx-auto bg-white align-items-center" style={{height: '33vw', marginTop: '4rem', width: '33vw', borderRadius: '50%'}}>
                <span style={{fontSize: '5rem'}} className="material-symbols-outlined">{service.icon}</span>
                <div className='text-center'>
                  <h2>{service.title}</h2>
                  {service.description.map((description)=> {
                    return <p>{description}</p>
                  })}
                  <button className='btn btn-outline-dark'>Saiba Mais</button>
                </div>
              </motion.div>
            )
          })
        }
      </div>
    </>
  )
}

export default Services
