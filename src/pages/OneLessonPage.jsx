import React from "react";
import UserContext from "../components/Auth/UserContext";
import apiHandler from "../api/apiHandler";
// import draftToMarkdown from "draftjs-to-markdown";

class OneLessonPage extends React.Component {
  static contextType = UserContext;
  state = {
    lesson: null,
  };

  componentDidMount() {
    const lessonId = this.props.match.params.id;
    apiHandler.getOneLesson(lessonId).then((lesson) => {
      console.log(lesson);
      this.setState({ lesson });
    });
  }
  // get the category from the path
  // filter by category
  // display the lessons
  render() {
    //console.log(lesson);
    return (
      this.state.lesson && (
        <div>
          <h1>Lesson title: {this.state.lesson.name}</h1>
          <h2>Lesson difficulty: {this.state.lesson.difficulty}</h2>
          <p>{this.state.lesson.content}</p>
        </div>
      )
    );
  }
}

export default OneLessonPage;
