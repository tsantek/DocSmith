import React from "react";
import imgOne from "./ResumesImg/1.png";
import imgTwo from "./ResumesImg/2.png";
import imgThree from "./ResumesImg/3.png";
import { Container } from "reactstrap";

const resumeGraphics = props => {
  return (
    <Container className="graphic_wrapper my-5">
      <div className="row">
        <div className="col-md col-sm-6 mb-3 p-0 mx-3 graphics">
          <div className="graphic_caption d-flex justify-content-between">
            <span>Modern</span>
          </div>
          {props.user.length > 0 ? (
            <a href="/one" alt="resume">
              <img className="graphic" src={imgOne} alt="resume" />
            </a>
          ) : (
            <a href="/RegistrationAndSignUp" alt="resume">
              <img className="graphic" src={imgOne} alt="resume" />
            </a>
          )}
        </div>
        <div className="col-md col-sm-6 mb-3 p-0 mx-3 graphics">
          <div className="graphic_caption d-flex justify-content-between">
            <span>Functional</span>
          </div>
          <a href="/" alt="resume">
            <img className="graphic" src={imgTwo} alt="resume" />
          </a>
        </div>
        <div className="col-md col-sm-6 mb-3 p-0 mx-3 graphics">
          <div className="graphic_caption d-flex justify-content-between">
            <span>Simple</span>
          </div>
          <a href="/" alt="resume">
            <img className="graphic" src={imgThree} alt="resume" />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default resumeGraphics;
