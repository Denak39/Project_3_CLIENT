import React from "react";
import UserContext from "../components/Auth/UserContext";
import apiHandler from "../api/apiHandler";
import { Link } from "react-router-dom";

class NetworkLessons extends React.Component {
  // get all lessons from database
  static contextType = UserContext;
  state = {
    lessons: [],
  };

  componentDidMount() {
    apiHandler.getAllLessons().then((data) => {
      var filteredNetworkLessons = data.filter((lesson) => {
        if (lesson.category === "Network") {
          return true;
        } else {
          return false;
        }
      });

      this.setState({ lessons: filteredNetworkLessons });
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
            <div key={lesson._id}>
              <Link to={`/lessons/${lesson._id}`}>
                <h1>Lesson title: {lesson.name}</h1>
              </Link>
              <h2>posted by: {lesson.trainerId.username}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default NetworkLessons;
