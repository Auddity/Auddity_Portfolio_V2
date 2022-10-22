import '../scss/_Hero.scss'
import logo from '../images/Auddity Logo 2013.png'


const Home = () => {
  // TODO: Have a transition to scale and opacity for each component with a <main> tag
  // Give it a try with this API, ReactCSSTransitionGroup
  // https://reactjs.org/docs/animation.html
  // https://reactcommunity.org/react-transition-group/

  return (
    <main className="Hero height-adjust" >
      <div className="Hero-logo-container">
        <img src={logo} alt="Auddity Logo" />
      </div>
      <div className="Hero-info-container">
        <h1>Front End Develompent</h1>
        <div className="tech-list">
          <p>Html</p>
          <p>css</p>
          <p>Sass</p>
          <p>JavaScript</p>
          <p>React</p>
        </div>
      </div>
    </main>  
  )
}

export default Home