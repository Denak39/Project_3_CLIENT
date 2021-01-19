import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";
import Profile from "./Profile";

const ProfileMentor = (props) => {
console.log("IM in mentor");


  return (
    
      <div>
      <h1>Ded-Sec</h1> 
      <hr/>
      <h1>Mentor Space</h1>
      <img src="../../public/teacher.png" alt="mentor"/>
      <p>Mentor privileges:</p>
      <ul>
        <li>Create exchange rooms, learning material and other supports.</li>
        <li>Participate to the community as an influent speaker, be an ambassador of DedSec Webwide.</li>
      </ul>
      <hr/>
      <div>
        <h3>Userinfo:</h3>
        <p>Username: {props.context.user.username}</p>
        <p>Account Type: {props.context.user.username}</p>
        <p>Avatar: {props.context.user.profileImg}</p>
        <p>Email: {props.context.user.email}</p>
      </div>
      <button>Create Lesson</button>
    </div>
  );
};




export default withUser(ProfileMentor);
