import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Link to={{ pathname: "/resumes" }}>Link to new Resume</Link>
        <Link to={{ pathname: "/coverletter" }}> Link to new Cover</Link>
      </div>
    );
  }
}

export default Home;
