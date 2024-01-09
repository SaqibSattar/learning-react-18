import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          count: 0,
        };
      }
    
      incrementCount = () => {
        this.setState((prevState) => {
          console.log(prevState);
          return { count: prevState.count + 1 };
        });
      };

  render() {
    return (
    //   <div>{this.props.render(this.state.count, this.incrementCount)}</div>
      <div>{this.props.children(this.state.count, this.incrementCount)}</div>
    )
  }
}

export default Counter