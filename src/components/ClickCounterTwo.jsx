import React, { Component } from "react";

class ClickCounterTwo extends Component {
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
        <h2>ClickCounterTwo</h2>
        <button onClick={this.incrementCount}> Clicked {count} times</button>
      </div>
    );
  }
}

export default ClickCounterTwo;
