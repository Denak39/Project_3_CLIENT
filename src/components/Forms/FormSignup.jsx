import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../Auth/UserContext";
import apiHandler from "../../api/apiHandler";
import { Redirect } from "react-router-dom";

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
        <label htmlFor="username">Username</label>
        <input
          onChange={this.handleChange}
          value={this.state.username}
          type="text"
          id="username"
          name="username"
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={this.handleChange}
          value={this.state.email}
          type="email"
          id="email"
          name="email"
          placeholer="hacker@hack.com"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={this.handleChange}
          value={this.state.password}
          type="password"
          id="password"
          name="password"
        />
        <label htmlFor="accountType">Role</label>
        <input
          onChange={this.handleChange}
          value={this.state.password}
          type="accountType"
          id="accountType"
          name="accountType"
        />
        <label htmlFor="profileImage">Image:</label>
        <input
          onChange={this.handleChange}
          value={this.state.profileImage}
          type="file"
          name="image"
          id="image"
          alt=""
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default withRouter(FormSignup);
