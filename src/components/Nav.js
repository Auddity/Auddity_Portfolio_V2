import { Link } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';

const Nav = () => {
  const { width } = useWindowSize();

  return (
    <nav className="Nav">
      {width < 768 ?
        <div className="bar-icon">
        BARS
        </div>
      :
        <div className="link-container">
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      }
    </nav>
  )
}

export default Nav;