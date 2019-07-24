import React, { Component } from "react";
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Navbar from './PageNavigation'
import Footer from './Footer'

class CoverLetter extends Component {
  state = {};

  render() {
    return (
      <div>
          {/* <Navbar /> */}
          <Footer />
          <Container>
            single CoverLetter
          </Container>
      </div>
    )
  }
}

export default CoverLetter;
