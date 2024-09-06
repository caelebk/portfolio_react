import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/navbar/navbar";
import ScrollMenu from "./components/scroll-menu/scroll-menu";
import ScrollAnchor from "./components/scroll-menu/scroll-anchor";
import Introduction from "./components/section/introduction/introduction";
import About from "./components/section/about/about";
import Experience from "./components/section/experience/experience";
import Resume from "./components/section/experience/resume";
import * as constants from "./components/constants/constants";
import Contact from "./components/section/contact/contact";
import personalProject from "./utility/personalProjects.json";
import workExperience from "./utility/workExperience.json";

import "hover.css";
import "animate.css";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <ScrollMenu dataAOS="fade-left" anchor="#scroll-anchor" />
    <ScrollAnchor />
    <Introduction />
    <About />
    <div className="experience-anchor"></div>
    <Experience
      title={constants.workExperienceTitle}
      experiences={workExperience}
      anchor="top-bottom"
    />
    <Experience
      title={constants.projectExperienceTitle}
      experiences={personalProject}
      anchor="top-bottom"
    />
    <Resume />
    <div className="contact-anchor"></div>
    <Contact />
  </React.StrictMode>,
  document.getElementById("root")
);
