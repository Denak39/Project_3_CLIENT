import React from "react";
//import "../../styles/ItemDisplay.css";

const LessonDisplay = ({ lesson, handleClose }) => {
  return (
    <div className="Lesson-container">
      <p onClick={handleClose} className="close-link">
        Close
      </p>
      <div className="name-div">
        <p className="name">{lesson.name}</p>
      </div>
      <div className="category-div">
      <p className="category">{lesson.category}</p>
      </div>
      <div className="difficulty-div">
        <p className="diffiuclty">{lesson.difficulty}</p>
      </div>
      <div className="content-div">
      <p className="content">{lesson.content}</p>
      </div>
      <div className="likes-div">
      <p className="likes">{lesson.likes}</p>
      </div>
      <div className="trainerId-div">
      <p className="trainerId">{lesson.trainerId}</p>
      </div>
    </div>
  );
};

export default LessonDisplay;