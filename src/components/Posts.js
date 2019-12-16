import React, { Component } from "react";
class Posts extends Component {
  render() {
    return this.props.posts.map(func => (
      <div className="row">
        <p className="col s9">
          &nbsp;{"kommentti: "}&nbsp;&nbsp;&nbsp; {func.title}
        </p>
        <p className="col s1">&nbsp;{func.postid}</p>
        <p className="col s2">&nbsp;{func.time}</p>
      </div>
    ));
  }
}
export default Posts;
