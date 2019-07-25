import React, { Component } from "react";
import  '../customStyles/CoverLetterOne.css'
import Footer from './Footer'

class CoverLetter extends Component {
  state = {
    coverLetter: [  
      {
        name: "Greg Vacca",
        title: "Software Engineer",
        city: "New York",
        email: "gregvacca@docsmith.com",
        linkedIn: "gregvacca@linkedin.com",
        gitHub: "gregvacca@github.com",
        phone: "555-248-0950"
      },
      {
        hiringManager: "Hiring Manager",
        company: "Docsmith Inc.",
        street: "133 W6, Tempe",
      },
      {
        zip: "85281, AZ",
        greeting: "Dear Sir/Madam,",
        body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim cum suscipit modi fugiat facere, labore placeat quibusdam impedit eos ipsam minus nobis nulla a earum adipisci! Eligendi labore dolorem voluptatibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim cum suscipit modi fugiat facere, labore placeat quibusdam impedit eos ipsam minus nobis nulla a earum adipisci! Eligendi labore dolorem voluptatibus!\n\nLorem, ipsum dolor sit amet consectetur adipisicing elit. Enim cum suscipit modi fugiat facere, labore placeat quibusdam impedit eos ipsam minus nobis nulla a earum adipisci! Eligendi labore dolorem voluptatibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim cum suscipit modi fugiat facere, labore placeat quibusdam impedit eos ipsam minus nobis nulla a earum adipisci! Eligendi labore dolorem voluptatibus!",
        closing: "Clarance Farley"
      }
    ]
  };

  componentWillMount(){
    var getLetters = JSON.parse(localStorage.getItem("coverLetterOne"));
    this.setState(getLetters);
  }

  handleOnChangeContact = (e, i)=> {
    let value = e.target.value;
    let name = e.target.name;
    let newState = {
      ...this.state,
      coverLetter: this.state.coverLetter.map((el, idx) => {
        if (idx === i) {
          return {
            ...el,
            [name]: value
          }
        }
        return el;
      })
    }
    this.setState(newState)
    localStorage.setItem("coverLetterOne", JSON.stringify(newState));
  }

  render() {
    return (
      <div className="main_wrapper">
          <Footer />
          <div className="container letter">
            <div className="row">
              <div className="flex contact">
                <ul>
                  <li className="d-flex align-items-center">
                    <i className="mr-2 fa fa-map-marker" aria-hidden="true"></i>
                    <input
                      value={this.state.coverLetter[0].city}
                      name="city"
                      onChange={e => this.handleOnChangeContact(e, 0)}
                    />
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="mr-2 fa fa-mobile" aria-hidden="true"></i>
                    <input
                      value={this.state.coverLetter[0].phone}
                      name="phone"
                      onChange={e => this.handleOnChangeContact(e, 0)}
                    />
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="paper_plane mr-2 fa fa-paper-plane" aria-hidden="true"></i>
                    <input
                      value={this.state.coverLetter[0].email}
                      name="email"
                      onChange={e => this.handleOnChangeContact(e, 0)}
                    />
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="paper_plane mr-2 fa fa-linkedin" aria-hidden="true"></i>
                    <input
                      value={this.state.coverLetter[0].linkedIn}
                      name="linkedIn"
                      onChange={e => this.handleOnChangeContact(e, 0)}
                    />
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="paper_plane mr-2 fa fa-github" aria-hidden="true"></i>
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
                  <br/>
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
                      rows="11"
                      className="mb-5"
                      value={this.state.coverLetter[2].body}
                      name="body"
                      onChange={e => this.handleOnChangeContact(e, 2)}
                    />
                  </li>
                  <br/>
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
    )
  }
}

export default CoverLetter;
