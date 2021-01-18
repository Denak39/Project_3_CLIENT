import React, { Component } from "react";
import { withUser } from "../components/Auth/withUser";
//import apiHandler from "../api/apiHandler";
//var imageStudent = require('../public/student.png')

/*
class ProfileStudent extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    apiHandler.getAllUsers()
    .then((apiRes) => {
      console.log(apiRes);
      this.setState({users : apiRes})

    })
  }
  render() {
*/
const ProfileStudent = (props) => {
  //console.log(props.context);

  return (
    <div>
    {/* <h1>Hello</h1> */}


    <h1>Ded-Sec</h1>
    <hr/>
    <h1>Student Space</h1>
      <div className="">
      <img src='../public/student.png' alt='' />
      </div>
      <ul>
        <li>Create exchange rooms, learning material and other supports.</li>
        <li>Participate to the community as an influent speaker, be an ambassador of DedSec Webwide.</li>
      </ul>
      <hr/>
      <div>
        <h3>Userinfo:</h3>
        <p>Username:{props.context.user.username}</p>
        <p>Account Type: Student Profile</p>
        <p>Level:{props.context.user.level}</p>
        <p>Avatar:{props.context.user.profileImg}</p>
        <p>Email:{props.context.user.email}</p>
      </div>
    </div>
  );
};

export default withUser(ProfileStudent);
