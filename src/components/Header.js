import '../scss/_Header.scss'
import { Link } from 'react-router-dom';
import { AnimatedHeaderLink } from '../Animations/AnimatedLink';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-content-ctnr">
        <div className="logo-container">
          <AnimatedHeaderLink>
            <Link to="/">
              Home
            </Link>
          </AnimatedHeaderLink>
        </div>
        <Nav />
      </div>
    </header>
  )
}

export default Header