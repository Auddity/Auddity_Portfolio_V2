import { Link } from 'react-router-dom'
import '../scss/_Missing.scss'
import AnimatedPage from '../Animations/AnimatedPage';

const Missing = () => {
  return (
    <AnimatedPage>
      <main className="Missing height-adjust">
        <div className="container">
          <h1>Non esset</h1>
          <p>Sorry, something is wrong and the page does not exist.</p>
          <Link to='/'>Return to Home Page</Link>
          <p>Or message me with what you're looking for</p>
          <Link to='/contact'>Contact Me</Link>
        </div>
      </main>
    </AnimatedPage>
  )
}

export default Missing