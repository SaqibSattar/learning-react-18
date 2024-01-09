import ComponentF from "./ComponentF";
import React, { Component } from "react";
import UserContext from './userContext'

export class ComponentE extends Component {
static contextType = UserContext

  render() {
    return <div>
    ComponentE context {this.context}
    <ComponentF />
    </div> 
  }
}
export default ComponentE;
