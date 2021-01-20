import React from "react";
import { Link } from "react-router-dom";
//import NavMain from "../components/NavMain";

class CourseCategories extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>DedSec | Course Paths</h1>
          <a href="/logout">
            <img src="" alt="logout-icon" />
            Log out
          </a>
          <p>Username</p>
          <div className="Network Warlock">
            <p>Server | Client</p>
            <p>Cryptanalysis</p>
            <p>Cracking</p>
            <Link className="link" exact to="/course/categories/network">
              Network Path
            </Link>
          </div>
          <div className="Keyboard Warrior">
            <p>C | UNIX | Binary</p>
            <p>GDB | x86 | Python</p>
            <p>SQL</p>
            <Link className="link" exact to="/course/categories/programming">
              Programming Path
            </Link>
          </div>
          <div className="Social Rogue">
            <p>Social engineering</p>
            <p>Cryptology</p>
            <p>Forsenic</p>
            <Link className="link" exact to="/course/categories/hacking">
              Hacking Path
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseCategories;
