import React from "react";
import "../styles/Home.css";
import logoDedSec from "../pictures/logo_dedsec_white.png";
//import background from "../pictures/background.jpg";

class Home extends React.Component {
  render() {
    return (
      <div style={{ backgroundImage: "url(../pictures/background.jpg)" }}>
        <div className="tracking-in-expand">
          <div>
            <section className="section-main">
              <div className="main-left">
                <div className="who">
                  <h1 className="tracking-in-expand">Who are we?</h1>
                  <img class="logoDedSec" src={logoDedSec} alt="Ded-Sec Logo" />
                </div>
                <div className="main-intro">
                  <p className="slogan">Learn, teach, share, protect</p>

                  <p>
                    DedSec is a community of cyber aware citizens, willing to
                    share its knowledge for the greater good.
                  </p>
                  <p className="slogan-2">
                    Join us, help us, protect yourself.
                  </p>
                </div>
              </div>

              <hr className="purple-line" />

<<<<<<< HEAD
            <div className="main-right">
              <div className="student profile">
                <a className="icon" href="/">
                  <i className="fas fa-book-dead"></i>
                </a>
                <h4 className="tracking-in-expand">accountType</h4>
                <h4 className="tracking-in-expand">Student</h4>
                <ul className="student-text">
                  <li>Discover a new community</li>
                  <li>Learn at your own pace</li>
                </ul>
              </div>
              {/* <button className="join-us icon glow-button">Join us</button> */}
              <div className="mentor">
                <a className="icon" href="/">
                  <i className="fas fa-skull-crossbones"></i>
                </a>
                <h4 className="tracking-in-expand">accountType</h4>
                <h4 className="tracking-in-expand">Mentor</h4>
                <ul className="mentor-text">
                  <li>Be a part of the community</li>
                  <li>Contribute and enhance our knowledge</li>
                </ul>
=======
              <div className="main-right">
                <div className="student">
                  <a className="icon" href="/">
                    <i className="fas fa-book-dead"></i>
                  </a>
                  <h4 className="tracking-in-expand">accountType</h4>
                  <h4 className="tracking-in-expand">Student</h4>
                  <ul className="student-text">
                    <li>Discover a new community</li>
                    <li>Learn at your own pace</li>
                  </ul>
                </div>
                <button className="join-us icon glow-button">Join us</button>
                <div className="mentor">
                  <a className="icon" href="/">
                    <i className="fas fa-skull-crossbones"></i>
                  </a>
                  <h4 className="tracking-in-expand">accountType</h4>
                  <h4 className="tracking-in-expand">Mentor</h4>
                  <ul className="mentor-text">
                    <li>Be a part of the community</li>
                    <li>Contribute and enhance our knowledge</li>
                  </ul>
                </div>
>>>>>>> 743ff82fd447c08e2ad52805545af2cf191bd3b5
              </div>
            </section>
          </div>
        </div>
      </div>
      // );
      // }
    );
  }
}

export default Home;
