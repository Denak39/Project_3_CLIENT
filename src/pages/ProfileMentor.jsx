import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";

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
    
  return (
    <div>
    <h1>Hello</h1>
    {this.state.users.map((user) => {
      return(
        <div key={user._id}><p>{user.username}</p></div>
      ) 
    })}
      {/* <h1>Ded-Sec | Mentor Space</h1>
      <img src="/Project_3_CLIENT/public/skull-mentor.png" alt="mentor skull"/>
      <p>Mentor privileges:</p>
      <ul>
        <li>Create exchange rooms, learning material and other supports.</li>
        <li>Participate to the community as an influent speaker, be an ambassador of DedSec Webwide.</li>
      </ul>
      <hr/>
      <div>
        <h3>Userinfo:</h3>
        <p>Profile Image:{user.profileImg}</p>
        <p>Userinfo:{}</p>
        <p>Username:{user.username}</p>
        <p>Level:{user.level}</p>
        <p>Email:{user.email}</p>
        <p>Password:{user.password}</p>
      </div> */}
    </div>
  );
};
};

export default withUser(ProfileMentor);
