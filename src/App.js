import React from "react";
import "./App.css";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap/";
// components
import MyNavBar from "./components/myNavBar/MyNavBar";
import MyCarousel from "./components/myCarousel/myCarousel";
import TitleMessage from "./components/title-message/title-message";
import About from "./pages/About/About";
import BackgroundImg from "./assets/img/parallex/background.webp";
import Skills from "./pages/Skills/Skills";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavBar />
      <MyCarousel />
      <TitleMessage />
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

      <div>
        <div>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <Skills />
            </Fade>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default App;
