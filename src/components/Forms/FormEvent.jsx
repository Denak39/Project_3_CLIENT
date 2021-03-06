import React, { Component } from "react";
// import { UserContext } from "../Auth/UserContext";
import { withRouter } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
// import { Redirect } from "react-router-dom";
// import PickTime from "../../components/DateTimePicker";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

class FormEvent extends Component {
  state = {
    name: "",
    category: "-1",
    link: "",
    date: "",
    duration: "",
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    apiHandler
      .event(this.state)
      .then((data) => {
        this.props.history.push("/EventCalendar");
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
          <option value="Hacking">Hacking</option>
          <option value="Network">Network</option>
          <option value="Programming">Programming</option>
        </select>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker
            value={this.state.date}
            onChange={(date) => this.setState({ date })}
            id="date"
            name="date"
            required
          />
        </MuiPickersUtilsProvider>
        {/* <PickTime
          onChange={this.handleChange}
          value={this.state.date}
          name="date"
          id="date"
          required
        /> */}
        <label htmlFor="link">Link</label>
        <input
          onChange={this.handleChange}
          value={this.state.link}
          type="link"
          id="link"
          name="link"
        />
        <label htmlFor="duration">Duration</label>
        <input
          onChange={this.handleChange}
          value={this.state.duration}
          type="duration"
          id="duration"
          name="duration"
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default withRouter(FormEvent);
