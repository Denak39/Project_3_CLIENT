import React, { Component } from "react";
// import { UserContext } from "../Auth/UserContext";
import { withRouter } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
// import { Redirect } from "react-router-dom";

class FormLesson extends Component {
  state = {
    name: "",
    category: "",
    difficulty: "",
    content: "",
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .lesson(this.state)
      .then((data) => {
        this.context.setUser(data);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
        // Display error message here, if you set the state
      });
  };

  render() {
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          onChange={this.handleChange}
          value={this.state.email}
          type="name"
          id="name"
          name="name"
        />
        <label htmlFor="category">Main category</label>
        <select name="category" id="category" required>
          <option value="-1" disabled selected>
            Choose a category
          </option>
          <option value="action">action</option>
          <option value="RPG">RPG</option>
          <option value="fighting">fighting</option>
        </select>
        <label htmlFor="difficulty">Difficulty</label>
        <input type="password" id="password" name="password" />
        <button>Submit</button>
      </form>
    );
  }
}

export default withRouter(FormLesson);
