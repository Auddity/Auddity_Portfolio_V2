import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout'
import { Home } from './components/Home';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Missing } from './components/Missing';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
          {/* Individual despcription Pages of each portfolio project */}
        <Route />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Missing />} />
      <Route/>
    </Routes>
  );
}

export default App;
