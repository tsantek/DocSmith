import React from 'react'
import imgOne from "./ResumesImg/1.png";
import imgTwo from "./ResumesImg/2.png";
import imgThree from "./ResumesImg/3.png";
import { Container } from 'reactstrap';

const resumeGraphics = () => {
    return (
        <Container className="graphic_wrapper my-5">
          <div className="row">
            <div className="col-md col-sm-6 mb-3 p-0 mx-3 graphics">
              <div className="graphic_caption d-flex justify-content-between">
                <span>Modern</span>
              </div>
              <a href="/one" alt="resume"><img src={imgOne} alt="resume" /></a>
            </div>
            <div className="col-md col-sm-6 mb-3 p-0 mx-3 graphics">
              <div className="graphic_caption d-flex justify-content-between">
                <span>Functional</span>
              </div>
              <a href="/one" alt="resume"><img src={imgTwo} alt="resume" /></a>
            </div>
            <div className="col-md col-sm-6 mb-3 p-0 mx-3 graphics">
              <div className="graphic_caption d-flex justify-content-between">
                <span>Simple</span>
              </div>
              <a href="/one" alt="resume"><img src={imgThree} alt="resume" /></a>
            </div>
          </div>
        </Container>
    )
}

export default resumeGraphics
