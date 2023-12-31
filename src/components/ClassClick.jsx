import React, { Component } from 'react'

class ClassClick extends Component {
  handleClick() {
    console.log('classClick')
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click here</button>
      </div>
    )
  }
}

export default ClassClick
