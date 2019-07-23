import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Resumes from "./components/Resumes";
import CoverLetter from "./components/CoverLetter";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/resumes" component={Resumes} />
        <Route path="/coverletter" component={CoverLetter} />
      </div>
    </Router>
  );
};

export default App;
