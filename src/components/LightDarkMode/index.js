// Write your code here

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    contentContainerClassName: 'dark-mode-content-container',
    mainHeadingClassName: 'dark-mode-main-heading',
    changeModeButtonText: 'Light Mode',
  }

  onClickModeButton = () => {
    const {changeModeButtonText} = this.state
    if (changeModeButtonText === 'Light Mode') {
      this.setState(prevState => ({
        contentContainerClassName: 'light-mode-content-container',
        mainHeadingClassName: 'light-mode-main-heading',
        changeModeButtonText: 'Dark Mode',
      }))
    } else {
      this.setState(prevState => ({
        contentContainerClassName: 'dark-mode-content-container',
        mainHeadingClassName: 'dark-mode-main-heading',
        changeModeButtonText: 'Light Mode',
      }))
    }
  }

  render() {
    const {
      contentContainerClassName,
      mainHeadingClassName,
      changeModeButtonText,
    } = this.state
    return (
      <div className="bg-container">
        <div className={contentContainerClassName}>
          <h1 className={mainHeadingClassName}> Click To Change Mode </h1>
          <button
            className="change-mode-button"
            onClick={this.onClickModeButton}
          >
            {changeModeButtonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
