// Resumes PAGE / Component
import React from "react";
import { Link } from "react-router-dom";

import imgOne from "./ResumesImg/1.png";
import imgTwo from "./ResumesImg/2.png";
import imgThree from "./ResumesImg/3.png";

const imgStyle = {
  height: "400px"
};

const rowStyle = {
  borderBottom: "1px solid #34746f",
  padding: "40px"
};

const btnStyle = {
  float: "right",
  backgroundColor: "#34746f",
  borderColor: "#34746f"
};

const imgContainer = {
  textAlign: "center"
};

const bodyStyle = {
  backgroundColor: "#242e34",
  color: "white"
};

const Resumes = props => {
  return (
    <div style={bodyStyle}>
      <header>
        {/* TODO */}
        <p>HEADER</p>
      </header>
      <main>
        <div className="container">
          {/* SECTION 1 */}
          <div className="row" style={rowStyle}>
            <div className="col-md-6">
              <h4>Lorem Ipsum Header</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <button style={btnStyle} className="btn btn-primary">
                <Link style={{ color: "white" }} to="one" resume={1}>
                  TRY
                </Link>
              </button>
            </div>
            <div className="col-md-6" style={imgContainer}>
              <img style={imgStyle} src={imgOne} />
            </div>
          </div>
          {/* SECTION 2 */}
          <div className="row" style={rowStyle}>
            <div className="col-md-6" style={imgContainer}>
              <img style={imgStyle} src={imgTwo} />
            </div>
            <div className="col-md-6">
              <h4>Lorem Ipsum Header</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <button style={btnStyle} className="btn btn-primary">
                TRY
              </button>
            </div>
          </div>
          {/* SECTION 3 */}
          <div className="row" style={rowStyle}>
            <div className="col-md-6">
              <h4>Lorem Ipsum Header</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <button style={btnStyle} className="btn btn-primary">
                TRY
              </button>
            </div>
            <div className="col-md-6" style={imgContainer}>
              <img style={imgStyle} src={imgThree} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resumes;
