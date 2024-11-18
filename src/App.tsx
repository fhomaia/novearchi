import React from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Partners from './components/Partners';
import Services from './components/Services';
import Highlights from './components/Highlights';
import Main from './components/Main';
import Headers from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {

  return (
    <>
      <Headers/>
      <Main/>
      <Highlights />
      <Projects/>
      <Services/>
      <Partners/>
      <Footer/>
    </>
  )
}

export default App
