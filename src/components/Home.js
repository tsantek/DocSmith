import React, { Component } from "react";
import "../customStyles/home.css";
import Navbar from "./PageNavigation";
import Jumbotron from "./Jumbotron";
import Resume from "./ResumeGraphics";
import CoverLetter from "./CoverLetterGraphics";
import Footer from "./Footer";

// import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    resume: true,
    jumbotronH3: "",
    jumbotronPrg: ""
  };

  componentWillMount() {
    if (localStorage.getItem("user")) {
      var getObject = JSON.parse(localStorage.getItem("user"));
      this.setState({
        loggedIn: getObject.logedin
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
    getObject.logedin = false;
    localStorage.setItem("user", JSON.stringify(getObject));
    this.setState({
      loggedIn: false
    });
  };

  render() {
    return (
      <div>
        <Navbar
          loggedIn={this.state.loggedIn}
          handleLogOut={this.handleLogOut}
        />
        <Jumbotron
          coverLetterToggle={this.coverLetterToggle}
          resumeToggle={this.resumeToggle}
          state={this.state}
        />
        {this.state.resume ? (
          <Resume loggedIn={this.state.loggedIn} />
        ) : (
          <CoverLetter />
        )}
        <Footer />
      </div>
    );
  }
}

export default Home;
