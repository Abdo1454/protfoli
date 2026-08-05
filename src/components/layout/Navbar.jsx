import React from "react";

import logo from "../../assets/icons/icon-brand.png";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">

      <div className="container">

        {/* Logo */}
        <a 
          className="navbar-brand d-flex align-items-center" 
          href="#home"
        >
          <img
            src={logo}
            alt="Abdulrahim Logo"
            width="40"
            height="40"
            className="me-2 border rounded-circle"
          />

          <span className="fw-bold">
            Abdulrahim
          </span>
        </a>


        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        {/* Navigation Links */}
        <div 
          className="collapse navbar-collapse" 
          id="navbarNav"
        >

          <ul className="navbar-nav mx-auto align-items-lg-center gap-lg-3">

            <li className="nav-item">
              <a 
                className="nav-link active" 
                href="#home"
              >
                Home
              </a>
            </li>


            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#about"
              >
                About
              </a>
            </li>


            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#skills"
              >
                Skills
              </a>
            </li>


            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#projects"
              >
                Projects
              </a>
            </li>


            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#experience"
              >
                Experience
              </a>
            </li>


            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#contact"
              >
                Contact
              </a>
            </li>

          </ul>


          {/* CTA */}
          <div className="d-flex">

            <a 
              href="#contact" 
              className="btn btn-primary px-4"
            >
              Hire Me
            </a>

          </div>


        </div>

      </div>

    </nav>
  );
}


export default Navbar;