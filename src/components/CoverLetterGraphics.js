import React from 'react'
import imgOne from "./CoverLetterImg/1.jpg";
import imgTwo from "./CoverLetterImg/2.jpg";
import imgThree from "./CoverLetterImg/3.jpg";
import { Container } from 'reactstrap';

const coverLetterGraphics = () => {
    return (
        <Container className="graphic_wrapper my-5">
          <div className="row">
            <div className="col-md col-sm-6 mb-3 p-0 mx-3 graphics">
              <div className="graphic_caption d-flex justify-content-between">
                <span>Modern</span>
                <i className="fa fa-search-plus"></i>
              </div>
              <img src={imgOne} alt="resume" />
            </div>
            <div className="col-md col-sm-6 mb-3 p-0 mx-3 graphics">
              <div className="graphic_caption d-flex justify-content-between">
                <span>Funtional</span>
                <i className="fa fa-search-plus"></i>
              </div>
              <img src={imgTwo} alt="resume" />
            </div>
            <div className="col-md col-sm-6 mb-3 p-0 mx-3 graphics">
              <div className="graphic_caption d-flex justify-content-between">
                <span>Simple</span>
                <i className="fa fa-search-plus"></i>
              </div>
              <img src={imgThree} alt="resume" />
            </div>
          </div>
        </Container>
    )
}

export default coverLetterGraphics
