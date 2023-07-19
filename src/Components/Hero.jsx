import React from "react";

const Hero = () => {
  return (
    <div>
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">
          <h1>Anuj Maurya</h1>
          <p>
            I am
            <span
              className="typed"
              data-typed-items="Student, Full Stack Developer, Freelancer, Computer Enthusiast"
            ></span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
