import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Partners from './components/Partners';
import Services from './components/Services';
import Highlights from './components/Highlights';
import Main from './components/Main';
import About from './components/About';
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
    <Router>
        <Headers onVisibilityChange={handleHeaderVisibilityChange}/>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                <Highlights />
                <Projects />
                <Services />
                <Partners />
                <Footer onVisibilityChange={handleFooterVisibilityChange}/>
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Contact isHeaderVisible={isHeaderVisible} isFooterVisible={isFooterVisible}/>
      </Router>
  )
}

export default App
