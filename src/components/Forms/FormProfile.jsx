import React, { Component } from "react";
import Button from "../Button";
import UploadWidget from "../UploadWidget";
import FeedBack from "../FeedBack";
import apiHandler from "../../api/apiHandler";
import UserContext from "../Auth/UserContext";
import { Link } from "react-router-dom";
import "../../styles/EditProfile.css";
import "../../styles/FormSignupStyle.css";

// import "../../styles/form.css";

class FormProfile extends Component {
  static contextType = UserContext;
  state = {
    user: null,
    tmpUrl: "",
    httpResponse: null,
    isLoading: true,
  };

  imageRef = React.createRef();

  componentDidMount() {
    apiHandler
      .getUserInfos()
      .then((data) => {
        this.setState({ user: data, isLoading: false });
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          httpResponse: {
            status: "failure",
            message: "Something bad happened, please try again later",
          },
        });
      });
  }

  handleChange = (event) => {
    const key = event.target.name; // This function requires that you have the "name" attribute on your form fields.
    const value = event.target.value;
    this.setState({ user: { ...this.state.user, [key]: value } });
    console.log(this.state.user.username);
  };

  isValidInput = (key) => {
    if (this.state.user[key] === "") {
      return false;
    } else return true;
  };

  checkError = () => {
    for (const key in this.state.user) {
      if (this.state[key] === "") {
        return true;
      }
    }
    return false;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData();

    for (const key in this.state.user) {
      if (key === "profileImg") continue;
      fd.append(key, this.state.user[key]);
    }

    if (this.imageRef.current.files[0]) {
      fd.append("profileImg", this.imageRef.current.files[0]);
    }
    console.log(this.state.user);
    apiHandler
      .updateUser(fd)
      .then((data) => {
        this.context.setUser(data);
        this.setState({
          httpResponse: {
            status: "success",
            message: "Profile successfully updated.",
          },
        });

        this.timeoutId = setTimeout(() => {
          this.setState({ httpResponse: null });
        }, 2000);
      })
      .catch((error) => {
        this.setState({
          httpResponse: {
            status: "failure",
            message:
              "Something bad happened while updating your profile, try again later",
          },
        });

        this.timeoutId = setTimeout(() => {
          this.setState({ httpResponse: null });
        }, 2000);
      });
  };

  handleFileSelect = (temporaryURL) => {
    // Get the temporaryURL from the UploadWidget component and
    // set the state so we can have a visual feedback on what the image will look like :)
    this.setState({ tmpUrl: temporaryURL });
  };

  render() {
    // const { user } = this.state;
    const { httpResponse } = this.state;

    if (this.state.isLoading) return <div>Loading...</div>;

    return (
      <section className="form-section edit-profile-form">
        <form autoComplete="off" className="form" onSubmit={this.handleSubmit}>
          <h1 className="header">Edit profile</h1>
          <div className="round-image user-image">
            <img
              src={this.state.tmpUrl || this.state.user.profileImg}
              alt={this.state.user.username}
            />
          </div>
          <div className="form-group img-upload-edit">
            <UploadWidget
              ref={this.imageRef}
              onFileSelect={this.handleFileSelect}
              name="profileImg"
            >
              Change profile image 
             </UploadWidget>
          </div>


          <div className="form-group">
            <label className="label" htmlFor="username">
              Username
            </label>
            <input
              className="input"
              id="username"
              type="text"
              name="username"
              onChange={this.handleChange}
              value={this.state.user.username}
              className="signup signup-input"
            />

            {!this.isValidInput("username") && (
              <p className="input-error">Invalid input</p>
            )}
          </div>


          <div className="form-group">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              className="input"
              id="email"
              type="email"
              name="email"
              value={this.state.user.email}
              disabled
             className="ignup signup-input"
            />
          </div>


          <div className="form-group">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              className="input"
              id="password"
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.user.password}
              className="ignup signup-input"
            />
            {!this.isValidInput("username") && (
              <p className="input-error">Invalid input</p>
            )}
          </div>{" "}
          {httpResponse && (
            <FeedBack
              message={httpResponse.message}
              status={httpResponse.status}
            />
          )}


          <Button primary disabled={this.checkError()} className="btn-transparent edit-btn">
            Save
          </Button>
        </form>
        <Link to={`/profile`}>
          <button className="btn-transparent edit-btn">Return to profile</button>
        </Link>
      </section>
    );
  }
}

export default FormProfile;
