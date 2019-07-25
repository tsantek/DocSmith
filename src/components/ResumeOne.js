import React, { Component } from "react";
import "./ResumeOne.css";

class ResumeOne extends Component {
  state = {
    proUser: false,
    addNewEploymentToggle: false,
    addNewEducationToggle: false,
    addNewProjectToggle: false,
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
        id: 1,
        workingPeriod: "Jun 2012 to Current",
        company: "Corespace Sciences",
        title: "Software Engineer",
        city: "Boston, MA",
        responsibilityOne:
          "* Designed and implemented new version of Corespace's full-body motion-tracking software.",
        responsibilityTwo:
          "* Work resulted in a 25% increase in accuracy and 15% increase in speed over the existing version.",
        period: "Jun 2012 to Current"
      },
      {
        id: 2,
        workingPeriod: "Jun 2010 to Apr 2012",
        company: "Emotional.ly",
        title: "Computer Vision Engineer",
        city: "New York, NY",
        responsibilityOne:
          "* Specialized in applying emotion recognition and classification algorithms to video frames towards Emotional.ly's new video-based emotion-recognition product.",
        responsibilityTwo:
          "* Assisted with modeling and converting data into formats for input into neural networks.",
        period: "Jun 2010 to Apr 2012"
      },
      {
        id: 3,
        workingPeriod: "Jun 2009 to Aug 2009",
        company: "Emotional.ly",
        title: "Software Engineer Intern",
        city: "New York, NY",
        responsibilityOne:
          "* Expanded Emotional.ly's emotion recognition algorithms to support six additional emotion classifications.",
        responsibilityTwo:
          "* Compressed data storage modal resulting in a 25% size reduction without data loss.",
        period: "Jun 2009 to Aug 2009"
      },
      {
        id: 4,
        workingPeriod: "May 2008 to Dec 2008",
        company: "Code:all Foundation",
        title: "Python Course Planner",
        city: "Remote",
        responsibilityOne:
          "* Created three 10-lesson interactive courses for teaching Python and data structures to middle and high school students through Code:all's website.",
        responsibilityTwo:
          "* Taught several live workshops for Code:all students.",
        period: "May 2008 to Dec 2008"
      }
    ],
    education: [
      {
        id: 1,
        educationYear: "2010",
        educationCollege: "Rochester Institute of Technology",
        educationTitle: "B.S.Computer Science",
        educationMinor: "Minor: Applied Mathematics"
      }
    ],
    skillsLanguages: "C++, HTML, Java, JavaScript, Python, Ruby",
    skillsPlatforms: "Android, Django, jQuery, Matlab, OpenCV",
    projects: [
      {
        id: 1,
        name: "Intersect Image Sorter",
        responsibilityOne:
          "* Developed an web-based automatic image categorizer and sorter based on various image properties.",
        responsibilityTwo:
          "* Applied basic computer vision techniques for sorting",
        responsibilityThree: "* Created web stack using Django."
      },
      {
        id: 2,
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
    let newState = { ...this.state, [name]: value };
    this.setState(newState);
  };

  handlechangeInputEmployment = (e, i) => {
    let value = e.target.value;
    let name = e.target.name;

    this.setState(prevState => {
      return {
        ...prevState,
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
    });
  };

  handlechangeInputEducation = (e, i) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => {
      return {
        ...prevState,
        education: prevState.education.map((item, index) => {
          if (index === i) {
            return {
              ...item,
              [name]: value
            };
          }
          return item;
        })
      };
    });
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
  };

  handleToggle(name) {
    this.setState(prevState => {
      return { ...prevState, [name]: !prevState[name] };
    });
  }

  handleAddNewEmployment(e) {
    e.preventDefault();
    const newEmploymet = {
      id: Math.random(),
      company: e.target.company.value,
      title: e.target.title.value,
      city: e.target.city.value,
      responsibilityOne: e.target.responsibilityOne.value,
      responsibilityTwo: e.target.responsibilityTwo.value,
      period: e.target.time.value
    };
    this.setState(prevState => {
      return {
        ...prevState,
        addNewEploymentToggle: false,
        employment: [newEmploymet, ...this.state.employment]
      };
    });
  }

  handleAddNewEducation(e) {
    e.preventDefault();
    const newEdu = {
      id: Math.random(),
      educationYear: e.target.educationYear.value,
      educationCollege: e.target.educationCollege.value,
      educationTitle: e.target.educationTitle.value,
      educationMinor: e.target.educationMinor.value
    };
    this.setState(prevState => {
      return {
        ...prevState,
        addNewEducationToggle: false,
        education: [newEdu, ...this.state.education]
      };
    });
  }

  handleAddNewProject(e) {
    e.preventDefault();
    console.log(e.target);
    const newProject = {
      id: Math.random(),
      name: e.target.name.value,
      responsibilityOne: e.target.responsibilityOne.value,
      responsibilityTwo: e.target.responsibilityTwo.value,
      responsibilityThree: e.target.responsibilityThree.value
    };

    this.setState(prevState => {
      return {
        ...prevState,
        addNewProjectToggle: false,
        projects: [newProject, ...this.state.projects]
      };
    });
  }

  handleRemoveEmploymemt = id => {
    this.setState(prevState => {
      return {
        ...prevState,
        employment: prevState.employment.filter(employer => employer.id !== id)
      };
    });
  };

  handleRemoveEducation = id => {
    this.setState(prevState => {
      return {
        ...prevState,
        education: prevState.education.filter(edu => edu.id !== id)
      };
    });
  };

  handleRemoveProject = id => {
    this.setState(prevState => {
      return {
        ...prevState,
        projects: prevState.projects.filter(project => project.id !== id)
      };
    });
  };

  render() {
    localStorage.setItem("resumeOne", JSON.stringify(this.state));
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
                    key={employer.id}
                    className="employment-container-section row"
                  >
                    <div className="col-md-3">
                      {/* <input
                        className="eployment-time"
                        value={employer.workingPeriod}
                        key={employer.workingPeriod}
                        name="workingPeriod"
                        onChange={e =>
                          this.handlechangeInputEmployment(e, index)
                        }
                      /> */}

                      <input
                        className="eployment-time"
                        value={employer.period}
                        name="period"
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
                      <button
                        className="close-btn"
                        onClick={() => this.handleRemoveEmploymemt(employer.id)}
                      >
                        X
                      </button>
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
                <form onSubmit={e => this.handleAddNewEducation(e)}>
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
                        name="educationTitle"
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
              {this.state.education.map((edu, index) => {
                return (
                  <div
                    key={edu.id}
                    className="employment-container-section row"
                  >
                    <div className="col-md-3">
                      <input
                        className="eployment-time "
                        value={edu.educationYear}
                        name="educationYear"
                        onChange={e =>
                          this.handlechangeInputEducation(e, index)
                        }
                      />
                    </div>
                    <div className="col-md-9">
                      <input
                        className="college"
                        value={edu.educationCollege}
                        name="educationCollege"
                        onChange={e =>
                          this.handlechangeInputEducation(e, index)
                        }
                      />
                      <br />
                      <input
                        className="title-education"
                        value={edu.educationTitle}
                        name="educationTitle"
                        onChange={e =>
                          this.handlechangeInputEducation(e, index)
                        }
                      />
                      <input
                        className="minor"
                        value={edu.educationMinor}
                        name="educationMinor"
                        onChange={e =>
                          this.handlechangeInputEducation(e, index)
                        }
                      />

                      <button
                        className="close-btn"
                        onClick={() => this.handleRemoveEducation(edu.id)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                );
              })}
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

              <button
                className="btn-add-new-eployment"
                onClick={() => this.handleToggle("addNewProjectToggle")}
              >
                Add New Project
              </button>

              {this.state.addNewProjectToggle && (
                <form onSubmit={e => this.handleAddNewProject(e)}>
                  <div className="row">
                    <div className="col-md-3">
                      <input
                        className="add-time"
                        name="name"
                        placeholder="Project Name"
                      />
                    </div>
                    <div className="col-md-9">
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
                      <textarea
                        className="add-responsibility"
                        rows="2"
                        name="responsibilityThree"
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

              {this.state.projects.map((project, index) => {
                return (
                  <div className="employment-container-section row">
                    <div className="col-md-3">
                      <input
                        className="eployment-time"
                        value={project.name}
                        name="name"
                        onChange={e => this.handlechangeInputProjects(e, index)}
                      />
                    </div>

                    <div className="col-md-9 projects-responsibility">
                      <textarea
                        rows="1"
                        value={project.responsibilityOne}
                        name="responsibilityOne"
                        onChange={e => this.handlechangeInputProjects(e, index)}
                      />
                      <textarea
                        rows="1"
                        value={project.responsibilityTwo}
                        name="responsibilityTwo"
                        onChange={e => this.handlechangeInputProjects(e, index)}
                      />
                      <textarea
                        rows="1"
                        value={project.responsibilityThree}
                        name="responsibilityThree"
                        onChange={e => this.handlechangeInputProjects(e, index)}
                      />
                      <button
                        className="close-btn"
                        onClick={() => this.handleRemoveProject(project.id)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeOne;
