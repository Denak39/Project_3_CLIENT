import React, { Component } from "react";
// import { UserContext } from "../Auth/UserContext";
import { withRouter } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import { EditorState, convertToRaw, Editor } from "draft-js";
// import { Redirect } from "react-router-dom";
// import ControlledEditor from "../../components/textEditor";
// import Rating from "react-rating";
// import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import EditorConvertToHTML from "../../components/textEditor";

class FormLesson extends Component {
  state = {
    name: "",
    category: "-1",
    difficulty: "",
    content: EditorState.createEmpty(),
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({ [key]: value });
    console.log(this.state.content);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    const { content, ...rest } = this.state;
    rest.content = convertToRaw(content.getCurrentContent());

    apiHandler
      .lesson(rest)
      .then((data) => {
        this.props.history.push("/profile");
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
          <option value="Programming">Programing</option>
          <option value="Hacking">Hacking</option>
        </select>
        <label htmlFor="difficulty">Select a difficulty</label>
        {/* <Rating
          onChange={this.handleChange}
          value={this.state.difficulty}
          id="difficulty"
          name="difficulty"
          emptySymbol={<span className="icon-text">-</span>}
          fullSymbol={[1, 2, 3, 4, 5].map((n) => (
            <span className="icon-text">{n}</span>
          ))}
        /> */}
        <select
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
        </select>

        <EditorConvertToHTML
          onChange={(content) => this.setState({ content })}
          value={this.state.content}
          name="content"
          id="content"
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default withRouter(FormLesson);
