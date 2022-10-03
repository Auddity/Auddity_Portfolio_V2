import { useParams } from "react-router-dom"
import PortfolioData from "../data/portfolioData.json"
import img1 from '../images/SplitterAppScreenShot.png'
import img2 from '../images/TeamStatTrackerApp ScreenShot 2022-02-08.png'
import img3 from '../images/Shortly Screenshot 2022-02-08.png'
import img4 from '../images/Spinner-ScreenShot.png'
import img5 from '../images/crowdfund-fem-screenshot.png'
import '../scss/_PortfolioItem.scss'

const PortfolioItem = () => {
  const { id } = useParams();
  const portData = PortfolioData.projects;
  const imageArray = [img1, img2, img3, img4, img5];
  const getProject = (id) => portData.find(item => item.id === +id)
  const project = getProject(id);
 

  return (
    <main className="PortfolioItem">
      <article className="project">
        <h1>{project.title}</h1>
        <img src={imageArray[id - 1]} alt={project.title} />
        <ul className="features">
          {project.features.map((feature, idx) => {
            return <li key={idx}>{feature}</li>
          })}
        </ul>
      </article>
    </main>
  )
}

export default PortfolioItem