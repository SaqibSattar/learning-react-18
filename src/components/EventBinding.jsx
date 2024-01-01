import React, { Component } from 'react'

class EventBinding extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Hi',
    }
  }

  handleClick() {
    this.setState({
      message: 'Bye',
    })
  }

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.handleClick.bind(this)}>Click</button>
      </div>
    )
  }
}

export default EventBinding
