import portfolioData from '../data/portfolioData.json'
import { Link } from 'react-router-dom'
import img from '../images/SplitterAppScreenShot.png'
import '../scss/_Portfolio.scss'



const Portfolio = () => {
  const portData = portfolioData.projects;

  return (
    <main className='Portfolio'>
      <div className="Portfolio-link-container">
        {portData.map(item => {
          // {console.log(item.image)}
          return (

            <Link 
            className="port-item-link"
            key={item.id}
            to={`portfolio/${item.id}`}
            >
              <div className="port-item-link-content">
                <img src={item.image} alt={item.title} />
                
              </div>
            </Link>
          
          )
        })}
      </div>
    </main>
  )
}

export default Portfolio