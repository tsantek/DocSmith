import React, { Component } from "react";
import '../customStyles/home.css'
import Navbar from './PageNavigation'
import Jumbotron from './Jumbotron'
import Resume from './ResumeGraphics'
import CoverLetter from './CoverLetterGraphics'
import Footer from './Footer'

// import { Link } from "react-router-dom";

class Home extends Component {

  state = {
    resume: true,
    jumbotronH3: "",
    jumbotronPrg: ""
  };

  coverLetterToggle = () => {
    this.setState({ resume: false })
  }
  resumeToggle = () => {
    this.setState(prevState => ({ resume: true }))
  }

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron 
        coverLetterToggle={ this.coverLetterToggle } 
        resumeToggle={ this.resumeToggle } 
        state={ this.state }
        />
        { this.state.resume ? <Resume /> : <CoverLetter /> }
        <Footer />
      </div>
    );
  }
}

export default Home;
