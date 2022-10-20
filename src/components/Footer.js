import { useState } from 'react'
import '../scss/_Footer.scss'
import { FaGithub, FaLinkedin, FaCodepen, FaMedium, FaImdb } from 'react-icons/fa'
import { TiLocationArrowOutline } from 'react-icons/ti'

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const [showTab, setShowTab] = useState(false);
  const handleClick = () => {
    setShowTab(prev => !prev);
  }

  const footerStyles = {
    transform: showTab ? "translateY(0)" : "translateY(100%)"
  }
  const arrowStyles = {
    transform: showTab ? "rotate(135deg)" : "rotate(-45deg)",
    top: showTab ? "2rem" : "-4rem"
  }

  return (
    <footer className="Footer main"
    style={footerStyles}>
      <div className="Footer-container">
        <div className="links-container">
          <a href="https://github.com/Auddity" className='icon-anchor'>
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/james-bretz-b80242180/">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://codepen.io/Auddity">
            <FaCodepen className="icon" />
          </a>
          <a href="https://medium.com/@jay.auddity">
            <FaMedium className="icon" />
          </a>
          <a href="https://www.imdb.com/name/nm5652671/">
            <FaImdb className="icon" />
          </a>
        </div>
        <div className="copy-write-container">
          <p>copyright Auddity &copy; {year}</p>
        </div>
      </div>
      {/* <div className="Footer-showBtn-container"> */}
        {!showTab && 
          <div className="Footer-tab" onClick={handleClick} >

          </div>
        }
        <TiLocationArrowOutline className='arrow' 
        style={arrowStyles} onClick={handleClick}
        />
      {/* </div> */}
    </footer>
  )
}

export default Footer