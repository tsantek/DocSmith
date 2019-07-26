import React from "react";
import { NavbarBrand } from "reactstrap";
import FooterLogo from "../docsmithlogo-w.png";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer_brand">
        <NavbarBrand href="/">
          <img src={FooterLogo} alt="logo" />
        </NavbarBrand>
      </div>
    </div>
  );
};

export default footer;
