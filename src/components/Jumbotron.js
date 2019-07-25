import React from 'react'
import { Button, Jumbotron, ButtonGroup} from 'reactstrap';

const jumbotron = ({ state, resumeToggle, coverLetterToggle }) => {
    let h3 = "", prg = "";
    if (state.resume) {
      h3 = "Why Should I Use a Resume Template?"
      prg = "To promote your personal brand, it is recommended to use the same design, fonts and color themes in your resume template as in your cover letter, and this is possible with the following templates."
    } else {
      h3 = "Why Should I Use a Cover Letter Template?"
      prg = "To promote your personal brand, it is recommended to use the same design, fonts and color themes on your cover letter template as in your resume, and this is possible with the following templates."
    }
    return (
        <Jumbotron className="mb-0 rounded-0">
          <h3>{ h3 }</h3>
          <p className="lead">{ prg }</p>
          <div className="line_separator"></div>
          <ButtonGroup size="lg">
            <Button onClick={ () => resumeToggle() } className="btn btn-outline-dark px-5">
              Resumes
              <small>Student / Intermediate</small>
            </Button>
            <Button onClick={ () => coverLetterToggle() } className="btn btn-outline-dark px-5">
              Cover Letters
              <small>All levels of experience</small>
            </Button>
          </ButtonGroup>
          <div className="pickatemplate">Pick a Template</div>
        </Jumbotron>
    )
}

export default jumbotron
