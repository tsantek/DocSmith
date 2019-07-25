// APP ROUTES
import React from "react";
import "./customStyles/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
// import Resumes from "./components/Resumes";
// import CoverLetters from "./components/CoverLetters";
import ResumeOne from "./components/ResumeOne";
import CoverLetterOne from "./components/CoverLetterOne";
import RegistrationAndSignUp from "./components/RegistrationAndSignUp";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        {/* <Route path="/resumes" component={Resumes} /> */}
        <Route path="/CoverLetterOne" component={CoverLetterOne} />
        <Route path="/RegistrationAndSignUp" component={RegistrationAndSignUp} />
        <Route path="/one" component={ResumeOne} />
        {/* <Route path="/coverletters" component={CoverLetters} /> */}
      </div>
    </Router>
  );
};

export default App;
