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
      <div>
        <h1>Ded-Sec</h1>
        <hr />
        <h1>Mentor Space</h1>
        <img src={teacher} alt="teacher.png" />
        <p>Mentor privileges:</p>
        <ul>
          <li>Create exchange rooms, learning material and other supports.</li>
          <li>
            Contribute to the community as an influent speaker, be an ambassador
            of DedSec Webwide.
          </li>
        </ul>
        <hr />
        <div>
          <h3>Userinfo:</h3>
          <p>Username: {this.props.user.username}</p>
          <p>Account Type: {this.props.context.user.accountType}</p>
          <p>Avatar: {this.context.user.profileImg}</p>
          <p>Email: {this.context.user.email}</p>
        </div>
        <Link to={`/profile/settings`}>
          <button>Edit profile</button>
        </Link>
        <Link to={`/lesson/create`}>
          <button>Create Lesson</button>
        </Link>
        <h3>List of lessons you posted:</h3>
        {this.state.lessons.map((lesson) => {
          return (
            <div key={lesson._id}>
              <Link to={`/lessons/${lesson._id}`}>
                <h1>{lesson.name}</h1>
              </Link>
            </div>
          );
        })}
        {/* <p>{.trainerId.username}</p> */}
      </div>
    );
  }
}
export default withUser(ProfileMentor);
