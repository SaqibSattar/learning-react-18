import React, { Component } from 'react'
import LifecycleC from './LifecycleC'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Saqi'
      }
      console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(state, props) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

  render() {
    console.log('LifecycleB render')
    return (
      <div>
      <p>LifecycleB</p>
      <LifecycleC />
      </div>
    )
  }
}

export default LifecycleB