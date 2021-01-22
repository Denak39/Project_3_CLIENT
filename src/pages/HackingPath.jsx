import React from "react";
import UserContext from "../components/Auth/UserContext";
import apiHandler from "../api/apiHandler";
import { Link } from "react-router-dom";
import "../styles/Path.css";
import logoDedSec from "../pictures/logo_dedsec_white.png";

class HackingLessons extends React.Component {
  // get all lessons from database
  static contextType = UserContext;
  state = {
    lessons: [],
  };

  componentDidMount() {
    apiHandler.getAllLessons().then((data) => {
      var filteredHackingLessons = data.filter((lesson) => {
        if (lesson.category === "Hacking") {
          return true;
        } else {
          return false;
        }
      });

      this.setState({ lessons: filteredHackingLessons });
      console.log(this.state.lessons);
    });
  }
  // get the category from the path
  // filter by category
  // display the lessons
  render() {
    //console.log(lesson);
    return (
      <div>
        {this.state.lessons.map((lesson) => {
          return (
            <div className="box">
            <div className="banner">
            <div className="p" key={lesson._id}>
              <Link to={`/lessons/${lesson._id}`}>
                <h1>Lesson title: {lesson.name}</h1>
              </Link>
              <h2>posted by: {lesson.trainerId.username}</h2>
               {/* <hr className="path-hr"/>  */}
            </div>
            </div>
            <img className="logoDedSec" src={logoDedSec} alt="Ded-Sec Logo" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default HackingLessons;
