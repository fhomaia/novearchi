import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Partners from './components/Partners';
import Services from './components/Services';
import Highlights from './components/Highlights';
import Main from './components/Main';
import Headers from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';

const App: React.FC = () => {

  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(false);
  const [isFooterVisible, setIsFooterVisible] = useState<boolean>(false);

  const handleHeaderVisibilityChange = (inView: boolean) => {
    setIsHeaderVisible(inView);
  };

  const handleFooterVisibilityChange = (inView: boolean) => {
    setIsFooterVisible(inView);
  };

  return (
    <>
      <Headers onVisibilityChange={handleHeaderVisibilityChange}/>
      <Main/>
      <Highlights />
      <Projects/>
      <Services/>
      <Partners/>
      <Footer onVisibilityChange={handleFooterVisibilityChange}/>
      <Contact isHeaderVisible={isHeaderVisible} isFooterVisible={isFooterVisible}/>
    </>
  )
}

export default App
