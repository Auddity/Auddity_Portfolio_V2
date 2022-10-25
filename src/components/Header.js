import '../scss/_Header.scss'
import { Link } from 'react-router-dom';
import AnimatedLink from '../Animations/AnimatedLinks';
import Nav from './Nav';

const Header = () => {
  return (

    <header className="Header">
      <div className="Header-content-ctnr">
        <div className="logo-container">
          <AnimatedLink>
            <Link to="/">
              <p>Home</p>
            </Link>
          </AnimatedLink>
        </div>
        <Nav />
      </div>
    </header>
  )
}

export default Header