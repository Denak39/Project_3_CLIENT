import React from "react";
import UserContext from "../components/Auth/UserContext";
import apiHandler from "../api/apiHandler";

class OneLessonPage extends React.Component {
  // get all lessons from database
  static contextType = UserContext;
  state = {
    lessons: [],
  };

  componentDidMount() {
    apiHandler.getOneLesson().then((data) => {
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
            <div key={lesson._id}>
              <p>Lesson is here (name, content, difficulty</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default OneLessonPage;
