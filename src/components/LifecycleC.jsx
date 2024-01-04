import React, { Component } from 'react'

class LifecycleC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Saqi'
      }
      console.log('LifecycleC constructor')
    }

    static getDerivedStateFromProps(state, props) {
        console.log('LifecycleC getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('LifecycleC componentDidMount')
    }

  render() {
    console.log('LifecycleC render')
    return (
      <p>LifecycleC</p>
    )
  }
}

export default LifecycleC