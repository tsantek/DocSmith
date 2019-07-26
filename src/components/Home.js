import React, { Component } from "react";
import "../customStyles/home.css";
import Navbar from "./PageNavigation";
import Jumbotron from "./Jumbotron";
import Resume from "./ResumeGraphics";
import CoverLetter from "./CoverLetterGraphics";
import FooterHome from "./FooterHome";
// import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    resume: true,
    jumbotronH3: "",
    jumbotronPrg: "",
    user: []
  };

  componentWillMount() {
    if (localStorage.getItem("user")) {
      var getObject = JSON.parse(localStorage.getItem("user"));
      this.setState({
        user: getObject.filter(user => user.logedin)
      });
    }
  }

  coverLetterToggle = () => {
    this.setState({ resume: false });
  };
  resumeToggle = () => {
    this.setState(prevState => ({ resume: true }));
  };

  handleLogOut = () => {
    var getObject = JSON.parse(localStorage.getItem("user"));
    let newObject = getObject.map(user => {
      if (user.logedin === true) {
        return {
          ...user,
          logedin: false
        };
      }
      return user;
    });
    localStorage.setItem("user", JSON.stringify(newObject));
    this.setState({
      user: []
    });
  };

  render() {
    return (
      <div>
        <Navbar user={this.state.user} handleLogOut={this.handleLogOut} />
        <Jumbotron
          coverLetterToggle={this.coverLetterToggle}
          resumeToggle={this.resumeToggle}
          state={this.state}
        />
        {this.state.resume ? (
          <Resume user={this.state.user} />
        ) : (
          <CoverLetter user={this.state.user} />
        )}
        <FooterHome />
      </div>
    );
  }
}

export default Home;
