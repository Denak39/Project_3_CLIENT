import React from "react";
import "../styles/Profile.css";
import { withUser } from "../components/Auth/withUser";
import teacher from "../pictures/teacher.png";
import { Link } from "react-router-dom";
import apiHandler from "../api/apiHandler";
import UserContext from "../components/Auth/UserContext";
//class
class ProfileMentor extends React.Component {
  // console.log("IM in mentor");
  // console.log(props.context.user);
  static contextType = UserContext;
  state = {
    lessons: [],
  };
  //componentdidmount
  componentDidMount() {
    apiHandler.getAllLessons().then((data) => {
      // console.log(data);
      var filteredTrainerLesson = data.filter((lesson) => {
        // console.log(lesson.trainerId);
        console.log(this.props.user._id);
        if (lesson.trainerId === this.props.user._id) {
          return true;
        } else {
          return false;
        }
      });
      this.setState({ lessons: filteredTrainerLesson });
      console.log(filteredTrainerLesson);
    });
  }

  render() {
    return (
      <div className="profile-body tracking-in-expand left-profile">
        <h1 className="space-title">Mentor Space</h1>
        <div>
          <section className="section-main">
            {/* <div className="main-left"> */}
            <div className="mentor profile main-left left-profile-div">
              {/* <img className="profile-img" src={teacher} alt="teacher.png" /> */}
              <i className="fas fa-chalkboard-teacher"></i>
              <h3>Mentor privileges:</h3>
              <ul className="mentor-text space-text">
                <li>
                  Create exchange rooms, learning material and other supports.
                </li>
                <li>
                  Contribute to the community as an influent speaker, be an
                  ambassador of DedSec Webwide.
                </li>
              </ul>
            </div>
            {/* </div> */}

            <hr className="purple-line" />

            <div className="main-right right-profile">
              <div className="mentor profile-userinfo">
                <h3>Userinfo:</h3>
                <div className="userinfo-divs">
                  <h5>Username:</h5> <p>{this.props.user.username}</p>
                </div>
                <div className="userinfo-divs">
                  <h5>Account Type:</h5>{" "}
                  <p>
                    {this.props.context.user.accountType}{" "}
                    <i className="fas fa-skull-crossbones mentor-i"></i>
                  </p>
                </div>
                <div className="userinfo-divs">
                  <h5>Avatar:</h5>
                  <img
                    className="avatar-img"
                    src={this.context.user.profileImg}
                    alt=""
                  />
                </div>
                <div className="userinfo-divs">
                  <h5>Email:</h5> <p>{this.context.user.email}</p>
                </div>
              </div>
              <Link to={`/profile/settings`}>
                <button className="btn-transparent">Edit profile</button>
              </Link>
              <Link to={`/lesson/create`}>
                <button className="btn-transparent">Create Lesson</button>
              </Link>
              <div>
                {this.state.lessons.map((lesson) => {
                  return (
                    <div key={lesson._id}>
                      <Link to={`/lessons/${lesson._id}`}>
                        <h1>{lesson.name}</h1>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default withUser(ProfileMentor);
