import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
      super(props)
    this.inputRef = React.createRef();
    this.cbRef = null
    this.setCbRef = element => {
        this.cbRef = element
    }
    }

    componentDidMount() {
        if (this.cbRef) {
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }

    handleClick = () => {
        alert(this.inputRef.current.value)
    }

  render() {
    return (
      <div>
      <input type='text' ref={this.inputRef}/>
      <br />
      <input type='text' ref={this.setCbRef}/>
      <br />
      <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}

export default RefsDemo