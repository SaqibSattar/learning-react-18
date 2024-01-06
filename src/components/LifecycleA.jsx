import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "User",
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(state, props) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
        name: 'Saqi'
    })
  }

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <p>LifecycleA</p>
        <button onClick={this.changeState}>Click</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
