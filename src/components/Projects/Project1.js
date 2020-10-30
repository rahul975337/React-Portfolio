import React from "react";
import { UrlButton, ImageEvent } from "@merc/react-timeline";
import L_ReactCovidTracker from "../../assets/img/projects/react-covid-tracker.png";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";

import Image from "react-bootstrap/Image";

import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";

import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import "./Project.css";
const Project1 = () => {
  return (
    <ImageEvent
      date="01/10/2020"
      className="text-center project__name"
      text="React Covid Tracker"
      src={L_ReactCovidTracker}
      alt="React ToDo App"
    >
      <div className="d-flex justify-content-between flex-column mt-1">
        <div>
          <Accordion>
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="0"
                className="p-2 text-center accordian-main"
              >
                PROJECT DETAILS
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="0" className="text-left">
                <Card.Body>
                  <strong>Description:</strong> This is a Covid-19 Tracker App
                  created with React and Material UI that keeps a track of your
                  covid-19 cases .
                  <hr />
                  <strong>Features:</strong>
                  <ul className="list-styles pt-1">
                    <li>Keeps track Covid-19 cases</li>
                    <li>Country wise record of cases,recoveries and deaths</li>
                    <li>Record shown in map and graphical form</li>
                    <li>Powered by React and Material UI</li>
                    <li>Respoisive Design</li>
                  </ul>
                  <hr />
                  <strong>Tech used:</strong>
                  <ul>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_HTML5}
                          alt="HTML 5"
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        HTML5
                      </span>
                    </li>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_CSS3}
                          alt="CSS 3"
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        CSS3
                      </span>
                    </li>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_REACT}
                          alt="React"
                          rounded
                          className="image-style1 m-1"
                        ></Image>{" "}
                        React
                      </span>
                    </li>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_MATERIALUI}
                          alt="Material-UI"
                          rounded
                          className="image-style1 m-1"
                        ></Image>{" "}
                        Material-UI
                      </span>
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
        <div className="d-flex justify-content-between flex-nowrap text-center">
          <UrlButton
            className="proUrl"
            href="https://covid-tracker-71c01.web.app/"
            target="_blank"
          >
            SEE LIVE
          </UrlButton>
          <UrlButton
            className="proUrl"
            href="https://github.com/rahul975337/Covid-tracker-react"
            target="_blank"
          >
            Github Repo
          </UrlButton>
        </div>
      </div>
    </ImageEvent>
  );
};

export default Project1;
