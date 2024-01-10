import React, { Component } from "react";
import axios from "axios";

export class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        this.setState({ posts: res.data });
      })
      .catch((error) => {
        this.setState({ errorMsg: "Something went wrong!" });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    console.log(posts)
    return (
      <div>
        PostList
        {posts.length > 0
          ? posts.map((post) => (
              <p key={post.id}>{post.title}</p>
            ))
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}


export default PostList;
