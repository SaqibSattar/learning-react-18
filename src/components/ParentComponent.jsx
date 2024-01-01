import React, { Component } from 'react'
import ChildrenComponent from './ChildrenComponent'

class ParentComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      parentName: 'Parent',
    }

    this.greetParent = this.greetParent.bind(this)
  }

  greetParent() {
    alert(`Hello ${this.state.parentName}`)
  }
  render() {
    return (
      <div>
        <ChildrenComponent greetHandle={this.greetParent} />
      </div>
    )
  }
}

export default ParentComponent
