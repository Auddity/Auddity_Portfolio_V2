import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="Nav">
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Nav;