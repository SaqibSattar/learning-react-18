import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comment: '',
         topic: 'React'
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

    handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state)

    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
