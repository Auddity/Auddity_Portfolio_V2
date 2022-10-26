import { useState } from 'react'
import '../scss/_Footer.scss'
import { FaGithub, FaLinkedin, FaCodepen, FaMedium, FaImdb } from 'react-icons/fa'
import { TiLocationArrowOutline } from 'react-icons/ti'
import { AnimatedFooterLink }from '../Animations/AnimatedLink'
import useWindowSize from '../hooks/useWindowSize.js'

const Footer = () => {
  const { width } = useWindowSize();
  const date = new Date();
  const year = date.getFullYear();

  const [showFooter, setShowFooter] = useState(false);
  const handleClick = () => {
    setShowFooter(prev => !prev);
  }

  const positionArrow = () => {
    if(width < 361 && showFooter) {
      return "1rem"
    } else if( width > 361 && showFooter) {
      return "4rem"
    } else {
      return "1rem"
    }
  }

  const footerStyles = {
    transform: showFooter ? "translateY(0)" : "translateY(100%)",
    boxShadow: showFooter ? "0 0 1rem hsl(199, 100%, 50%)": "-81px 0 1.5rem hsl(199, 100%, 50%)"
  }

  const tabStyles = {
    transform: showFooter ? "skew(0)" : "skew(-45deg)",
    right: showFooter ? "-93px" : "-40px"
  }

  const arrowStyles = {
    transform: showFooter ? "rotate(135deg)" : "rotate(-45deg)",
    top: showFooter ? "2rem" : "-4rem",
    right: positionArrow()
  }

  return (
    <footer className="Footer main"
    style={footerStyles}>
      <div className="Footer-container">
        <div className="links-container">
          <AnimatedFooterLink>
            <a href="https://github.com/Auddity" className='icon-anchor'>
              <FaGithub className="icon" />
            </a>
          </AnimatedFooterLink>
          <AnimatedFooterLink>
            <a href="https://www.linkedin.com/in/james-bretz-b80242180/">
              <FaLinkedin className="icon" />
            </a>
          </AnimatedFooterLink>
          <AnimatedFooterLink>
            <a href="https://codepen.io/Auddity">
              <FaCodepen className="icon" />
            </a>
          </AnimatedFooterLink>
          <AnimatedFooterLink>
            <a href="https://medium.com/@jay.auddity">
              <FaMedium className="icon" />
            </a>
          </AnimatedFooterLink>
          <AnimatedFooterLink>
            <a href="https://www.imdb.com/name/nm5652671/">
              <FaImdb className="icon" />
            </a>
          </AnimatedFooterLink>
        </div>
        <div className="copy-write-container">
          <p>copyright Auddity &copy; {year}</p>
        </div>
      </div>
      <div className="Footer-tab" onClick={handleClick} style={tabStyles}></div>
      <TiLocationArrowOutline className="arrow"
      style={arrowStyles} onClick={handleClick}
      />
    </footer>
  )
}

export default Footer