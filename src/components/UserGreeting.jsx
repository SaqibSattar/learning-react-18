import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
    }
  }
  render() {
    if (this.state.isLoggedIn) {
      return <div>Hello Saqib</div>
    } else {
      return <div>Hello User</div>
    }
  }
}

export default UserGreeting
