import React from "react";

import { Fade, Slide } from "react-reveal/";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap/";
// components
import MyNavbar from "./components/myNavBar/MyNavBar";
import MyCarousel from "./components/myCarousel/myCarousel";
import TitleMessage from "./components/title-message/title-message";
import About from "./pages/About/About";
import BackgroundImg from "./assets/img/parallex/background.webp";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import ProjectTimeLine from "./components/projects-timeline/projects-timeline";
import ContactForm from "./pages/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import Particles from "react-particles-js";
import { ParticlesOptions } from "./ParticlesOptions";
import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyCarousel />
      <TitleMessage />
      <MyNavbar />

      <Particles
        className="particles particles-box"
        params={ParticlesOptions}
      />
      {/* About */}
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={BackgroundImg}
          bgImageAlt="LOading background"
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      {/* Skills */}

      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>

      {/* Experience */}
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>
      {/* Projects */}
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <ProjectTimeLine />
        </Slide>
      </Container>
      {/* Contact Me Form */}
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>
      <hr />
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default App;
