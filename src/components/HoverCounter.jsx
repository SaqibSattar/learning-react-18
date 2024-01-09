import React, { Component } from 'react'

export class HoverCounter extends Component {
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
            <h4 onMouseOver={this.incrementCount}>Hovered {count} times</h4>
          </div>
        );
      }
    }

export default HoverCounter