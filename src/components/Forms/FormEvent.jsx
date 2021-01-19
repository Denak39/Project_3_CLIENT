import React, { Component } from "react";
// import { UserContext } from "../Auth/UserContext";
import { withRouter } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
// import { Redirect } from "react-router-dom";
import ControlledEditor from "../../components/textEditor";

class FormEvent extends Component {
  state = {
    name: "",
    category: "",
    link: "",
    date: "",
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
          value={this.state.name}
          type="name"
          id="name"
          name="name"
        />
        <label htmlFor="category">Main category</label>
        <select
          onChange={this.handleChange}
          value={this.state.category}
          name="category"
          id="category"
          required
        >
          <option value="-1" disabled>
            Choose a category
          </option>
          <option value="Network">Network</option>
          <option value="Programming">Programming</option>
          <option value="Hacking">Hacking</option>
        </select>
        <button>Submit</button>
      </form>
    );
  }
}

export default withRouter(FormEvent);
