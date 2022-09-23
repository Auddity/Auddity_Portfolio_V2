import '../scss/Header.scss'
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
  return (

    <header className="Header">
      <div className="Header-content-ctnr">
        <div className="logo-container">
          <Link to="/">
            <p>Home</p>
          </Link>
        </div>
        <Nav />
      </div>
    </header>
  )
}

export default Header