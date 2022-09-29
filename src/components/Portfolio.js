import portfolioData from '../data/portfolioData.json'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  const [portData, setPortData] = useState({});
  

  useEffect(() => {
    const fetchPortData = async () => {
      try {
        const data = await (portfolioData)
        setPortData(data.projects)
      } catch(err) {
        console.log(err)
      }
    }

    fetchPortData();
  }, [])
  
  console.log(portData)

  return (
    <main className='Portfolio'>
      {portData.map(item => {
        return <div 
          className="port-item-link"
          key={item.id}
        >
          {item.title}
          {item.id}
        </div>
      })}
    </main>
  )
}

export default Portfolio