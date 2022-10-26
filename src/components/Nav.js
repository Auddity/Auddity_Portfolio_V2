import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AnimatedHeaderLink } from '../Animations/AnimatedLink';
import useWindowSize from '../hooks/useWindowSize';
import { FaBars } from 'react-icons/fa';
import '../scss/_Nav.scss'

const Nav = () => {
  const { width } = useWindowSize();
  const [open, setOpen] = useState(false);
  const rotateBars = {
    transform: 'rotate(-90deg)',
  }
  const handleMenu = () => {
    if(width > 768) return
    setOpen(prev => !prev)
  }

  return (
    <nav className={open ? "Nav showNav" : "Nav"}>
      {width < 768 &&
        <div className="bar-icon"
        style={open ? rotateBars : null}
        onClick={handleMenu}
        >
          <FaBars />
        </div>
      }
      
      {(width > 768 || open) &&
        <div className="link-container">
          <AnimatedHeaderLink><Link to="/portfolio" onClick={handleMenu} className="nav-link">
            Portfolio</Link>
          </AnimatedHeaderLink>
          <AnimatedHeaderLink>
            <Link to="/about" onClick={handleMenu}className="nav-link">
             About
            </Link>
          </AnimatedHeaderLink>
          <AnimatedHeaderLink>
            <Link to="/contact" onClick={handleMenu}className="nav-link">Contact</Link>
          </AnimatedHeaderLink>
        </div>
      }
    </nav>
  )
}

export default Nav;