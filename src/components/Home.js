import '../scss/_Hero.scss'
import logo from '../images/Auddity Logo 2013.png'

const Home = () => {
  return (
    <main className="Hero">
      <div className="Hero-logo-ctnr">
        <img src={logo} alt="Auddity Logo" />
      </div>
      <div className="Hero-info-ctnr">
        <h1>Front End Develompent</h1>
        <div className="tech-list">
          <p>HTML</p>
          <p>CSS</p>
          <p>SASS</p>
          <p>JAVASCRIPT</p>
          <p>REACT</p>
        </div>
      </div>
    </main>
  )
}

export default Home