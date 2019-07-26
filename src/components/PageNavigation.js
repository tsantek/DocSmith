import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import Logo from "../docsmithlogo.png";

const navbar = props => {
  console.log(props);
  return (
    <Navbar className="navbar mx-4" color="white" light expand="md">
      <NavbarBrand href="/">
        <img src={Logo} alt="logo" />
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        {props.user.length === 0 ? (
          <NavItem>
            <Button
              href="/RegistrationAndSignUp"
              className="signin"
              size="sm"
              color="dark"
            >
              Sign In
            </Button>
          </NavItem>
        ) : (
          <NavItem>
            <span style={{ color: "#6cb" }}>Hi,</span>
            {props.user[0].name}
            <Button
              onClick={() => props.handleLogOut()}
              size="sm"
              className="signup ml-2 btn btn-outline-dark"
              color="seconday"
            >
              Log out
            </Button>
          </NavItem>
        )}
      </Nav>
    </Navbar>
  );
};

export default navbar;
