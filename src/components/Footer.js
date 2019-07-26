import React from "react";
import { NavbarBrand } from "reactstrap";
import FooterLogo from "../docsmithlogo-w.png";

const footer = props => {
  return (
    <div className="footer">
      <div className="footer_brand d-flex justify-content-between">
        <NavbarBrand href="/">
          <img src={FooterLogo} alt="logo" style={{ marginLeft: "20px" }} />
        </NavbarBrand>
        <button
          className="btn"
          style={{
            marginRight: "20px",
            color: "white",
            background: "none"
            // borderColor: " #6cb"
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default footer;
