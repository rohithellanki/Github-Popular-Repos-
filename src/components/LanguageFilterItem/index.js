// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, changeTabId, isActive} = props
  const {id, language} = languageDetails

  const activeTabColor = isActive ? 'active-btn' : 'not-active'

  const changingTab = () => {
    changeTabId(id)
  }

  return (
    <li className="each-language-button">
      <button
        className={`language-button ${activeTabColor}`}
        onClick={changingTab}
        type="button"
      >
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
