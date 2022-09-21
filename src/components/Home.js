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
          <p>Html</p>
          <p>cSs</p>
          <p>Sass</p>
          <p>JavaScript</p>
          <p>React</p>
        </div>
      </div>
    </main>
  )
}

export default Home