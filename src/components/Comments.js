import React, { Component } from "react";
import "./kstyles.css";
class Comments extends Component {
  state = {
    Comment: ""
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.Comments([this.state.Comment]);
    this.setState({ Comment: "" });
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="row z-depth-4">
            <div className="input-field col s10">
              <input
                id="username"
                type="text"
                name="Comment"
                value={this.state.Comment}
                onChange={this.onChange}
                // class="validate"
              />
              <label for="username">Comment</label>
            </div>
            <button
              id="postButton"
              className="input-field bb col s2 z-depth-4 waves-effect waves-light"
              type="submit"
              name="action"
            >
              POST
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Comments;
