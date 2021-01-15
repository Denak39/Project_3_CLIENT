import React from "react";


class Home extends React.Component {
  render() {


    return (
      <div class="tracking-in-expand">
      <div>
      
      <section class="section-main">
        <div class="main-left">
          <div class="who">
            <h1 class="tracking-in-expand">Who are we?</h1>
            <img class="ded-sec-logo" src="imgs/DedSec.png" alt="logo" />
          </div>
          <div class="main-intro">
            <p class="slogan">Learn, teach, share, protect</p>

            <p>
              DedSec is a community of cyber aware citizens, willing to share
              its knowledge for the greater good.
            </p>
            <p class="slogan-2">Join us, help us, protect yourself.</p>
          </div>
        </div>

        <hr class="purple-line" />

        <div class="main-right">
          <div class="student">
            <a class="icon" href="/"><i class="fas fa-book-dead"></i></a>
            <h4 class="tracking-in-expand">accountType</h4>
            <h4 class="tracking-in-expand">Student</h4>
            <ul class="student-text">
              <li>Discover a new community</li>
              <li>Learn at your own pace</li>
            </ul>
          </div>
          <button class="join-us icon glow-button">Join us</button>
          <div class="mentor">
            <a class="icon" href="/"><i class="fas fa-skull-crossbones"></i></a>
            <h4 class="tracking-in-expand">accountType</h4>
            <h4 class="tracking-in-expand">Mentor</h4>
            <ul class="mentor-text">
              <li>Be a part of the community</li>
              <li>Contribute and enhance our knowledge</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
      </div>
    );
  };
}

export default Home;
