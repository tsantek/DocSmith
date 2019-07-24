import React from 'react'
import imgOne from "./ResumesImg/1.png";
import imgTwo from "./ResumesImg/2.png";
import imgThree from "./ResumesImg/3.png";
import { Container, Button } from 'reactstrap';

const resumeGraphics = () => {
    return (
        <Container className="graphic_wrapper my-5">
          <div className="row">
            <div className="col-md col-sm-6 mb-3 p-0 mx-3 graphics">
              <div className="graphic_caption d-flex justify-content-between">
                <span>Modern</span>
              </div>
              <img src={imgOne} alt="resume" />
              <Button className="edit_action mt-2" size="sm" color="dark">Edit</Button>
            </div>
            <div className="col-md col-sm-6 mb-3 p-0 mx-3 graphics">
              <div className="graphic_caption d-flex justify-content-between">
                <span>Funtional</span>
              </div>
              <img src={imgTwo} alt="resume" />
              <Button className="edit_action mt-2" size="sm" color="dark">Edit</Button>
            </div>
            <div className="col-md col-sm-6 mb-3 p-0 mx-3 graphics">
              <div className="graphic_caption d-flex justify-content-between">
                <span>Simple</span>
              </div>
              <img src={imgThree} alt="resume" />
              <Button className="edit_action mt-2" size="sm" color="dark">Edit</Button>
            </div>
          </div>
        </Container>
    )
}

export default resumeGraphics
