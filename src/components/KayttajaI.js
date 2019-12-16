import React, { Component } from "react";
import "./kstyles.css";

class KayttajaI extends Component {
  state = {
    userI: "",
    passI: ""
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.KayttajaI([this.state.userI, this.state.passI]);
    this.setState({ userI: "" });
    this.setState({ passI: "" });
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
                name="userI"
                value={this.state.userI}
                onChange={this.onChange}
              />
              <label for="username">Username</label>
            </div>
            <div className="input-field col s5 z-depth-2">
              <input
                id="password"
                type="text"
                name="passI"
                value={this.state.passI}
                onChange={this.onChange}
              />
              <label for="password">Password</label>
            </div>
            <button
              className="input-field bb col s2 z-depth-4 waves-effect waves-light"
              type="submit"
              name="action"
            >
              CREATE
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default KayttajaI;
