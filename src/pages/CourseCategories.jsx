import React from "react";
import { Link } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import "../styles/Home.css";
import "../styles/CourseCategories.css";


class CourseCategories extends React.Component {
  render() {
   
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
        </div>

      );
    };
  };



export default withUser(CourseCategories);