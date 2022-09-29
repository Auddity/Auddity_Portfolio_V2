import { useParams } from "react-router-dom"

const PortfolioItem = () => {
  const { id } = useParams()

  return (
    <main className="PortfolioItem">
      Item
    </main>
  )
}

export default PortfolioItem