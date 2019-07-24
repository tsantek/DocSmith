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
          "* Designed and implemented new version of Corespace's full-body motion-tracking software.",
          "* Work resulted in a 25% increase in accuracy and 15% increase in speed over the existing version."
        ]
      },
      {
        time: "Jun 2010 to Apr 2012",
        company: "Emotional.ly",
        title: "Computer Vision Engineer",
        city: "New York, NY",
        responsibility: [
          "* Specialized in applying emotion recognition and classification algorithms to video frames towards Emotional.ly's new video-based emotion-recognition product.",
          "* Assisted with modeling and converting data into formats for input into neural networks."
        ]
      },
      {
        time: "Jun 2009 to Aug 2009",
        company: "Emotional.ly",
        title: "Software Engineer Intern",
        city: "New York, NY",
        responsibility: [
          "* Expanded Emotional.ly's emotion recognition algorithms to support six additional emotion classifications.",
          "* Compressed data storage modal resulting in a 25% size reduction without data loss."
        ]
      },
      {
        time: "May 2008 to Dec 2008",
        company: "Code:all Foundation",
        title: "Python Course Planner",
        city: "Remote",
        responsibility: [
          "* Created three 10-lesson interactive courses for teaching Python and data structures to middle and high school students through Code:all's website.",
          "* Taught several live workshops for Code:all students."
        ]
      }
    ],
    education: {
      year: "2010",
      college: "Rochester Institute of Technology",
      title: "B.S.Computer Science",
      minor: "Minor: Applied Mathematics"
    },
    skills: {
      languages: "C++, HTML, Java, JavaScript, Python, Ruby",
      platforms: "Android, Django, jQuery, Matlab, OpenCV"
    },
    projects: [
      {
        name: "Intersect Image Sorter",
        responsibility: [
          "* Developed an web-based automatic image categorizer and sorter based on various image properties.",
          "* Applied basic computer vision techniques for sorting",
          "* Created web stack using Django."
        ]
      },
      {
        name: "DatHat Android App",
        responsibility: [
          "* Co-wrote an Android app enabling users to sending pictures of themselves wearing various cartoon hats.",
          "* Specialized in applying facial recognition techniques to automatically place hats properly in the images.",
          "* Won 1st place in school club Android hackathon."
        ]
      }
    ]
  };
  render() {
    return (
      <div className="bodyStyle">
        <div className="container" style={{ paddingBottom: "40px" }}>
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
              <h4 className="subtitle">SUMMARY</h4>
              <textarea rows="2">{this.state.summary}</textarea>
            </div>
            {/* EMPLOYMENT */}
            <div className="summary-container">
              <h4 className="subtitle">EMPLOYMENT</h4>
              <div className="employment-container-section row">
                <div className="col-md-3">
                  <input
                    className="eployment-time "
                    value={this.state.employment[0].time}
                  />
                </div>
                <div className="col-md-9">
                  <input
                    className="company"
                    value={this.state.employment[0].company}
                  />
                  <input
                    className="title"
                    value={this.state.employment[0].title}
                  />
                  <input
                    className="city"
                    value={this.state.employment[0].city}
                  />
                  <br />
                  <textarea rows="1">
                    {this.state.employment[0].responsibility[0]}
                  </textarea>
                  <textarea rows="1">
                    {this.state.employment[0].responsibility[1]}
                  </textarea>
                </div>
              </div>

              {/* two */}

              <div className="employment-container-section row">
                <div className="col-md-3">
                  <input
                    className="eployment-time"
                    value={this.state.employment[1].time}
                  />
                </div>
                <div className="col-md-9">
                  <input
                    className="company"
                    value={this.state.employment[1].company}
                  />
                  <input
                    className="title"
                    value={this.state.employment[1].title}
                  />
                  <input
                    className="city"
                    value={this.state.employment[1].city}
                  />
                  <br />
                  <textarea rows="2">
                    {this.state.employment[1].responsibility[0]}
                  </textarea>
                  <textarea rows="1">
                    {this.state.employment[1].responsibility[1]}
                  </textarea>
                </div>
              </div>
              {/* Three */}

              <div className="employment-container-section row">
                <div className="col-md-3">
                  <input
                    className="eployment-time "
                    value={this.state.employment[2].time}
                  />
                </div>
                <div className="col-md-9">
                  <input
                    className="company"
                    value={this.state.employment[2].company}
                  />
                  <input
                    className="title"
                    value={this.state.employment[2].title}
                  />
                  <input
                    className="city"
                    value={this.state.employment[2].city}
                  />
                  <br />
                  <textarea rows="2">
                    {this.state.employment[2].responsibility[0]}
                  </textarea>
                  <textarea rows="1">
                    {this.state.employment[2].responsibility[1]}
                  </textarea>
                </div>
              </div>
              {/* Four */}

              <div className="employment-container-section row">
                <div className="col-md-3">
                  <input
                    className="eployment-time "
                    value={this.state.employment[3].time}
                  />
                </div>
                <div className="col-md-9">
                  <input
                    className="company"
                    value={this.state.employment[3].company}
                  />
                  <input
                    className="title"
                    value={this.state.employment[3].title}
                  />
                  <input
                    className="city"
                    value={this.state.employment[3].city}
                  />
                  <br />
                  <textarea rows="2">
                    {this.state.employment[3].responsibility[0]}
                  </textarea>
                  <textarea rows="1">
                    {this.state.employment[3].responsibility[1]}
                  </textarea>
                </div>
              </div>
              {/* end */}
            </div>
            {/* EDUCATION */}
            <div className="summary-container">
              <h4 className="subtitle">EDUCATION</h4>

              <div className="employment-container-section row">
                <div className="col-md-3">
                  <input
                    className="eployment-time "
                    value={this.state.education.year}
                  />
                </div>
                <div className="col-md-9">
                  <input
                    className="college"
                    value={this.state.education.college}
                  />
                  <br />
                  <input className="title" value={this.state.education.title} />
                  <input className="minor" value={this.state.education.minor} />
                </div>
              </div>
            </div>
            {/* SKILLS */}
            <div className="summary-container">
              <h4 className="subtitle">SKILLS</h4>

              <div className="employment-container-section row">
                <div className="col-md-3">
                  <div className="languages">
                    <p>LANGUAGES</p>
                    <p>PLATFORMS</p>
                  </div>
                </div>
                <div className="col-md-9">
                  <input
                    className="languages"
                    value={this.state.skills.languages}
                  />
                  <input
                    className="platforms"
                    value={this.state.skills.platforms}
                  />
                </div>
              </div>
            </div>
            {/* PROJECTS */}
            <div className="summary-container">
              <h4 className="subtitle">PROJECT</h4>

              <div className="employment-container-section row">
                <div className="col-md-3">
                  <input
                    className="eployment-time"
                    value={this.state.projects[0].name}
                  />
                </div>
                <div className="col-md-9 projects-responsibility">
                  <textarea rows="1">
                    {this.state.projects[0].responsibility[0]}
                  </textarea>
                  <textarea rows="1">
                    {this.state.projects[0].responsibility[1]}
                  </textarea>
                  <textarea rows="1">
                    {this.state.projects[0].responsibility[2]}
                  </textarea>
                </div>
              </div>

              <div className="employment-container-section row">
                <div className="col-md-3">
                  <input
                    className="eployment-time"
                    value={this.state.projects[1].name}
                  />
                </div>
                <div className="col-md-9 projects-responsibility">
                  <textarea rows="1">
                    {this.state.projects[1].responsibility[0]}
                  </textarea>
                  <textarea rows="1">
                    {this.state.projects[1].responsibility[1]}
                  </textarea>
                  <textarea rows="1">
                    {this.state.projects[1].responsibility[2]}
                  </textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeOne;
