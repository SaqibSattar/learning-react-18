import React, { Component } from "react";

export class HoverCounterTwo extends Component {
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
    const { count } = this.state;
    return (
      <div>
        <h2 onMouseOver={this.incrementCount}> MouseOver {count} times</h2>
      </div>
    );
  }
}

export default HoverCounterTwo;
