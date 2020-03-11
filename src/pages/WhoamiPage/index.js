import React, { Component } from "react";

import "./WhoamiPage.scss";
import profile from "../../assets/icons/profile.jpg";

class WhoamiPage extends Component {
  getDay = () => {
    switch (new Date().getDay()) {
      case 1:
        return "Marvelous Monday";
      case 2:
        return "Terrific Tuesday";
      case 3:
        return "Wonderful Wednesday";
      case 4:
        return "Thoughtful Thursday";
      case 5:
        return "Fun Friday";
      case 6:
        return "Spectacular Saturday";
      default:
        return "Satisfying Sunday";
    }
  };
  render() {
    return (
      <div className="WhoamiPage">
        <h1 className="title center serif">whoami?</h1>
        <div className="columns">
          <div className="column is-one-quarter">
            <figure class="image is-128x128">
              <img class="is-rounded" src={profile} alt="profile" />
            </figure>
            <h1 className="title serif">Sahil Bondre</h1>
            <h1 className="subtitle">@godcrampy</h1>
            <p className="subtitle margin-cut">Get in touch with me!</p>
            <a href="mailto:sahilbondre@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/sahil-bondre-571a8416a/">Linkedin</a>
            <a href="https://github.com/godcrampy">Github</a>
          </div>
          <div className="column">
            <p className="enlarge">
              I am a Computer Engineering Undergraduate with proficiency in React, Redux, Node,
              MongoDB, C++, Blockchain and Flutter. I am passionate about writing clean, efficient
              and professional code. I have a good understanding of Data Structures, Algorithms and
              UI Design.
            </p>
            <div className="columns">
              <div className="column content">
                <h2 className="subtitle">Work Experience</h2>
                <ul>
                  <li>
                    <h6>Software Engineer Intern @ Stackby</h6>
                    <p>Feb 2020 - March 2020</p>
                  </li>
                </ul>
              </div>
              <div className="column content">
                <h3 className="subtitle">Things I'm proud of</h3>
                <ul>
                  <li>
                    <h6>Runner Up, Dotslash 2020</h6>
                    <p>
                      We made <a href="https://github.com/Twelfth-Hour/notes-kitty">Notes Kitty</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <button
              className="button is-black"
              onClick={() => {
                window.location.href =
                  "https://github.com/godcrampy/portfolio/raw/master/src/assets/resume.pdf";
              }}
            >
              Here's My Resume
            </button>
            <p>Have a {this.getDay()}!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WhoamiPage;
