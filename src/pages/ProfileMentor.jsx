import React, { Component } from "react";
import { withUser } from "../components/Auth/withUser";
//var imageMentor = require('../public/teacher.png')
/*
class ProfileMentor extends Component {
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

    const ProfileMentor = (props) => {
      //console.log(props.context);
      //console.log(props.context.user.email)  
  return (
    <div>
    {/* <h1>Hello</h1> */}
  
    
    
      <h1>Ded-Sec</h1>
    <hr/>
    <h1>Mentor Space</h1>
      <div className="">
      <img src='../public/teacher.png' alt='' />
      </div>
      <h3>Mentor privileges:</h3>
      <ul>
        <li>Create exchange rooms, learning material and other supports.</li>
        <li>Participate to the community as an influent speaker, be an ambassador of DedSec Webwide.</li>
      </ul>
      <hr/>
      <div>
        <h3>Userinfo:</h3>
        <p>Username: {props.context.user.username}</p>
        <p>Account Type: Mentor Profile</p>
        <p>Avatar: {props.context.user.profileImg}</p>
        <p>Email: {props.context.user.email}</p>
      </div>
      <button>Create Lesson</button>
    </div>
  );
};



export default withUser(ProfileMentor);
