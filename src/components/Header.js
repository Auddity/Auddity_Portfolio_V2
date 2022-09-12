import '../css/Header.css'
import { Link } from 'react-router-dom';
import logo from '../images/Auddity Logo 2013.png'
import Nav from './Nav';

const Header = () => {
  return (

    <header className="Header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Auddity Logo" />
        </Link>
      </div>
      Header
      <Nav />
    </header>
  )
}

export default Header