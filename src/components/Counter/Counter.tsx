import React from 'react'
import './Counter.css'

class Counter extends React.Component {
  handleIncrement = () => {
    console.log("click");
    console.log(this);
  }

  render() {
    return (
      <div className="Counter">
        <span className="value">0</span>
        <div className="Counter__control">
          <button type="button" onClick={() => this.handleIncrement}>Увеличить на 1</button>
          <button type="button">Уменьшить на 1</button>
        </div>
      </div>
    )
  }
}

export default Counter;