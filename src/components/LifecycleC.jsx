import React, { Component } from "react";

class LifecycleC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Saqi",
    };
    console.log("LifecycleC constructor");
  }

  static getDerivedStateFromProps(state, props) {
    console.log("LifecycleC getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleC componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleC shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleC getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleC componentDidUpdate");
  }

  render() {
    console.log("LifecycleC render");
    return <p>LifecycleC</p>;
  }
}

export default LifecycleC;
