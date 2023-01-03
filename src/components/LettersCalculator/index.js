import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
    count: 0,
  }

  onChangeInputValue = event => {
    const {value} = event.target
    const countValue = value.length
    this.setState({
      searchInput: value,
    })
    this.setState({
      count: countValue,
    })
  }

  render() {
    const {count, searchInput} = this.state
    return (
      <div className="app-container">
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
        </div>
        <div className="calculator-container">
          <h1 className="heading">
            Calculate the Letters <br /> you enter
          </h1>
          <label htmlFor="input" className="description">
            Enter the phrase
          </label>
          <input
            type="text"
            id="input"
            className="input-bar"
            value={searchInput}
            onChange={this.onChangeInputValue}
            placeholder="Enter the phrase"
          />
          <div className="count-container">
            <p className="count">No.of letters: {count}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
