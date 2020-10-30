import React from "react";
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  TextEvent,
  themes,
  createTheme,
} from "@merc/react-timeline";
// projects
import L_ReactToDoList from "../../assets/img/projects/React_ToDo_List.webp";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";

import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";

import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";

import "./projects-timeline.css";
import Project1 from "../Projects/Project1";
const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: "#efefef",
  },
  date: {
    backgroundColor: "rebeccapurple",
  },

  marker: {
    borderColor: "white",
  },
  timelineTrack: {
    backgroundColor: "white",
  },
});
const ProjectTimeLine = () => {
  return (
    <div id="projects">
      {" "}
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline theme={customTheme}>
        <Events>
          {/* Project: Todo List With MUI */}
          <Project1 />
          <Project1 />
          <Project1 />
        </Events>
      </Timeline>
    </div>
  );
};

export default ProjectTimeLine;
