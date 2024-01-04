import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Saqi'
      }
      console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(state, props) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

  render() {
    console.log('LifecycleA render')
    return (
      <div>
      <p>LifecycleA</p>
      <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA