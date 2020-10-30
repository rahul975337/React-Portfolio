import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap/";
import Profile from "../../assets/img/profile/profile.jpg";
import "./About.css";
const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            {/* Profile pic */}
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  fluid
                />
              </Row>
            </Col>
            {/* About me description */}
            <Col xs={12} md={6}>
              {/* Description */}
              <Row className=" align-items-start p-2 my-details rounded">
                {" "}
                Hi there! I am <strong>&nbsp;Rahul Tilwani</strong>
                <br />A passionate programmer and a developer, born and brought
                up in India. I am a student working on enhancing my skills and
                learning new things.
                <br />
                I am currently persuing my Bachelor of Engineering degree in
                Information Science and Engineering.
                <br />
                I am currently looking for some internship opportunities to
                enhance my skills and also gain some good experience.
                <br />I love learning about new technologies, what problems are
                they solving and How can I use them to build better and scalable
                products.
                <br /> <br />
              </Row>
              {/* Buttons */}
              <Row>
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's Talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1tUTiUCCJ_cbb4hFd46pfxgUiVXEtAfsm/view?usp=drivesdk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/rahul975337"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-warning">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/rahul-tilwani-965291194/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
