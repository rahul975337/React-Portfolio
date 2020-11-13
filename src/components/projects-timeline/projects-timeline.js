import React from "react";
import {
  Timeline,
  Events,

  themes,
  createTheme,
} from "@merc/react-timeline";
// projects




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
