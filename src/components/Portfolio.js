import portfolioData from '../data/portfolioData.json'
import img1 from '../images/SplitterAppScreenShot.png'
import img2 from '../images/TeamStatTrackerApp ScreenShot 2022-02-08.png'
import img3 from '../images/Shortly Screenshot 2022-02-08.png'
import img4 from '../images/Spinner-ScreenShot.png'
import img5 from '../images/crowdfund-fem-screenshot.png'
import { Link } from 'react-router-dom'
import '../scss/_Portfolio.scss'

const Portfolio = () => {
  const portData = portfolioData.projects;
  const imageArray = [img1, img2, img3, img4, img5];

  const buildInfoFunc = (info) => {
    return info.split(',').join(' / ');
  }

  return (
    <main className='Portfolio'>
      <h1>Select to view details of the project</h1>
      <div className="Portfolio-links-container">
        {portData.map((item, idx)=> {
          return (
            <Link 
            className="port-item-link"
            key={item.id}
            to={`portfolio/${item.id}`}
            >
              <div className="port-item-link-content">
                <div className="overlay-content">
                  <p>{item.desc}</p>
                </div>
                <div className="overlay-bg"><p></p></div>
                <img src={imageArray[idx]} alt={item.title} />  
                <div className="port-item-link-content-info">
                  <p>{item.title}</p>
                  <p>{buildInfoFunc(item.built_with)}</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </main>
  )
}

export default Portfolio