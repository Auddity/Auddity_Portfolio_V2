import { useParams, Link } from "react-router-dom"
import PortfolioData from "../data/portfolioData.json"
import img1 from '../images/SplitterAppScreenShot.png'
import img2 from '../images/TeamStatTrackerApp ScreenShot 2022-02-08.png'
import img3 from '../images/Shortly Screenshot 2022-02-08.png'
import img4 from '../images/Spinner-ScreenShot.png'
import img5 from '../images/crowdfund-fem-screenshot.png'
import 'remixicon/fonts/remixicon.css'
import '../scss/_PortfolioItem.scss'

const PortfolioItem = () => {
  const { id } = useParams();
  const portData = PortfolioData.projects;
  const imageArray = [img1, img2, img3, img4, img5];
  const getProject = (id) => portData.find(item => item.id === +id)
  const project = getProject(id);
 
  return (
    <main className="PortfolioItem">
      <Link className="back"
        to={`/portfolio`}
      >
        <i className="ri-arrow-drop-left-fill"></i>
        <p>
          Back to Portfolio
        </p>
      </Link>
      <article className="project">
        <h1>{project.title}</h1>
          <div className="project-anchor-content">
        <a href={project.live_url} target="blank">
            <div className="overlay-content">
              <p>Go to live site</p>
            </div>
            <img src={imageArray[id - 1]} alt={project.title} />
            <div className="overlay-bg"></div>
        </a>
          </div>
        <ul className="project-features">
          {project.features.map((feature, idx) => {
            return <li key={idx}>{feature}</li>
          })}
        </ul>
      </article>
    </main>
  )
}

export default PortfolioItem