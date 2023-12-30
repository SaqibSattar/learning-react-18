import React, { Component } from "react";

class Count extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  incrementCount() {
    // this.setState({
    //     count: this.state.count + 1
    // }, () => {
    //     console.log(this.state.count)
    // })

    // this.setState((prevState) => ({
    //    count: prevState + 1
    // }))

    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  decrementCount() {
    this.setState((prevState) => {
            return {
                count: prevState.count < 1 ? 0 : prevState.count - 1,
            }
    });
  }

  incrementCountByFive() {
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
  }

  decrementCountByFive() {
    this.decrementCount();
    this.decrementCount();
    this.decrementCount();
    this.decrementCount();
    this.decrementCount();
  }

  render() {
    return (
      <div>
        <h3>Count - {this.state.count}</h3>
        <button
          onClick={() => {
            this.incrementCount();
          }}
        >
          increment by One
        </button>
        <button
          onClick={() => {
            this.incrementCountByFive();
          }}
        >
          increment by Five
        </button>
        <button
          onClick={() => {
            this.decrementCount();
          }}
        >
          decrement by One
        </button>
        <button
          onClick={() => {
            this.decrementCountByFive();
          }}
        >
          decrement by Five
        </button>
      </div>
    );
  }
}

export default Count;
