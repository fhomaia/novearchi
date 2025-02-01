
import React, {useState} from 'react';
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

  const [isClicked, setIsClicked] = useState(3);


  const handleClick = (target: number) => {
    if (target == isClicked) {
      return setIsClicked(3)
    }
    setIsClicked(target)

  };


  return (
    <>
      <div className='d-flex flex-column flex-lg-row my-4 align-items-center' style={{maxWidth: '100vw'}} id="conexao">
        {
          services.map((service, i)=> {
            return (
              <motion.div 
                key={i}
                onHoverStart={() => setIsClicked(i)}
                onHoverEnd={() => setIsClicked(3)}
                onClick={() => handleClick(i)}
                transition={{ duration: 0.8 }}
                animate={{
                  scale: isClicked == i ? 1 : 0.9
                }}
                className="d-flex flex-column justify-content-center gap-3 mx-auto bg-white align-items-center service-circle">
                <span style={{fontSize: '3rem'}} className="material-symbols-outlined">{service.icon}</span>
                <div className='text-center'>
                  <h3>{service.title}</h3>
                  {service.description.map((description, index)=> {
                    return <p key={index}>{description}</p>
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
