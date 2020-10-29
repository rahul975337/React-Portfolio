import React from "react";
import "./App.css";
import MyCarousel from "./components/myCarousel/myCarousel";
// components
import MyNavBar from "./components/myNavBar/MyNavBar";
import TitleMessage from "./components/title-message/title-message";
const App = () => {
  return (
    <div className="App">
      <MyNavBar />
      <MyCarousel/>
      <TitleMessage/>
    </div>
  );
};

export default App;
