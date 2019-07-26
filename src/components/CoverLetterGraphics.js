import React from "react";
import imgOne from "./CoverLetterImg/1.jpg";
import imgTwo from "./CoverLetterImg/2.jpg";
import imgThree from "./CoverLetterImg/3.jpg";
import { Container } from "reactstrap";

const coverLetterGraphics = props => {
  return (
    <Container className="graphic_wrapper my-5">
      <div className="row">
        <div className="col-md col-sm-6 mb-3 p-0 mx-3 graphics">
          <div className="graphic_caption d-flex justify-content-between">
            <span>Funtional</span>
          </div>
          {props.user.length === 0 ? (
            <a href="/RegistrationAndSignUp">
              <img src={imgTwo} alt="resume" />
            </a>
          ) : (
            <a href="/CoverLetterOne">
              <img src={imgTwo} alt="resume" />
            </a>
          )}
        </div>
        <div className="col-md col-sm-6 mb-3 p-0 mx-3 graphics">
          <div className="graphic_caption d-flex justify-content-between">
            <span>Modern</span>
          </div>
          <a href="/CoverLetterOne">
            <img src={imgOne} alt="resume" />
          </a>
        </div>
        <div className="col-md col-sm-6 mb-3 p-0 mx-3 graphics">
          <div className="graphic_caption d-flex justify-content-between">
            <span>Simple</span>
          </div>
          <a href="/CoverLetterOne">
            <img src={imgThree} alt="resume" />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default coverLetterGraphics;
