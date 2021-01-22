import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../Auth/UserContext";
import apiHandler from "../../api/apiHandler";
import { Redirect } from "react-router-dom";
import FormSignupStyle from "../../styles/FormSignupStyle.css";

class FormSignup extends Component {
  static contextType = UserContext;

  state = {
    username: "",
    email: "",
    password: "",
    accountType: "",
    profileImage: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signup(this.state)
      .then((data) => {
        this.context.setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.context.user) {
      return <Redirect to="/" />;
    }

    return (
      <form
        autoComplete="off"
        className="form"
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      >
        <div className="form-div">
          <label htmlFor="username">Username</label>
          <input
            onChange={this.handleChange}
            value={this.state.username}
            type="text"
            id="username"
            name="username"
            className="signup signup-input"
          />
        </div>

        <div className="form-div">
          <label htmlFor="email">Email</label>
          <input
            onChange={this.handleChange}
            value={this.state.email}
            type="email"
            id="email"
            name="email"
            placeholer="hacker@hack.com"
            className="signup-input signup-email"
          />
        </div>

        <div className="form-div">
          <label htmlFor="password">Password</label>
          <input
            onChange={this.handleChange}
            value={this.state.password}
            type="password"
            id="password"
            name="password"
            className="signup-input signup-password"
          />
        </div>

        <div className="form-div">
        <label htmlFor="accountType">Role</label>
        <select
          onChange={this.handleChange}
          value={this.state.accountType}
          type="accountType"
          id="accountType"
          name="accountType"
          className="signup-input signup-accountType"
        >
          <option value="" disabled selected>
            Select your role
          </option>
          <option value="Student">Student</option>
          <option value="Trainer">Trainer</option>
        </select>
        </div>

        <div className="pic-upload form-div">
          <div>
            <label
              htmlFor="profileImage"
              className="profileImg-label label-file"
            >
              Avatar:
            </label>
          </div>
          <br />
          <div className="choose-file">
            <input
              onChange={this.handleChange}
              value={this.state.profileImage}
              type="file"
              name="profileImage"
              id="image"
              alt="profileImage"
              className="signup-profileImg input-file"
            />
          </div>
        </div>

        <button className="btn-transparent">Create account!</button>
      </form>
    );
  }
}

export default withRouter(FormSignup);
