import React, {useEffect, useRef, useState} from 'react';
import Lenis from 'lenis';
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
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      prevent: (node) => node.closest('.modal') !== null,
    });
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    const target = hash ? document.querySelector<HTMLElement>(hash) : null;

    if (hash && !target) return;
    if (!hash && navigationType === 'POP') return;

    if (lenis) {
      // The new route's height isn't measured yet
      lenis.resize();
      lenis.scrollTo(target ?? 0, { immediate: navigationType === 'POP' });
    } else if (target) {
      target.scrollIntoView();
    } else {
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
