import React from "react";
import NavMain from "../components/NavMain";


class CourseCategories extends React.Component {
    render() {
   
  
      return (

        <div className="App">
         <div>
          <h1>DedSec | Course categories</h1>
          <a href="/logout"><img src="" alt="logout-icon"/>Log out</a>
          <p>Username</p> 
          <div className="Network Warlock">
            <p>Server | Client</p>
            <p>Cryptanalysis</p>
            <p>Cracking</p>
            <a href="Net. Path"></a>
          </div>
          <div className="Keyboard Warrior">
            <p>C | UNIX | Binary</p>
            <p>GDB | x86 | Python</p>
            <p>SQL</p>
            <a href="Prog. Path"></a>
          </div>
          <div className="Social Rogue">
            <p>Social engineering</p>
            <p>Cryptology</p>
            <p>Forsenic</p>
            <a href="Hack. Path"></a>
          </div>
         </div>
        </div>

      );
    };
};