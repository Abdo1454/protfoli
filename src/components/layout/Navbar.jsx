import React from "react";
import logo from "../../assets/icons/icon-brand.png";
import Abdulrahim from "../../assets/images/img-Abdulrahim.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            className="me-2 border rounded-circle"
          />
          <span className="fw-bold ">Abdulrahim</span>
        </a>

        {/* Mobile Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav mx-auto flex-row justify-content-around">

            <li className="nav-item">
              <a className="nav-link active" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#experience">
                Experience
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>

          </ul>

          <a href="#contact" className="btn btn-primary">
            Hire Me
          </a>
                <img
            src={Abdulrahim}
            alt="Logo"
            width="40"
            height="40"
            className="me-2 border rounded-circle"
          />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;