import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true,
    }
  }
  render() {
    let message
    if (this.state.isLoggedIn) {
      message = <div>Hello Saqib</div>
    } else {
      message = <div>Hello User</div>
    }
    return <div>{message}</div>
    // if (this.state.isLoggedIn) {
    //   return <div>Hello Saqib</div>
    // } else {
    //   return <div>Hello User</div>
    // }
  }
}

export default UserGreeting
