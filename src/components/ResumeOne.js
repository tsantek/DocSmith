import React, { Component } from "react";
import "./ResumeOne.css";

class ResumeOne extends Component {
  state = {
    addNewEploymentToggle: false,
    addNewEducationToggle: false,
    name: "THOMAS THOMPSON",
    workingPeriod: "SOFTWARE ENGINEER",
    email: "email@tomsquared.co",
    web: "tomsquared.co",
    phone: "555-248-0950",
    twitter: "@tomtothetwo",
    github: "tstomsquared",
    summary:
      "Specializing in advanced computer vision topics such as facial recognition and full-body motion-tracking. Seeking work in the Boston area with exciting research and applications.",
    employment: [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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

    educationYear: "2010",
    educationCollege: "Rochester Institute of Technology",
    educationTitle: "B.S.Computer Science",
    educationMinor: "Minor: Applied Mathematics",
    skillsLanguages: "C++, HTML, Java, JavaScript, Python, Ruby",
    skillsPlatforms: "Android, Django, jQuery, Matlab, OpenCV",
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

  handlechangeInputEmployment = (e, i) => {
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

  handlechangeInputProjects = (e, i) => {
    let value = e.target.value;
    let name = e.target.name;
    let newState = {
      ...this.state,
      projects: this.state.projects.map((item, index) => {
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

  handleToggle(name) {
    this.setState(prevState => {
      return { ...prevState, [name]: !prevState[name] };
    });
  }

  handleAddNewEmployment(e) {
    e.preventDefault();
    console.log(e.target.time);
  }

  render() {
    console.log(this.state);
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
              <button
                className="btn-add-new-eployment"
                onClick={() => this.handleToggle("addNewEploymentToggle")}
              >
                Add New Eployment
              </button>

              {this.state.addNewEploymentToggle && (
                <form onSubmit={e => this.handleAddNewEmployment(e)}>
                  <div className="row">
                    <div className="col-md-3">
                      <input
                        className="add-time"
                        name="time"
                        placeholder="Working period"
                      />
                    </div>
                    <div className="col-md-9">
                      <input
                        className="add-company"
                        name="company"
                        placeholder="Company"
                      />
                      <input
                        className="add-title"
                        name="title"
                        placeholder="Title"
                      />
                      <input
                        className="add-city"
                        name="city"
                        placeholder="City"
                      />
                      <br />
                      <textarea
                        className="add-responsibility"
                        rows="2"
                        name="responsibilityOne"
                        placeholder="Responsibility"
                      />
                      <textarea
                        className="add-responsibility"
                        rows="2"
                        name="responsibilityTwo"
                        placeholder="Responsibility"
                      />
                      <input
                        className="btn add-btn"
                        type="submit"
                        value="Add"
                      />
                    </div>
                  </div>
                </form>
              )}

              {this.state.employment.map((employer, index) => {
                return (
                  <div
                    key={employer.time}
                    className="employment-container-section row"
                  >
                    <div className="col-md-3">
                      <input
                        className="eployment-time "
                        value={employer.workingPeriod}
                        name="workingPeriod"
                        onChange={e =>
                          this.handlechangeInputEmployment(e, index)
                        }
                      />
                    </div>
                    <div className="col-md-9">
                      <input
                        className="company"
                        value={employer.company}
                        name="company"
                        onChange={e =>
                          this.handlechangeInputEmployment(e, index)
                        }
                      />
                      <input
                        className="title"
                        value={employer.title}
                        name="title"
                        onChange={e =>
                          this.handlechangeInputEmployment(e, index)
                        }
                      />
                      <input
                        className="city"
                        value={employer.city}
                        name="city"
                        onChange={e =>
                          this.handlechangeInputEmployment(e, index)
                        }
                      />
                      <br />
                      <textarea
                        rows="1"
                        name="responsibilityOne"
                        onChange={e =>
                          this.handlechangeInputEmployment(e, index)
                        }
                        value={employer.responsibilityOne}
                      />
                      <textarea
                        rows="1"
                        name="responsibilityTwo"
                        onChange={e =>
                          this.handlechangeInputEmployment(e, index)
                        }
                        value={employer.responsibilityTwo}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            {/* EDUCATION */}
            <div className="summary-container">
              <h4 className="subtitle">EDUCATION</h4>

              <button
                className="btn-add-new-eployment"
                onClick={() => this.handleToggle("addNewEducationToggle")}
              >
                Add New Education
              </button>

              {this.state.addNewEducationToggle && (
                <form>
                  <div className="row">
                    <div className="col-md-3">
                      <input
                        className="add-time"
                        name="educationYear"
                        placeholder="Year Finished"
                      />
                    </div>
                    <div className="col-md-9">
                      <input
                        className="add-company"
                        style={{ width: "100%" }}
                        name="educationCollege"
                        placeholder="Name of School"
                      />
                      <input
                        className="add-title"
                        style={{ width: "100%" }}
                        name="educationMinor"
                        placeholder="Degree"
                      />
                      <input
                        className="add-title"
                        style={{ width: "100%" }}
                        name="educationMinor"
                        placeholder="Degree"
                      />
                      <input
                        className="btn add-btn"
                        type="submit"
                        value="Add"
                      />
                    </div>
                  </div>
                </form>
              )}

              <div className="employment-container-section row">
                <div className="col-md-3">
                  <input
                    className="eployment-time "
                    value={this.state.educationYear}
                    name="educationYear"
                    onChange={this.handleOnChangeInfo}
                  />
                </div>
                <div className="col-md-9">
                  <input
                    className="college"
                    value={this.state.educationCollege}
                    name="educationCollege"
                    onChange={this.handleOnChangeInfo}
                  />
                  <br />
                  <input
                    className="title-education"
                    value={this.state.educationTitle}
                    name="educationTitle"
                    onChange={this.handleOnChangeInfo}
                  />
                  <input
                    className="minor"
                    value={this.state.educationMinor}
                    name="educationMinor"
                    onChange={this.handleOnChangeInfo}
                  />
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
                    value={this.state.skillsLanguages}
                    name="skillsLanguages"
                    onChange={this.handleOnChangeInfo}
                  />
                  <input
                    className="platforms"
                    value={this.state.skillsPlatforms}
                    name="skillsPlatforms"
                    onChange={this.handleOnChangeInfo}
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
                    name="name"
                    onChange={e => this.handlechangeInputProjects(e, 0)}
                  />
                </div>
                <div className="col-md-9 projects-responsibility">
                  <textarea
                    rows="1"
                    value={this.state.projects[0].responsibilityOne}
                    name="responsibilityOne"
                    onChange={e => this.handlechangeInputProjects(e, 0)}
                  />
                  <textarea
                    rows="1"
                    value={this.state.projects[0].responsibilityTwo}
                    name="responsibilityTwo"
                    onChange={e => this.handlechangeInputProjects(e, 0)}
                  />
                  <textarea
                    rows="1"
                    value={this.state.projects[0].responsibilityThree}
                    name="responsibilityThree"
                    onChange={e => this.handlechangeInputProjects(e, 0)}
                  />
                </div>
              </div>

              <div className="employment-container-section row">
                <div className="col-md-3">
                  <input
                    className="eployment-time"
                    value={this.state.projects[1].name}
                    name="name"
                    onChange={e => this.handlechangeInputProjects(e, 1)}
                  />
                </div>
                <div className="col-md-9 projects-responsibility">
                  <textarea
                    rows="1"
                    value={this.state.projects[1].responsibilityTwo}
                    name="responsibilityTwo"
                    onChange={e => this.handlechangeInputProjects(e, 1)}
                  />
                  <textarea
                    rows="1"
                    value={this.state.projects[1].responsibilityThree}
                    name="responsibilityThree"
                    onChange={e => this.handlechangeInputProjects(e, 1)}
                  />
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
