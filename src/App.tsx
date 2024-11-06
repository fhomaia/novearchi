import React, { useState } from 'react';
import './App.css';
import Partners from './components/Partners';
import Services from './components/Services';
import Highlights from './components/Highlights';
import Main from './components/Main';
import Headers from './components/Header';

const App: React.FC = () => {

  return (
    <>
      <Headers/>
      <Main/>
      <Highlights />
      <Services/>
      <Partners/>
    </>
  )
}

export default App
