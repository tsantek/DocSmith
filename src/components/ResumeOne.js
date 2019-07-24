import React, { Component } from "react";
import "./ResumeOne.css";

class ResumeOne extends Component {
  state = {
    name: "THOMAS THOMPSON",
    title: "SOFTWARE ENGINEER",
    email: "email@tomsquared.co",
    web: " tomsquared.co",
    phone: "555-248-0950",
    twitter: "@tomtothetwo",
    github: "tstomsquared",
    summary:
      "Specializing in advanced computer vision topics such as facial recognition and full-body motion-tracking. Seeking work in the Boston area with exciting research and applications.",
    employment: [
      {
        time: "Jun 2012 to Current",
        company: "Corespace Sciences",
        title: "Software Engineer",
        city: "Boston, MA",
        responsibility: [
          "Designed and implemented new version of Corespace's full-body motion-tracking software.",
          "Work resulted in a 25% increase in accuracy and 15% increase in speed over the existing version."
        ]
      },
      {
        time: "Jun 2010 to Apr 2012",
        company: "Emotional.ly",
        title: "Computer Vision Engineer",
        city: "New York, NY",
        responsibility: [
          "Specialized in applying emotion recognition and classification algorithms to video frames towards Emotional.ly's new video-based emotion-recognition product.",
          "Assisted with modeling and converting data into formats for input into neural networks."
        ]
      },
      {
        time: "Jun 2009 to Aug 2009",
        company: "Emotional.ly",
        title: "Software Engineer Intern",
        city: "New York, NY",
        responsibility: [
          "Expanded Emotional.ly's emotion recognition algorithms to support six additional emotion classifications.",
          "Compressed data storage modal resulting in a 25% size reduction without data loss."
        ]
      },
      {
        time: "May 2008 to Dec 2008",
        company: "Code:all Foundation",
        title: "Python Course Planner",
        city: "Remote",
        responsibility: [
          "Created three 10-lesson interactive courses for teaching Python and data structures to middle and high school students through Code:all's website.",
          "Taught several live workshops for Code:all students."
        ]
      }
    ],
    education: {
      year: "2010",
      college: "Rochester Institute of Technology",
      title: "B.S.Computer Science",
      minor: "Applied Mathematics"
    },
    skills: {
      languages: "C++, HTML, Java, JavaScript, Python, Ruby",
      platforms: "Android, Django, jQuery, Matlab, OpenCV"
    },
    projects: [
      {
        name: "Intersect Image Sorter",
        responsibility: [
          "Developed an web-based automatic image categorizer and sorter based on various image properties.",
          "Applied basic computer vision techniques for sorting",
          "Created web stack using Django."
        ]
      },
      {
        name: "DatHat Android App",
        responsibility: [
          "Co-wrote an Android app enabling users to sending pictures of themselves wearing various cartoon hats.",
          "Specialized in applying facial recognition techniques to automatically place hats properly in the images.",
          "Won 1st place in school club Android hackathon."
        ]
      }
    ]
  };
  render() {
    return (
      <div className="bodyStyle">
        <div className="container">
          <header>HEADER</header>
          <div className="resume">
            {/* RESUME HEADER */}
            <div className="resumeHeader">
              <div
                className="row row-header"
                style={{ marginRight: "0px", marginLeft: "0px" }}
              >
                <div className="col-md-6 inputName">
                  <input className="inputStyleName" value={this.state.name} />
                </div>
                <div className="col-md-6 inputStyle">
                  <input className="inputStyleTitle" value={this.state.title} />
                </div>
              </div>
              <ul className="linksSocialUl">
                <li>
                  <input value={this.state.email} />
                </li>
                <li>
                  <input value={this.state.phone} />
                </li>
                <li>
                  <input value={this.state.twitter} />
                </li>
                <li>
                  <input value={this.state.web} />
                </li>
                <li>
                  <input value={this.state.github} />
                </li>
              </ul>
            </div>
            {/* SUMMARY  */}
            <div className="summary-container">
              <h4>SUMMARY</h4>
              <textarea rows="2">{this.state.summary}</textarea>
            </div>
            {/* EMPLOYMENT */}
            <div>EMPLOYMENT</div>
            {/* EDUCATION */}
            <div>EDUCATION</div>
            {/* SKILLS */}
            <div>SKILLS</div>
            {/* PROJECTS */}
            <div>PROJECT</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeOne;
