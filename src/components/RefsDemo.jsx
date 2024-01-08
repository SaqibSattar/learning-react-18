import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
      super(props)
    this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    handleClick = () => {
        alert(this.inputRef.current.value)
    }

  render() {
    return (
      <div>
      <input type='text' ref={this.inputRef}/>
      <br />
      <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}

export default RefsDemo