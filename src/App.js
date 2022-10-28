import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout'
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import PortfolioItem from './components/PortfolioItem';
import About from './components/About';
import Contact from './components/Contact';
import Missing from './components/Missing';
import ContactSuccess from './components/ContactSuccess';
import ContactError from './components/ContactError';
import AboutSite from './components/AboutSite';
import './scss/_App.scss';


function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Layout /> }>
          <Route index element={<Home /> } />
          <Route path="portfolio" >
            <Route index element={<Portfolio /> } />
            <Route path=":id" element={<PortfolioItem />} />
          </Route>
          <Route path="about" element={<About /> } />
          <Route path="contact" >
            <Route index element={<Contact /> } />
            <Route path="success" element={<ContactSuccess />} />
            <Route path="error" element={<ContactError />} />
          </Route>
          <Route path="aboutsite" element={<AboutSite />} />
          <Route path="*" element={<Missing /> } />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
