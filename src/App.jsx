import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import formLesson from "./pages/LessonCreate";
import FormProfile from "./components/Forms/FormProfile";
import formEvent from "./components/Forms/FormEvent";
import CourseCategories from "./pages/CourseCategories";
import NetworkPath from "./pages/NetworkPath";
import ProgrammingPath from "./pages/ProgrammingPath";
import EventCalendar from "./pages/EventCalendar";
import HackingPath from "./pages/HackingPath";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute
          exact
          path="/profile/settings"
          component={FormProfile}
        />
        <Route exact path="/course/categories" component={CourseCategories} />
        <Route
          exact
          path="/course/categories/network"
          component={NetworkPath}
        />
        <Route
          exact
          path="/course/categories/programming"
          component={ProgrammingPath}
        />
        <Route
          exact
          path="/course/categories/hacking"
          component={HackingPath}
        />
        <Route exact path="/lesson/create" component={formLesson} />
        <Route exact path="/event/create" component={formEvent} />
        <Route exact path="/events" component={EventCalendar} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
