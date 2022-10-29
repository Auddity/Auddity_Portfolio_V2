import { Link } from 'react-router-dom';
import AnimatedPage from '../Animations/AnimatedPage.js'
import '../scss/_ContactSuccess.scss';
import logo from '../images/Auddity Logo 2013.png'

const ContactSuccess = () => {
  return (
    <AnimatedPage>
      <main className="ContactSuccess height-adjust">
        <div className="logo-container">
          <img src={logo} alt="Auddity Logo" />
        </div>
        <div className="info-container">
          <h1>Thank you for messaging me</h1>
          <p>Where would you like to go from here?</p>
          <div className="link-container">
            <>
              <Link to="/" className='link'>Home</Link>
              <Link to="/portfolio" className='link'>Portfolio</Link>
            </>
            <p>or check out my sound design work</p>
            <a href="https://www.auddityllc.com/" className='link'>Auddity LLC</a>
          </div>
        </div>
      </main>
    </AnimatedPage>
  )
}

export default ContactSuccess