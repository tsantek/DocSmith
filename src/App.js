// APP ROUTES
import React from "react";
import "./customStyles/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Resumes from "./components/Resumes";
import CoverLetters from "./components/CoverLetters";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/resumes" component={Resumes} />
        <Route path="/coverletters" component={CoverLetters} />
      </div>
    </Router>
  );
};

export default App;
