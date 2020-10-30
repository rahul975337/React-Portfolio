import React from "react";
import { Container, Jumbotron, Card } from "react-bootstrap/";
import L_CITOTO from "../../assets/img/experience/citoto.png";
import Tilt from "react-tilt";
import "./Experience.css";
// ////////////////
const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      {/* <Jumbotron className="jumbo-style"> */}
      <Container>
        <Tilt options={{ max: 25 }}>
          <Card>
            <Card.Header
              as="h5"
              className="d-flex justify-content-center flex-wrap"
            >
              <h1>Citoto</h1>
              {/* <Card.Img
                variant="top"
                className="img-resize"
                src={L_CITOTO}
                alt="Citoto logo"
              /> */}
            </Card.Header>
            <Card.Body className="d-flex justify-content-center flex-column">
              <div>
                <Card.Title className="text-center">
                  Mobile Developer Intern
                </Card.Title>
              </div>
              <div>
                <Card.Text className="text-center style">
                  {/* <strong className="body-title-style ">
                    Full Stack Developer
                  </strong>
                  <br /> */}
                  <strong>Technology:</strong> Flutter,Firebase
                  <br />
                  <strong>Duration:</strong> 3 Months
                  <br />
                  <strong> Description </strong>
                  <ul className="text-left">
                    <li>
                      <strong>Developed</strong> the Frontend application using
                      Flutter framework.
                    </li>
                    <li>
                      <strong>Developed &amp; enhanced</strong> multiple
                      features with customizability option across app.
                    </li>
                    <li>
                      <strong>Optimized</strong> the codebase of the app.
                    </li>
                    <li>
                      <strong>Provided</strong> application maintenance while
                      working .
                    </li>
                    <li>
                      <strong>Performed</strong> CRUD operations on Firestore to
                      load/ remove data according to the business requirements.
                    </li>
                    <li>
                      <strong>Developed</strong> Work Ethics and completing the assigned task on time.
                    </li>
                  </ul>
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Tilt>
      </Container>
      {/* </Jumbotron> */}
    </div>
  );
};

export default Experience;
