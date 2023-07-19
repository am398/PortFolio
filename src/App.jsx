import React from "react";

import Skills from "./Components/Skills";
// import Footer from "./Components/Footer";
import Header from "./Components/Header";
// import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Hero from "./Components/Hero";
import Aboutme from "./Components/Aboutme";
import Resume from "./Components/Resume";
// import "./Components/assets/css/style.css";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Hero />
      <Aboutme />
      <Skills />
      <Resume />
      <Portfolio />
      {/* <Home name={siteProps.name} title={siteProps.title} /> */}
      {/* <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} /> */}
    </div>
  );
};

export default App;
