import React from "react";
//import { Link } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import student from "../pictures/student.png";
import { Link } from "react-router-dom";

const ProfileStudent = (props) => {
  console.log("Im A Student");
  return (
    <div>
      <h1>Ded-Sec</h1>
      <hr />
      <h1>Student Space</h1>
      {/* <img src={student} alt="student.png" /> */}
      <i className="fas fa-user-graduate"></i>
      <p>accountType: {props.context.user.accountType}</p>
      <p>Student</p>
      <ul>
        <li>Learn new ways to protect yourself and others</li>
        <li>Pracitice and share your skills with the community</li>
      </ul>
      <hr />
      <div>
        <h3>Userinfo:</h3>
        <p>Profile Image: {props.context.user.profileImg}</p>
        <p>Username: {props.context.user.username}</p>
        <p>Level: {props.context.user.level}</p>
        <p>Email: {props.context.user.email}</p>
        <p>Password: {props.context.user.password}</p>
      </div>
      <Link to={`/profile/settings`}>
        <button>Edit profile</button>
      </Link>
    </div>
  );
};

export default withUser(ProfileStudent);
