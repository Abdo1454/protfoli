import React from "react";
import logo from "../../assets/icons/icon-brand.png";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <h2>
            <img src={logo} alt="Logo" />
        </h2>

      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul>
        <li></li>
        <li></li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;