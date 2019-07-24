import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import Logo from '../docsmithlogo.png'

const navbar = () => {
    return (
        <Navbar className="navbar mx-4" color="white" light expand="md">
          <NavbarBrand href="/"><img src={Logo} alt="logo" /></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button className="signin" size="sm" color="dark">
                Sign In 
                <i className="fa fa-sign-in" aria-hidden="true"></i> 
              </Button>
            </NavItem>
            <NavItem>
              <Button size="sm"  className="signup ml-2 btn btn-outline-dark" color="seconday">
                <i className="fa fa-user-plus" aria-hidden="true"></i>
              </Button>
            </NavItem>
          </Nav>
        </Navbar>
    )
}

export default navbar
