import React, { Component } from "react";
import "./kstyles.css";
class Kayttaja extends Component {
  state = {
    user: "",
    pass: ""
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.Kayttaja([this.state.user, this.state.pass]);
    this.setState({ user: "" });
    this.setState({ pass: "" });
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="row z-depth-4">
            <div className="input-field col s5 z-depth-2">
              <input
                id="username"
                type="text"
                name="user"
                value={this.state.user}
                onChange={this.onChange}
              />
              <label for="username">Username</label>
            </div>
            <div className="input-field col s5 z-depth-2">
              <input
                id="password"
                type="text"
                name="pass"
                value={this.state.pass}
                onChange={this.onChange}
              />
              <label for="password">Password</label>
            </div>
            <button
              className="input-field bb col s2 z-depth-4 waves-effect waves-light"
              type="submit"
              name="action"
            >
              LOG IN
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Kayttaja;
