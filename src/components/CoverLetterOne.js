import React, { Component } from "react";
import "../customStyles/CoverLetterOne.css";
import Footer from "./Footer";

class CoverLetter extends Component {
  state = {
    coverLetter: [
      {
        name: "THOMAS THOMPSON",
        title: "Software Engineer",
        city: "New York",
        email: "thomas@docsmith.com",
        linkedIn: "thomas@linkedin.com",
        gitHub: "thomas@github.com",
        phone: "555-248-0950"
      },
      {
        hiringManager: "Hiring Manager",
        company: "Galvanize Inc.",
        street: "515 E Grant St, Phoenix"
      },
      {
        zip: "AZ 85004",
        greeting: "Dear Mr. [name],",
        body:
          "This letter is to express my interest in your posting on Galvaniz.com for an experienced Software Developer. With a Bachelor’s degree in Computer Science, Master’s degree in Information Technology, and hands-on experience using .Net languages to create and implement software applications, I am confident I will be an asset to your organization.\n\nI enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me and the success of your organization.\n\nYour listed requirements closely match my background and skills. A few I would like to highlight that would enable me to contribute to your bottom line are:\n\n\tHighly skilled in designing, testing, and developing software\n\tThorough understanding of data structures and algorithms\n\tKnowledgeable of back-end development best practices Hands-on software\n\ttroubleshooting experience\n\tProven track record of proper documentation for future maintenance and upgrades\n\nI’ve attached a copy of my resume that details my projects and experience in software development. I can be reached anytime via my cell phone, 555-248-0950 or via email at gregvacca@docsmith.com.\n\nThank you for your time and consideration. I look forward to speaking with you about this opportunity.\n\nSincerely,",
        closing: "[name]"
      }
    ]
  };

  componentWillMount() {
    var getLetters = JSON.parse(localStorage.getItem("coverLetterOne"));
    this.setState(getLetters);
  }

  handleOnChangeContact = (e, i) => {
    let value = e.target.value;
    let name = e.target.name;
    let newState = {
      ...this.state,
      coverLetter: this.state.coverLetter.map((el, idx) => {
        if (idx === i) {
          return {
            ...el,
            [name]: value
          };
        }
        return el;
      })
    };
    this.setState(newState);
    localStorage.setItem("coverLetterOne", JSON.stringify(newState));
  };

  render() {
    return (
      <div className="main_wrapper">
        <Footer />
        <div className="container letter">
          <div className="row">
            <div className="flex contact">
              <ul>
                <li className="d-flex align-items-center">
                  <i className="mr-2 fa fa-map-marker" aria-hidden="true" />
                  <input
                    value={this.state.coverLetter[0].city}
                    name="city"
                    onChange={e => this.handleOnChangeContact(e, 0)}
                  />
                </li>
                <li className="d-flex align-items-center">
                  <i className="mr-2 fa fa-mobile" aria-hidden="true" />
                  <input
                    value={this.state.coverLetter[0].phone}
                    name="phone"
                    onChange={e => this.handleOnChangeContact(e, 0)}
                  />
                </li>
                <li className="d-flex align-items-center">
                  <i
                    className="paper_plane mr-2 fa fa-paper-plane"
                    aria-hidden="true"
                  />
                  <input
                    value={this.state.coverLetter[0].email}
                    name="email"
                    onChange={e => this.handleOnChangeContact(e, 0)}
                  />
                </li>
                <li className="d-flex align-items-center">
                  <i
                    className="paper_plane mr-2 fa fa-linkedin"
                    aria-hidden="true"
                  />
                  <input
                    value={this.state.coverLetter[0].linkedIn}
                    name="linkedIn"
                    onChange={e => this.handleOnChangeContact(e, 0)}
                  />
                </li>
                <li className="d-flex align-items-center">
                  <i
                    className="paper_plane mr-2 fa fa-github"
                    aria-hidden="true"
                  />
                  <input
                    value={this.state.coverLetter[0].gitHub}
                    name="gitHub"
                    onChange={e => this.handleOnChangeContact(e, 0)}
                  />
                </li>
              </ul>
            </div>
            <div className="body">
              <ul>
                <li>
                  <input
                    className="name"
                    value={this.state.coverLetter[0].name}
                    name="name"
                    onChange={e => this.handleOnChangeContact(e, 0)}
                  />
                </li>
                <li>
                  <input
                    className="title mb-5"
                    value={this.state.coverLetter[0].title}
                    name="title"
                    onChange={e => this.handleOnChangeContact(e, 0)}
                  />
                </li>
                <br />
                <li>
                  <input
                    className="hiringManager"
                    value={this.state.coverLetter[1].hiringManager}
                    name="hiringManager"
                    onChange={e => this.handleOnChangeContact(e, 1)}
                  />
                </li>
                <li>
                  <input
                    value={this.state.coverLetter[1].company}
                    name="company"
                    onChange={e => this.handleOnChangeContact(e, 1)}
                  />
                </li>
                <li>
                  <input
                    value={this.state.coverLetter[1].street}
                    name="street"
                    onChange={e => this.handleOnChangeContact(e, 1)}
                  />
                </li>
                <li>
                  <input
                    className="mb-4"
                    value={this.state.coverLetter[2].zip}
                    name="zip"
                    onChange={e => this.handleOnChangeContact(e, 2)}
                  />
                </li>
                <li>
                  <input
                    className="mb-4"
                    value={this.state.coverLetter[2].greeting}
                    name="greeting"
                    onChange={e => this.handleOnChangeContact(e, 2)}
                  />
                </li>
                <li>
                  <textarea
                    rows="28"
                    value={this.state.coverLetter[2].body}
                    name="body"
                    onChange={e => this.handleOnChangeContact(e, 2)}
                  />
                </li>
                <br />
                <li>
                  <input
                    value={this.state.coverLetter[2].closing}
                    name="closing"
                    onChange={e => this.handleOnChangeContact(e, 2)}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoverLetter;
