// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {cardDetails} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = cardDetails
  return (
    <li className="each-card-item">
      <img src={avatarUrl} className="logo-image" alt={name} />
      <h1 className="card-heading">{name}</h1>
      <div className="stars-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png "
          alt="stars"
          className="logos"
        />
        <p>{starsCount} stars</p>
      </div>

      <div className="stars-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="logos"
        />
        <p>{forksCount} forks</p>
      </div>

      <div className="stars-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="logos"
        />
        <p>{issuesCount} open issues</p>
      </div>
    </li>
  )
}
export default RepositoryItem
