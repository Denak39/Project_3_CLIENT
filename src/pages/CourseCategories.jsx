import React from "react";
import { Link } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import "../styles/Home.css";
import "../styles/CourseCategories.css";

class CourseCategories extends React.Component {
  render() {
<<<<<<< HEAD
   
    return (
        <div className="App tracking-in-expand course-cat-body">
         <div>
          <h1>DedSec | Course Paths</h1>
          {/* <a className="icon" href="/logout"><i class="fas fa-sign-out-alt"></i>Log out</a> */}
          <h2 class="cat-username">Username</h2> 
          <div className="course-cat-parent-div">
          <div className="Network Warlock category-divs">
          <h4 className="cat-title shadow">Network Warlock</h4>
            <p className="category-box">Server | Client</p>
            <p className="category-box">Cryptanalysis</p>
            <p className="category-box">Cracking</p>
            <Link className="link path-link" exact to="/course/categories/network">
            Network Path
            </Link>
          </div>
          <div className="Keyboard Warrior category-divs">
          <h4 className="cat-title shadow">Keyboard Warrior</h4>
            <p className="category-box">C | UNIX | Binary</p>
            <p className="category-box">GDB | x86 | Python</p>
            <p className="category-box">SQL</p>
            <Link className="link path-link" exact to="/course/categories/programming">
            Programming Path
            </Link>
          </div>
          <div className="Social Rogue category-divs">
          <h4 className="cat-title shadow">Social Rogue</h4>
            <p className="category-box">Social engineering</p>
            <p className="category-box">Cryptology</p>
            <p className="category-box">Forsenic</p>
            <Link className="link path-link" exact to="/course/categories/hacking">
            Hacking Path
            </Link>
          </div>
          </div>
         </div>

         {/* <h2 className="test"><span className="test-span">THIS IS A TEST</span></h2>
        <p>this is some content other</p> */}
=======
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
>>>>>>> 743ff82fd447c08e2ad52805545af2cf191bd3b5
        </div>
      </div>
    );
  }
}

<<<<<<< HEAD
      );
    };
  };



export default withUser(CourseCategories);
=======
export default CourseCategories;
>>>>>>> 743ff82fd447c08e2ad52805545af2cf191bd3b5
