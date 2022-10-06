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

      <div className="About-contact-animation-container">
        <Link to={'/contact'}>
          <div className="route">
            <i className='ri-send-plane-fill plane'></i>
          </div>
          <p>
            Get in touch  
          </p>
        </Link>
      </div>
      
    </main>
  )
}

export default About