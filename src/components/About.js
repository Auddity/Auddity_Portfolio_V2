import { Link } from 'react-router-dom'
import { RiSendPlaneFill } from 'react-icons/ri'
import useWindowSize from '../hooks/useWindowSize';
import '../scss/_About.scss';
import logo from '../images/Auddity Logo 2013.png'
import wave_logo from '../images/Auddity Wave Logo Source.jpg'

const About = () => {
  const { width } = useWindowSize();

  return (
    <main className="About">
      <div className="About-logo-container">
        <img src={logo} alt="Auddity Logo" />
      </div>
      <div className="About-info-container">
        {width > 1028 && 
          <div className="wave-logo-container">
            <img src={wave_logo} alt="Auddity Sound Wave Logo" />
          </div>
        }
        <p>My name is James Bretz and for the past two years I've been teaching myself front end development on a part-time basis.  I'm eager for full-time opportunities to apply my skills and grow my knowledge of front end development. Thank you for visiting my website and feel free to contact me.</p>
      </div>

      <div className="About-contact-animation-container">
        <Link to={'/contact'}>
          <div className="route">
            <RiSendPlaneFill className='plane' />
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