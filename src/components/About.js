import { Link } from 'react-router-dom'
import '../scss/_About.scss';
import logo from '../images/Auddity Logo 2013.png'
import wave_logo from '../images/Auddity Wave Logo Source.jpg'

const About = () => {
  return (
    <main className="About">
      <div className="About-logo-container">
        <img src={logo} alt="Auddity Logo" />
      </div>
      <div className="About-info-container">
        <div className="wave-logo-container">
          <img src={wave_logo} alt="Auddity Sound Wave Logo" />
        </div>
        <p>My name is James Bretz and for the past two years I've been teaching myself front end development on a part-time basis.  I'm eager for full-time opportunities to apply my skills and grow my knowledge of front end development. Thank you for visiting my website and feel free to contact me.</p>
      </div>
      <Link to={'/contact'}>
        <i className='ri-send-plane-fill'></i>
        <span>
          Get in touch  
        </span>
      </Link>
    </main>
  )
}

export default About