import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    activeButton: languageFiltersData[0].language,
    cardArray: [],
    isLoading: false,
  }

  componentDidMount() {
    this.renderingCards()
  }

  changeTabId = tabId => {
    this.setState({activeButton: tabId}, this.renderingCards)
  }

  renderingCards = async () => {
    this.setState({isLoading: true})
    const {activeButton} = this.state

    const url = `https://apis.ccbp.in/popular-repos?language=${activeButton}`
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      console.log(data)

      const cardsList = data.popular_repos.map(eachData => ({
        name: eachData.name,
        id: eachData.id,
        issuesCount: eachData.issues_count,
        forksCount: eachData.forks_count,
        starsCount: eachData.stars_count,
        avatarUrl: eachData.avatar_url,
      }))
      this.setState({cardArray: cardsList, isLoading: false})
    } else {
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
            alt="failure view"
          />
        </div>
      )
    }
  }

  renderingRepositoryItem = () => {
    const {cardArray} = this.state

    return (
      <ul className="repository-ul">
        {cardArray.map(eachCard => (
          <RepositoryItem key={eachCard.id} cardDetails={eachCard} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  render() {
    const {activeButton, isLoading} = this.state
    return (
      <div className="main-container">
        <div className="internal-container">
          <h1 className="main-heading">Popular</h1>
          <div className="language-buttons-container">
            <ul className="language-ul">
              {languageFiltersData.map(eachLanguage => (
                <LanguageFilterItem
                  key={eachLanguage.id}
                  languageDetails={eachLanguage}
                  changeTabId={this.changeTabId}
                  isActive={activeButton === eachLanguage.id}
                />
              ))}
            </ul>
          </div>
          {isLoading ? this.renderLoader() : this.renderingRepositoryItem()}
        </div>
      </div>
    )
  }
}
export default GithubPopularRepos
