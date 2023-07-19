/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const details = {
  email: "am398@snu.edu.in",
  gitHub: "https://github.com/am398",
  instagram: "https://www.instagram.com/anujmaurya.5/",
  linkedIn: "https://www.linkedin.com/in/anuj-maurya-1b6b16227/",
};

const Header = () => {
  return (
    <div>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light">
              <a href="index.html">Anuj Maurya</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a href={details.gitHub} className="github">
                <i className="bi bi-github"></i>
              </a>
              <a href={details.instagram} className="instagram">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href={details.linkedIn} className="linkedin">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto active">
                  <i className="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <i className="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto">
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="nav-link scrollto">
                  <i className="bx bx-book-content"></i> <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link scrollto">
                  <i className="bx bx-server"></i> <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link scrollto">
                  <i className="bx bx-envelope"></i> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
