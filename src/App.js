import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import PortfolioItem from './components/PortfolioItem';
import About from './components/About';
import Contact from './components/Contact';
import Missing from './components/Missing';
import ContactSuccess from './components/ContactSuccess';
import ContactError from './components/ContactError';

function App() {
  return (
    <Routes>
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
        <Route path="*" element={<Missing /> } />
      </Route>
    </Routes>
  );
}

export default App;
