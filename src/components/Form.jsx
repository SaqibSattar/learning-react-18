import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',

      }
    }
    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleCommentChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    handleTopicChange = (e) => {
        this.setState({
            topic: e.target.value
        })
    }

  render() {
    return (
      <form>
        <div>
        <label>Username</label>
        <input value={this.state.username} onChange={this.handleUsernameChange}/>
        </div>
        <div>
        <br />
        <label>Comment</label>
        <textarea value={this.state.comment} onChange={this.handleCommentChange}/>
        </div>
        <div>
        <br />
        <label>Topic</label>
        <select value={this.state.topic} onChange={this.handleTopicChange} >
        <option value='React'>React</option>
        <option value='Angular'>Angular</option>
        <option value='Vue'>Vue</option>
        </select>
        </div>
      </form>
    );
  }
}

export default Form;
