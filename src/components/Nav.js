import { Link } from 'react-router-dom';
import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import 'remixicon/fonts/remixicon.css'
import '../scss/Nav.scss'

const Nav = () => {
  const { width } = useWindowSize();
  const [open, setOpen] = useState(false);
  const rotateBars = {
    transform: 'rotate(-90deg)',
  }
  const handleMenu = () => {
    setOpen(prev => !prev)
  }

  return (
    <nav className={open ? "Nav showNav" : "Nav"}>
      {width < 768 ?
        <div className="bar-icon"
          style={open ? rotateBars : null}
          onClick={handleMenu}
        >
          <i className="ri-menu-line" ></i>
        </div>
      :
        <div className="link-container"
        >
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      }
    </nav>
  )
}

export default Nav;