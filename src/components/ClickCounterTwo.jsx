import React, { Component } from "react";

class ClickCounterTwo extends Component {
  

  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h2>ClickCounterTwo</h2>
        <button onClick={incrementCount}> Clicked {count} times</button>
      </div>
    );
  }
}

export default ClickCounterTwo;
