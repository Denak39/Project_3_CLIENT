import React from "react";
import UserContext from "../components/Auth/UserContext";
import apiHandler from "../api/apiHandler";
import { Link } from "react-router-dom";

class ProgrammingLessons extends React.Component {
        // get all lessons from database
        static contextType = UserContext;
        state = {
        lessons: [],
        };

  componentDidMount() {
    apiHandler.getAllLessons().then((data) => {
       var filteredProgrammingLessons = data.filter((lesson) => {
            if (lesson.category === "Programming") {
                return true
            } else {
                return false
            }
        })



      this.setState({ lessons: filteredProgrammingLessons });
      console.log(this.state.lessons)
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
                        <h1>{lesson.name}</h1>
                        </Link>
                        <h2>{lesson.trainerId.username}</h2>
                        <h3>{lesson.updated_at}</h3>
                        </div>
                    )
              })}
               
            </div>
        );
};
};




export default ProgrammingLessons;