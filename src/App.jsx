import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import ProfileMentor from "./pages/ProfileMentor";
import ProfileStudent from "./pages/ProfileStudent";
import Lesson from "./pages/LessonCreate";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <ProtectedRoute exact path="/profile/mentor" component={ProfileMentor} />
        <ProtectedRoute exact path="/profile/student" component={ProfileStudent} />
        <Route exact path="/lesson/create" component={Lesson} />
      </Switch>
    </div>
  );
}

export default App;
