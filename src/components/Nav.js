import { Link } from 'react-router-dom';
import { useState } from 'react';
import AnimatedLink from '../Animations/AnimatedLinks';
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
          <AnimatedLink>
            <Link to="/portfolio" onClick={handleMenu}>Portfolio</Link>
          </AnimatedLink>
          <AnimatedLink>
            
            <Link to="/about" onClick={handleMenu}className="nav-link">About</Link>
          </AnimatedLink>
          <AnimatedLink>

            <Link to="/contact" onClick={handleMenu}className="nav-link">Contact</Link>
          </AnimatedLink>
        </div>
      }
    </nav>
  )
}

export default Nav;