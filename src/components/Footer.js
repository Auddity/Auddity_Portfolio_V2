import '../scss/_Footer.scss'
import { FaGithub, FaLinkedin, FaCodepen, FaMedium, FaImdb } from 'react-icons/fa'

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="Footer">
      <div className="Footer-container">
        <div className="links-container">
          <a href="https://github.com/Auddity">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/james-bretz-b80242180/">
            <FaLinkedin />
          </a>
          <a href="https://codepen.io/Auddity">
            <FaCodepen />
          </a>
          <a href="https://medium.com/@jay.auddity">
            <FaMedium />
          </a>
          <a href="https://www.imdb.com/name/nm5652671/">
            <FaImdb />
          </a>
        </div>
        <div className="copy-write-container">
          <p>copyright Auddity &copy; {year}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer