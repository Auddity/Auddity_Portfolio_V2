import { Link } from 'react-router-dom';
import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import 'remixicon/fonts/remixicon.css'
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
          <i className="ri-menu-line" ></i>
        </div>
      }
      
      {(width > 768 || open) &&
        <div className="link-container">
          <Link to="/portfolio" onClick={handleMenu}>Portfolio</Link>
          <Link to="/about" onClick={handleMenu}>About</Link>
          <Link to="/contact" onClick={handleMenu}>Contact</Link>
        </div>
      }
    </nav>
  )
}

export default Nav;