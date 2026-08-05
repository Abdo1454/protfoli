import React from "react";
import logo from "../../assets/icons/icon-brand.png";
import profile from "../../assets/images/img-Abdulrahim.png";

function Navbar() {
  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm sticky-top">
      <div className="container">
        {/* Logo */}
        <a
          className="navbar-brand d-flex align-items-center"
          href="#home"
          aria-label="Go to Home"
        >
          <img
            src={logo}
            alt="Abdulrahim Logo"
            width={42}
            height={42}
            className="rounded-circle me-2 border border-light"
          />

          <span className="fw-bold fs-5">Abdulrahim</span>
        </a>

        {/* Toggle */}
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

        {/* Navigation */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-lg-3">
            {navItems.map((item, index) => (
              <li className="nav-item" key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`nav-link ${index === 0 ? "active" : ""}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3">
            <a
              href="#contact"
              className="btn btn-primary px-4 rounded-3"
              aria-label="Hire Abdulrahim Elsayed"
            >
              Hire Me
            </a>

            <img
              src={profile}
              alt="Abdulrahim Elsayed"
              width={42}
              height={42}
              loading="lazy"
              className="rounded-circle border"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;