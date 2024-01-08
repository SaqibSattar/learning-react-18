import React, { Component } from "react";
import Input from "./Input";

export class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  handleClick = () => {
    this.componentRef.current.focusInput();
  }

  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <br />
        <button onClick={this.handleClick}>Focus Input</button>
      </div>
    );
  }
}

export default FocusInput;
