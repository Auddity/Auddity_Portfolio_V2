import { Link } from 'react-router-dom'
import '../scss/_About.scss';
import logo from '../images/Auddity Logo 2013.png'
import alt_logo from '../images/Auddity Wave Logo Source.jpg'

const About = () => {
  return (
    <main className="About">
      <div className="About-logo-container">
        <img src={logo} alt="Auddity Logo" />
      </div>
      <div className="About-info-container">
        <img src={alt_logo} alt="Alternate Logo" />
        <p>My name is James Bretz and for the past two years I've been teaching myself front end development on a part-time basis.  I'm eager for full-time opportunities to apply my skills and grow my knowledge of front end development. Thank you for visiting my website and feel free to contact me.</p>
      </div>
      <Link to={'/contact'}></Link>
    </main>
  )
}

export default About