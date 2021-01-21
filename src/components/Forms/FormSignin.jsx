import React, { Component } from "react";
import UserContext from "../Auth/UserContext.jsx";
import { withRouter } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import FormSignupStyle from "../../styles/FormSignupStyle.css";
import FormSigninStyle from "../../styles/FormSigninStyle.css";

class FormSignin extends Component {
  static contextType = UserContext;

  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signin(this.state)
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
    // if (this.context.user) {
    //   return <Redirect to="/" />;
    // }

    return (
      <div className="formsignup-div">
      <form className="form signin" onChange={this.handleChange} onSubmit={this.handleSubmit}>
      <div className="form-div">
        <label htmlFor="email">Email</label>
        <input
          onChange={this.handleChange}
          value={this.state.email}
          type="email"
          id="email"
          name="email"
          className="signup-input"
        />
        </div>

        <div className="form-div">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" className="signup-input" />
        </div>

        <button className="btn-submit btn-transparent">Submit</button>
      </form>
      </div>
    );
  }
}

export default withRouter(FormSignin);
