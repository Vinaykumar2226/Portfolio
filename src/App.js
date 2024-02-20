import "./App.css";
import React from "react";
import Header from "../src/Components/Header";
import HeroSection from "../src/Components/HeroSection";
import About from "./Components/About";
import Projects from "./Components/Projects";
import TechStack from "./Components/TechStack";
import ConnectPage from "./Components/ConnectPage";
function App() {
  return (
    <div className="container">
      <Header />
      <HeroSection />
      <About />
      <Projects />
      <TechStack />
      <ConnectPage />
    </div>
  );
}

export default App;
