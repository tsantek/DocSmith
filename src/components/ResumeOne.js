import React, { Component } from "react";
import "./ResumeOne.css";

class ResumeOne extends Component {
  state = {
    name: "THOMAS THOMPSON",
    title: "SOFTWARE ENGINEER",
    email: "email@tomsquared.co",
    web: "tomsquared.co",
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
        responsibilityOne:
          "* Designed and implemented new version of Corespace's full-body motion-tracking software.",
        responsibilityTwo:
          "* Work resulted in a 25% increase in accuracy and 15% increase in speed over the existing version."
      },
      {
        time: "Jun 2010 to Apr 2012",
        company: "Emotional.ly",
        title: "Computer Vision Engineer",
        city: "New York, NY",
        responsibilityOne:
          "* Specialized in applying emotion recognition and classification algorithms to video frames towards Emotional.ly's new video-based emotion-recognition product.",
        responsibilityTwo:
          "* Assisted with modeling and converting data into formats for input into neural networks."
      },
      {
        time: "Jun 2009 to Aug 2009",
        company: "Emotional.ly",
        title: "Software Engineer Intern",
        city: "New York, NY",
        responsibilityOne:
          "* Expanded Emotional.ly's emotion recognition algorithms to support six additional emotion classifications.",
        responsibilityTwo:
          "* Compressed data storage modal resulting in a 25% size reduction without data loss."
      },
      {
        time: "May 2008 to Dec 2008",
        company: "Code:all Foundation",
        title: "Python Course Planner",
        city: "Remote",
        responsibilityOne:
          "* Created three 10-lesson interactive courses for teaching Python and data structures to middle and high school students through Code:all's website.",
        responsibilityTwo:
          "* Taught several live workshops for Code:all students."
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
        responsibilityOne:
          "* Developed an web-based automatic image categorizer and sorter based on various image properties.",
        responsibilityTwo:
          "* Applied basic computer vision techniques for sorting",
        responsibilityThree: "* Created web stack using Django."
      },
      {
        name: "DatHat Android App",
        responsibilityOne:
          "* Co-wrote an Android app enabling users to sending pictures of themselves wearing various cartoon hats.",
        responsibilityTwo:
          "* Specialized in applying facial recognition techniques to automatically place hats properly in the images.",
        responsibilityThree: "* Won 1st place in school club Android hackathon."
      }
    ]
  };

  componentWillMount() {
    var getObject = JSON.parse(localStorage.getItem("resumeOne"));
    this.setState(getObject);
  }

  handleOnChangeInfo = e => {
    let value = e.target.value;
    let name = e.target.name;
    console.log(name, value);
    let newState = { ...this.state, [name]: value };
    this.setState(newState);
    localStorage.setItem("resumeOne", JSON.stringify(newState));
  };

  changeInputEmployment = (e, i) => {
    let value = e.target.value;
    let name = e.target.name;
    let newState = {
      ...this.state,
      employment: this.state.employment.map((item, index) => {
        if (index === i) {
          return {
            ...item,
            [name]: value
          };
        }
        return item;
      })
    };
    this.setState(newState);
    localStorage.setItem("resumeOne", JSON.stringify(newState));
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
                  <input
                    name="name"
                    className="inputStyleName"
                    value={this.state.name}
                    onChange={this.handleOnChangeInfo}
                  />
                </div>
                <div className="col-md-6 inputStyle">
                  <input
                    className="inputStyleTitle"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleOnChangeInfo}
                  />
                </div>
              </div>
              <ul className="linksSocialUl">
                <li>
                  <input
                    name="email"
                    value={this.state.email}
                    onChange={this.handleOnChangeInfo}
                  />
                </li>
                <li>
                  <input
                    value={this.state.phone}
                    name="phone"
                    onChange={this.handleOnChangeInfo}
                  />
                </li>
                <li>
                  <input
                    value={this.state.twitter}
                    name="twitter"
                    onChange={this.handleOnChangeInfo}
                  />
                </li>
                <li>
                  <input
                    value={this.state.web}
                    name="web"
                    onChange={this.handleOnChangeInfo}
                  />
                </li>
                <li>
                  <input
                    value={this.state.github}
                    name="github"
                    onChange={this.handleOnChangeInfo}
                  />
                </li>
              </ul>
            </div>
            {/* SUMMARY  */}
            <div className="summary-container">
              <h4 className="subtitle">SUMMARY</h4>
              <textarea
                rows="2"
                name="summary"
                onChange={this.handleOnChangeInfo}
                value={this.state.summary}
              />
            </div>
            {/* EMPLOYMENT */}
            <div className="summary-container">
              <h4 className="subtitle">EMPLOYMENT</h4>
              <div className="employment-container-section row">
                <div className="col-md-3">
                  <input
                    className="eployment-time "
                    value={this.state.employment[0].time}
                    name="time"
                    onChange={e => this.changeInputEmployment(e, 0)}
                  />
                </div>
                <div className="col-md-9">
                  <input
                    className="company"
                    value={this.state.employment[0].company}
                    name="company"
                    onChange={e => this.changeInputEmployment(e, 0)}
                  />
                  <input
                    className="title"
                    value={this.state.employment[0].title}
                    name="title"
                    onChange={e => this.changeInputEmployment(e, 0)}
                  />
                  <input
                    className="city"
                    value={this.state.employment[0].city}
                    name="city"
                    onChange={e => this.changeInputEmployment(e, 0)}
                  />
                  <br />
                  <textarea
                    rows="1"
                    name="responsibilityOne"
                    onChange={e => this.changeInputEmployment(e, 0)}
                    value={this.state.employment[0].responsibilityOne}
                  />
                  <textarea
                    rows="1"
                    name="responsibilityTwo"
                    onChange={e => this.changeInputEmployment(e, 0)}
                    value={this.state.employment[0].responsibilityTwo}
                  />
                </div>
              </div>

              {/* two */}

              <div className="employment-container-section row">
                <div className="col-md-3">
                  <input
                    className="eployment-time"
                    value={this.state.employment[1].time}
                    name="time"
                    onChange={e => this.changeInputEmployment(e, 1)}
                  />
                </div>
                <div className="col-md-9">
                  <input
                    className="company"
                    value={this.state.employment[1].company}
                    name="company"
                    onChange={e => this.changeInputEmployment(e, 1)}
                  />
                  <input
                    className="title"
                    value={this.state.employment[1].title}
                    name="title"
                    onChange={e => this.changeInputEmployment(e, 1)}
                  />
                  <input
                    className="city"
                    value={this.state.employment[1].city}
                    name="city"
                    onChange={e => this.changeInputEmployment(e, 1)}
                  />
                  <br />
                  <textarea
                    rows="2"
                    name="responsibilityOne"
                    onChange={e => this.changeInputEmployment(e, 1)}
                    value={this.state.employment[1].responsibilityOne}
                  />
                  <textarea
                    rows="1"
                    name="responsibilityTwo"
                    onChange={e => this.changeInputEmployment(e, 1)}
                    value={this.state.employment[1].responsibilityTwo}
                  />
                </div>
              </div>
              {/* Three */}

              <div className="employment-container-section row">
                <div className="col-md-3">
                  <input
                    className="eployment-time"
                    value={this.state.employment[2].time}
                    name="time"
                    onChange={e => this.changeInputEmployment(e, 2)}
                  />
                </div>
                <div className="col-md-9">
                  <input
                    className="company"
                    value={this.state.employment[2].company}
                    name="company"
                    onChange={e => this.changeInputEmployment(e, 2)}
                  />
                  <input
                    className="title"
                    value={this.state.employment[2].title}
                    name="title"
                    onChange={this.handleOnChangeThreeEployment}
                  />
                  <input
                    className="city"
                    value={this.state.employment[2].city}
                    name="city"
                    onChange={e => this.changeInputEmployment(e, 2)}
                  />
                  <br />
                  <textarea
                    rows="2"
                    name="responsibilityOne"
                    onChange={e => this.changeInputEmployment(e, 2)}
                    value={this.state.employment[2].responsibilityOne}
                  />
                  <textarea
                    rows="1"
                    name="responsibilityTwo"
                    onChange={e => this.changeInputEmployment(e, 2)}
                    value={this.state.employment[2].responsibilityTwo}
                  />
                </div>
              </div>
              {/* Four */}

              <div className="employment-container-section row">
                <div className="col-md-3">
                  <input
                    className="eployment-time "
                    value={this.state.employment[3].time}
                    name="time"
                    onChange={e => this.changeInputEmployment(e, 3)}
                  />
                </div>
                <div className="col-md-9">
                  <input
                    className="company"
                    value={this.state.employment[3].company}
                    name="company"
                    onChange={e => this.changeInputEmployment(e, 3)}
                  />
                  <input
                    className="title"
                    value={this.state.employment[3].title}
                    name="title"
                    onChange={e => this.changeInputEmployment(e, 3)}
                  />
                  <input
                    className="city"
                    value={this.state.employment[3].city}
                    name="city"
                    onChange={e => this.changeInputEmployment(e, 3)}
                  />
                  <br />
                  <textarea
                    rows="2"
                    name="responsibilityOne"
                    onChange={e => this.changeInputEmployment(e, 3)}
                    value={this.state.employment[3].responsibilityOne}
                  />
                  <textarea
                    rows="1"
                    name="responsibilityTwo"
                    onChange={e => this.changeInputEmployment(e, 3)}
                    value={this.state.employment[3].responsibilityTwo}
                  />
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
                    {this.state.projects[0].responsibilityOne}
                  </textarea>
                  <textarea rows="1">
                    {this.state.projects[0].responsibilityTwo}
                  </textarea>
                  <textarea rows="1">
                    {this.state.projects[0].responsibilityThree}
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
                    {this.state.projects[1].responsibilityOne}
                  </textarea>
                  <textarea rows="1">
                    {this.state.projects[1].responsibilityTwo}
                  </textarea>
                  <textarea rows="1">
                    {this.state.projects[1].responsibilityThree}
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
