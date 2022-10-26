import '../scss/_Hero.scss'
import logo from '../images/Auddity Logo 2013.png'
import { FaHtml5, FaCss3, FaSass } from 'react-icons/fa'
import { SiJavascript, SiReact } from 'react-icons/si'
import AnimatedPage from '../Animations/AnimatedPage'


const Home = () => {
  return (
    <AnimatedPage>
      <main className="Hero height-adjust" >
        <div className="Hero-logo-container">
          <img src={logo} alt="Auddity Logo" />
        </div>
        <div className="Hero-info-container">
          <h1>Front End Develompent</h1>
          <div className="tech-list">
            <div className="tech-list-item-container">
              <FaHtml5 ></FaHtml5>
              <p>Html</p>
            </div>
            <div className="tech-list-item-container">
              <FaCss3></FaCss3>
              <p>css</p>
            </div>
            <div className="tech-list-item-container">
              <FaSass></FaSass>
              <p>Sass</p>
            </div>
            <div className="tech-list-item-container">
              <SiJavascript></SiJavascript>
              <p>JavaScript</p>
            </div>
            <div className="tech-list-item-container">
              <SiReact></SiReact>
              <p>React</p>
            </div>
          </div>
        </div>
      </main>  
    </AnimatedPage>
  )
}

export default Home