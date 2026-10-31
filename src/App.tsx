import React, {useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation, useNavigationType } from 'react-router-dom';
import Partners from './components/Partners';
import Services from './components/Services';
import Highlights from './components/Highlights';
import Main from './components/Main';
import About from './components/About';
import Headers from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';

const ScrollManager: React.FC = () => {
  const { hash, key } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView();
    } else if (navigationType !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [hash, key, navigationType]);

  return null;
};

const Layout: React.FC = () => {

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
      <ScrollManager />
      <Headers onVisibilityChange={handleHeaderVisibilityChange}/>
      <div className='d-flex flex-column min-vh-100 w-100'>
        <div className='flex-grow-1'>
          <Outlet />
        </div>
        <Footer onVisibilityChange={handleFooterVisibilityChange}/>
      </div>
      <Contact isHeaderVisible={isHeaderVisible} isFooterVisible={isFooterVisible}/>
    </>
  )
}

const Home: React.FC = () => (
  <>
    <Main />
    <Highlights />
    <Projects />
    <Services />
    <Partners />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
