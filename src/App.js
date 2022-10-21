import React from 'react';
import './App.css';
// import Portfolio from './Portfolio';
import Home from './Home';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Contact from './Contact';
import Scryglass from './Scryglass';
import Livy from './Livy';
import ReactTooltip from "react-tooltip";
import {
  BrowserRouter as Router,
    Navigate,
  Routes,
  Route,
} from "react-router-dom";
import Portfolio from "./Portfolio";

function App() {
  return (
    <Router>
      <div className="App">
        <ReactTooltip multiline={true} delayShow={2000} border={true} effect="solid"/>

        <Home />

        <Routes>
          <Route path="/" element={<Navigate to="portfolio"/>} />

          <Route exact path="/portfolio" element={<Portfolio/>}/>
          <Route exact path="/about_me" element={<AboutMe/>}/>
          <Route exact path="/resume" element={<Resume/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/scryglass" element={<Scryglass/>}/>
          <Route exact path="/livy" element={<Livy/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
