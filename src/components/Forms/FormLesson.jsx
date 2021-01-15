import React, { Component } from "react";
// import { UserContext } from "../Auth/UserContext";
import { withRouter } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
// import { Redirect } from "react-router-dom";
import ControlledEditor from "../../components/textEditor";
import Rating from "react-rating";

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
          <option value="Programing">Programing</option>
          <option value="Hacking">Hacking</option>
        </select>
        <label htmlFor="difficulty">Select a difficulty</label>
        <Rating
          onChange={this.handleChange}
          value={this.state.difficulty}
          id="difficulty"
          name="difficulty"
          emptySymbol={<span className="icon-text">-</span>}
          fullSymbol={[1, 2, 3, 4, 5].map((n) => (
            <span className="icon-text">{n}</span>
          ))}
        />
        {/* <select
          onChange={this.handleChange}
          value={this.state.difficulty}
          name="difficulty"
          id="difficulty"
          required
        >
          <option value="-1" disabled selected>
            Choose a difficulty
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select> */}

        <ControlledEditor
          onChange={this.handleChange}
          value={this.state.content}
          id="content"
          name="content"
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default withRouter(FormLesson);
