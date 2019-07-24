// Home PAGE / Component

import React, { Component } from "react";
import '../customStyles/home.css'
import Logo from '../docsmithlogo.png'
import FooterLogo from '../docsmithlogo-w.png'
import imgOne from "./ResumesImg/1.png";
import imgTwo from "./ResumesImg/2.png";
import imgThree from "./ResumesImg/3.png";
// import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, Button, Jumbotron, ButtonGroup, Container } from 'reactstrap';

class Home extends Component {
  state = {

  };
  render() {
    return (
      <div>

        <Navbar className="navbar mx-4" color="white" light expand="md">
          <NavbarBrand href="/"><img src={Logo} alt="logo" /></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button className="signin" size="sm" color="dark">
                Sign In <i className="fa fa-sign-in" aria-hidden="true"></i> 
              </Button>
            </NavItem>
            <NavItem>
              <Button size="sm"  className="signup ml-2 btn btn-outline-dark" color="seconday">
                <i className="fa fa-user-plus" aria-hidden="true"></i>
              </Button>
            </NavItem>
          </Nav>
        </Navbar>

        <Jumbotron className="mb-0 rounded-0">
          <h3>Why Should I Use a Cover Letter Template?</h3>
          <p className="lead">To promote your personal brand, it is recommended to use the same design, fonts and color themes on your cover letter template as in your resume, and this is possible with the following templates.</p>
          <div className="line_separator"></div>
          <ButtonGroup size="lg">
            <Button className="btn btn-outline-dark px-5">
              Resumes
              <small>Student / Intermediate</small>
            </Button>
            <Button className="btn btn-outline-dark px-5">
              Cover Letters
              <small>All levels of experience</small>
            </Button>
          </ButtonGroup>
        </Jumbotron>

        <Container className="graphic_wrapper my-5">
          <div className="row">
            <div className="col-md col-sm-6 mb-3 p-0 mx-3 graphics">
              <div className="graphic_caption d-flex justify-content-between">
                <span>Modern</span>
                <i className="fa fa-search-plus"></i>
              </div>
              <img src="imgOne" alt="resume" />
            </div>
            <div className="col-md col-sm-6 mb-3 p-0 mx-3 graphics">
              <div className="graphic_caption d-flex justify-content-between">
                <span>Funtional</span>
                <i className="fa fa-search-plus"></i>
              </div>
              <img src="imgTwo" alt="resume" />
            </div>
            <div className="col-md col-sm-6 mb-3 p-0 mx-3 graphics">
              <div className="graphic_caption d-flex justify-content-between">
                <span>Simple</span>
                <i className="fa fa-search-plus"></i>
              </div>
              <img src="imgThree" alt="resume" />
            </div>
          </div>
        </Container>

        <div className="footer">
          <div className="footer_brand">
            <NavbarBrand href="/"><img src={FooterLogo} alt="logo" /></NavbarBrand>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
