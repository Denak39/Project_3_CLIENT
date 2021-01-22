import React from "react";
//import { Link } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import student from "../pictures/student.png";
import { Link } from "react-router-dom";

const ProfileStudent = (props) => {
  console.log("Im A Student");
  return (
    <div className="profile-body tracking-in-expand left-profile">
      <h1 className="space-title">Student Space</h1>
      
      <div >
        <section className="section-main">
              {/* <div className="main-left"> */}
        <div className="mentor profile main-left left-profile-div">
      {/* <img src={student} alt="student.png" /> */}
      <i className="fas fa-user-graduate"></i>
      <h1 className="space-title">accountType: {props.context.user.accountType}</h1>
      <ul className="mentor-text space-text">
        <li>Learn new ways to protect yourself and others</li>
        <li>Pracitice and share your skills with the community</li>
      </ul>
      </div>

      <hr className="purple-line"/>

      <div className="main-right right-profile">
      <div className="mentor profile-userinfo">
        <h3>Userinfo:</h3>
        <div className="userinfo-divs">
        <h5>Avatar: <img className="avatar-img" src={props.context.user.profileImg} alt="" /></h5>
        </div>
        <div className="userinfo-divs">
        <h5>Username: <p>{props.context.user.username}</p></h5>
        </div>
        <div className="userinfo-divs">
        <h5>Level: <p>{props.context.user.level}</p></h5>
        </div>
        <div className="userinfo-divs">
        <h5>Email: <p>{props.context.user.email}</p></h5>
        </div>
        {/* <div className="userinfo-divs">
        <h5>Password: <p>{props.context.user.password}</p></h5>
        </div> */}
      </div>
      <Link to={`/profile/settings`}>
        <button className="btn-transparent">Edit profile</button>
      </Link>
    </div>
    </section>
    </div>
      </div>
  );
};


export default withUser(ProfileStudent);
