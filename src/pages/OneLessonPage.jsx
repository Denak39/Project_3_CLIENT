import React from "react";
import UserContext from "../components/Auth/UserContext";
import apiHandler from "../api/apiHandler";
// import draftToMarkdown from "draftjs-to-markdown";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { convertToRaw } from "draft-js";
import "../styles/OneLesson.css";

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
    //if (this.state.lesson === null) return null;
    //console.log(lesson);
    console.log(this.state.lesson);
    return (
      this.state.lesson && (
        <div className="oneLesson-div">
          <h1 className="lesson-title">{this.state.lesson.name}</h1>
          <h2 className="lesson-difficulty">Lesson difficulty: {this.state.lesson.difficulty}</h2>
          {/* <p>{this.state.lesson}</p> */}
          <div
          className="lesson-content"
            dangerouslySetInnerHTML={{
              __html: draftToHtml(this.state.lesson.content),
            }}
          ></div>
        </div>
      )
    );
  }
}

export default OneLessonPage;
