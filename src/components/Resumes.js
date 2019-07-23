// Resumes PAGE / Component
import imgOne from "./ResumesImg/1.png";
import imgTwo from "./ResumesImg/2.png";
import imgThree from "./ResumesImg/3.png";

import React from "react";

const imgStyle = {
  height: "400px"
};

const rowStyle = {
  paddingBottom: "20px"
};

const btnStyle = {
  float: "right"
};

const Resumes = props => {
  return (
    <React.Fragment>
      <header>
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
                TRY
              </button>
            </div>
            <div className="col-md-6">
              <img style={imgStyle} src={imgOne} />
            </div>
          </div>
          {/* SECTION 2 */}
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
            <div className="col-md-6">
              <img style={imgStyle} src={imgTwo} />
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
            <div className="col-md-6">
              <img style={imgStyle} src={imgThree} />
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Resumes;
